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

* 非常抱歉，您至少需要[中国高中毕业学历](https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%B0%91%E6%95%99%E8%82%B2%E5%AD%A6%E5%8E%86/64825441)或更高学历或同等学历才能充分理解本文章。若您不具备足以获得学历的所有知识，可能会在阅读过程中感到疑惑。

**您已经被充分警告过了**。下面是正文。

## 狗屎状态

如果读者不知道 KAMUCL 是什么东西可以先观看[这个](https://www.bilibili.com/video/BV11nHZ68EVs)由未知[物种](https://www.wikiwand.com/en/Species)的[三口人作者](https://space.bilibili.com/9596327)[^three-mouth]制作的视频。
对于作者而言这个 KAMUCL 的社区地位堪比超级 AI 大狗屎 [Forbric](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader) 。

由于这个三口人不知道为什么把仓库删了[^repo-del]所以我不能引用包含美味小狗屎源代码的 GitHub 仓库。
值得一提的是[这个仓库](https://github.com/YUN-SAN3/KAMUCL)看起来包含了跑路前的所有源代码，不过由于仓库托管人看起来是个全新机器人账号[^robot0]唯一一个 commit 还导致 [Actions](https://github.com/actions) 爆炸了所以作者不对这个仓库的可用性抱有任何期望。

[^repo-del]: 也许是在被社区广泛批评后原作者的 GitHub 账号 kamubaba-i 删除了或私有化了原来的仓库，现在原地址无法访问。

[^three-mouth]: 三口人：指作者“卡慕SAMA”。该创作者曾使用一个长着三张嘴的恶俗P图作为头像并广为流传。

[^robot0]: 机器人账号：指[该账号](https://github.com/YUN-SAN3/)除了 KAMUCL 仓库之外只有一个 `YUN-SAN3.github.io` 仓库并且里面放的是一个[不知名小众组织的官网](https://YUN-SAN3.github.io)。

## 发现基础狗屎问题

尽管这个项目顶着一个 **✦ 简约、开箱即用的 Minecraft Java 启动器 ✦**[^slogan] 的名头但实际上其完全是一坨使用了[电子平台](//github.com/electron/electron)的小狗屎。

[^slogan]: 原文如此。作者相信任何一个[人类](https://www.wikiwand.com/en/Human)都不会在[一个以作品质量为核心准则的圈子](https://github.com/community)里给自己的 README 加上犹如屎上雕花的`✦`符号。

读到这个项目的 README 的第 1 个普朗克时间[^plc]作者就充分意识到这是一个许愿式编程[^wish-coding]项目并且三口人完全没有触碰过任何[开源项目](https://www.wikiwand.com/en/Open_source)哪怕是阅读其他项目的 README 因为他的 README 读起来就像一滩被 AI 拉出来然后又被 AI 反反复复打磨插花的稀便。而且作为一个使用了[电子平台](//github.com/electron/electron)的项目竟然连 Linux[^linux] 都不支持。

[^wish-coding]: 许愿式编程：即 Wish Coding 。开发者（通常没有任何知识基础）将自己的愿景告诉 AI ，由 AI 自己搞定从架构到底层的所有内容。通常开发者也不会审阅 AI 代码因为他们没有能力这么做。

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

也许只有[睾丸](https://www.wikiwand.com/en/Testicle)只有一颗的男性兽交爱好者[^furry]会在一个即将被大众审阅的项目里塞这么一坨不明所以的[高尔夫代码](https://www.wikiwand.com/en/Code_golf)。
所以很明显这个项目的作者压根没有和任何代码打过交道而是订阅了 Claude Max 然后力大砖飞开始循环迭代模式[^ref-claude]等到跑完打开产物录几个视频就认为自己是启动器界的马斯克[^elon-musk]。

另外不难发现这个所谓的脚本只是让命令从 Shell 进入 NodeJS 然后又进入 Shell 。而且这个文件以及所有脚本文件甚至是 [CommonJS](https://baike.baidu.com/item/CommonJS/1206163) 并且值得注意的是这是 2026 年的项目而不是 2016 年[^esm]。

[^furry]: 兽交爱好者：指有[恋兽癖](https://baike.baidu.com/item/%E6%81%8B%E5%85%BD%E7%99%96/10283237)的人。[兽迷(Furry/Furries)](https://baike.baidu.com/item/%E5%85%BD%E8%BF%B7/6249797)不在此列。

[^ref-claude]: 订阅了 Claude Max 然后力大砖飞开始循环迭代模式：该比喻出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。Forbric 作者曾经非常自豪地宣布自己购买了 Claude Max 20x 并宣布所有没有买 Claude 却评价它的项目的人是傻逼。

[^elon-musk]: 马斯克：指[伊隆·马斯克]((https://www.wikiwand.com/en/Elon_Musk))。此处用于嘲讽三口人先生对项目完全不了解，毕竟马斯克作为世界前列人物还经常实地探访产线。

[^esm]: ESModule 标准于 2015 年加入 JavaScript 规范。

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

是的，上面就是这个许愿式编程的核心部分的**所有内容**。非常难以想象一个也许是塞入了一百个功能的超级启动器的核心只是一个怎么交付产品的工作流。

也许是作者从来没接触过什么[编程](https://www.wikiwand.com/en/Computer_programming)也不知道自己需要什么或者患有[失语症](https://www.wikiwand.com/en/Aphasia)于是让 AI 自己给自己写提示词然后 AI 琢磨半天发现作者压根没提出任何有技术含量需求只能含泪憋出几句废话来装作它听懂了。

另外这个提示词里面那个仓库已经非常神奇的[消失了](#狗屎状态)所以实际上 AI 拿到这个 `AGENTS.md` 的第一步也就是检查仓库状态就无法完成。这意味着实际上 `AGENTS.md` 的有效提示词字符数是 `0` 因为 AI 什么都做不了。也许是 AI 突然想通了于是大发慈悲的删除了仓库以防止更多的普罗大众吃到新鲜美味的狗屎。

>实际上确实是什么都做不了因为如果你看过删库前的 releases 你就会发现版本号完全是一大坨狗屎的排列组合并且和里面写的这个百进制版本号一点关系没有纯粹是三口人想到什么就写什么。

## 拆解狗屎大仓库

作者在尝试把这个仓库克隆到本地的时候发现流量正在飞速流逝于是迅速切断了传输，然后打开在线仓库查看问题。
然后发现问题是这个文档目录里面全都是 AI 自己跑测试截的图。[^sc-fix]
很显然三口人先生连自己打开半成品看一眼的耐心都没有而是想办法让 Claude 玩 《我的手艺》[^minecraft]。

[^sc-fix]: 截止至文章更新时，[唯一能访问的仓库](https://github.com/YUN-SAN3/KAMUCL/)已经不包含这些狗屎中的大部分。镜像仓库的大小（`git clone` 后）为 52.7MiB 。

[^minecraft]: 《我的手艺》：是对沙盒游戏 Minecraft 的非官方直译。出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。

然后是作者在历经千辛万苦下载的仓库里粗略审计代码的过程中发现代码中 90% 的组成部分都是彩蛋功能，甚至有专门为彩蛋写的 3<sup>e</sup>D 高级界面。

这个狗屎项目的源代码中真正用来干发射[^launch]游戏功能的代码可能只占着整个代码库大小的 10% 然后作者可能花费了阿伏伽德罗数[^avoc]个 Token 让各种 Agent 轮奸[^agent-iter]仓库才制作出来这么一坨包着彩蛋的惊天大屎。

[^launch]: 发射：对“启动”的原词“launch”的偏差翻译。

[^avoc]: 阿伏伽德罗数：6.02214076×10<sup>23</sup>

[^agent-iter]: 轮奸：在此处代指由多个 Agent 在互不交流的情况下对同一个仓库进行反复开发。此行为常导致编码混乱、架构不完整等问题。

## 鉴赏大狗屎界面

然后作者尝试运行时才想起来三口人先生根本没想到有人会在 Linux 上运行精品狗屎而[拒绝为 Linux 编译](#发现基础狗屎问题)而作者也不想手动破坏这坨精美的插花作品[^modify]于是只能引用[另一位敢于以身试毒的勇士](https://cubk.cn)的[使用体验](https://cubk.cn/articles/evaluate-kamucl)来表述作者的意思。读者可以直接点击那个`使用体验`链接然后欣赏 KAMUCL 的惊天大狗屎 UI 。

[^modify]: 手动破坏这坨精美的插花作品：指修改构建脚本。精美的插花作品：指 KAMUCL 。

虽然作者不能亲身品鉴但在看到勇士先生[^mr-courage]的文章图片的第1个普朗克时间[^plc]作者就充分发现这个发射器的 UI 是典型的 AI 完全主导因为整个发射器充斥着诡异的<span style="color: #755DBB">基佬紫</span>配色还有一个超级<span style="font-size: 150%; text-wrap: nowrap">大</span>按钮放在首页告诉你这个软件可以发射游戏。然后左侧看起来是一个试图模仿 [流体微小软件设计](https://fluent2.microsoft.design/) 的经典 AI 侧栏，右下角还贴心地列出了睁眼瞎名单[^testers]。

[^mr-courage]: 勇士先生：即前文提到的 [另一位敢于以身试毒的勇士](https://cubk.cn) 。下文同。

[^testers]: 软件中展示的是测试者名单。不过显然这个漏洞满天飞的发射器根本没有被人[测试](https://www.wikiwand.com/en/articles/Test_first)过或者测试者也只是找了几个 [Harness](https://www.wikiwand.com/en/Agent_harness) 客户端打开 Computer Use 让 AI 自己玩《我的手艺》。在此谨以“睁眼瞎”做总结。

然后来引用一下勇士先生的部分文本。此处的文本依照原授权模式(CC-BY 4.0)展示。[^llm]

> 然后很显然作者的溜溜梅智力堪比一根成年的[香蕉](https://zh.wikipedia.org/zh-hans/%E9%A6%99%E8%95%89)，或者作者患有[语言失能症](https://zh.wikipedia.org/wiki/%E5%A4%B1%E8%AF%AD%E7%97%87)所以无法表达"hover"这个词所以他一辈子都无法向他的溜溜梅描述这个问题，这个UI里的几乎所有按钮的hover判定都有问题，要不就是上半部分无法选中要不就是某一侧无法选中就像作者的妈妈生他时候可能生了一半[大脑](https://zh.wikipedia.org/zh-hans/%E5%A4%A7%E8%84%91)落在了[子宫](https://zh.wikipedia.org/wiki/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD)里一样。

[^llm]: 溜溜梅：勇士先生的原文章中出现的名词。由于 LLM 是溜溜梅（Liu-Liu-Mei）的首字母，且[溜溜梅公司的股票代码正是 LLM 导致溜溜梅公司股票莫名疯涨](https://finance.sina.com.cn/roll/2026-06-15/doc-inicnuhr8240786.shtml)。后来溜溜梅便被用作对大语言模型的指代。 

另外根据勇士先生的观察和一些[神奇的类型定义代码](#ClientID)可以发现这个三口人甚至不会使用 [互联网](https://www.wikiwand.com/en/Internet) 或者让他的双亲教他使用互联网于是它直接把自己伪装[^prism-id]成 Prism Launcher 来实现认证功能。下文为引用的勇士先生的部分文本。此处的文本依照原授权模式(CC-BY 4.0)展示。[^chromium][^vscode]

> 最令人[蒙古](https://zh.wikipedia.org/wiki/%E8%92%99%E5%8F%A4%E5%9B%BD)的是虽然项目自身是一个他妈的[Electron](https://www.electronjs.org/)编写的狗屎，并且文件高达100MiB甚至90MiB，并且包含完整的[Blink、V8、Skia、Angle](https://cubk.cn/.org/chromium-projects/)意味着可以渲染世界上任何一个能在前端渲染的东西比如[Microsoft](https://zh.wikipedia.org/zh-hans/%E5%BE%AE%E8%BD%AF)[Vs](https://zh.wikipedia.org/zh-hans/%E4%B8%96%E7%95%8C%E5%A4%A7%E6%88%B0)[code](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A0%81)甚至是[Firefox](https://developer.puter.com/labs/firefox-wasm/)，但是作者及其高级的大脑还是决定给登录做成了你需要手动打开外置浏览器因为他不仅不会利用程序内的浏览器来渲染，甚至都不会自动帮你拉起一下浏览器，
> 
> 甚至作者都懒得自己去[申请一个ClientID](https://learn.microsoft.com/en-us/answers/questions/5956554/how-to-create-a-client-id-and-client-secret-for-ap)直接窃取了[Prism Launcher](https://prismlauncher.org/)的ClientID。

[^prism-id]: 伪装：含蓄表达。实际上 KAMUCL 直接窃取了 Prism Launcher 的 ClientID 。

[^chromium]: Blink、V8、Skia、Angle：是 Chromium 项目的组成部分。勇士先生可能不小心把链接打错了，实际上应该是 <https://www.chromium.org/chromium-projects/> 。

[^vscode]: MicrosoftVscode: 指 [Microsoft VS Code](https://code.visualstudio.com/) 。因社区中某些~~小傻逼们~~低龄人士~~压根没接触过IDE然后~~类比于`Plant vs Zombie`于是把`Microsoft VS Code`翻译为`微软大战代码`于是产生此说法。

然后在作者尝试搜寻原仓库的时候发现这个仓库竟然有高达 147 个 star 。作者合理怀疑这是由于三口人在 [阴唇网站](https://bilibili.com/)[^blbl] 上有高达 262.7 万狂热追随者[^follower]于是这 262.7 万狂热追随者里面为数不多的 146 个知道 GitHub 的追随者立刻注册了 GitHub 然后专门找到这个美味狗屎项目并 star 之以表示自己愿意吃下三口人先生的所有排泄物。剩下的 1 个 star 可能是三口人先生自己点的。

[^blbl]: 阴唇网站：由于 Bilibili 中的 `Bi` 谐音 `逼` ，而这个字在中文语境中可指代女性阴部，并且 Bilibili 曾经因为 AI 审核不认识[阴唇](https://handwiki.org/wiki/Biology:Labia)而把一个包含女性阴部实拍图的图片公开到评论区于是荣获此称誉。

[^follower]: 262.7 万只狂热追随者：262.7 万指 Bilibili 粉丝数。由于 Bilibili 上的 Minecraft 中文主播催生的[饭圈化](https://baike.baidu.com/item/%E9%A5%AD%E5%9C%88/8627336)严重，不适合称其为粉丝。

## 使用显微镜观察狗屎

下面这一坨是作者在休息之后再次查看美味狗屎源代码之后发现的恶臭狗屎列表。

### Verify<sup>60</sup>

脚本目录里有一个专门的脚本用来验证三口人标志是否被正确使用了，还有另外十数个脚本专门用来验证某个狗屎功能正常工作。没有任何一个[大脑](https://zh.wikipedia.org/zh-hans/%E5%A4%A7%E8%84%91)正常的人类开发者会把这一大坨 [OpenQA](http://open.qa/)-like 的东西写在脚本里而不是测试里所以这是 AI 写的。

<details>
<summary>此处查看所有验证脚本</summary>

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

> funniest ai slop ever

### ClientID

然后作者在试图用 `find` 粗略查找涉及 ClientID 的文件时惊奇地发现没有任何文件名里和认证/登录/正版/Mojang等关键词扯上关系。
然后作者再次尝试用 `ripgrep` 终于恍然大悟因为这个三口人用的 AI 把这个窃取而来的 ID 写到了类型定义里。

很显然当时担任[神偷奶爸](https://www.wikiwand.com/en/Despicable_Me)的 AI 并没有智能到可以在三口人先生没有明确告知可以新增[文件](https://www.wikiwand.com/en/Computer_file)的情况下新增文件于是只能憋屈地把偷来的 ClientID 写在这个类型定义里。

<details>
<summray>涉及 ClientID 的文件。</summray>

```plain
eco@EC-xx ~/P/KAMUCL (main)> rg "CLIENT_ID|ClientID"
src/shared/types.ts
945:export const DEFAULT_MS_CLIENT_ID = 'c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb'

src/main/core/settings.ts
18:  DEFAULT_MS_CLIENT_ID,
56:    msClientId: DEFAULT_MS_CLIENT_ID,
eco@EC-xx ~/P/KAMUCL (main)> rg -i "(CLIENT_ID|ClientID)"
tests/voxlink-replacement.test.ts
20: const api={async post(_base:string,route:string,data:any){switch(route){case '/room/create':return{...room,hostToken:'host-token',expiresIn:600};case '/room/join':queues.host.push({from:'guest',type:'join_request',data:{clientCapabilities:['punchAuthV1']},timestamp:Date.now()});return{room,clientToken:'guest-token',clientId:'guest'};case '/room/leave':left++;return{};case '/signal/send':queues[data.to==='host'?'host':'guest'].push({from:data.isHost?'host':'guest',type:data.type,data:data.data,timestamp:Date.now()});return{};case '/signal/poll':return{s:queues[data.isHost?'host':'guest'].splice(0),ts:Date.now()};case '/room/heartbeat':return{heartbeatInterval:5,currentPlayers:2};default:throw new Error(route)}},async get(){return{}}}

src/shared/types.ts
394:  /** 微软登录用的 Azure 应用 client_id（device code flow） */
395:  msClientId: string
942: * 默认微软登录 client_id：Prism Launcher 注册的公开 Azure 应用，
945:export const DEFAULT_MS_CLIENT_ID = 'c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb'

tests/resource-network-1046.test.ts
82:  let room:any={code:'ABCDEF',token:'secret',clientId:'guest',isHost:false,hostPort:0,hostAuth:true},allocated:(v:any)=>void=()=>{},releases=0,connected=0

tests/diagnostics.test.ts
20:    '--accessToken mc-access-token --clientId client-secret --username Player',

scripts/debug-launch.mjs
112:  clientid: '',

docs/launcher-integration.md
227:| 请求体 | `{roomCode, clientId, token, nodeId}` |
232:- **房主没有 clientId**：房主侧 clientId 允许为空串，服务端派生 `clientID = "host-" + roomCode`、
233:  用 hostToken 鉴权归属。启动器房主侧**不要**伪造 clientId，也不要在客户端预检 clientId 非空
237:- 限频：与 `/relay/allocate` 同桶，**每 ip+clientId 每分钟 6 次**；超限拿 `RATE_LIMITED`
310:| turn_alloc | guest→host（仅房客可发） | std 变体：`stdTurn:true, nodeId, nodeHost, stdTurnPort, relayHost, relayPort, clientId, punchAuth`；v1 变体：`sessionId, host, port, ticket, expire, clientId, punchAuth` |
311:| turn_ready | host→guest（仅房主可发） | std 变体：`stdTurn:true, relayHost, relayPort, clientId`（host 的 relay 地址）；v1 变体：`clientId` |
312:| turn_nack | host→guest | `clientId, reason`；reason 枚举：`direct_won` / `bad_alloc` / `std_cred_failed` / `std_alloc_failed` / `std_bind_failed`（v1 路径另有 `bind_failed`） |
340:| cred 端点超时 | 5000ms（服务端限频 6 次/分/ip+clientId） |
442:8. 房主侧强制 clientId 非空 → host 侧 stdTurn 一次都走不通（§4.2，修过的 bug）；

src/main/core/accounts.ts
31:/** client_id 统一走 consumers 租户（默认 Prism 公开应用 / 用户自注册应用均为该租户） */
32:function msAuthBase(_clientId: string): string {
453:  const clientId = getSettings().msClientId
458:    const t = await postForm(`${msAuthBase(clientId)}/token`, {
459:      client_id: clientId,
489:  const clientId = getSettings().msClientId
490:  const dc = await postForm(`${msAuthBase(clientId)}/devicecode`, {
491:    client_id: clientId,
533:  const t = await postForm(`${msAuthBase(getSettings().msClientId)}/token`, {
534:    client_id: getSettings().msClientId,

scripts/verify-voxlink-live.cjs
10: const x=new RudpConn(a.socket,a.target,{codec:a.codec,authKey:derivePunchKey(host.code,guest.clientId),ownsSocket:false,allowTurnAuthDowngrade:true}),y=new RudpConn(b.socket,b.target,{codec:b.codec,authKey:derivePunchKey(host.code,guest.clientId),ownsSocket:false,allowTurnAuthDowngrade:true});transports.push(x,y);x.start();y.start();const payload=crypto.randomBytes(5000),buffer=Buffer.alloc(6000);let size=0;
16:  guest=await api.post(base,'/room/join',{code:host.code,loader:'fabric',gameVersion:'1.20.1',clientType:'app',clientTag:'kamucl',clientProtocolVersion:7,clientCapabilities:caps,idempotencyKey:crypto.randomUUID()});assert(guest.clientToken&&guest.clientId);proof.roomJoined=true;
18:  const hc=await fetchTurnCredential(api,base,{code:host.code,clientId:'',token:host.hostToken},String(node.id),signal),gc=await fetchTurnCredential(api,base,{code:host.code,clientId:guest.clientId,token:guest.clientToken},String(node.id),signal);
20:  allocation=await api.post(base,'/relay/allocate',{roomCode:host.code,clientId:guest.clientId,token:guest.clientToken,nodeId:String(node.id)});
25:  if(allocation)try{await api.post(base,'/relay/release',{roomCode:host.code,clientId:guest.clientId,token:guest.clientToken,sessionId:allocation.sessionId});proof.cleanup.push('legacy allocation released')}catch{proof.cleanup.push('allocation release failed; server TTL fallback')}

src/main/core/diagnostics.ts
21:    .replace(/(--accessToken|--clientId|--xuid|--userProperties)\s+("[^"]*"|\S+)/gi, '$1 <redacted>')

src/main/core/launch.ts
579:    clientid: '',

src/main/core/voxlink/turnRelay.ts
14:interface RoomRef { code:string; token:string; clientId:string; isHost:boolean; hostPort:number; hostAuth:boolean; hostStdTurn?:boolean }
41:    void this.deps.api.post(this.deps.baseURL(),'/relay/release',{roomCode:link.room.code,clientId:link.room.clientId,token:link.room.token,sessionId},null).catch(()=>{})
75:        allocationData={stdTurn:true,nodeId:node.id,nodeHost:node.host,stdTurnPort:node.stdTurnPort,relayHost:link.std.relay.address,relayPort:link.std.relay.port,clientId:room.clientId,punchAuth:room.hostAuth}
77:        const allocation=await this.deps.api.post(this.deps.baseURL(),'/relay/allocate',{roomCode:room.code,clientId:room.clientId,token:room.token,nodeId:node.id},{},signal) as TurnAllocation
82:        allocationData={sessionId:allocation.sessionId,host:allocation.host,port:allocation.port,ticket:allocation.hostTicket,expire:allocation.expire,clientId:room.clientId,punchAuth:room.hostAuth}
96:      link.auth=room.hostAuth?derivePunchKey(room.code,room.clientId):null
152:        link.readyData={stdTurn:true,relayHost:link.std.relay.address,relayPort:link.std.relay.port,clientId:room.clientId}
156:        link.readyData={sessionId:data.sessionId,clientId:room.clientId}
159:      // Upstream sends the current authoritative clientId explicitly after reconnects.
160:      const auth=data.punchAuth===true?derivePunchKey(room.code,typeof data.clientId==='string'?data.clientId:from):null

src/main/core/settings.ts
18:  DEFAULT_MS_CLIENT_ID,
56:    msClientId: DEFAULT_MS_CLIENT_ID,
139:    // 迁移：旧版默认 client_id（Mojang legacy 应用，不支持 device code）→ 新默认
140:    if (c.msClientId === '00000000402b5328') c.msClientId = def.msClientId

src/main/core/voxlink/punchAuth.ts
6:export function derivePunchKey(code: string, clientId: string): Buffer | null {
7:  return code && clientId ? crypto.createHash('sha256').update('VOXLINK-PUNCH-AUTH-V1').update(code).update(Buffer.from([0])).update(clientId).digest() : null

src/main/core/voxlink/stdTurn.ts
68:export async function fetchTurnCredential(api:ApiClient,base:string,room:{code:string;clientId:string;token:string},nodeId:string,signal:AbortSignal):Promise<TurnCredential>{
69:  const data=await api.do(base,'POST','/relay/stdturn/cred',{}, {roomCode:room.code,clientId:room.clientId,token:room.token,nodeId},AbortSignal.any([signal,AbortSignal.timeout(5000)])) as TurnCredential

src/main/core/voxlink/engine.ts
36:export interface JoinRoomResult {clientToken:string;clientId:string;room:RoomInfo}
41:export interface RelayCandidate {clientId:string;roomCode:string;natType:string;mappedIp:string;mappedPort:number}
46:  code='';token='';isHost=false;hostPort=0;hostIp='';clientID='';session:VoxlinkSession|null=null;room:RoomInfo|null=null
77:      room:()=>this.session?{code:this.code,token:this.token,isHost:this.isHost,clientId:this.clientID,hostPort:this.hostPort,hostAuth:this.isHost||!!this.room?.hostCapabilities?.includes('punchAuthV1'),hostStdTurn:!!this.room?.hostCapabilities?.includes('stdTurnV1')}:null,
341:      const auth=this.room?.hostCapabilities?.includes('punchAuthV1')?derivePunchKey(this.code,this.clientID):null
380:      if(this.isHost&&type==='relay_accept'&&typeof data.forClientId==='string'){
381:        const assignment=this.relayAssignments.get(data.forClientId)
383:        const relay=endpoint(data,'relay');if(!relay&&data.connected===false)return;await this.sendSignal('relay_notify',relay?{relayIp:relay.ip,relayPort:relay.port,connected:data.connected===true}:{connected:true},data.forClientId);return
448:    const [id,relay]=candidates[0];this.relayAssignments.set(requester,{candidate:id,at:Date.now()});await this.sendSignal('relay_setup',{targetClientId:requester,targetIp:target.ip,targetPort:target.port,punchAuth:!!this.links.get(requester)?.auth||this.turn.peerAuth(requester)},id);await this.sendSignal('relay_notify',{relayIp:relay.remote!.ip,relayPort:relay.remote!.port},requester)
452:    const targetId=String(data.targetClientId??'');if(!targetId||targetId.length>128)return
456:      await this.sendSignal('relay_accept',{forClientId:targetId,relayIp:link.mapped.ip,relayPort:link.mapped.port,connected:false},'host')
461:      const rc=link.rudp=new RudpConn(link.socket,target);rc.start();const stop=pumpRelay(host.rudp,rc);this.relays.add(stop);await this.sendSignal('relay_accept',{forClientId:targetId,connected:true},'host')
462:    }catch(error){if(epoch===this.generation){this.drop(id);await this.sendSignal('relay_declined',{forClientId:targetId},'host').catch(()=>{});this.deps.netLog('info','玩家中继探测未命中：'+(error as Error).message)}}
507:      await this.accept(epoch,code,result.clientToken,false,result.room,result.clientId)
521:  private async accept(epoch:number,code:string,token:string,isHost:boolean,room:RoomInfo,clientId=''):Promise<void>{
523:    this.room=room;this.state=isHost?'hosting':'in_room';const session=new VoxlinkSession({api:this.api,baseURL:()=>this.baseURL(),emit:(e,d)=>this.emit(e,d),netLog:(l,m)=>this.netLog(l,m)},{code,token,isHost});this.engine.clientID=clientId;this.engine.setState(this.state,code,token,isHost,room,session)
529:  async joinRoom(req:JoinRoomParams):Promise<JoinRoomResult>{const epoch=this.begin();this.joinPassword=req.password??'';this.joinEnvironment={loader:req.loader,gameVersion:req.gameVersion};try{const code=req.code.trim().toUpperCase();if(!validateRoomCode(code))throw new APIError('INVALID_PARAMS','请输入有效的六位房间码');const result=await this.requestJoin(code,req.password,this.operationController.signal);result.room={...result.room,code,isHost:false};await this.accept(epoch,code,result.clientToken,false,result.room,result.clientId);return result}finally{if(epoch===this.operation)this.pending=false}}
```

</details>

不难发现这些文件里面有 `-1` 个文件名与认证/登录/正版/Mojang有关系。

然后这个负责认证部分的 AI 他妈的不仅不会新建文件甚至不会换行或者缩进或者加空格。

### 跨平台原生

然后作者发现有一个几乎从来不会在什么跨平台应用尤其是使用电子平台的项目里出现的 `native` 目录，于是带着浓厚的好奇心进行了列出文件：

```plain
eco@EC-xx ~/P/KAMUCL (main)> ls native -1
󰌛 GameWindowFocus.cs
 MacGameWindow.swift
󰌛 StartupFeedback.cs
󰌛 WindowMaterial.cs
```

这再次证明了三口人先生也许可能压根真的不知道有 Linux Gamers 这个群体或者连 [Linux](https://kernel.org)[^linux] 都没听过毕竟这个目录可以精准地证明他给 AI 的许愿清单里面只包含 Windows 和 macOS 。

另外你为什么不放在 `src/native` 。

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

至于为什么叫做稀便不仅仅是因为这个东西到处充斥着风味人类文本[^human-flavored]更是因为上面标榜的什么 629 个测试全通过仅有什么什么不达标完全是[胡扯](https://www.wikiwand.com/en/Bullshit)因为[下面](#为什么不直接写机器码)提到的 `FEATURE_AUDIT.md` 里面记录的东西和这个 `CURRENT_STATUS.md` 完全对不上。然后你为什么要他妈的把交付产物的哈希放在状态报告里。

最后你可以注意到这个三口人甚至使用的是香港时区。有 114.514% 的几率它正在使用代理。

[^human-flavored]: 风味人类文本：指 AI 试图模仿人类风格失败而生成的文本，这些文本仍然有明显的 AI 生成特征。

### 为什么不直接写机器码

如果纵览全部代码你就会发现整个狗屎堆充斥着各种大小不一的羊屎蛋[^overall-1]，这说明三口人先生使用的 Agent 可能远没有 Claude 那么聪明只能因为他甚至不会在发布时进行[格式化](https://www.wikiwand.com/en/Programming_style)。

然后思考代码目录结构你就会发现这个三口人先生连目录都不会看因为他的低能 Agent 能把一个 `src` 拆成 `src` `native` `bridge` 而三口人先生完全没有感觉到这一点因为他不知道代码结构。

然后正当作者疑惑为什么代码里包含这么多 `pcl` `PCL` 难道是想和 `Plain Craft Launcher` [^pcl2] [杂交](https://www.wikiwand.com/en/Hybrid_(biology))但是没有任何注释能解释这一点时，作者突然发现 `FEATURE_AUDIT.md` 里面正是使用瓜皮龙猫[^meloong]的 PCL 官方版和 PCL 社区版与这个狗屎进行功能大对决！但是 `FEATURE_AUDIT.md` 翻到最底下惊奇地发现这个功能对战还没决出胜负的时候就被永久暂停了。也许这位试图挽救仓库的 Agent 的轮奸[^agent-iter]时限[^rate-limit]到了。

[^overall-1]: 羊屎蛋：此处代指代码文件。大小不一指各个文件之间的编码规范、代码风格均不相同。

[^pcl2]: PCL：指 [Plain Craft Launcher 启动器](https://meloong.com/PCL)。

[^meloong]: 瓜皮龙猫：指 PCL 启动器的官方作者龙腾猫跃和他的[瓜皮龙工作室](https://meloong.com/)。

[^rate-limit]: 轮奸时限：指 Coding Plan 的单位时间额度限制。

### 力量的许可

最后查看许可证时作者原本不抱期望但这个项目竟然使用 [MIT 许可证](https://www.wikiwand.com/en/MIT_License)！这导致作者的睾丸被吓爆一颗。[^balls]

可能三口人先生期待有什么其他社区大佬或者买了 Claude Max 20x 的傻逼[^raytr]可以接盘这个项目并给它擦屁股但显然不会因为这个项目里没有任何一个[字节](https://www.wikiwand.com/en/Byte)是人类能够阅读的。或者三口人先生根本不知道什么许可证更不知道有哪些许可证毕竟它是阴唇网站[^blbl]大大大博主而不是程序员，所以它直接让 AI 自己挑了一个许可证。

然后这个挑选许可证的 AI 也是一个狗屎小模型因为他选择了一个 MIT 许可证看上去完全不知道这个狗屎项目里面引用了 [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) 所以必须使用 [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) 发布。所以实际上三口人先生的作为已经构成违法因为 GPLv3 许可证有法律效力[^gplv3-law]并且他的香蕉 AI 显然没有能力也没有义务为它承担法律责任。

>根据实际检查，`licenses` 目录下共有 16 张许可证其中有 2 张分别为 GPLv3 和 LGPLv3 。其余为 MIT (-like) 许可。
>```plain
>eco@EC-xx ~/P/KAMUCL (main)> ls -1 licenses/
> adm-zip.txt
> GPL-3.0.txt
> iarna-toml.txt
> koffi.txt
> LGPL-3.0.txt
> minecraft-data.txt
> skinview-utils.txt
> skinview3d.txt
> three.txt
> undici.txt
> vue-reactivity.txt
> vue-runtime-core.txt
> vue-runtime-dom.txt
> vue-shared.txt
> vue.txt
> ws.txt
>```
>

然后作者打开了一个叫 `THIRD_PARTY_NOTICES.md` 的文章然后发出尖锐爆鸣声你都用 AI 写了你的 AI 怎么连`代码块`都不会加？整个文件完全是一大滩平铺在屏幕上的磷脂双分子层。

然后作者终于找到了这个项目里面为什么有 GPLv3/LGPLv3 因为他在 `THIRD_PARTY_NOTICES.md` 里面声明自己使用了 VoxLink:

```md

## VoxLink protocol integration — LGPL-3.0-only

Upstream: https://github.com/AUGUHDAR/VoxLink
Revisions: 6b11d930fe4fe568dacc8c47fa0e46e08fa4b110 (original protocol replacement),
721c7fae05851971996e49a3ad0e595d5aa9a053 (launcher-integration contract / 1.1.7 behaviors),
924845e897d8fb36dca2474ade30e675278559d0 (1.0.94 strict punching policy audit),
c475faa98cca16d4a2eeef4422c862c36091e1fc (1.1.6 standard TURN, tickets and 1.1.9 behavior audit).
Authors: AUGUHDAR / VoxLink contributors.

The adaptations of PunchAuth.java and TurnRelayClient.java are in
src/main/core/voxlink/punchAuth.ts and turn.ts. The replacement protocol runtime
in rudp.ts, punch.ts, session.ts and engine.ts uses the licensed Java
ReliableUdpTransport, SignalingClient, SignalingWsTransport and ConnectionManager
protocols. The 1.0.91 adaptations additionally include modsync.ts, modsyncService.ts,
tcpPunch.ts, turnTcp.ts and connectionLog.ts, based on the Java modsync package,
TcpHolePuncher, P2PBridge, TurnTcpChannel, PunchProfile/PunchTuner and LogUploadManager.
The 1.0.94 port additionally includes punchProfiles.ts, punchPolicy.ts, punchRounds.ts
and the StunProbe sequential sampling/resend portions of stun.ts. Unmodified Java
parameter fixtures under tests/fixtures/voxlink-924845e retain the same LGPL license.
The 1.1.6 changes additionally adapt StdTurnClient, TURN background/standby flows,
TicketClient and NatLabels in stdTurn.ts, turnRelay.ts, turnBackground.ts, tickets.ts
and src/shared/voxlinkNat.ts. Updated unmodified parameter fixtures are in
tests/fixtures/voxlink-c475faa9. The authoritative integration contract is
docs/launcher-integration.md at revision c475faa9.
These files are distributed under LGPL-3.0-only. Node lifecycle,
cancellation, HTTP fallback and UI reporting are KAMUCL changes.
The former app-desktop Go adaptations have been replaced; the Java license does
not establish authorization for that historical Go source.

Full terms: licenses/LGPL-3.0.txt and licenses/GPL-3.0.txt. Users may modify and
rebuild these portions and recombine them with the application. KAMUCL imposes no
restriction on reverse engineering for debugging such modifications.
Build instructions: docs/CORRESPONDING_SOURCE.md.

```

然后本来作者都打算关闭了突然发现里面蹦出来一个`The user`为什么声明里面有需要特指用户的内容？很显然这是负责写声明的 AI 一不小心把自己的思考过程喷射到声明里了：

```md

## Seven-character illustrations

The user supplied front/back character references. KAMUCL's transparent 2D
illustrations were generated from those references; capes were removed and
backs were completed. Derived animation layers are included in source. Character
and trademark rights remain with their respective holders; no affiliation is implied.

Vue/runtime packages, Three.js, @iarna/toml, adm-zip, koffi and undici:
complete license texts are retained in licenses/ and dependency packages.
Electron/Chromium notices remain alongside the executable in LICENSE and
LICENSES.chromium.html. Compile-only bridge dependencies are not embedded.

```

不知道这个 `Seven-character` 是什么东西可以回到[上面](#我不知道项目在干什么！)看 `CURRENT_STATUS.md` 。

### 我操，竟然有Linux

本来由于这个精品狗屎[连 Linux 打包都没做](#发现基础狗屎问题)作者以为这个项目和 Linux 没有半毛钱关系但是实际上 `ripgrep` 一下就会发现：

```plain
eco@EC-xx ~/P/KAMUCL (main)> rg -i linux -g=!package-lock.json
tests/game-exit-1064.test.ts
30:  assert.equal(observe(shutdown).classify(-8, false, 'linux'), 'abnormal')

tests/launch-reliability.test.ts
29:    const native = { libraries: [{ name: 'g:a:2', natives: { windows: 'natives-windows', linux: 'natives-windows', osx: 'natives-windows' }, downloads: { artifact: { path: 'a.jar', url: 'https://example.invalid/a' }, classifiers: { 'natives-windows': { path: 'native.jar', url: 'https://example.invalid/n' } } } }] }

tests/java-scan.test.ts
16:  assert.equal(javaHomeExecutable('java.home = /opt/jdk-21', 'linux'), '/opt/jdk-21/bin/java')

docs/diagnostics/launcher-auto-exit-and-modpack-crash.md
219:影响范围：`launch.ts` 的 spawn/日志/状态机、`ipc.ts` 的自动退出条件、应用退出生命周期与启动失败日志上下文。主要风险是 macOS/Linux detached 语义差异、日志丢失、手动停止失效及遗留进程。

src/main/core/javaSources.ts
4:export interface JavaTarget { major: number; os: 'windows' | 'mac' | 'linux'; arch: 'x64' | 'aarch64' }

src/main/core/gracefulClose.ts
88:// koffi 缺失/非 Windows 时回退 node spawn（macOS/Linux 子进程本就不随父进程退出而死）。

src/main/core/java.ts
297:    // Linux
891: * Windows 为 zip（adm-zip 解压）；macOS/Linux 为 tar.gz（系统 tar 解压）。
946:  return provisionJava({ major: need, os: IS_WIN ? 'windows' : IS_MAC ? 'mac' : 'linux', arch }, read, async pkg => {

src/main/core/versions.ts
65:  os?: { name?: 'windows' | 'linux' | 'osx'; arch?: 'x86' }
143:/** 当前平台对应的 MC rules os 名（win32→windows / darwin→osx / linux→linux） */
144:export const OS_NAME: 'windows' | 'osx' | 'linux' =
145:  process.platform === 'win32' ? 'windows' : process.platform === 'darwin' ? 'osx' : 'linux'
```

我操你这不是知道 Linux 吗。不过很显然这应该是后来接手狗屎的 AI 忘记了三口人先生当初只说要支持 Windows 和 macOS 因为[像目标平台这么重要的东西 `AGENTS.md` 里一个字符都没提到](#观赏狗屎提示词)，所以 AI 自己查看了一下发现这个项目是[电子平台](https://github.com/electron/electron)构建的于是在 1 Token 的思考长度内就知道应该进行 Linux 适配。

然后作者现在必须[睡觉](https://www.wikiwand.com/simple/Sleep)[^sleep]来减轻这个美味狗屎项目对作者的人类[神经系统](https://www.wikiwand.com/en/Nervous_system)造成的冲击。

[^raytr]: 买了 Claude Max 20x 的傻逼：指 [Forbric](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader) 的作者 [Ray-T-r](https://github.com/Ray-T-r)。Ray-T-r 曾以自己购买了 [Claude Max 20x](https://claude.com/pricing) 为出发点抨击没有购买 Claude Max 20x 的人。

[^balls]: 睾丸被吓爆一颗：出自[该评估 Forbric 加载器的文章](https://cubk.cn/articles/evaluate-forbric)。

[^gplv3-law]: GPLv3 许可证的法律效力：相关案例见 [罗盒案](https://www.ccct.net.cn/html/bqzx/2026/0312/6624.html)。

[^sleep]: 睡觉：是具有[神经](https://www.wikiwand.com/en/Neuron)的生物的生理活动的一部分。睡觉的起源可追溯到[刺胞动物门](https://www.wikiwand.com/en/Cnidaria)。当然由于三口人或者 AI 或者三口人的狂热追随者看上去都不是具有神经的生物所以他们不需要睡觉。

## 抛开狗屎不谈

本节内容是需要特别说明的，因为上文中对 KAMUCL 这一精品狗屎的论述不可避免的在误伤了某些本不应该被如此对待的主体或者放过了某些需要被如此对待的主体。下面是主体列表。

* **XMCL** ： [XMCL](https://xmcl.app/zh/) 是同样基于 Electron 的自由的 Minecraft 启动器。其出现时间远比 AI 编程大潮要早 (2017)。也正因如此 XMCL 没有变成一个狗屎项目。尽管相对原生开发的启动器比如 HMCL 来说其各项指标都没有突出优势，但这些问题的主要原因是他是一个 Electron 项目。

* **Claude** ： Claude 作为目前 AI 领域前沿的闭源模型，其智力程度相当高（至少超出了三口人先生[^three-mouth]）。作者认为 Claude 能写出这样一份精品狗屎是三口人先生实在不知道应该怎么描述他想要的东西。

* **测试人员** ： 抛开本精品狗屎项目的睁眼瞎测试者[^testers]来说，测试人员是非常辛苦且高尚的，毕竟大部分时间他们都要面对一份狗屎哪怕不是那么精品。如果您感到被冒犯，请允许作者向您致歉，您实际上不包含在上文所批判的主体的范围内。

* **Agentic Coding** ： Agentic Coding 是 AI 开发的当前最佳答案。开发者担任架构师的职责，负责指挥 AI 进行构建、修改、测试等。而 Wish Coding 不过是一群[提示词小子](https://undercodetesting.com/from-script-kiddie-to-prompt-kiddie-how-ai-is-democratizing-cyber-threats-and-what-you-must-do-now-video/)自以为是的表演。

* **忘记取关卡慕SAMA的人** ： 非常抱歉，因为您实际上不属于狂热追随者，这仅是因为一个疏忽造成的。如果您感到被冒犯，请允许作者向您致歉，您实际上不包含在上文所批判的主体的范围内。

* **Forbric** ： 精品大狗屎。关于 Forbric 的技术含量、 Forbric 的实际表现可以查看 Forbric 仓库的 Issue#24 、 Issue#39 、 Issue#59 。

最后一点是你可以去阅读[作者让 AI 写的比 KAMUCL 精品一万倍的精品小狗屎 Ngwg](https://0xarch.codeberg.page/posts/fewu/yet-again/) 。作者的其他项目不是 AI 写的所以不在此处丢人现眼。
