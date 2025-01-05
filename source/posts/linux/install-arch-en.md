---
title: Simple Arch Linux Installation Guide
date: 2025-01-03 11:40
tags: ArchLinux 教程
category: Linux
language: en-US
multi_language:
    zh-CN: install-arch-zh.md
    en-US: install-arch-en.md
---
Briefly describe how to install Archlinux on the X86_64 device that supports UEFI.
<!--more-->

# Arch Linux Installation Guide

!!! caution
1. This article believes that you have a preliminary computer knowledge.
2. This article believes that you have the ability to search and obtain knowledge through the Internet.
3. This article believes that you have understood Archlinux.
4. This article believes that you already know the risk of installing Archlinux.

If you find that any of the above points does not meet the description, do not follow this tutorial. This tutorial is not responsible for the problems that arise.
!!!

## Preparation

Prepare the following items/files:
The latest monthly version of Archiso;
Support UEFI's X86_64 device, and can be started to Archiso.

### Get `archiso` bootable device

Use `Balenaetcher` or `dd` and other tools to record Archiso to USB devices, or use Multi-ISO tools such as `Ventoy`.

## Start

### Boot to `archiso`

Depending on the motherboard and the BIOS version, this step needs to be explored by yourself. My laptop enters the start menu for F12.

After entering the GRUB guidance menu, select the corresponding options.

When the `archiso` is started correctly, you can enter the Live environment and start installation.

### Networking

First, enable network:

```sh
rfkill unblock all
```

Use iwd to connect to the network. Enter the iwd console through the `iwctl`

```sh
iwctl
```

Then, use the iwd console command to connect to the network:

```sh
station wlan0 get-networks
station wlan0 connect <wifi-name>
# Enter password in dialog
```

Exit console:

```sh
exit
```

Test network connection by `ping`:

```sh
ping archlinux.org
```

### Disk partitioning

Use the `cfdisk` to make disk partitions.

```sh
cfdisk <path/to/disk>
# Ex: cfdisk /dev/nvme0n1
# Ex: cfdisk /dev/sda
# Ex: cfdisk /dev/vda
```

Then, use the graphic interface provided by `cfdisk` to complete partitioning.
For `UEFI`, you need to prepare at least two partitions: ESP partition and root division.

!!! caution

For multi-system installation and data-kept installation, please pay attention to whether there are data to be reserved for the partitions preparing for operation, such as another system.
!!!

Use `mkfs.fat` and `mkfs.ext4` to format partitions.

```sh
mkfs.fat -F32 <path/to/esp>
mkfs.ext4 <path/to/root>
```

!!! note
For filesystems such as `btrfs`, read their manuals. 
For swap parition, use `mkswap <path/to/swap>` to format swap，use `swapon <path/to/swap>` to enable swap.
!!!

use `mount` to mount partitions.

```sh
mount <path/to/root> /mnt
mkdir -p /mnt/boot/efi
mount <path/to/esp> /mnt/boot/efi
```

!!! note
The default installation location of this article is mapped to the `/mnt` directory of the Live environment. Usually this is fine.
You can also use other directory, but you should pay attention to replace the corresponding position when reading below.
!!!

## Install

### Mirror

Users with a slower speed of the default mirror source can be used to replace the faster mirror source with `reflector`.

```sh
reflector --country <Country> --sort <Sort> --protocol <Protocol> --age <UpdateTime> --save <Path>
# Example: Use the mirror source that is used in China, uses the HTTPS protocol, and simultaneously synchronized within 48 hours, and is sorted at the rate.
reflector --country China --sort rate --protocl https --age 48 --save /etc/pacman.d/mirrorlist
```

### Basic system

Use a script `pacstrap` to install the basic system to`/mnt`:

```sh
pacstrap -K /mnt base linux linux-firmware
# For the hope that the system is more complete, there is nothing when you enter, and the following command is recommended to execute:
pacstrap -K /mnt base base-devel linux linux-headers linux-firmware vim networkmanager grub efibootmgr
# Explanation:This command installs basic package, basic devel package(Including sudo and building tools), Linux kernel, Linux header files, Linux firmware package,
# Vim editor, NetworkManager, GRUB, EFIBootMgr
```

### Mount map

```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## Configure

Switch to newly installed system:

```sh
arch-chroot /mnt
```

### Region & Language

Set timezone and sync time, then post to local BIOS:

```sh
ln -sf /usr/share/zoneinfo/<timezone> /etc/localtime
timedatectl set-ntp true
hwclock --systohc
```

Edit `/etc/local.gen` to add language, example:

```
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
```

Generate language environment:

```sh
locale-gen
```

Set `en_US.UTF-8` as default:

```sh
echo "LANG=en_US.UTF-8" > /etc/locale.conf
```

### Network

Set hostname:

```sh
echo <hostname> > /etc/hostname
```

Set the default host analysis, write the following content into `/etc/hosts`:

```
127.0.0.1       localhost
127.0.1.1       thishost.example.org   thishost
::1             localhost ip6-localhost ip6-loopback
```

Enable `NetworkManager`:

```sh
systemctl enable NetworkManager
```

### User

Create user:

```sh
useradd -m -G wheel <username>
```

Set password and root password:

```sh
passwd <username>
# Enter password twice. Password is invisible
passwd
# Enter password twice. Password is invisible
```

### Set administrator privillege

Edit `/etc/sudoers` and write content:

```
%wheel ALL=(ALL:ALL) ALL
```

For detailed permissions control, read the Sudo manual.

### Boot

Install GRUB to local:

```sh
grub-install <path/to/disk>
```

Generate GRUB configuration file:

```sh
grub-mkconfig -o /boot/grub/grub.cfg
```

!!! attention

For multi-system users who want to start other systems in the GRUB menu, install `os-prober` and enable OS Prober in the`/etc/default/grub`.
!!!

### Back to Live

```sh
exit
```

## After-install

Check:

```sh
efibootmgr # GRUB item
cat /mnt/boot/grub/grub.cfg # GRUB configuration
cat /mnt/etc/fstab # Partition map
ls /home # Use folder
```

Unmount partitions:

```sh
umount -R /mnt
```

Restart:

```sh
reboot
```

After restarting, you can enter the newly installed Arch Linux system.