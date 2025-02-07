# Stage 1: Build the application
FROM node:18 as builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 文件
COPY package.json pnpm-lock.yaml ./

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install --force

# 复制所有项目文件到容器
COPY . .

# 构建项目
RUN pnpm build
