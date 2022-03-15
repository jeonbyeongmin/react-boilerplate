## 🧞‍♂️ TL;DR

<br/>

### Tooling Packages

- `@babel/core` : `babel`을 사용할 때 항상 필요한 패키지
- `@babel/cli` : 터미널에서 커맨드를 입력하여 `babel`을 사용할 때 필요한 패키지

### Presets

- `@babel/preset-env` : ES6+ 문법으로 작성된 코드를 ES5 문법의 코드로 변환해주는 모든 규칙을 정의
- `@babel/preset-react`
- `@babel/preset-typescript`

<br/>
<br/>

## 📌 How to use

<br/>

### @babel/core

바벨을 사용할 때 이유불문 항상 설치해야하 한다. 바벨은 실행이 아니라 빌드 시에 필요하기 때문에 개발 의존성 모듈로 설치해준다.

#### install

```
$ npm i -D @babel/core
```

### @babel/cli

터미널에서 커맨드로 바벨을 사용할 수 있다. `npx babel index.js` 와 같이 사용될 수 있다.

#### install

```
$ npm i -D @babel/core @babel/cli
```

### @babel/preset-env

```
$ npm i -D @babel/preset-env
```
