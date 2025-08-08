module.exports = {
  apps: [
    {
      name: 'novagraph-website',
      script: 'npm',
      args: 'start',
      cwd: '/home/ubuntu/novagraph-website',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/home/ubuntu/novagraph-website/logs/err.log',
      out_file: '/home/ubuntu/novagraph-website/logs/out.log',
      log_file: '/home/ubuntu/novagraph-website/logs/combined.log',
      time: true
    }
  ]
};
