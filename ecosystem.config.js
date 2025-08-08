module.exports = {
  apps: [{
    name: 'novagraph',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/novagraph',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0',
      NEXT_PUBLIC_APP_URL: 'https://novagraph.com.tr',
      NEXT_PUBLIC_DOMAIN: 'novagraph.com.tr',
      NEXT_PUBLIC_SITE_URL: 'https://novagraph.com.tr',
      AWS_EC2_IP: '13.49.75.107'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0',
      NEXT_PUBLIC_APP_URL: 'https://novagraph.com.tr',
      NEXT_PUBLIC_DOMAIN: 'novagraph.com.tr',
      NEXT_PUBLIC_SITE_URL: 'https://novagraph.com.tr',
      AWS_EC2_IP: '13.49.75.107'
    },
    error_file: '/var/log/pm2/novagraph-error.log',
    out_file: '/var/log/pm2/novagraph-out.log',
    log_file: '/var/log/pm2/novagraph-combined.log',
    time: true,
    max_memory_restart: '1G',
    min_uptime: '10s',
    max_restarts: 10,
    autorestart: true,
    watch: false,
    ignore_watch: ['node_modules', 'logs', '.git', '.next'],
    // Production specific settings
    node_args: '--max-old-space-size=2048',
    instances: 2,
    exec_mode: 'cluster'
  }]
}
