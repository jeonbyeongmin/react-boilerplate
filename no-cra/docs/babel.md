<br/>

### Tooling Packages

- `@babel/core` : `babel`을 사용할 때 항상 필요한 패키지
- `@babel/cli` : 터미널에서 커맨드를 입력하여 `babel`을 사용할 때 필요한 패키지

<br/>

### Presets

- `@babel/preset-env` : ES6+ 문법으로 작성된 코드를 ES5 문법으로 트랜스파일링하기 위한 프리셋
- `@babel/preset-react` : JSX 트랜스파일링을 위한 프리셋
- `@babel/preset-typescript` : 타입스크립트 트랜스파일링을 위한 프리셋

<br/>

### install

바벨은 실행이 아니라 빌드 시에 필요하기 때문에 개발 의존성 모듈로 설치해준다.

```
$ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript
```

<br/>

### .babelrc

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```
