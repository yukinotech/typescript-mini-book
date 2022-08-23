Object.assign(window.search, {"doc_urls":["introduction.html#前言","ch00-环境准备.html#环境准备","ch00-环境准备.html#推荐使用vscode","ch00-环境准备.html#自行选择ts版本可选","ch01-typescript入门.html#typescript-入门","ch02-类型是一个集合.html#类型是一个集合","ch02-类型是一个集合.html#ts到底在检测啥","ch02-类型是一个集合.html#什么是子集","ch02-类型是一个集合.html#如何用集合来想象ts","ch02-01-集合之间可以运算.html#集合之间可以运算"],"index":{"documentStore":{"docInfo":{"0":{"body":9,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":14,"breadcrumbs":1,"title":1},"3":{"body":15,"breadcrumbs":1,"title":1},"4":{"body":41,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":0,"title":0},"6":{"body":3,"breadcrumbs":1,"title":1},"7":{"body":4,"breadcrumbs":0,"title":0},"8":{"body":20,"breadcrumbs":1,"title":1},"9":{"body":1,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"本书旨在分享和沉淀笔者在学习和使用ts中获收获的一些感悟，经验和技巧 阅读本书的前置知识储备： 对javascript有一定的了解 本书的特点和期望： 新手能轻松入门，老手也能从中学到一些trick 并不会覆盖ts的方方面面的特性，着重于ts中的一些经验和技巧 关注ts新特性，本书写作时，ts的稳定版本是4.7.4，本条目会随这ts的版本更新 每个章节的对应代码片段都在code目录下可以查看 本书的章节分布： ch00-环境准备 几个vscode搭配ts的小技巧 ch01-typescript入门 完全不了解typescript的新手可以从这里开始阅读，有经验的开发者可以略过这个章节 ch02-类型是一个集合 从集合的角度探讨ts类型","breadcrumbs":"前言 » 前言","id":"0","title":"前言"},"1":{"body":"预先善其事，必先利其器。","breadcrumbs":"前言 » 环境准备 » 环境准备","id":"1","title":"环境准备"},"2":{"body":"笔者推荐使用vscode进行本教程的学习，因为vscode对typescript有着良好的支持。vscode在语言支持上，可以通过插件的形式，支持多种语言类型，但是大多数语言的插件，需要自己下载安装vscode后，去应用市场手动下载安装相应的插件。但typescript的语言功能插件已经预先集成到vscode的安装包中，可以开箱即用，可以说vscode对typescript的支持是开了个后门。 安装好vscode后，可以在shell里执行以下命令，下载本书的代码片段 $ git clone https://github.com/yukinotech/typescript-mini-book.git $ cd ./typescript-mini-book/code 或者直接通过下载项目的zip包，解压后，通过vscode直接打开 然后进入代码目录，随便打开一个ts文件，可以看到vscode的底部出现一个花括号和typescript的标志，鼠标悬浮到花括号上，单击，可以看到当前typescript指向的tsconfig文件和版本号。 ts-version 其中tsconfig指向的一个json文件，里面是用于配置当前ts项目的一些编译和静态分析的配置，我们可以先不用关心它。截止本文撰写时，ts最新稳定版本是4.7.3，当你更新vscode即可获得最新的ts版本，如果你是下载的最新的vscode安装包 P.S.: 有些朋友可能注意到我截图的ts版本是dev版本，而不是一般的正式版，类似4.7.3这种。这个是通过vscode的额外的插件JavaScript and TypeScript Nightly抢先体验最新版的ts，感兴趣的朋友可以在vscode的应用商店下载。如果你不太了解这个，不必关心这个问题，只要保证你的ts版本较新即可。","breadcrumbs":"前言 » 环境准备 » 推荐使用vscode","id":"2","title":"推荐使用vscode"},"3":{"body":"如果你想替换当前的ts版本，你可以选择本地安装一个ts,通过@指定ts版本。yarn,npm均可。（npm指令需要依赖node，不了解的可以查找相关资料） $ npm i typescript@4.7.3 -dev 安装好后，重启启动一下vscode，还在刚刚截图的地方，选择select version即可找到刚刚下载到本地的ts版本 select-ts-version 参考资料: https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it","breadcrumbs":"前言 » 环境准备 » 自行选择ts版本（可选）","id":"3","title":"自行选择ts版本（可选）"},"4":{"body":"typescript 是一门微软基于 javascript 设计的编程语言，typescript 有以下几个特点： typescript 被设计的最主要的目的，通过本地静态类型分析，检测 js 代码潜在的风险和问题。我们可以来看一段最简单的例子： const a = 1\n// ......\na = 2 // Cannot assign to 'a' because it is a constant.ts(2588) js 中使用 const 声明的变量，是一个常量，不能再对其进行赋值，否则 runtime 里面会报错。可以看到代码中const a = 1对变量a赋了初始值1，而在后续的代码中，可能是疏忽，或者我们忘记了这个是一个a是一个常量，又对a赋了一个新值2，可以看到 ts 在a = 2这行提示出了错误：Cannot assign to 'a' because it is a constant.ts(2588)。ts 通过对本地代码的静态分析，找出了这个错误，并且提示了出来。 ts 的分析这个错误的过程是在本地完成的，也就是我们写代码的电脑上。但是 ts 是没有 runtime 的，换句话说，ts 的代码都没法直接在浏览器，nodejs 等环境运行，ts 必须先转换成合法的 js 代码才能运行，而想要知道 js 代码有没有错误，只能丢到浏览器上运行。 因此，相对于执行的 js 在 runtime（浏览器）中动态抛出错误，ts 可以在本地开发的时候，不在 runtime 里面执行的情况下，提前分析排查代码的潜在问题和错误。 typescript 是 javascript 的 超集 （superset），这里的'超'指的是范围和特性更广，'集'指的是集合，意思是说任何 js 代码都是合法的 ts 代码。这和 ts 的目标（ goals ）中对齐当前和未来的javascript的提案是一致的。js 每年实现的新特性（ES2021，ES2022 等等），ts 也会支持。 参考资料：https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals","breadcrumbs":"前言 » typescript 入门 » typescript 入门","id":"4","title":"typescript 入门"},"5":{"body":"","breadcrumbs":"类型是一个集合 » 类型是一个集合","id":"5","title":"类型是一个集合"},"6":{"body":"在 ts 的世界里面，ts 主要静态检测的，或者回答的问题就是一个类型是不是另一个类型的子类型。我们可以把每个 ts 类型都可以想象成一个集合，上述的问题就变成了一个集合是不是另外一个集合的子集。","breadcrumbs":"类型是一个集合 » ts到底在检测啥","id":"6","title":"ts到底在检测啥"},"7":{"body":"什么是子集呢？我们说一个集合A包含了另一个集合B里面所有的元素，我们就可以说集合B是集合A的子集。 用韦恩图来表示就是： 图1 我们举个例子： 集合A有5个元素1，2，3，4，5 集合B有2个元素1，2 集合A包含了集合B全部的元素，那么集合B就是集合A的子集","breadcrumbs":"类型是一个集合 » 什么是子集","id":"7","title":"什么是子集"},"8":{"body":"听起来有些抽象，我们来看几个 ts 常规的样例： const status: number = 1 这里我们声明了一个变量 status，并且指明了它的类型是 number，最后给它赋了一个初值 1。这里就隐藏着一个 ts 静态检测的过程。 '1'是一个数字，我们把它看做是一个集合，只不过它只有1个元素，'1'。 number也可以想象成一个集合，只不过它里面有无数个元素，里面可以有'1','2','3','4'等等。 而这个const status: number = 1这个赋值语句的类型校验是否正确，取决于：1这个集合是不是number这个集合的子集。 很显然，1是number这个集合的子集，那么ts会认为这段代码是没问题的。 我们接下来看一个错误的例子 const status2: number = 'some str' // error 'some str'是一个js字符串字面量变量，它也是有类型的，它的类型就是'some str'，我们也可以先看成只有一个元素的集合，但是很明显，'some str'不在number的集合中，因此'some str'不是number的子集，'some str'不是number的子类型，所以ts就报错了。 最后总结一下本章的观点：我们把ts中的类型想象成一个集合，而在赋值的操作中","breadcrumbs":"类型是一个集合 » 如何用集合来想象ts","id":"8","title":"如何用集合来想象ts"},"9":{"body":"数学中的集合可以运算，ts的类型也可以运算 数学中集合的运算","breadcrumbs":"类型是一个集合 » 集合之间可以运算 » 集合之间可以运算","id":"9","title":"集合之间可以运算"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":3,"docs":{"4":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"4":{"tf":1.0}},"这":{"df":0,"docs":{},"行":{"df":0,"docs":{},"提":{"df":0,"docs":{},"示":{"df":0,"docs":{},"出":{"df":0,"docs":{},"了":{"df":0,"docs":{},"错":{"df":0,"docs":{},"误":{"df":0,"docs":{},"：":{"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"包":{"df":0,"docs":{},"含":{"df":0,"docs":{},"了":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"b":{"df":0,"docs":{},"全":{"df":0,"docs":{},"部":{"df":0,"docs":{},"的":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"df":0,"docs":{},"，":{"df":0,"docs":{},"那":{"df":0,"docs":{},"么":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"b":{"df":0,"docs":{},"就":{"df":0,"docs":{},"是":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"有":{"5":{"df":0,"docs":{},"个":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"1":{"df":0,"docs":{},"，":{"2":{"df":0,"docs":{},"，":{"3":{"df":0,"docs":{},"，":{"4":{"df":0,"docs":{},"，":{"5":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"/":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"有":{"2":{"df":0,"docs":{},"个":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"1":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"c":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"h":{"0":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"1":{"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"(":{"2":{"5":{"8":{"8":{")":{"df":0,"docs":{},"。":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":2,"docs":{"4":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"2":{"0":{"2":{"1":{"df":0,"docs":{},"，":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"2":{"0":{"2":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"3":{"9":{"6":{"6":{"8":{"7":{"3":{"1":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}},"的":{"df":0,"docs":{},"提":{"df":0,"docs":{},"案":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"致":{"df":0,"docs":{},"的":{"df":0,"docs":{},"。":{"df":0,"docs":{},"j":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":2.449489742783178}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":2.0}}}}},"df":0,"docs":{}}}},"p":{".":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"（":{"df":0,"docs":{},"浏":{"df":0,"docs":{},"览":{"df":0,"docs":{},"器":{"df":0,"docs":{},"）":{"df":0,"docs":{},"中":{"df":0,"docs":{},"动":{"df":0,"docs":{},"态":{"df":0,"docs":{},"抛":{"df":0,"docs":{},"出":{"df":0,"docs":{},"错":{"df":0,"docs":{},"误":{"df":0,"docs":{},"，":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.7320508075688772}},"s":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"'":{"df":0,"docs":{},"不":{"df":0,"docs":{},"在":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"的":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"'":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}},"是":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"的":{"df":0,"docs":{},"子":{"df":0,"docs":{},"类":{"df":0,"docs":{},"型":{"df":0,"docs":{},"，":{"df":0,"docs":{},"所":{"df":0,"docs":{},"以":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"集":{"df":0,"docs":{},"，":{"'":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"8":{"tf":1.0}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":7,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":2.8284271247461903},"6":{"tf":2.0},"8":{"tf":1.7320508075688772},"9":{"tf":1.0}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"@":{"4":{".":{"7":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":2.23606797749979}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"即":{"df":0,"docs":{},"可":{"df":0,"docs":{},"找":{"df":0,"docs":{},"到":{"df":0,"docs":{},"刚":{"df":0,"docs":{},"刚":{"df":0,"docs":{},"下":{"df":0,"docs":{},"载":{"df":0,"docs":{},"到":{"df":0,"docs":{},"本":{"df":0,"docs":{},"地":{"df":0,"docs":{},"的":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}},"搭":{"df":0,"docs":{},"配":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"包":{"df":0,"docs":{},"，":{"df":0,"docs":{},"解":{"df":0,"docs":{},"压":{"df":0,"docs":{},"后":{"df":0,"docs":{},"，":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}},"breadcrumbs":{"root":{"1":{"df":3,"docs":{"4":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"2":{"df":1,"docs":{"4":{"tf":1.0}},"这":{"df":0,"docs":{},"行":{"df":0,"docs":{},"提":{"df":0,"docs":{},"示":{"df":0,"docs":{},"出":{"df":0,"docs":{},"了":{"df":0,"docs":{},"错":{"df":0,"docs":{},"误":{"df":0,"docs":{},"：":{"c":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"包":{"df":0,"docs":{},"含":{"df":0,"docs":{},"了":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"b":{"df":0,"docs":{},"全":{"df":0,"docs":{},"部":{"df":0,"docs":{},"的":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"df":0,"docs":{},"，":{"df":0,"docs":{},"那":{"df":0,"docs":{},"么":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"b":{"df":0,"docs":{},"就":{"df":0,"docs":{},"是":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}}}}}},"有":{"5":{"df":0,"docs":{},"个":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"1":{"df":0,"docs":{},"，":{"2":{"df":0,"docs":{},"，":{"3":{"df":0,"docs":{},"，":{"4":{"df":0,"docs":{},"，":{"5":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"/":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"有":{"2":{"df":0,"docs":{},"个":{"df":0,"docs":{},"元":{"df":0,"docs":{},"素":{"1":{"df":0,"docs":{},"，":{"2":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"c":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"h":{"0":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"1":{"df":1,"docs":{"0":{"tf":1.0}}},"2":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"(":{"2":{"5":{"8":{"8":{")":{"df":0,"docs":{},"。":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":2,"docs":{"4":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"2":{"0":{"2":{"1":{"df":0,"docs":{},"，":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"2":{"0":{"2":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"3":{"9":{"6":{"6":{"8":{"7":{"3":{"1":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.4142135623730951}},"的":{"df":0,"docs":{},"提":{"df":0,"docs":{},"案":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"致":{"df":0,"docs":{},"的":{"df":0,"docs":{},"。":{"df":0,"docs":{},"j":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":2.449489742783178}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"j":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":2.0}}}}},"df":0,"docs":{}}}},"p":{".":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"（":{"df":0,"docs":{},"浏":{"df":0,"docs":{},"览":{"df":0,"docs":{},"器":{"df":0,"docs":{},"）":{"df":0,"docs":{},"中":{"df":0,"docs":{},"动":{"df":0,"docs":{},"态":{"df":0,"docs":{},"抛":{"df":0,"docs":{},"出":{"df":0,"docs":{},"错":{"df":0,"docs":{},"误":{"df":0,"docs":{},"，":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.7320508075688772}},"s":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"r":{"'":{"df":0,"docs":{},"不":{"df":0,"docs":{},"在":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"的":{"df":0,"docs":{},"集":{"df":0,"docs":{},"合":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"'":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}},"是":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"的":{"df":0,"docs":{},"子":{"df":0,"docs":{},"类":{"df":0,"docs":{},"型":{"df":0,"docs":{},"，":{"df":0,"docs":{},"所":{"df":0,"docs":{},"以":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"集":{"df":0,"docs":{},"，":{"'":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"8":{"tf":1.0}}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":7,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":2.8284271247461903},"6":{"tf":2.23606797749979},"8":{"tf":2.0},"9":{"tf":1.0}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"@":{"4":{".":{"7":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":2.6457513110645907}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"3":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}},"即":{"df":0,"docs":{},"可":{"df":0,"docs":{},"找":{"df":0,"docs":{},"到":{"df":0,"docs":{},"刚":{"df":0,"docs":{},"刚":{"df":0,"docs":{},"下":{"df":0,"docs":{},"载":{"df":0,"docs":{},"到":{"df":0,"docs":{},"本":{"df":0,"docs":{},"地":{"df":0,"docs":{},"的":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"搭":{"df":0,"docs":{},"配":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"包":{"df":0,"docs":{},"，":{"df":0,"docs":{},"解":{"df":0,"docs":{},"压":{"df":0,"docs":{},"后":{"df":0,"docs":{},"，":{"df":0,"docs":{},"通":{"df":0,"docs":{},"过":{"df":0,"docs":{},"v":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}}}}}}},"title":{"root":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":3,"docs":{"3":{"tf":1.0},"6":{"tf":1.0},"8":{"tf":1.0}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});