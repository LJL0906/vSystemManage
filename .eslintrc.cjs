module.exports = {
  root: false, //是否开启 eslint
  env: {
    browser: true, // 浏览器环境中的全局变量。
    node: true, // Node.js 全局变量和 Node.js 作用域。
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
  },
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器配置
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析器
    ecmaVersion: 2020, // ECMAScript 版本
    sourceType: 'module', // 模块
    jsxPragma: 'React', // 支持 ReactJSX 语法
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
  plugins: ['import', 'simple-import-sort'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended', // prettier放在最后,因为 extends 中后引入的规则会覆盖前面的规则。
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // 禁止未使用的变量
    'vue/multi-word-component-names': 'off', // 是否开启组件命名规则校验
    '@typescript-eslint/no-explicit-any': 'off', // 是否使用any,
    '@typescript-eslint/ban-types': 'off', // 禁止特定类型的对象
    '@typescript-eslint/no-var-requires': 'off', //禁止require
    '@typescript-eslint/ban-ts-comment': 'off', //禁止特定类型的 TypeScript 注释
    'vue/require-default-prop': 'off', //props是否必须有默认值
    '@typescript-eslint/no-non-null-assertion': 'off', //禁止使用非空断言操作符
    'no-unused-vars': 'off', // 禁止未使用的变量
    'vue/no-v-html': 'off', // 禁止使用v-html
    'vue/no-template-shadow': 'off', // 禁止模板中变量名与外部作用域中的变量或参数同名
    'vue/attributes-order': 'off', // 强制排序 HTML 属性

    'import/first': 'error', // 强制执行 import 语句位于其他语句之
    'import/newline-after-import': 'error', // 制执行 import 语句后必须有一个空行
    'import/no-duplicates': 'error', // 确保模块导入重复

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
