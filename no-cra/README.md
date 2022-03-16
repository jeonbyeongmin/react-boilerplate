<br/>

### 개발환경 구축

```
$ npm init -y
$ npm i react react-dom
$ npm i -D typescript @types/react @types/react-dom
```

`typescript`는 개발 의존성 모듈로 설치한다.

<br/>

### 파일 구조

```
.
├── ./README.md
├── ./package-lock.json
├── ./package.json
├── ./public
│   └── ./public/index.html
├── ./src
│   ├── ./src/App.tsx
│   ├── ./src/assets
│   │   ├── ./src/assets/fonts
│   │   └── ./src/assets/images
│   ├── ./src/common
│   ├── ./src/components
│   │   ├── ./src/components/atoms
│   │   ├── ./src/components/layouts
│   │   ├── ./src/components/molecules
│   │   └── ./src/components/organisms
│   ├── ./src/hooks
│   ├── ./src/index.tsx
│   ├── ./src/pages
│   └── ./src/styles
├── ./tsconfig.json
└── ./webpack.config.js
```
