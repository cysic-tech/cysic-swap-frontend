#!/bin/sh

echo "Starting application..."

# 后台启动 pnpm start
pnpm start &

# 启动 nginx
exec nginx -g "daemon off;"
