---
layout: post
title: Virtual machine using virtualbox & vagrant
path: "/blog/virtual-machine-using-virtualbox-and-vagrant.html"
date: 2018-01-21
tags: Virtual-Machine, VirtualBox, Vagrant
description: "Virtual-Machine, VirtualBox, Vagrant"
featured: false
---

- [Configure Vagrant](#configure-vagrant)
- [Networking](#networking)
- [Vagrant Up](#vagrant-up)
- [File Sharing](#file-sharing)
- [Server Network](#server-network)
- [Basic Command](#basic-command)
- [Basic Software](#basic-software)

## Configure Vagrant

### On Mac:

``` bash
mkdir -p ~/Sites/sfh
cd ~/Sites/sfh
vagrant init ubuntu/<codename>64
```

### On Windows:

``` bash
mkdir C:\sfh
cd C:\sfh
vagrant init ubuntu/<codename>64
```

### File: Vagrantfile

``` bash
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

config.vm.box = "ubuntu/<codename>64"

end
```

## Networking

### File: Vagrantfile

``` bash
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

config.vm.box = "ubuntu/<codename>64"

config.vm.network :private_network, ip: "192.168.33.10"

end
```

Notes :
- The _private_network_ directive tells __Vagrant__ to setup a private network. PC host and guest machines can communicate on this network. This assigns the guest server the IP address of `192.168.33.10`. Note that each server should have a unique IP address just in case they are run at the same time.

- There are IP address ranges set aside for private networks. Generally we can use `10.0.0.0` - `10.255.255.255`, `172.16.0.0` - `172.31.255.255`, and `192.168.0.0` - `192.168.255.255`. However, always avoid the lower and upper IP addresses within those ranges, as they are often reserved.


## Vagrant Up

This will download the ubuntu/<codename>64 base server (“box”) and run it with our set configuration.

``` bash
vagrant up
```

Once it completed check the status

``` bash
vagrant status
```

Run vagrant ssh to log into the server

``` bash
vagrant ssh
```

### Try command :

- __ll__ - A buit-in alias for the command `ls -alF`, this will list all files within the current directory
- __lsb_release -a__ - A command to show all release information about this server
- __top__ - A command to show running processes and various system information. Use the `ctrl+c` keyboard shortcut to return to the prompt.
- __clear__ - A command to clear currently visible output within your terminal
- __df -h__ - See how much hard drive space is used/ available

## File Sharing

A Vagrantfile with the default file sharing configuration in place. This allows us to edit files from our host machine while running the server software within our guest server:

```bash
#File: Vagrantfile
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

config.vm.box = "ubuntu/<codename>64"

config.vm.network :private_network, ip: "192.168.33.10"

# Share Vagrantfile's directory on the host with /vagrant on the guest
config.vm.synced_folder ".", "/vagrant"

end
```

List the contents of the _/vagrant_ directory within server:

```bash
ls -la /vagrant
```

create a new text file in _∼/Sites/sfh_ named hello.txt:

```bash
echo "Hello World" > ~/Sites/sfh/hello.txt
```

```bash
# See files in /vagrant
cd /vagrant
ls -la

# Output the content of "hello.txt"
# with the "cat" command
# Output: "Hello World"
cat /vagrant/hello.txt
```

## Server Network

check out the network configuration.

```bash
ifconfig
```

The result, each network is called an _“interface”_.

- __lo__ - The loopback interface. This is used for internal communication between services within the server. This is _“localhost”_ - `127.0.0.1`.
- __eth0__ and __eth1__ - These are two additional networks created as well. We can see the IP address we assigend the server at __eth1__ - `192.168.22.10`. The server also has its own private network, with the IP address `10.0.2.15` assigned to this machine.

## Basic Command

### ls - List Directory Contents

```bash
# List contents of current working directory
ls

# List contents in a list form, with extra information:
ls -l

# List contents, including "hidden" files/folders
ls -la

# Add human-readable file/folder sizes:
ls -lah
```

### cd - Change Directory

```bash
# Change into the "/home/user/sites/sfh" directory.
cd /home/user/sites/sfh

# Same as above, but with the "~" shortcut
# to the current users home directory
cd ~/sites/sfh
```

### mkdir - Create a directory

```bash
# Create the `sfh` directory
# inside of /home/user/sites/sfh
mkdir ~/sites/sfh

# Create the /home/user/sites/sfh directory and
# any directory in between that doesn't exist
mkdir -p ~/sites/sfh
```

### rm - Delete a file or directory

```bash
# Delete (permanently) the `file.ext` file.
rm /path/to/file.ext

# Delete (recursively) the `/path/to/directory` directory.
rm -r /path/to/directory

# the additional `f` flag is to "force" the action,
# without prompting to make sure you want to do it.
# This is dangerous.
rm -rf /path/to/directory
```

## Basic Software

- __curl__ - Making HTTP requests
- __wget__ - Retrieve files from the web
- __unzip__ - Unzip zip files
- __git__ - Git version control
- __ack__ - An advanced search tool for searching content of files
- __htop__ - Interactive process viewer (better than the simple “top”)
- __vim__ - Text editor.
- __tmux__ - Terminal Multiplexor - Basically, split your terminal session into different panes
- __software-properties-common__ - This is specific to Ubuntu. We’ll use it to add software repositories that allow us to install the latest software.

### Install

```bash
sudo apt-get install curl wget unzip git ack-grep htop vim tmux software-properties-common
```
