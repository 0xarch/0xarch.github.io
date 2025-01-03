---
title: 简要的 Arch Linux 安装教程
date: 2025-01-02 19:39
tags: ArchLinux 教程
category: Linux
language: zh-CN
multi_language:
    zh-CN: 安装arch.md
    en-US: install-arch.md
---
简要叙述如何在支持 UEFI 的 x86_64 设备上安装 ArchLinux。
<!--more-->

# Arch Linux 安装教程

!!! caution
1. 本文认为你具有初步的计算机知识。
2. 本文认为你具有通过网络搜索并获取知识的能力。
3. 本文认为你已经了解 ArchLinux 了。
4. 本文认为你已经知晓安装 ArchLinux 的风险。

如果你发现以上任何一点不符合描述，请勿按照本教程进行，本教程对出现的问题概不负责。
!!!

## 准备工作

准备如下物品/文件：
最新月度版本的 archiso；
支持 UEFI 启动的 x86_64 设备，并可以启动至 archiso。

### 获得可启动 archiso 的设备

使用 `BalenaEtcher` 或 `dd` 等工具烧录 archiso 至 USB 设备，或使用 `Ventoy` 之类 Multi-ISO 工具。

## 开始

### 启动至 `archiso`

根据主板及 BIOS 版本型号不同，此步骤需要自行摸索。我的笔记本为 F12 呼出启动菜单。

进入 GRUB 引导菜单后，选择对应的选项，`archiso` 具有演讲人支持。

当 `archiso` 正确地启动后，便可以进入 Live 环境开始安装。

### 连接网络

首先，启用网络：

```sh
rfkill unblock all
```

使用 iwd 连接网络。 通过 `iwctl` 进入 iwd 控制台：

```sh
iwctl
```

然后，使用 iwd 控制台命令连接网络：

```sh
station wlan0 get-networks
station wlan0 connect <wifi-name>
# Enter password in dialog
```

退出 iwd 控制台：

```sh
exit
```

使用 `ping` 测试网络连接情况：

```sh
ping archlinux.org
```

### 磁盘分区

使用 `cfdisk` 进行磁盘分区。

```sh
cfdisk <path/to/disk>
# 示例： cfdisk /dev/nvme0n1
# 示例： cfdisk /dev/sda
# 示例： cfdisk /dev/vda
```

然后，通过 `cfdisk` 提供的图形界面完成分区。对于 `UEFI` 来说，需要准备至少两个分区：ESP分区和根分区。

!!! caution

对于多系统安装、保留数据安装，请注意看好准备操作的分区是否有需要保留的数据，比如另一个系统。
!!!

使用 `mkfs.fat` 和 `mkfs.ext4` 格式化分区。

```sh
mkfs.fat -F32 <path/to/esp>
mkfs.ext4 <path/to/root>
```

!!! note
对于 `btrfs` 等分区格式，请阅读对应手册。
对于需要交换分区的，使用 `mkswap <path/to/swap>` 格式化交换分区，使用 `swapon <path/to/swap>` 启用交换分区。
!!!

使用 `mount` 命令挂载分区。

```sh
mount <path/to/root> /mnt
mkdir -p /mnt/boot/efi
mount <path/to/esp> /mnt/boot/efi
```

!!! note
本文默认安装位置映射到 Live 环境的 `/mnt` 目录。通常情况下这没什么问题。
也可以使用其他的目录，但要注意阅读下文时替换对应的位置。
!!!

## 安装

### 镜像源

连接至默认镜像源速度较慢的用户，可以使用 `reflector` 更换更快的镜像源。

```sh
reflector --country <Country> --sort <Sort> --protocol <Protocol> --age <UpdateTime> --save <Path>
# 示例：使用在中国、使用 HTTPS 协议、至少在48小时内同步过的镜像源，按速率排序。
reflector --country China --sort rate --protocl https --age 48 --save /etc/pacman.d/mirrorlist
```

### 安装基本系统

通过 `pacstrap` 安装脚本，将基本系统安装到 `/mnt`：

```sh
pacstrap -K /mnt base linux linux-firmware
# 对于希望系统更完整，不至于进入时什么都没有的，推荐执行下面的命令：
pacstrap -K /mnt base base-devel linux linux-headers linux-firmware vim networkmanager grub efibootmgr
# 解释：这条命令安装了 基本包、基本开发包(包含sudo和构建工具)、Linux内核、Linux头文件、Linux固件包、
# Vim编辑器、NetworkManager网络管理器、GRUB引导启动器、EFIBootMgr引导管理器
```

### 映射挂载

```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## 配置

切换至安装的系统：

```sh
arch-chroot /mnt
```

### 时区和语言

设置时区并同步网络时间，然后将时间同步至本机 BIOS：

```sh
ln -sf /usr/share/zoneinfo/<timezone> /etc/localtime
timedatectl set-ntp true
hwclock --systohc
```

编辑 `/etc/locale.gen`，添加语言标志内容，示例：

```
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
```

生成语言环境：

```sh
locale-gen
```

将 `en_US.UTF-8` 作为默认语言环境：

```sh
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

### 网络

设置主机名：

```sh
echo <hostname> > /etc/hostname
```

设置默认 Host 解析，将以下内容写入 `/etc/hosts`：

```
127.0.0.1       localhost
127.0.1.1       thishost.example.org   thishost
::1             localhost ip6-localhost ip6-loopback
```

启用 `NetworkManager`：

```sh
systemctl enable NetworkManager
```

### 用户

创建用户：

```sh
useradd -m -G wheel <username>
```

设置密码和 Root 密码：

```sh
passwd <username>
# 输入两次密码，密码不可见
passwd
# 输入两次密码，密码不可见
```

### 设置管理员执行权限

编辑 `/etc/sudoers` 并写入内容：

```
%wheel ALL=(ALL:ALL) ALL
```

关于详细的权限控制，请阅读 sudo 手册。

### 引导

安装 GRUB 到本机：

```sh
grub-install <path/to/disk>
```

生成 GRUB 配置文件：

```sh
grub-mkconfig -o /boot/grub/grub.cfg
```

!!! important

对于多系统用户希望在 GRUB 菜单中启动其他系统的，请安装 `os-prober` 并在 `/etc/default/grub` 中启用 OS Prober。
!!!

### 返回 Live

```sh
exit
```

## 后期

检查：

```sh
efibootmgr # 检查 GRUB 启动项
cat /mnt/boot/grub/grub.cfg # 检查 GRUB 配置
cat /mnt/etc/fstab # 检查分区挂载
ls /home # 检查用户文件夹
```

卸载分区：

```sh
umount -R /mnt
```

重启：

```sh
reboot
```

重启完毕后，便可以进入新安装的 Arch Linux 系统了。