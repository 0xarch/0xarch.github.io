---
title: Yet Again
date: 2026.9.11
tags:
  - 新浪潮
  - 持续更新
categories: 博客
---

一款全新的、几乎完全由AI完成的新站点生成器，Ngwg，现已完成基本测试。

<!--more-->

本文章持续更新。

**观前提醒：本文不是技术文档。本文中大量夹杂情绪化、两极化、社区化、选择性失明、严重左倾的叙述并使用了将复杂事件压缩为单一归因的政治性修辞策略（特别是脚注部分），因为实在是不吐不快，请读者请注意区分。**

## Ngwg 简述

Ngwg 本身被设计为 Fewu 的继承者，但其并未沿袭 Fewu 的设计模型。

Ngwg 由 GLM-5.3-Flash 在参考了 Fewu 的代码库的情况下从头编写，
然后由 DeepSeek-V4.1-Flash 进行功能充实、错误修复等维护工作。
作者仅负责对 Agent 进行工作指引和行为修正。

Ngwg 目前将专注于 Linux ，暂不计划推出官方的 PowerShell 版本。
Ngwg 目前仍然处在开发阶段。最新版本为 0.3.0 。

注： 0.3.0 的代码还没有进行人工审查。预计会在十一月中旬进行审查。

## 开发历程

本项目最初立项是由于作者手搓的 Fewu 已经积重难返（毕竟这个项目已经有
将近 3 年时间，在 Fewu 立项之初不仅不叫 Fewu ，而且作者当时还是一个
JavaScript 基础知识都没学完的小傻逼。如果你对3年没有概念，可以参考
初中生和高中生），
恰逢 AI Coding 盛行，还有某 Z 字头公司[^zai]每周末免费送 Token ，
于是便使用了 3 ~~普朗克时间~~周时间让 GLM-5.3-Flash 从零开始
参考 Fewu 的代码写了这么一个生成器。

Fewu 是一个全栈 JS/TS 的项目，其非常依赖于 npm 这个中心化大一统
 JS 库全家桶平台。但 Ngwg 立项时 npm 正在被不知名抽象群体到处
发病毒包攻击[^aa]，安全性堪忧。

所以 Ngwg 使用力气更大的 GitHub 作为分发平台。用户直接从 GitHub 获取
执行文件。考虑到某个 [M头T尾](//microsoft.com) 的公司在这一块留存广大
GitHub 用户和保护仓库不被随意篡改这一部分勉强还算是正常并且
[Codeberg](//codeberg.org) 又明确禁止 LLM 项目，暂时
没有更换托管平台的想法。或许有朝一日会变成什么私服之类的。

Ngwg 在还没有任何一行代码的时候就敲定了整体的设计结构，所以完全不需要什么
大规模重构。期望的第一次重构可能会在 1.0.0 版本才进行。

GLM-5.3-Flash 仅用了大约 3000万 Token 就把 Ngwg 的所有项目都搓了出来，
然而由于其的中文能力实在差到连特朗普都不如，作者不得不亲自将 GLM-5.3-Flash
写的狗屎文档重新润色一遍，并删除所有不知所谓的打补丁式括号。

然后由于 GLM-5.3-Flash 不送 Token 了（其实是 Z 字头公司被曝出偷偷上传用户仓库），
又恰逢 DeepSeek 站起来了，就换成了 DeepSeek 继续开发。
~~DeepSeek 写文档比 GLM 读起来正常多了。~~

现在的 0.3.0 版本是完全由 DeepSeek 接手并继续维护的。总体而言 DeepSeek 的编码
体验相比 GLM-5.3-Flash 高了不是一点半点。

<details>
<summary>一些直抒胸臆的话语</summary>

> 不知道为什么总有些**兽交爱好者**一看到 AI 写代码就立刻把项目归为狗屎。
> 
> 事实：
> * 确实，本项目几乎所有代码都是 AI 写的，作者没有敲过任何新代码。
>
> * 本项目开发中最有价值的东西可能是 AGENTS.md (没有公开发布)，哪怕作者一句话
>   不说 AI 也完全可以根据指示自己写一个 Ngwg 2 之类的。如果你拿到了提示词，
>   你甚至可以用相同的思路让 AI 实现一个红色警戒2。毕竟实际上红色警戒 2 的事件
>   循环架构和这个工作流驱动的程序非常相似。
>
> * 另一个也许起到作用的是作者曾经写的 Fewu 的源代码。GLM-5.3-Flash 在消化了这一坨
>   美味小狗屎之后显然被动开智了。
>
> * 作者会定时审查代码。作者有完备的 TypeScript 知识，而且可以很确定的说，
>   作者的前端三件套知识储备量超过大部分上面的**兽交爱好者**。即使没有 AI ，这个项目最终也会出现，只是耗费时间比较长。
>
> * 本项目不是像 [Forbric](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader) 
>   那样许个愿然后让 AI 力大砖飞转圈重构花式消耗富余 Token 的提示词项目。
>   抛开作者想要钻石最后变成狗屎这一点并从 Forbric 代码库里单拎出几个文件来看代码质量是极高的，毕竟写出这种代码的大概率是被允许脱离原生家庭[^claude]的 Claude ；
>   作者非常想知道到底是什么提示词可以让 Claude 写出如此高级的代码然后把高级代码组合到一起就会[退化](https://www.wikiwand.com/en/Devolution) 成一坨美味大狗屎。[^24]
>   个人观点：如果 Forbric 作者再不自己补习知识而是只靠 Claude 力大砖飞，起码要再消耗
>   阿伏伽德罗数个 Token 才能达到预期效果的 99%。[^59]

</details>

## 简单上手

Ngwg 是自由软件[^fs]。GitHub 上公开了所有源代码，均使用 GPLv3 许可证分发。
相比于尹先生的启动器[^pcl]，您完全具有自由软件的[四项基本权利](https://writefreesoftware.org/learn/four-freedoms/)。

如何使用：将 [CLI 仓库](https://github.com/Ngwgers/Ngwg-cli) 克隆到本地，并运行 bin 中的 ngwg.fish 即可。 ngwg.fish 提供了对 Core 的访问桥梁，使您可以轻松地部署。

CLI 的初始化默认使用官方的 Core 以及默认主题 Pacific ，这是 GLM-5.3-Flash 基于 沉默、冷寂、简单 的提示创造的。默认没有安装推荐的 SEO 插件。

## 技术细节

Ngwg 的打包方式类似于 Steam ：

用户首先安装一个安装器，
安装器负责将真正的应用拉取到用户的设备上。

与 Steam 不同的是， Ngwg 的安装器 `Ngwg-cli` 也同时担任入口功能，
其还可以根据配置灵活的变更核心。你当然也可以根据文档实现自己的核心。

Ngwg 参考了 Wayland 的协议模式，
对插件提供了可选择性实现的多协议加载形式。

Ngwg 还参考了 Vuepress 的结构化监听，实现几乎全范围热重载。

## 性能

Ngwg 毫无疑问是非常迅速的。
根据 GLM-5.3-Flash 所说，Ngwg 使用了多线程加速构建。

> 注：实际上并不是真正意义的“多线程”。
> 根据代码审查，其实际上是开了一个 `Pool(8)` ，线程数是固定的。
> 这意味着其并不能完全发挥“多线程”的优势。
> GLM 显然对自己的工作有非常盲目的自信心。

在作者的工作机器上使用默认主题部署含有约 40 篇文章的网站耗时仅 0.5s，
对比 Fewu 3.7 需要近 10s 来说，这无疑超越了作者先前制作的任何一个 SSG 。

[^claude]: 脱离原生家庭：是对大模型 Claude 的前沿水平与其母公司 Anthropic 的傻逼行径反差极大的讽刺性表达。由于 Anthropic 涉及事件过多，诸如报假警、虚空指控中国模型、[焚书扫描](https://baike.baidu.com/item/%E5%B7%B4%E6%8B%BF%E9%A9%AC%E9%A1%B9%E7%9B%AE/67770563)、间谍行为、对中歧视等，谨以“傻逼”总结。

[^59]: [Issue#59](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader/issues/59) 是这个观点更直接的表达，但由于 Issue#59 的作者的笔法比较直接，在此不展开。

[^24]: 关于 Forbric 的具体实现水平，可以参考 [Issue#24](https://github.com/Ray-T-r/Minecraft-Forbric-mod-loader/issues/24)，发起者用 AI 审查了仓库代码。简单来说，审查结果表明 Forbric 的代码质量高，且实现有很多可学习之处。不过这并不能改变 Forbric 的作者看上去除了给 Claude 充钱之外没有参与其中一分一毫哪怕是点开代码看一眼的事实。当然，不排除其实是 Forbric 的作者大发慈悲掏自己的钱让 Claude 喷吐知识然后发广告大力宣传来让其他社区人士审查以此达到把 Claude 知识库蒸馏到社区里的目的。

[^zai]: Z 字头公司：指开发 GLM-5.3-Flash 的公司智谱 AI，其 [Agentic Coding 客户端](https://zcode.z.ai/) 被曝出会静默上传用户仓库。事件发生后智谱试图将一个[清空了 Git 历史的大粪池](https://github.com/zai-org/ZCode)搬出来“开源”以平息舆论。

[^aa]: 此处指 [Atomic Arch 事件](https://www.sonatype.com/blog/atomic-arch-npm-campaign-adds-malicious-dependency)，攻击者通过 AUR 创建指向托管在 npm 上的病毒的入口，毕竟 AUR 里的单独文件会被审核而 PKGBUILD 通常没人看， npm 则是无论上传什么都没人看。 npm 的安全模型完全是松弛的阴唇，毕竟你只要拿到一个可能写在环境变量里的`$NPM_TOKEN`就可以光明正大地把你的阴茎装作受信人的阴茎塞进去疯狂喷射带病毒的精液。[曾有研究表明 npm 上最近射进来的几百毫升精液中的数千个带病毒的精子被至少被吞下了上亿次](https://cybernews.com/security/npm-supply-chain-attack-shai-hulud-worm/)，这表明 npm 可能是 2026 年度最大有毒物质中转站。

[^pcl]: 尹先生的启动器：指 [Plain Craft Launcher](https://meloong.com/PCL)。 PCL 启动器的狂热粉丝们正在到处喷洒 PCL 是自由(Libre)的、[共产主义](https://www.wikiwand.com/en/Communism)的启动器的恶臭精液级言论，然而实际上这是完全错误的。PCL 源代码仓库不仅不包含发行版的完整源代码，而且使用限制极大的分发及二创许可。此外瓜皮龙猫似乎完全没有意识到[其引用部分 HMCL 代码而导致的 GPL 许可证传染问题](https://github.com/Meloong-Git/PCL/discussions/9403)。此外，其还需付费赞助解锁部分功能（切换主题、预览版等），实际上是 [风味免费(Freemium)](https://freemium.org/) 软件。

[^fs]: 阅读该文章的读者应该都知道什么是自由软件以及自由软件和开源软件的区别。如果你不知道，请参见 [此处](https://www.gnu.org/philosophy/free-sw.html) 。
