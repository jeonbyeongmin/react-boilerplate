<br/>

- `webpack` : 웹팩을 이용할 때 항상 필요한 모듈
- `webpack-cli` : `npx` 로 웹팩을 실행하기 위한 모듈
- `webpack-dev-server` : 개발 도중 변경사항을 확인할 수 있는 모듈
- `html-webpack-plugin` : 생성된 html 파일에 필요한 플러그인
- `ts-loader` : 타입스크립트 코드를 자바스크립트 코드로 변환해주는 모듈

### install

웹팩은 실행이 아니라 빌드 시에 필요하기 때문에 개발 의존성 모듈로 설치해준다.

```
$ npm i -D webpack webpack-cli webpack-dev-server
$ npm i -D html-webpack-plugin ts-loader
```

<br/>

### 🛠 webpack.config.js

#### module.exports

- `mode` : 번들링 모드 설정
- `entry` : 엔트리 파일 설정 (가장 상위? 루트? 파일 설정)
- `output` : 아웃풋 파일 설정 (path, filename 을 설정)
- `resolve` : extensions 로 확장자를 생략, alias 로 절대 경로를 설정

module: {
rules: [
{
test: /\.tsx?$/,
exclude: /node_modules/,
use: ['babel-loader', 'ts-loader'],
},
],
},

devServer: 개발 서버 옵션 [→](https://webpack.js.org/configuration/dev-server/)

plugins: [
new webpack.HotModuleReplacementPlugin(),
new webpack.ProvidePlugin({
React: 'react',
}),
new HtmlWebpackPlugin({
template: './public/index.html',
}),
],
};

### issue

#### Absolute Path - import/no-unresolved error

```
$ npm install -D eslint-import-resolver-typescript
```

.eslintrc

```
"settings" : {
  "import/resolver": {
    "typescript": {}
  }
}
```
