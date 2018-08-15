module.exports = {
  apps: [
    {
      name: 'prod',
      script: './server.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
