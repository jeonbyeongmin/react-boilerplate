<br/>

## π  tsconfig.json

<br/>

### compilerOptions

- `target` : νμμ€ν¬λ¦½νΈ νμΌμ μ΄λ€ λ²μ μ μλ°μ€ν¬λ¦½νΈλ‘ λ°κΏμ€μ§ κ²°μ  (es3 | es5 | es2015 | es2016 | es2017 | es2018 | esnext)
- `module` : μλ°μ€ν¬λ¦½νΈ νμΌκ° import λ¬Έλ²μ κ΅¬νν  λ μ΄λ€ λ¬Έλ²μ μΈμ§ κ²°μ  (commonjs | amd | es2015 | esnext)
- `allowJs` : ts νμΌμμ js λ₯Ό importν΄μ μ¬μ©ν  κ²μΈμ§ κ²°μ  (true | false)
- `checkJs` : \*.js νμΌμμλ μλ¬λ₯Ό νμν  κ²μΈμ§ κ²°μ  (true | false)
- `jsx` : tsx νμΌμ jsxλ‘ μ΄λ»κ² μ»΄νμΌν  κ²μΈμ§ κ²°μ  (preserve | react-native | react)
- `declaration` : μ»΄νμΌμ .d.ts νμΌλ μλμΌλ‘ ν¨κ» μμ±ν μ§ κ²°μ  (true | false)
- `outFile` : λͺ¨λ  ts νμΌμ js νμΌ νλλ‘ μ»΄νμΌν΄μ€ (μμ± κ²½λ‘ μλ ₯ "./")
- `outDir` : js νμΌ μμν κ²½λ‘λ³κ²½ (μμ± κ²½λ‘ μλ ₯ "./dist")
- `rootDir` : λ£¨νΈκ²½λ‘ λ³κ²½ (js νμΌ μμν κ²½λ‘μ μν₯μ μ€ "./")
- `removeComments` : μ»΄νμΌμ μ£Όμμ μ κ±°ν΄μ€λ€ (true | false)
- `baseUrl` : tsconfig μ κΈ°μ€μΌλ‘ module μ μμΉλ₯Ό κ²°μ  (tsconfig νμΌμ΄ μλ κ³³μ κΈ°μ€μΌλ‘ μ νλ €λ©΄ "./")

- `strict` : νμμ μκ²©νκ² μ²΄ν¬ν μ§ κ²°μ . μΆνμ μΌμ΄λ  μ μλ νμ μ μμ λν μ€λ₯λ₯Ό λμν  μ μλ€. (true | false) [strict μ΅μ₯? β](https://iancoding.tistory.com/270)
- `noImplicitThis` : this ν€μλκ° any νμμΌ κ²½μ° μλ¬λ₯Ό λ°μν μ§ κ²°μ‘. strict μ΅μμ ν¬ν¨ (true | false)
- `strictNullChecks` : null, undefined νμμ λΆκ°λ₯ν λμμ ν μ μλ¬λΌμ§ κ²°μ . strict μ΅μμ ν¬ν¨ (true | false)
- `strictFunctionTypes` : ν¨μ νλΌλ―Έν° νμ μ²΄ν¬λ₯Ό κ°νκ² ν μ§ κ²°μ . strict μ΅μμ ν¬ν¨ (true| false)
- `strictPropertyInitialization` : class constructor μμ±μ νμμ²΄ν¬λ₯Ό κ°νκ² ν μ§ κ²°μ . strict μ΅μμ ν¬ν¨ (true | false)
- `alwaysStrict`: μλ°μ€ν¬λ¦½νΈ 'use strict' λͺ¨λ μΌ€μ§ κ²°μ . strict μ΅μμ ν¬ν¨ [use strict β](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
- `noImplicitAny` : any νμμ κΈμ§ μ¬λΆλ₯Ό κ²°μ  (true | false)

- `noUnusedLocals` : μ°μ§ μλ μ§μ­λ³μκ° μμ λ μλ¬ λ°μ (true | false)
- `noUnusedParameters` : μ°μ§ μλ νλΌλ―Έν° μμ λ μλ¬ λ°μ (true | false)
- `noImplicitReturns` : ν¨μμμ return μ λΉ λ¨λ¦¬λ©΄ μλ¬ λ°μ (true | false)
- `noFallthroughCasesInSwitch` : switch λ¬Έ λ¬Έλ² μλ¬ λ°μ (true | false)
