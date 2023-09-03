# SETUP

First of all, replace all occurrences of `{{PROJECT_NAME}}` with your project name.

# {{PROJECT_NAME}}

Project description here

# Development

Start dev server

```bash
yarn dev
```

Run checks (test + lint)

```bash
yarn checks
```

# Deployment

Install `PM2` and configure it to restart on machine reboot

```bash
yarn global add pm2
pm2 startup
```

Start prod server

```bash
# We use a shell script here because for some reason stuff breaks when we do `pm2 start yarn start`
pm2 start server.bash
```

Save `PM2` process list so the server is started on machine reboot

```bash
pm2 save
```

If you want to view server logs

```bash
pm2 logs
```

To re-deploy latest version:

```bash
git pull && yarn && pm2 restart all
```

# TODOs
