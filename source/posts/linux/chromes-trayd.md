---
title: ChromeOS Linux 子系统托盘守护进程
tags:
  - Chromium
  - Linux
category:
  - Code Snippets
date: 2025-11-05T07:32:48.806Z
permalink: /article/WbMWTZnC4gCJLbh5/
---
一种基于 `notify-send` 实现的 ChromeOS(FydeOS) Linux 子系统的托盘守护。

<!-- more -->

~/linux-subsystem-daemon:
```bash
#!/bin/bash

while true; do
        if xdotool search --name stalonetray; then
                sleep 5
        else
                status=`notify-send -e -i "linux" -a "LSD" "Linux Subsystem Daemon" -A "Tray"`
                if [ "$status" == "0" ]; then
                        echo "Spawn stalonetray"
                        stalonetray
                        echo "Stalonetray terminated"
                fi
        fi
        sleep 1
done
```

~/.sommelierrc:
```bash
+++
bash $HOME/linux-subsystem-daemon &
+++
```
