---
title: 评 KAMUCL
date: 2026.10.26
tags:
  - 精品狗屎
categories: 随笔
author: 0xarch
---
抽象之极品，无人之 KAMUCL 。

<!--more-->

摘要中的无人指的是根本开发者里根本没有人。

## 观前提醒

您需要了解以下几点：

* 本文不是技术文档也不是搅屎棍和事佬文章。本文是带有明显主观意向的表达性文章。

* 本文中大量夹杂情绪化、两极化、社区化、严重左倾的叙述，因为实在是不吐不快，请读者请注意区分。

* 本文使用的倾向性写作手法包括但不限于：春秋笔法、选择性叙事、偷换概念、降格攻击等。如果您最近在学习申论，可以酌情参考本文章。

* 本文中除列举事实外极少存在客观表述。您可以在脚注部分找到大部分相对客观的表述。其他相对客观的描述位于 [抛开狗屎不谈](#抛开狗屎不谈) 一节。

* 如果您对粪便过敏，请勿阅读此文章的上半部分。

* 非常抱歉，您至少需要中国高中毕业学历或更高学历或同等学历才能充分理解本文章。若您不具备足以获得学历的所有知识，可能会在阅读过程中感到疑惑。

**您已经被充分警告过了**。下面是正文。

## 狗屎状态

不知道 KAMUCL 是什么东西的读者可以直接观看[这个](https://www.bilibili.com/video/BV11nHZ68EVs)不知道是什么物种的[三口人作者](https://space.bilibili.com/9596327)[^three-mouth]制作的视频。
对于作者而言这个 KAMUCL 的社区地位堪比超级AI大狗屎 [Forbric](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader) 。

由于这个三口人不知道为什么把仓库删了[^repo-del]所以我不能引用包含美味小狗屎源代码的 GitHub 仓库。
值得一提的是[这个仓库](https://github.com/YUN-SAN3/KAMUCL)看起来包含了跑路前的所有源代码，
不过由于这个仓库的托管人看起来是个全新机器人账号[^robot0]唯一一个 commit 还导致 [Actions](https://github.com/actions) 爆炸了所以作者不对这个仓库的可用性抱有任何期望。

[^repo-del]: 也许是在被社区广泛批评后原作者的 GitHub 账号 kamubaba-i 删除了或私有化了原来的仓库，现在原地址无法访问。

[^three-mouth]: 三口人：指作者“卡慕SAMA”。该创作者曾使用一个长着三张嘴的恶俗P图作为头像并广为流传。

[^robot0]: 机器人账号：指该账号除了 KAMUCL 仓库之外只有一个 `YUN-SAN3.github.io` 仓库并且里面放的是一个不知名小众组织的官网。

## 发现基础狗屎问题

尽管这个项目顶着一个 **✦ 简约、开箱即用的 Minecraft Java 启动器 ✦**[^slogan] 的名头但实际上其完全是一坨使用了[电子平台](//github.com/electron/electron)的小狗屎。

[^slogan]: 原文如此。作者相信任何一个[人类](https://www.wikiwand.com/en/Human)都不会在[一个以作品质量为核心准则的圈子](https://github.com/community)里给自己的 README 加上犹如屎上雕花的`✦`符号。

读到这个项目的 README 的第 1 个普朗克时间[^plc]作者就充分意识到这是一个许愿式编程[^wish-coding]的项目并且作者完全没有触碰过任何开源项目因为他的 README 读起来就像一滩被 AI 拉出来然后又被 AI 反反复复打磨插花的稀便。而且作为一个使用了[电子平台](//github.com/electron/electron)的狗屎项目竟然连 Linux[^linux] 都不支持。

[^wish-coding]: 许愿式编程：即 Wish Coding 。开发者（通常没有任何知识基础）将自己的愿景告诉 AI 然后由 AI 自己搞定从架构到底层的所有内容。通常开发者也压根不会审阅 AI 代码因为他们没有能力这么做。

[^linux]: [Linux](https://www.wikiwand.com/en/Linux)：本文指 Linux 发行版或 GNU/Linux 发行版。

[^plc]: [普朗克时间](https://www.wikiwand.com/simple/Planck_time)：5.39×10<sup>-44</sup>秒。

至于为什么没有 Linux 支持可以来看这个美名其曰“打包所有平台”的脚本。

```cjs
const {execFileSync}=require('node:child_process')
if(process.platform==='darwin') execFileSync(process.execPath,['scripts/pack-mac.mjs'],{stdio:'inherit'})
else if(process.platform==='win32') execFileSync('npm.cmd',['run','dist:win'],{stdio:'inherit',shell:true})
else throw Error('Release packaging requires Windows or macOS')
console.log('Cross-platform distribution is built by each native platform; macOS dual architecture: macOS packages workflow.')
```

>原文如此，作者没有进行什么混淆或断章取义之类的。

也许只有睾丸只有一颗的男性兽交爱好者[^furry]会在一个即将被大众审阅的项目里塞这么一坨不明所以的[高尔夫代码](https://www.wikiwand.com/en/Code_golf)。
所以很明显这个项目的作者压根没有和任何代码打过交道而是订阅了 Claude Max 然后力大砖飞开始循环迭代模式[^ref-claude]等到跑完打开产物录几个视频就认为自己是启动器界的[马斯克](https://www.wikiwand.com/en/Elon_Musk)。

另外不难发现这个所谓的脚本只是让命令从 Shell 进入 NodeJS 然后又进入 Shell 。而且这个文件以及所有脚本文件甚至是 [CommonJS](https://baike.baidu.com/item/CommonJS/1206163) 并且值得注意的是这是 2026 年的项目。

[^furry]: 兽交爱好者：指有[恋兽癖](https://baike.baidu.com/item/%E6%81%8B%E5%85%BD%E7%99%96/10283237)的人。[兽迷(Furry)](https://baike.baidu.com/item/%E5%85%BD%E8%BF%B7/6249797)不在此列。

[^ref-claude]: 订阅了 Claude Max 然后力大砖飞开始循环迭代模式：该比喻出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。Forbric 作者曾经非常自豪地宣布自己购买了 Claude Max 20x 并宣布所有没有买 Claude 却评价它的项目的人是傻逼。

## 观赏狗屎提示词

另外一个非常搞笑以至于我不得不戴上口罩防止唾液喷洒到电脑上的东西是他的 `AGENTS.md` 。

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
> 原文件如此。

是的，上面就是这个许愿式编程的核心部分的所有内容。非常难以想象一个也许是塞入了一百个功能的超级启动器的核心提示词是怎么交付产品。

很显然也许是作者从来没接触过什么 AI 编程于是让 AI 自己给自己写提示词然后 AI 琢磨半天发现作者压根没提出任何有技术含量需求只能含泪憋出几句废话来装作它听懂了。

另外这个提示词里面那个仓库已经非常神奇的[消失了](#狗屎状态)所以实际上 AI 拿到这个 `AGENTS.md` 的第一步检查仓库就无法完成。这意味着实际上 `AGENTS.md` 的有效提示词字符数是 `0` 。也许是 AI 突然想通了于是大发慈悲的删除了仓库以防止更多的普罗大众吃到新鲜美味的狗屎。

## 拆解狗屎大仓库

作者在尝试把这个仓库克隆到本地的时候发现流量正在飞速流逝于是迅速切断了传输，然后打开在线仓库查看问题。
然后发现问题是这个文档目录里面全都是 AI 自己跑测试截的图。[^sc-fix]
很显然作者连自己打开半成品看一眼的耐心都没有而是想办法让 Claude 玩 《我的手艺》[^minecraft]。

[^sc-fix]: 截止至文章更新时，唯一能访问的仓库已经不包含这些狗屎中的大部分。镜像仓库的大小（`git clone` 后）为 52.7MiB 。

[^minecraft]: 《我的手艺》：是对沙盒游戏 Minecraft 的非官方直译。出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。

然后是作者在历经千辛万苦下载的仓库里审阅代码的过程中发现代码中 99% 的组成部分都是彩蛋功能，甚至有专门为彩蛋写的 3D<sup>e</sup> 高级界面。

这个狗屎项目的源代码中真正用来干发射[^launch]游戏功能的代码可能只占着整个代码库大小的 1% 然后作者可能花费了阿伏伽德罗数[^avoc]个 Token 让各种 Agent 轮奸[^agent-iter]仓库才制作出来这么一坨惊天大屎。

[^launch]: 发射：对“启动”的原词“launch”的偏差翻译。

[^avoc]: 阿伏伽德罗数：6.02214076×10<sup>23</sup>

[^agent-iter]: 轮奸：在此处代指由多个 Agent 在互不交流的情况下对同一个仓库进行反复开发。此行为常导致编码混乱、架构不完整等问题。

## 鉴赏大狗屎界面

然后作者尝试运行时才想起来这个傻逼三口人可能根本没想到有人会在 Linux 上运行精品狗屎于是[拒绝为 Linux 编译](#发现基础狗屎问题)而作者也不想手动破坏这坨精美的插花作品于是只能引用[另一位敢于以身试毒的勇士](https://cubk.cn)的[使用体验](https://cubk.cn/articles/evaluate-kamucl)来表述作者的意思。读者可以直接点击那个`使用体验`链接然后欣赏 KAMUCL 的惊天大狗屎 UI 。

虽然作者不能亲身品鉴但在看到勇士先生[^mr-courage]的文章图片的第1个普朗克时间[^plc]作者就充分发现这个发射器的 UI 设计完全是 AI 设计。整个发射器看起来充斥着诡异的基佬紫配色还有一个<span style="font-size: 150%; text-wrap: nowrap">超级大大大按钮</span>放在首页告诉你这个软件可以发射游戏。然后左侧看起来是一个试图模仿 [流体微小软件设计](https://fluent2.microsoft.design/) 的经典 AI 侧栏，右下角还贴心地列出了睁眼瞎名单[^testers]。

[^mr-courage]: 即前文提到的 [另一位敢于以身试毒的勇士](https://cubk.cn) 。下文同。

[^testers]: 软件中展示的是测试者名单。不过显然这个漏洞满天飞的发射器根本没有被人测试过或者测试者也只是找了几个 Harness 客户端打开 Computer Use 让 AI 审查然后跑去[撸管](https://www.wikihow.com/Masturbate)。在此谨以“睁眼瞎”做总结。

然后来引用一下勇士先生的部分文本。此处的文本依照原授权模式(CC-BY 4.0)展示。[^llm]

> 然后很显然作者的溜溜梅智力堪比一根成年的[香蕉](https://zh.wikipedia.org/zh-hans/%E9%A6%99%E8%95%89)，或者作者患有[语言失能症](https://zh.wikipedia.org/wiki/%E5%A4%B1%E8%AF%AD%E7%97%87)所以无法表达"hover"这个词所以他一辈子都无法向他的溜溜梅描述这个问题，这个UI里的几乎所有按钮的hover判定都有问题，要不就是上半部分无法选中要不就是某一侧无法选中就像作者的妈妈生他时候可能生了一半[大脑](https://zh.wikipedia.org/zh-hans/%E5%A4%A7%E8%84%91)落在了[子宫](https://zh.wikipedia.org/wiki/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD)里一样。

[^llm]: 溜溜梅：勇士先生的原文章中出现的名词。由于 LLM 是溜溜梅（Liu-Liu-Mei）的首字母，且[溜溜梅公司的股票代码正是 LLM 导致溜溜梅公司股票莫名疯涨](https://finance.sina.com.cn/roll/2026-06-15/doc-inicnuhr8240786.shtml)。后来溜溜梅便被用作对大语言模型的指代。 

另外根据勇士先生的表达和一些[神奇的类型定义](#ClientID)可以发现这个三口人作者甚至不会使用 [互联网](https://www.wikiwand.com/en/Internet) 于是它直接把自己伪装[^prism-id]成 Prism Launcher 来实现认证功能。下文为引用的勇士先生的部分文本。此处的文本依照原授权模式(CC-BY 4.0)展示。[^vscode]

> 最令人[蒙古](https://zh.wikipedia.org/wiki/%E8%92%99%E5%8F%A4%E5%9B%BD)的是虽然项目自身是一个他妈的[Electron](https://www.electronjs.org/)编写的狗屎，并且文件高达100MiB甚至90MiB，并且包含完整的[Blink、V8、Skia、Angle](https://cubk.cn/.org/chromium-projects/)意味着可以渲染世界上任何一个能在前端渲染的东西比如[Microsoft](https://zh.wikipedia.org/zh-hans/%E5%BE%AE%E8%BD%AF)[Vs](https://zh.wikipedia.org/zh-hans/%E4%B8%96%E7%95%8C%E5%A4%A7%E6%88%B0)[code](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A0%81)甚至是[Firefox](https://developer.puter.com/labs/firefox-wasm/)，但是作者及其高级的大脑还是决定给登录做成了你需要手动打开外置浏览器因为他不仅不会利用程序内的浏览器来渲染，甚至都不会自动帮你拉起一下浏览器，
> 
> 甚至作者都懒得自己去[申请一个ClientID](https://learn.microsoft.com/en-us/answers/questions/5956554/how-to-create-a-client-id-and-client-secret-for-ap)直接窃取了[Prism Launcher](https://prismlauncher.org/)的ClientID。

[^prism-id]: 伪装：含蓄表达。实际上 KAMUCL 直接窃取了 Prism Launcher 的 ClientID 。

[^vscode]: MicrosoftVscode: 指 [Microsoft VS Code](https://code.visualstudio.com/) 。因社区中某些~~小傻逼们~~低龄人士~~压根没接触过IDE然后~~类比于`Plant vs Zombie`于是把`Microsoft VS Code`翻译为`微软大战代码`于是产生此说法。

然后在作者尝试搜寻原仓库的时候发现这个仓库竟然有高达 147 个 star 。作者合理怀疑这是由于三口人作者在 [阴唇网站](https://bilibili.com/)[^blbl] 上有高达 262.7 万只狂热追随者[^follower]于是这 262.7 万只狂热追随者里面为数不多看得懂英文的 146 只追随者立刻注册了 GitHub 然后专门找到这个美味狗屎项目并 star 之以表示自己愿意吃下三口人先生的所有排泄物。剩下的 1 个 star 可能是三口人先生自己点的。

[^blbl]: 阴唇网站：由于 Bilibili 中的 `Bi` 谐音 `逼` ，而这个字在中文语境中可指代女性阴部，并且 Bilibili 曾经因为 AI 审核不认识[阴唇](https://handwiki.org/wiki/Biology:Labia)而把一个包含女性阴部实拍图的图片公开到评论区于是荣获此称誉。

[^follower]: 262.7 万只狂热追随者：262.7 万指 Bilibili 粉丝数。由于 Bilibili 上的 Minecraft 中文主播催生的[饭圈化](https://baike.baidu.com/item/%E9%A5%AD%E5%9C%88/8627336)严重，不适合称其为粉丝。

## 使用显微镜观察狗屎

下面这一坨是作者在休息之后再次查看美味狗屎源代码之后发现的恶臭狗屎列表。

### Verify<sup>60</sup>

脚本目录里有一个专门的脚本用来验证三口人先生的标志是否被正确使用了，还有另外十数个脚本专门用来验证某个狗屎功能正常工作。没有任何一个[大脑](https://zh.wikipedia.org/zh-hans/%E5%A4%A7%E8%84%91)正常的人类开发者会把这一大坨 [OpenQA](http://open.qa/)-like 的东西写在脚本里而不是测试里。

<details>
<summary>此处查看验证脚本</summary>

```plain
eco@EC-xx ~/P/KAMUCL (main)> ls scripts/ | grep verify
harness-flatten-verify.ts
verify-bound-folders.cjs
verify-bridge-exit.cjs
verify-community-browse.ts
verify-community-ui.cjs
verify-compact-windows-ui.cjs
verify-curseforge-cdn.ts
verify-default-config-ui.cjs
verify-default-nav-ui.cjs
verify-design-ui.cjs
verify-download-gui.cjs
verify-extension-ui.cjs
verify-fabric-api-install.ts
verify-gallery-favorites-118-ui.cjs
verify-gallery-favorites-ui.cjs
verify-games-gui.cjs
verify-glass-startup.cjs
verify-import-routing-119-ui.cjs
verify-install-concurrency-ui.cjs
verify-instance-center-ui.cjs
verify-kamu-logo-119-ui.cjs
verify-kamu-motion-diagnostic-119.cjs
verify-license-preview.cjs
verify-mac-extra.cjs
verify-mac-game.cjs
verify-mac-tools.cjs
verify-mac-update.cjs
verify-mac.cjs
verify-mascot-header-ui.cjs
verify-migration-live.cjs
verify-mod-icons-ui.cjs
verify-mod-migration-ui.cjs
verify-native-blur.cjs
verify-navigation.cjs
verify-nested-modpack.cjs
verify-packaged-mod-worker.cjs
verify-packaged-windows-ui.cjs
verify-pcl-import-119.cjs
verify-portable-path.cjs
verify-portable-startup.cjs
verify-release-1054.cjs
verify-release-payload.cjs
verify-resource-drop-ui.cjs
verify-resource-network-ui.cjs
verify-selection-ui-119.cjs
verify-skin-editor-ui.cjs
verify-skin-palette-ui.cjs
verify-skin-surfaces-ui.cjs
verify-source-archive.cjs
verify-startup-framerate.cjs
verify-system-download.cjs
verify-terracotta.cjs
verify-theme-roundtrip.cjs
verify-transfer-ui-1067.cjs
verify-ui-refinement.cjs
verify-ui-system.cjs
verify-unified-startup.cjs
verify-visual-editor.cjs
verify-voxlink-gui.cjs
verify-voxlink-live.cjs
verify-window-controls.cjs
verify-window-presentation.cjs
verify-windows-package.cjs
verify-windows-runtime.cjs
verify-workbench-1054.cjs
```

</details>

### ClientID

作者在试图用 `find` 查找涉及 ClientID 的文件时惊奇地发现没有任何文件名里和认证/登录/正版/Mojang等关键词扯上关系。
然后作者再次尝试用 `ripgrep` 终于恍然大悟因为这个三口人作者显然不知道它的 AI 把这个窃取而来的 ID 光明正大地写到了类型定义里：

```plain
eco@EC-xx ~/P/KAMUCL (main)> rg DEFAULT_MS_CLIENT_ID
src/shared/types.ts
945:export const DEFAULT_MS_CLIENT_ID = 'c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb'

src/main/core/settings.ts
18:  DEFAULT_MS_CLIENT_ID,
56:    msClientId: DEFAULT_MS_CLIENT_ID,
```
> funniest ai slop ever

### 跨平台原生

然后作者发现有一个几乎从来不会在什么跨平台应用尤其是使用电子平台的项目里出现的 `native` 目录，于是带着浓厚的好奇心进行了列出文件：

```plain
eco@EC-xx ~/P/KAMUCL (main)> ls native -1
󰌛 GameWindowFocus.cs
 MacGameWindow.swift
󰌛 StartupFeedback.cs
󰌛 WindowMaterial.cs
```

很显然这个三口人先生也许可能压根真的不知道有 Linux Gamers 这个群体或者连 Linux 都没听过毕竟很显然他给 AI 的许愿清单里面只包含 Windows 和 macOS 。

### 我不知道项目在干什么！

然后作者又发现这个项目里面还有一个 `CURRENT_STATUS.md` 。也许可以借此了解三口人先生对项目的了解情况。

<details>
<summary>此处查看 `CURRENT_STATUS.md` 全文</summary>

```md
# CURRENT STATUS

## Identity

- Project: KAMUCL。
- Version or revision: 1.1.8，基于1.1.7 db54f58；最后产品构建提交83ba094，后续仅更新验证脚本与交付文档。
- Status timestamp: 2026-10-02 15:44（Asia/Hong_Kong）。
- 本批列明范围的实现与功能验证完成；公开发布及附件核对由发行脚本执行。
- Build command: npm run build；源码复验依次执行npm ci、node scripts/build-bridge.cjs、npx tsc --noEmit、npm run build、node scripts/check-licenses.cjs。
- Build result: 生产构建与最终源码干净解压构建均通过，全部命令退出码0，868个源码文件摘要保持不变。
- Test/validation commands: npm test；npx tsc --noEmit；node scripts/check-licenses.cjs；node scripts/verify-windows-package.cjs；node scripts/verify-source-archive.cjs；原生Mac流程见.github/workflows/mac-build.yml。
- Validation results: 629/629测试通过；Windows便携包与三主题GUI、双架构Mac APP/DMG及真实Minecraft26.2功能验证通过；Intel原始录屏benchmark未达30fps，主观听测与真实账号/在线Mod安装未覆盖。
- Finished artifact: KAMUCL-1.1.8.exe，以及下面列明的Windows ZIP和双架构Mac DMG/ZIP。
- Artifact SHA256: 1eae5169245c4c7095cd8ba4fbb46b59e86942ad6c601c7502aae0f97b494c10；其余成品摘要见下表。

## Last verified state

629项测试、类型、生产构建、许可证、Windows便携包及三主题GUI、原生双架构Mac APP／DMG及Minecraft26.2功能检查通过。原生录屏benchmark分别记录于发行报告，仍有未达目标项，不能称性能全部通过。固定证据仅来自 Final-Settled-*；Windows最终EXE SHA256：1eae5169245c4c7095cd8ba4fbb46b59e86942ad6c601c7502aae0f97b494c10。七人硬件Stage合并为1次GL绘制，软件环境使用逐像素深度Canvas2D单次上传；504三角面完整保留，几何／UV／法线保持，软件光照为哑光近似。独立视觉／交互逻辑／动效画面评分分别9.0／9.1／9.0。详细实际证据、文件SHA256、覆盖层级和命令见 docs/RELEASE_1.1.8.md。最终源码解压构建和交接复验记录随交接包提供。

## Finished artifact SHA256

| 文件 | 字节数 | SHA256 |
| --- | ---: | --- |
| KAMUCL-1.1.8.exe | 97279794 | `1eae5169245c4c7095cd8ba4fbb46b59e86942ad6c601c7502aae0f97b494c10` |
| KAMUCL-1.1.8-windows-x64.zip | 97311363 | `0c661505fdd3e0317a74716dddf030070c3e8c0c188492da90d6b11f22700713` |
| KAMUCL-1.1.8-windows-x64-unpacked.zip | 143043471 | `bdf6f7b64f03b0c2a8144911ed40db269fa68455a47cc3f2b18b948b409b5c0e` |
| KAMUCL-1.1.8-mac-arm64.dmg | 108654258 | `1599eb47d8065874e0befd43a228942f00a40fbe206172a7506eead388aeae68` |
| KAMUCL-1.1.8-mac-arm64.zip | 100148696 | `72c3d0d62da7471a5652754676702be76e8c9e0097cd6d60750915aba6f9541d` |
| KAMUCL-1.1.8-mac-x64.dmg | 115859912 | `ef5f19bf0e3874b89bcb32b1c0826949ed5a9ec59013864c78d5bed604f6c120` |
| KAMUCL-1.1.8-mac-x64.zip | 106288716 | `2baf9ebcf36234e6f0edefca56a4dab6d3b86e8c1fee72358d99493b07fc8cc2` |

以上为七个已验收成品；源码 ZIP 与交接包包含本文件，摘要记入外部 SHA256SUMS，避免自引用。

## Completed

皮肤编辑布局、手势与关闭流程，七人回望姿态、全身拍打与走位，混合图片管理和社区收藏集中管理已实现。本轮补齐Intel实际模型就绪/焦点观测、真实游戏及工具执行证据，独立评分、历史失败记录和覆盖报告均已归档。实现与最终成品一致，后续测试脚本和文档的提交差异已说明。

## Remaining

发行流程仍须完成交接ZIP的全新解压验证、外层SHA256清单、公开Release及远端提交/标签/附件核对；这些结果以交接外部审计和公开Release为准。下面未覆盖的人工及真实服务验收继续保持未覆盖，不因本批发行改写为通过。

## Known issues and risks

硬件主观听测、真实微软上传、真实在线收藏模组下载安装未验收；可信CDP走位遮挡端点保持未定。实例图片优先仅源码核对，无专门GUI断言。Mac三主题完整遍历未实跑，Mac无Developer ID签名／公证。小屏模型与调色工具需滚动切换。保留功能的公网NAT、工单等原边界继续保留，不能称本批全部验收已通过。

## Recommended next action

按START_HERE.md核对SHA256并运行成品；后续实际账号、真实在线安装和人工音效听测逐项记录。master／main保留独立历史，不操作wuhui；Release标签与master及附件摘要须以公开远端核对结果为准。
```

</details>

显然这是 AI 根据一个不知道哪来的模板（甚至是英文模板）进行的稀便生成并且三口人先生可能根本没看过甚至不知道自己的项目里有这么一滩稀便。

### 为什么不直接让 AI 写机器码

如果纵览全部代码你就会发现整个狗屎堆充斥着各种大小不一的羊屎蛋[^overall-1]，这说明三口人先生使用的 Agent 可能远没有 Claude 那么聪明只能因为他甚至不会在发布时进行格式化。

然后思考代码目录结构你就会发现这个三口人先生连目录都不会看因为他的低能 Agent 能把一个 `src` 拆成三个目录而三口人先生完全没有感觉。

然后正当作者疑惑为什么代码里包含这么多 `pcl` `PCL` 难道是想和 `Plain Craft Launcher` [^pcl2] 杂交但是没有任何注释能解释这一点时，作者突然发现！`FEATURE_AUDIT.md` 里面正是使用瓜皮龙猫[^meloong]的 PCL 官方版和 PCL 社区版进行功能大对决。

然后作者把 `FEATURE_AUDIT.md` 翻到最底下惊奇地发现这个东西进行功能对战还没完成的时候就被永久暂停了。也许这位试图挽救仓库的 Agent 的轮奸[^agent-iter]时限[^rate-limit]到了。

[^overall-1]: 羊屎蛋：此处代指代码文件。大小不一指各个文件之间的编码规范、代码风格均不相同。

[^pcl2]: PCL：指 [Plain Craft Launcher 启动器](https://meloong.com/PCL)。

[^meloong]: 瓜皮龙猫：指 PCL 启动器的官方作者龙腾猫跃和他的[瓜皮龙工作室](https://meloong.com/)。

[^rate-limit]: 轮奸时限：指 Coding Plan 的单位时间额度限制。

### MIT

最后查看许可证时作者原本不抱期望但这个项目竟然使用 [MIT 许可证](https://www.wikiwand.com/en/MIT_License)！这导致作者的睾丸被吓爆一颗。[^balls]

可能三口人先生期待有什么其他社区大能可以接受这个项目给它擦屁股但显然不会因为这个项目里没有任何一个字节是人类能够阅读的。或者三口人先生根本不知道什么许可证毕竟它是阴唇网站[^blbl]大大大博主，所以 AI 为了上传到 GitHub 自己挑了一个许可证。

然后作者现在必须[睡觉](https://www.wikiwand.com/simple/Sleep)[^sleep]来减轻这个美味狗屎项目对作者的人类[神经系统](https://www.wikiwand.com/en/Nervous_system)造成的冲击。

[^balls]: 睾丸被吓爆一颗：出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。

[^sleep]: 睡觉：是具有[神经](https://www.wikiwand.com/en/Neuron)的生物的生理活动的一部分。睡觉的起源可追溯到[刺胞动物门](https://www.wikiwand.com/en/Cnidaria)。当然由于三口人或者 AI 或者三口人的狂热追随者看上去都不是具有神经的生物所以他们不需要睡觉。

## 抛开狗屎不谈

本节内容是需要特别说明的，因为上文中对 KAMUCL 这一精品狗屎的论述不可避免的在误伤了某些本不应该被如此对待的主体或者放过了某些需要被如此对待的主体。下面是主体列表。

* **XMCL** ： [XMCL](https://xmcl.app/zh/) 是同样基于 Electron 的自由的 Minecraft 启动器。其出现时间远比 AI 编程大潮要早。也正因如此 XMCL 没有变成一个狗屎项目。尽管相对原生开发的启动器比如 HMCL 来说其各项指标都没有突出优势，但这些问题的主要原因是他是一个 Electron 项目。

* **Claude** ： Claude 作为目前 AI 领域前沿的闭源模型，其智力程度相当高（至少超出了三口人先生[^three-mouth]）。作者认为 Claude 能写出这样一份精品狗屎是三口人先生实在不知道应该怎么描述他想要的东西。

* **测试人员** ： 抛开本精品狗屎项目的睁眼瞎测试者来说，测试人员是非常辛苦且高尚的，毕竟大部分时间他们都要面对一份狗屎哪怕不是那么精品。如果您感到被冒犯，请允许作者向您致歉，您实际上不包含在上文所批判的主体的范围内。

* **Agentic Coding** ： Agentic Coding 是 AI 开发的当前最佳答案。开发者担任架构师的职责，负责指挥 AI 进行构建、修改、测试等。而 Wish Coding 不过是一群[提示词小子](https://undercodetesting.com/from-script-kiddie-to-prompt-kiddie-how-ai-is-democratizing-cyber-threats-and-what-you-must-do-now-video/)自以为是的表演。

* **忘记取关卡慕SAMA的人** ： 非常抱歉，因为您实际上不属于狂热追随者，这仅是因为一个疏忽造成的。如果您感到被冒犯，请允许作者向您致歉，您实际上不包含在上文所批判的主体的范围内。

* **Forbric** ： 精品大狗屎。关于 Forbric 的技术含量、 Forbric 的实际表现可以查看 Forbric 仓库的 Issue#24 、 Issue#39 、 Issue#59 。

最后一点是你可以去阅读[作者让 AI 写的比 KAMUCL 精品一万倍的精品小狗屎 Ngwg](https://0xarch.codeberg.page/posts/fewu/yet-again/) 。作者的其他项目不是 AI 写的所以不在此处丢人现眼。
