#!/bin/bash

# NovaGraph AWS EC2 Production Setup Script
# Domain: novagraph.com.tr
# Server: Amazon AWS EC2
# IP: 13.49.75.107

set -e

echo "🚀 NovaGraph AWS EC2 Production Setup"
echo "🌐 Domain: novagraph.com.tr"
echo "🖥️  Server: Amazon AWS EC2"
echo "📍 IP: 13.49.75.107"
echo "⏰ Date: $(date)"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}📋 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if running as ubuntu user
if [ "$USER" != "ubuntu" ]; then
    print_error "This script must be run as ubuntu user"
    exit 1
fi

# Update system packages
echo ""
print_status "🔄 Updating system packages..."
sudo apt update
sudo apt upgrade -y
print_success "System packages updated"

# Install essential packages
echo ""
print_status "📦 Installing essential packages..."
sudo apt install -y \
    nginx \
    certbot \
    python3-certbot-nginx \
    ufw \
    fail2ban \
    curl \
    wget \
    git \
    build-essential \
    htop \
    unzip \
    software-properties-common \
    apt-transport-https \
    ca-certificates \
    gnupg \
    lsb-release
print_success "Essential packages installed"

# Install Node.js 18.x
echo ""
print_status "🟢 Installing Node.js 18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
print_success "Node.js $(node --version) installed"

# Install PM2 globally
echo ""
print_status "📊 Installing PM2..."
sudo npm install -g pm2
print_success "PM2 installed"

# Configure Nginx
echo ""
print_status "🌐 Configuring Nginx..."
sudo tee /etc/nginx/sites-available/novagraph << EOF
server {
    listen 80;
    server_name novagraph.com.tr www.novagraph.com.tr 13.49.75.107;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
    
    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_hide_header X-Powered-By;
    }
    
    # Static files
    location /_next/static/ {
        alias /home/ubuntu/novagraphson/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
    
    # Block access to sensitive files
    location ~ /\. {
        deny all;
    }
    
    location ~ /(wp-admin|wp-login|admin|administrator) {
        deny all;
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/novagraph /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx
print_success "Nginx configured and started"

# Configure UFW Firewall
echo ""
print_status "🔥 Configuring UFW Firewall..."
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable
print_success "UFW Firewall configured"

# Configure Fail2ban
echo ""
print_status "🛡️ Configuring Fail2ban..."
sudo tee /etc/fail2ban/jail.local << EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3

[nginx-http-auth]
enabled = true
filter = nginx-http-auth
port = http,https
logpath = /var/log/nginx/error.log
maxretry = 3
EOF

sudo systemctl enable fail2ban
sudo systemctl restart fail2ban
print_success "Fail2ban configured"

# Create application directory and clone repository
echo ""
print_status "📁 Setting up application directory..."
cd /home/ubuntu
if [ ! -d "novagraphson" ]; then
    git clone https://github.com/yourusername/novagraphson.git
else
    cd novagraphson
    git pull origin main
fi
print_success "Application directory ready"

# Install Node.js dependencies
echo ""
print_status "📦 Installing Node.js dependencies..."
cd /home/ubuntu/novagraphson
npm ci --only=production
print_success "Dependencies installed"

# Create production environment file
echo ""
print_status "⚙️ Creating production environment file..."
sudo tee /home/ubuntu/novagraphson/.env << EOF
# Production Environment Variables for novagraph.com.tr
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_APP_URL=https://novagraph.com.tr
NEXT_PUBLIC_DOMAIN=novagraph.com.tr
NEXT_PUBLIC_SITE_URL=https://novagraph.com.tr
PORT=3000
HOSTNAME=0.0.0.0
NEXTAUTH_URL=https://novagraph.com.tr
NEXTAUTH_SECRET=novagraph-production-secret-$(date +%s)
CLOUDFLARE_ZONE_ID=your-cloudflare-zone-id
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
EOF
print_success "Environment file created"

# Build the application
echo ""
print_status "🔨 Building the application..."
npm run build
print_success "Application built successfully"

# Configure PM2
echo ""
print_status "📊 Configuring PM2..."
cd /home/ubuntu/novagraphson
pm2 delete novagraph 2>/dev/null || true
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
print_success "PM2 configured and started"

# Set up SSL certificate (will be configured later)
echo ""
print_status "🔒 SSL Certificate Setup..."
echo "SSL certificate will be configured after domain propagation"
echo "Run: sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr"
print_warning "SSL certificate setup pending"

# Create status check script
echo ""
print_status "🔍 Creating status check script..."
if [ -f "status.sh" ]; then
    chmod +x status.sh
    print_success "Status script ready"
else
    print_warning "Status script not found, will be pulled from git"
fi

# Set proper permissions
echo ""
print_status "🔐 Setting proper permissions..."
sudo chown -R ubuntu:ubuntu /home/ubuntu/novagraphson
sudo chmod -R 755 /home/ubuntu/novagraphson
print_success "Permissions set"

# Final status check
echo ""
print_status "🔍 Running final status check..."
if [ -f "status.sh" ]; then
    ./status.sh
else
    echo "Status script not available, checking basic services..."
    echo "PM2 Status:"
    pm2 status
    echo ""
    echo "Nginx Status:"
    sudo systemctl status nginx --no-pager -l | head -5
    echo ""
    echo "Firewall Status:"
    sudo ufw status | head -10
fi

# Summary
echo ""
echo "=================================="
echo "🎯 NOVAGRAPH AWS EC2 SETUP COMPLETE"
echo "=================================="
echo "🌐 Domain: novagraph.com.tr"
echo "🖥️  Server: Amazon AWS EC2"
echo "📍 IP: 13.49.75.107"
echo "📊 PM2: pm2 status"
echo "🌐 Nginx: sudo systemctl status nginx"
echo "📝 Logs: pm2 logs novagraph"
echo "🔍 Monitoring: pm2 monit"
echo "=================================="
echo ""
print_success "🎉 NovaGraph AWS EC2 setup completed successfully!"
echo ""
echo "📞 Next steps:"
echo "1. Wait for DNS propagation (up to 24 hours)"
echo "2. Run SSL certificate: sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr"
echo "3. Test the application: http://13.49.75.107"
echo "4. Monitor logs: pm2 logs novagraph"
echo "5. Check status: ./status.sh"
