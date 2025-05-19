---
title: Quickstart
date: 2025-05-19 21:42:48 
tags:
    - Fewu
    - Guide
category: Guides
language: en
---
Operations in Fewu.
<!--more-->

## Quick Start: Create a New Article

```shell
npx fewu new "First post" source/posts/my-first-post.md -c MyArticles -t First
```

Explanation of parameters:

### new

Specifies that the operation is to **create a new article**.

### `-c`

Specifies the category of the newly created article, followed by n parameters.

### `-t`

Specifies the tag of the newly created article, followed by n parameters.

## Overview of Operations

* `new`: Create an article. Refer to [Quick Start: Create a New Article](#Quick\ Start:\ Create\ a\ New\ Article)

* `init`: Initialize the resources required by the generator.

* `help`: Display help options.

* `*` (empty operation or other operators): Run the generator.

## Generator Parameters

The following parameters are valid when running the generator:

* `--server`: Save the running results in the cache and start a temporary server (`localhost:3000`). 