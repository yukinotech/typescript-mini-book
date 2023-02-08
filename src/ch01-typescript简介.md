# typescript 简介

typescript 是一门微软基于 javascript 设计的编程语言，typescript 有以下几个特点：

1. typescript 被设计的最主要的目的，通过本地静态类型分析，检测 js 代码潜在的风险和问题。我们可以来看一段最简单的例子：

```ts
const a = 1
// ......
a = 2 // Cannot assign to 'a' because it is a constant.ts(2588)
```

js 中使用 const 声明的变量，是一个常量，不能再对其进行赋值，否则 runtime 里面会报错。可以看到代码中`const a = 1`对变量`a`赋了初始值`1`，而在后续的代码中，可能是疏忽，或者我们忘记了这个是一个`a`是一个常量，又对`a`赋了一个新值`2`，可以看到 ts 在`a = 2`这行提示出了错误：`Cannot assign to 'a' because it is a constant.ts(2588)`。ts 通过对本地代码的静态分析，找出了这个错误，并且提示了出来。

ts 的分析这个错误的过程是在本地完成的，也就是我们写代码的电脑上。但是 ts 是没有 runtime 的，换句话说，ts 的代码都没法直接在浏览器，nodejs 等环境运行，ts 必须先转换成合法的 js 代码才能运行，而想要知道 js 代码有没有错误，只能丢到浏览器上运行。

因此，相对于执行的 js 在 runtime（浏览器）中动态抛出错误，ts 可以在本地开发的时候，不在 runtime 里面执行的情况下，提前分析排查代码的潜在问题和错误。

2. typescript 是 javascript 的**超集**（superset），这里的'超'指的是范围和特性更广，'集'指的是集合，意思是说任何 js 代码都是合法的 ts 代码。这和 ts 的目标（[goals](https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals)）中`对齐当前和未来的javascript的提案`是一致的。js 每年实现的新特性（ES2021，ES2022 等等），ts 也会支持。


3. typescript并不是100%类型安全的，它在工程易用性和完备性上做了平衡
> 参考资料：https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals
