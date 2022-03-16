<br/>

## 🛠 tsconfig.json

<br/>

### compilerOptions

- `target` : 타입스크립트 파일을 어떤 버전의 자바스크립트로 바꿔줄지 결정 (es3 | es5 | es2015 | es2016 | es2017 | es2018 | esnext)
- `module` : 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 결정 (commonjs | amd | es2015 | esnext)
- `allowJs` : ts 파일에서 js 를 import해서 사용할 것인지 결정 (true | false)
- `checkJs` : \*.js 파일에서도 에러를 표시할 것인지 결정 (true | false)
- `jsx` : tsx 파일을 jsx로 어떻게 컴파일할 것인지 결정 (preserve | react-native | react)
- `declaration` : 컴파일시 .d.ts 파일도 자동으로 함께 생성할지 결정 (true | false)
- `outFile` : 모든 ts 파일을 js 파일 하나로 컴파일해줌 (생성 경로 입력 "./")
- `outDir` : js 파일 아웃풋 경로변경 (생성 경로 입력 "./dist")
- `rootDir` : 루트경로 변경 (js 파일 아웃풋 경로에 영향을 줌 "./")
- `removeComments` : 컴파일시 주석을 제거해준다 (true | false)
- `baseUrl` : tsconfig 을 기준으로 module 의 위치를 결정 (tsconfig 파일이 있는 곳을 기준으로 정하려면 "./")

- `strict` : 타입을 엄격하게 체크할지 결정. 추후에 일어날 수 있는 타입 정의에 대한 오류를 대응할 수 있다. (true | false) [strict 옵셥? →](https://iancoding.tistory.com/270)
- `noImplicitThis` : this 키워드가 any 타입일 경우 에러를 발생할지 결졍. strict 옵션에 포함 (true | false)
- `strictNullChecks` : null, undefined 타입에 불가능한 동작을 할시 에러낼지 결정. strict 옵션에 포함 (true | false)
- `strictFunctionTypes` : 함수 파라미터 타입 체크를 강하게 할지 결정. strict 옵션에 포함 (true| false)
- `strictPropertyInitialization` : class constructor 작성시 타입체크를 강하게 할지 결정. strict 옵션에 포함 (true | false)
- `alwaysStrict`: 자바스크립트 'use strict' 모드 켤지 결정. strict 옵션에 포함 [use strict →](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
- `noImplicitAny` : any 타입의 금지 여부를 결정 (true | false)

- `noUnusedLocals` : 쓰지 않는 지역변수가 있을 때 에러 발생 (true | false)
- `noUnusedParameters` : 쓰지 않는 파라미터 있을 때 에러 발생 (true | false)
- `noImplicitReturns` : 함수에서 return 을 빠뜨리면 에러 발생 (true | false)
- `noFallthroughCasesInSwitch` : switch 문 문법 에러 발생 (true | false)
