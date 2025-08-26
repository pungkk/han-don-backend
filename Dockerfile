# build stage
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage
FROM node:20-alpine
WORKDIR /usr/src/app

# 보안: 비루트 유저 생성
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001

# 프로덕션 의존성만 설치
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# 빌드 산출물만 복사 (권한 포함)
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/dist ./dist
COPY --chown=nestjs:nodejs .env* ./

# 소스가 런타임에 필요 없다면 복사하지 않음
# 필요 시 정적 파일 등만 선별 복사

USER nestjs
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
