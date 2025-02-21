---
title: ChromeOS Linux 子系统托盘守护进程
tag:
  - Chromium
  - Linux
category:
  - Linux
---
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
