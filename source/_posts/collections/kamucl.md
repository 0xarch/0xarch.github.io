---
title: 评 KAMUCL
date: 2026.10.25
tags:
  - 精品狗屎
categories: 随笔
---
抽象之极品，无人之 KAMUCL 。

<!--more-->

摘要中的无人指的是根本开发者里根本没有人。

**观前提醒：本文不是技术文档。本文中大量夹杂情绪化、两极化、社区化、选择性失明、严重左倾的叙述并使用了将复杂事件压缩为单一归因的政治性修辞策略（特别是脚注部分），因为实在是不吐不快，请读者请注意区分。**

不知道 KAMUCL 是什么东西的读者可以直接观看[这个](https://www.bilibili.com/video/BV11nHZ68EVs)不知道是什么物种的[三口人作者](https://space.bilibili.com/9596327)制作的视频。对于作者而言这个 KAMUCL 的社区地位堪比超级AI大狗屎 [Forbric](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader) 。由于这个三口人不知道为什么把仓库删了所以我不能引用包含美味小狗屎源代码的 GitHub 仓库。值得一提的是[这个仓库](https://github.com/YUN-SAN3/KAMUCL)看起来包含了跑路前的所有源代码，不过由于这个仓库的托管人看起来是个全新机器人账号唯一一个commit还导致 Actions 爆炸了所以作者不对这个仓库的可用性抱有任何期望。

尽管这个项目顶着一个 **✦ 简约、开箱即用的 Minecraft Java 启动器 ✦** 的名头但实际上其完全是一坨使用了[电子平台](//github.com/electron/electron)的小狗屎。

读到这个项目的 README 的第 1 个普朗克时间作者就充分意识到这是一个许愿式编程的项目并且作者完全没有触碰过任何开源项目因为他的 README 读起来就像一滩被 AI 拉出来然后又被 AI 反反复复打磨插花的稀便。而且作为一个使用了[电子平台](//github.com/electron/electron)的狗屎项目竟然连 Linux 都不支持。

<details>
<summary>美名其曰“打包所有平台”的脚本。
</summary>
注：原文如此，作者没有进行什么混淆之类的。

也许只有睾丸只有一颗的男性兽交爱好者会在一个即将被大众审阅的项目里塞这么一坨不明所以的
高尔夫代码。
所以很明显这个项目的作者压根没有和任何代码打过交道而是订阅了 Claude Max 然后力大砖飞开始循环迭代模式等到跑完打开产物录几个视频就认为自己是启动器界的[马斯克](https://www.wikiwand.com/en/Elon_Musk)。

```cjs
const {execFileSync}=require('node:child_process')
if(process.platform==='darwin') execFileSync(process.execPath,['scripts/pack-mac.mjs'],{stdio:'inherit'})
else if(process.platform==='win32') execFileSync('npm.cmd',['run','dist:win'],{stdio:'inherit',shell:true})
else throw Error('Release packaging requires Windows or macOS')
console.log('Cross-platform distribution is built by each native platform; macOS dual architecture: macOS packages workflow.')
```
</details>

另外一个非常搞笑以至于我不得不戴上口球防止唾液喷洒到电脑上的示例是他的 `AGENTS.md` 。

我们一起来看看这个传奇文件里包含了什么。

```md
# 项目默认交付流程

用户已明确授权：每批修改完成后，默认完成验证、打包，并更新到 https://github.com/kamubaba-i/KAMUCL ，无需再次询问是否打包或发布。

- 每批功能或修复递增版本尾号，同步 package.json、package-lock.json 根包版本、内置更新日志。更新日志日期必须采用本地时间 YYYY-MM-DD HH:mm，精确到小时和分钟。
- 版本号每百进一：尾号从 0 到 99，下一版向前一位进一并将尾号归零（例如 1.0.99 → 1.1.0）。
- 运行与改动相关的验证及构建；生成 Windows 便携 EXE、ZIP，验证便携包启动和 SHA256。
- 提交项目源码并推送 origin/master；沿用 main 的独立历史，通过 cherry-pick 同步本批提交，禁止强制推送或覆盖远端更新。
- 在上述仓库发布对应版本的 GitHub Release，上传 EXE、ZIP、SHA256SUMS.txt，并核对远端提交、标签和附件。
- 不合并或推送 wuhui 分支。保留现有用户改动，不结束他人的游戏进程。
- 如当次用户明确要求只分析、暂不执行、暂不发布或有其他限制，以当次指令为准。发布失败应保留成品并准确报告失败环节。

```

上面就是这个在 Wish Coding 中非常重要的核心部分的所有内容。很显然也许是作者从来没接触过什么 AI 编程于是让 AI 自己给自己写提示词然后 AI 琢磨半天发现作者压根没提出任何需求只能含泪憋出几句废话来。

另外一点是这个提示词里面那个仓库已经非常神奇的消失了（具体参见开头），也许是 AI 突然想通了于是大发慈悲的删除了仓库以防止更多的普罗大众吃到新鲜美文的狗屎。

作者在尝试把这个仓库克隆到本地的时候发现我的流量正在飞速流逝于是迅速切断了传输然后打开仓库查看问题。然后发现问题是这个文档目录里面全都是 AI 自己跑测试截的图。很显然作者连自己打开半成品看一眼的耐心都没有而是想办法让 Claude 玩 Minecraft 。

然后是作者在历经千辛万苦下载的仓库里审阅代码的过程中发现代码中的 114514% 部分都是彩蛋功能，甚至有专门为彩蛋写的 300D 高级界面。

这个狗屎项目的源代码中真正用来干发射游戏功能的代码可能只占着整个代码库大小的 1% 然后作者可能花费了阿伏伽德罗常数个 Token 让各种 Agent 轮奸仓库才制作出来这么一坨惊天大屎。

然后作者尝试运行时才想起来这个傻逼三口人可能根本没想到有人会在 Linux 上运行精品狗屎于是拒绝为 Linux 编译而作者也不想手动破坏这坨精美的插花作品于是只能引用[另一位敢于以身试毒的勇士](https://cubk.cn)的[观点](https://cubk.cn/articles/evaluate-kamucl)来表述作者的意思。读者可以直接点击那个观点链接然后欣赏 KAMUCL 的惊天大狗屎 UI 。

虽然作者不能亲身品鉴但在看到勇士先生的文章图片的第1个普朗克时间作者就充分发现这个发射器的 UI 设计完全是 AI 设计。整个发射器看起来充斥着诡异的基佬紫配色还有一个雷霆大按钮放在首页告诉你这个软件可以启动游戏。然后左侧看起来是一个试图模仿 [流体微小软件设计](https://fluent2.microsoft.design/) 的经典 AI 侧栏，右下角还贴心地列出了睁眼瞎名单。

然后来引用一下勇士先生的部分文本。此处的文本依照原授权模式( CC-BY 4.0)展示。

> 然后很显然作者的溜溜梅智力堪比一根成年的[香蕉](https://zh.wikipedia.org/zh-hans/%E9%A6%99%E8%95%89)，或者作者患有[语言失能症](https://zh.wikipedia.org/wiki/%E5%A4%B1%E8%AF%AD%E7%97%87)所以无法表达"hover"这个词所以他一辈子都无法向他的溜溜梅描述这个问题，这个UI里的几乎所有按钮的hover判定都有问题，要不就是上半部分无法选中要不就是某一侧无法选中就像作者的妈妈生他时候可能生了一半[大脑](https://zh.wikipedia.org/zh-hans/%E5%A4%A7%E8%84%91)落在了[子宫](https://zh.wikipedia.org/wiki/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD)里一样。

另外根据勇士先生的表达和一些被删除的文本可以发现这个三口人作者甚至不会使用 [互联网](https://www.wikiwand.com/en/Internet) 于是它直接把自己伪装成 Prism Launcher 来实现认证功能。下文为引用的勇士先生的部分文本。此处的文本依照原授权模式( CC-BY 4.0)展示。

> 最令人[蒙古](https://zh.wikipedia.org/wiki/%E8%92%99%E5%8F%A4%E5%9B%BD)的是虽然项目自身是一个他妈的[Electron](https://www.electronjs.org/)编写的狗屎，并且文件高达100MiB甚至90MiB，并且包含完整的[Blink、V8、Skia、Angle](https://cubk.cn/.org/chromium-projects/)意味着可以渲染世界上任何一个能在前端渲染的东西比如[Microsoft](https://zh.wikipedia.org/zh-hans/%E5%BE%AE%E8%BD%AF)[Vs](https://zh.wikipedia.org/zh-hans/%E4%B8%96%E7%95%8C%E5%A4%A7%E6%88%B0)[code](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A0%81)甚至是[Firefox](https://developer.puter.com/labs/firefox-wasm/)，但是作者及其高级的大脑还是决定给登录做成了你需要手动打开外置浏览器因为他不仅不会利用程序内的浏览器来渲染，甚至都不会自动帮你拉起一下浏览器，
> 
> 甚至作者都懒得自己去[申请一个ClientID](https://learn.microsoft.com/en-us/answers/questions/5956554/how-to-create-a-client-id-and-client-secret-for-ap)直接窃取了[Prism Launcher](https://prismlauncher.org/)的ClientID。
