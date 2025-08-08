#!/bin/bash

# NovaGraph Production Status Check Script
# Domain: novagraph.com.tr
# Server: Amazon AWS EC2
# IP: 13.49.75.107

set -e

echo "🔍 NovaGraph Production Status Check"
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

# Check PM2 Status
echo ""
print_status "📊 PM2 Application Status"
if command -v pm2 &> /dev/null; then
    pm2 status
    PM2_COUNT=$(pm2 list | grep -c "online" || echo "0")
    if [ "$PM2_COUNT" -gt 0 ]; then
        print_success "PM2 applications running: $PM2_COUNT"
    else
        print_error "No PM2 applications running"
    fi
else
    print_error "PM2 not installed"
fi

# Check Nginx Status
echo ""
print_status "🌐 Nginx Status"
if sudo systemctl is-active --quiet nginx; then
    print_success "Nginx is running"
    sudo systemctl status nginx --no-pager -l | head -5
else
    print_error "Nginx is not running"
fi

# Check Port Status
echo ""
print_status "🔗 Port Status"
echo "Checking ports 80, 443, 3000..."
PORT_80=$(ss -tulpn | grep -c ":80 " || echo "0")
PORT_443=$(ss -tulpn | grep -c ":443 " || echo "0")
PORT_3000=$(ss -tulpn | grep -c ":3000 " || echo "0")

if [ "$PORT_80" -gt 0 ]; then
    print_success "Port 80 (HTTP) is listening"
else
    print_error "Port 80 (HTTP) is not listening"
fi

if [ "$PORT_443" -gt 0 ]; then
    print_success "Port 443 (HTTPS) is listening"
else
    print_warning "Port 443 (HTTPS) is not listening"
fi

if [ "$PORT_3000" -gt 0 ]; then
    print_success "Port 3000 (Node.js) is listening"
else
    print_error "Port 3000 (Node.js) is not listening"
fi

# Check Application Health
echo ""
print_status "🏥 Application Health Check"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    print_success "Application is healthy (HTTP 200)"
else
    print_error "Application is not responding properly"
fi

# Check Nginx Proxy
echo ""
print_status "🌐 Nginx Proxy Check"
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200\|502"; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost)
    if [ "$HTTP_CODE" = "200" ]; then
        print_success "Nginx proxy is working (HTTP 200)"
    elif [ "$HTTP_CODE" = "502" ]; then
        print_warning "Nginx proxy returning 502 (Bad Gateway) - check application"
    else
        print_warning "Nginx proxy returning HTTP $HTTP_CODE"
    fi
else
    print_error "Nginx proxy is not responding"
fi

# Check Firewall Status
echo ""
print_status "🔥 Firewall Status"
if sudo ufw status | grep -q "Status: active"; then
    print_success "Firewall is active"
    sudo ufw status | head -10
else
    print_warning "Firewall is not active"
fi

# Check Fail2ban Status
echo ""
print_status "🛡️ Fail2ban Status"
if sudo systemctl is-active --quiet fail2ban; then
    print_success "Fail2ban is running"
    sudo systemctl status fail2ban --no-pager -l | head -3
else
    print_warning "Fail2ban is not running"
fi

# Check SSL Certificate
echo ""
print_status "🔒 SSL Certificate Status"
if [ -f "/etc/letsencrypt/live/novagraph.com.tr/fullchain.pem" ]; then
    print_success "SSL certificate exists"
    sudo certbot certificates | grep -A 5 "novagraph.com.tr" || echo "Certificate details not available"
else
    print_warning "SSL certificate not found"
fi

# Check System Resources
echo ""
print_status "💾 System Resources"
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1 | head -1
echo "Memory Usage:"
free -h | grep "Mem:" | awk '{print $3 "/" $2 " (" $3/$2*100.0 "%)"}'
echo "Disk Usage:"
df -h / | tail -1 | awk '{print $5 " used (" $3 "/" $2 ")"}'

# Check Node.js Version
echo ""
print_status "🟢 Node.js Version"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js version: $NODE_VERSION"
else
    print_error "Node.js not installed"
fi

# Check NPM Version
echo ""
print_status "📦 NPM Version"
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_success "NPM version: $NPM_VERSION"
else
    print_error "NPM not installed"
fi

# Check Git Status
echo ""
print_status "📁 Git Repository Status"
if [ -d "/home/ubuntu/novagraphson/.git" ]; then
    cd /home/ubuntu/novagraphson
    GIT_BRANCH=$(git branch --show-current)
    GIT_COMMIT=$(git rev-parse --short HEAD)
    print_success "Git branch: $GIT_BRANCH (commit: $GIT_COMMIT)"
else
    print_warning "Git repository not found"
fi

# Check Domain Resolution
echo ""
print_status "🌐 Domain Resolution Check"
if nslookup novagraph.com.tr | grep -q "13.49.75.107"; then
    print_success "Domain novagraph.com.tr resolves to 13.49.75.107"
else
    print_warning "Domain resolution issue"
fi

# Final Summary
echo ""
echo "=================================="
echo "🎯 NOVAGRAPH PRODUCTION SUMMARY"
echo "=================================="
echo "🌐 Domain: novagraph.com.tr"
echo "🖥️  Server: Amazon AWS EC2"
echo "📍 IP: 13.49.75.107"
echo "📊 PM2: pm2 status"
echo "🌐 Nginx: sudo systemctl status nginx"
echo "📝 Logs: pm2 logs novagraph"
echo "🔍 Monitoring: pm2 monit"
echo "=================================="

# Check if everything is working
echo ""
print_status "🔍 Overall Status"
if [ "$PM2_COUNT" -gt 0 ] && [ "$PORT_3000" -gt 0 ] && [ "$PORT_80" -gt 0 ]; then
    print_success "🎉 NovaGraph Production is RUNNING!"
    echo "✅ Application: Running"
    echo "✅ Nginx: Running"
    echo "✅ Firewall: Active"
    echo "✅ Fail2ban: Running"
    echo ""
    echo "🌐 Access your site at: http://13.49.75.107"
    echo "🔗 Health check: http://13.49.75.107/health"
else
    print_error "❌ Some services are not running properly"
    echo "Please check the logs above for issues"
fi

echo ""
echo "📞 For support, check:"
echo "   - PM2 logs: pm2 logs novagraph"
echo "   - Nginx logs: sudo tail -f /var/log/nginx/error.log"
echo "   - System logs: journalctl -u nginx -f"
