---
title: 鸭骗战争
date: 2026-11-26
categories:
  - 游戏
  - 技术
tags:
  - 代码拆解
---
观赏网页红警。

<!--more-->

首先笔者不是很想基于毫无修饰的事实评价哪怕是让无机体子代理评价黄某鸭在他人作品上倾注了毕生排泄物层层累加制造出来的庞大恶臭产物但由于使用串串香文体可能导致文章不那么受欢迎或者被什么不知名人士引用后跳脸而导致引火上身于是作者决定使用基于最新的**网**页**红**警公开的源代码和可考证或权威发布的表态或声明进行**文**章叙述。

本文章中所有事实证据均基于提交 `823c6637bab9ca1edafaa022a1040ed1fc59c274` 。

## 无法评价之物

AI 赋予了每个人产出代码的机会，但产出代码并不能让每个人自动学会编程。

### !?棍母?!

首先任何一个攻读过计算机科学小学毕业生学位的工程师都能一眼发现这个仓库有很多问题。最首当其冲的是一个看上去很正常的核心文件 `package.json` 。
这个文件里有相当多看上去很正常但根本无法执行的命令比如说 `sim:inventory` ，像这样指向 `scripts` 目录下面某个脚本的命令可能占了整个 `scripts` 对象的 80% 但实际上根本没有作用因为 `scripts` 目录**根本不存在**。
也许是黄烤鸭先生不小心把整个 `scripts` 目录当成屎给扔了。

### If you need `any` help

简单抽查一下 `git log` 就可以发现 `a5e2226ee49134ee3decf98822cad8ed34cbfe40` 中明确采用动态索引签名、stub、`as any`、扩大返回类型及关闭 switch fallthrough 检查来解决类型错误，笔者不知道这是不是为了以后加入什么[战神](https://ares-developers.github.io)或者[火卫一](https://phobos.read-the-docs.io)或者[奎秃斯](https://wiki.ra2diy.com/index.php?title=Kratos)的时候可以少消耗一些[令牌](https://zh.wiktionary.org/wiki/token)，毕竟这实际上是告诉开发者你可以往那个 `GameObject` `Bridge` 甚至 `FileSystem` 里塞任何东西比如 `globalThis` 或者 `undefined` 。

### 左右睾丸互搏

抽查 `git log` 的时候还偶然发现该仓库的提交 `b2f8353` 为桥上陆军、桥下海军、运输艇跨层添加目标模式等逻辑然后 `0b7c4fa` 又移除 `TargetBridgeMode`、`getBridgeFor`、`usesGroundLayerUnderBridge` 等结构。
然后这部分对应的当前测试 `src/test/sim/MoveTaskParity.test.ts:8~56` 主要的测试内容竟然是通过字符串存不存在与正则断言确保这些结构被移除而不是实际运行桥上桥下的移动案例然后观测试验结果。难道这个测试脚本观测时会导致坍缩？

于是就有了

### 验证代码是代码

(本段由 GPT 发现)

使用已有依赖执行：

- `node node_modules/typescript/bin/tsc -p tsconfig.build.json --pretty false`：退出 0。
- `bun test src/test/sim`：146 pass、0 fail、574 expect，72 个文件。
- 72 个模拟测试文件中，63 个包含 `readFileSync`；这只表示它们读取源码，不表示 63 个文件完全没有行为断言。上述具体示例确实使用源码文本匹配，不能把通过结果视作游戏场景正确性证明。

## 没关就是开了？

> 本项目原则上不涉及对《红色警戒2》官方分发版本的逆向、反编译或者代码抄袭，亦坚决拒绝直接声称使用AI工具对《红色警戒2》项目进行逆向、反编译转录而生成的代码合入...
<div align="right">—— README.md</div>

不难发现黄烤鸭先生是装糊涂的高手因为其写的是不逆向《红色警戒2》而不是不逆向 Chronodivide 。下面是 GPT 找到的历史证据。

`2247335`（2025-05-17，主线祖先）的 `PROJECT_CONTEXT_SUMMARY.md`：

- 第 1 行标题 `Project Context Summary (RA2Web React Decompile)`。
- 第 7 行：`The primary objective is to reverse-engineer an existing JavaScript project ... into a modern React application using Vite and TypeScript.`
- 第 11 行：原始 JavaScript 文件是 reverse engineering 的对象，放在 `extracted_modules_simple/`。
- 第 13–16 行列出 `Application.js`、`BattleControlApi.js`、`main.js`，以及 data/engine/game/gui/network/util/worker 和 `module-dependencies.json`。
- 第 29 行起列出 Base64、string、math、event、time、typeGuard、Routing、BoxedVar 等 JS → TS 迁移；第 47 行起描述部分分析旧 `Application.js` 并渐进替换 mock。

该文档在提交 `356af5f`（_feat: 删除无用文件_）被删除。

另外看上去黄烤鸭先生可能基于某个变更分叉了项目因为笔者找到自己电脑上曾经克隆的 `ts-redalert2` 并拉取时惊奇地发现无法合并。而这个 2026-09-03 的副本的许可证里写的是：

> This repository contains code reconstructed from the Chrono Divide client.
>
> The Chrono Divide copyright holder has not licensed Chrono Divide-derived material contained in this repository.
>
> Such material is not licensed under GPL-3.0 or any other open-source license.

看上去分叉项目是有原因的。

### 站中间操两边

根据某些传言黄烤鸭先生曾多次对 README 进行操。！作来掩盖自己的盗窃行为。
通过 `git show main -- README.md` 不难发现这并不是传言。

该表格由 GPT 根据 git 结果整理。
| 提交 | 变化 |
|---|---|
| `ab59fb7`，2025-05-26 | README 称“本项目是红色警戒2（red alert 2）的源代码”，线上游玩链接为 `https://game.ra2web.com`，加入 GPL 文本 |
| `c1cd835`，2026-03-15 | 将所有权由《时空分裂（chronodivide）》所有者改写为《时空分裂（chronodivide）》/RA2WEB 负责人，并调整免责声明段落 |
| `e4a4f5e`，2026-03-21 | 中文多处删除括号中的 `chronodivide`，保留《时空分裂》；英文仍称 Chinese version of Chronodivide |
| `0c40190`，2026-11-03 | 将《时空分裂》及英文 Chronodivide 所有者主体替换为《红色井界》/RA2WEB；删除点名 Alexandru Ciucă 的商业行为侵权段落 |
| `8a5c6ae`，2026-11-05 | 补入 Chronodivide 非开源、与本项目无关；补入 OpenRA VXL 和 XCC MIX 来源及 GPL 描述 |
| `823c663`，2026-11-07 | 增加与 ra2web.com 站点版本无关；删除项目所有权归 RA2WEB 的段落；将 Chronodivide 关系进一步描述为创意来源、未认可本项目，并讨论 igofreely PR 和侵权不确定性；增加仅针对 EA 原版的逆向免责声明 |

本文不讨论黄烤鸭先生是否进行了诸如盗窃源代码或未经事先允许开设镜像站或用完全没关系的身份伪装自己或引用其他成果的同时忘记署名之类的具体问题，也不讨论为什么`0c40190` 的提交信息写着 _Restore the GPLv3 license_ （为什么是 Restore？你以前用 GPLv3 了吗）而实际 diff 只有 README 的问题。

既然发现了 GPLv3 ，那么可以发现不管是 README 还是 LICENSE 文件都将本项目标记为使用 GPLv3 协议的项目。

而 README 中又另写 “可以自由使用、修改和分发，但禁止商用” ，笔者不知道黄烤鸭先生是不是根本没了解过许可证因为它整天忙着炒！炒！币，这句话实际上是无效的。

## 靖屎五柱

关于为什么 <https://wangerhuoda.com/> <https://youlidefuchou.com/> <https://gongheguozhihui.com/> <https://ra2web.com/> <https://chronodivide.cn/> 实际上是同一个服务这一点笔者懒得论述。如果你不知道可以把黄烤鸭操。！了问它。

本文只考虑其中的两个极具误导性的进行拆解。

### ra2web 帮你导

原句：“本页面宣传和游戏中出现的《Red Alert2》相关美术素材为玩家自行下载导入，与 RA2WEB LTD 无关。”

至于自动导入了什么成分的素材请读[下文](#ea-管不着我)。

笔者很想知道这个所谓“自行下载导入”的界定点是什么，或者说只要打开网站就是同意由网站代为执行“自行下载导入”操作。

以及任何一个哪怕是只游玩了 1 普朗克时间《红色警戒2》的玩家都可以用眼球观察到本页面中几乎所有的宣传素材都来自于《红色警戒2》原版。
至于“本页面宣传素材都是玩家自行导入”中的“自行导入”到底是什么意思笔者已经难以理解。

### EA 管不着我

通过进行免费[大粪](https://game.ra2web.com)游玩我们可以非常轻松地从一些大粪服务器里获取到一套公开分发的资源，这套资源是黄烤鸭先生自己制作的吗？看上并不是。

通过一些完全合法且可复现的浏览器操作，我们可以将游玩[大粪](https://game.ra2web.com)时获取的数据保存到本地。然后通过一些简单的脚本将这些资源与《红色警戒2》原版分发的资源进行比对，于是我们得到了：

| 重抓容器 / 条目 ID | 大小 | 重抓文件绝对偏移 | ra2.mix 绝对偏移 | 相同 |
| --- | ---: | -----: | -----: | ---: |
| build-gen.mix / 0d4eb59e | 1,548,912 | 1,928,526 | 47,166,598 | ✔️ |
| build-gen.mix / 5b2c294c | 1,445,584 | 25,730,534 | 251,178,738 | ✔️ |
| build-gen.mix / 28eeb521 | 1,403,792 | 5,815,070 | 51,053,158 | ✔️ |
| build-gen.mix / e444b5bf | 1,143,456 | 4,671,614 | 48,810,118 | ✔️ |
| build-gen.mix / 2a3c5aa4 | 1,125,912 | 7,317,918 | 52,556,006 | ✔️ |
| isotemp.mix / a081107a | 1,113,248 | 8,348,718 | 97,385,282 | ✔️ |
| build-gen.mix / 03579aa6 | 1,089,864 | 8,526,638 | 53,764,742 | ✔️ |

| 线上用途 | 与原版相同载荷数 | 相同字节数 |
| --- | ---: | ---: |
| 建筑 `build-gen.mix` | 163 | 27,799,704 |
| 动画 `anims.mix` | 281 | 15,864,496 |
| 体素 `vxl.mix` | 184 | 5,269,463 |
| 图标 `cameo.mix` | 203 | 605,096 |
| 语音 `eva-ally.mix` | 111 | 1,834,074 |

上述数据仅为进行了一次温带地图盟军遭遇战场景获得。

> "王二火大" 是一个非盈利的粉丝项目，与 Electronic Arts Inc.(EA) 没有任何关联。
<div align="right">——《王二火大》免责声明</div>

笔者知识太过于浅陋以至于无法得知《王二火大》免责声明中的 EA 到底指的是什么公司，毕竟看起来肯定不是收购了《红色警戒2》制作组的 Electronic Arts Inc. 公司。

### 对是不对的

<https://chronodivide.cn/> 不仅介绍 ChronoDivide，而且把 RA2WEB 称作是所谓的“官方中文版”；先不提这个“官方中文版”到底是不是官方，RA2WEB 上都已经公开声明合作中止并换用其他引擎，两个网页实际上连措辞都没有统一。当然不排除是黄烤鸭先生把这个网站忘了。

[ChronoDivide 官网](https://chronodivide.com) 公开页没有提供对 <https://chronodivide.cn/> 或 <https://ra2web.com/> 的具体授权证明，这些网页本身也没有。
因此这个“官方中文版”没有任何证据可以支撑其在任何意义下的成立。

另：某个[大粪总站](https://wangerhuoda.com)中的“Chronodivide友情链接“实际上指向的也是 <https://chronodivide.cn/> 而不是 <https://chronodivide.com/> ，笔者暂且认为黄烤鸭是 ext4 因为它可能是严格区分大小写。

## 总结

不难发现黄烤鸭先生除了督促自己的[主脑](https://aiwiki.ai)进行一些在界面上添加按钮的操作使得一些网页红警的追随者可以更便捷的在他们唯一的电子设备上游玩[大粪](https://ra2web.com)以外对红警社区没有任何正向贡献。

不过考虑到黄烤鸭先生已经把自己的母亲献祭用以维持生命活性，这些批评可能也无可厚非。
