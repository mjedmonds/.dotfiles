# mjedmonds dotfiles
Personal dotfiles for Linux/Unix systems. 

#### Why?

A dotfile repo enables reconfiguring my daily setup on new Linux/Unix systems substainially easier while providing a backup for my configuration. I can't honestly recommend blindly using this as your configuration, however it may give you inspiration for yours. You can use this setup to create your own dotfile repo!

## Installation
To clone the entire repo, including submodules, run:

```
cd ~/
git clone --recursive git://github.com/mjedmonds/.dotfiles.git
```

Or:

```
cd ~/
git clone git://github.com/mjedmonds/.dotfiles.git
cd dotfiles
git submodule update --init --recursive
```

### Symlinking to ~/
After cloning, symlinks still need to be created to link your home directory to this repo. I use ```stow```, but you can manually link or use other helpers such as ```homesick``` or ```homeshick```. You do not have to stow everything, only what you need on the current system.

```
stow --ignore ".DS_Store" vim
stow --ignore ".DS_Store" zsh
stow --ignore ".DS_Store" bash
stow --ignore ".DS_Store" tmux
stow --ignore ".DS_Store" tmuxinator
stow --ignore ".DS_Store" git
stow --ignore ".DS_Store" slate
```

### Plugin Installation
Some plugins need further steps to install on new systems. These instructions were copied from plugin sources.

NOTE: both of these plugins are no longer a part of my dotfiles, but they serve as a useful example.

#### Vim - Command-t

```
cd ~/.vim/bundle/Command-T/ruby/command-t
ruby extconf.rb
make
```

#### Vim - YouCompleteMe

```
cd ~/.vim/bundle/YouCompleteMe
git submodule update --init --recursive
./install.sh --clang-completer
```

## Updating, Adding, and Removing Submodules

To update all submodules, run:

```
git submodule update --init --recursive
```

To add another git repo, ```cd``` to the appropiate directory and add the submodule:

```
git submodule add git://github.com/foo/bar.git
```

To remove a submodule, we need to deinititalize it and cleanse it from our repo:

```
git submodule deinit module_name
git rm path/to/module_name
rm -rf ~/dotfiles/.git/modules/path/to/module_name
```

## Easy Install

The script ```easy-install.sh``` will automatically install this dotfile configuration. The script relies on ```git``` (duh), ```stow```, and a development version of ```ruby```. It will link the entire configuration. If you are trying to set up a dotfiles repo for yourself or would like to use parts of your existing configuration, do not use this script. 

This script is intended for my personal use to make new machines exceptionally easy to get up and running (so it may break in between my personal uses, feel free to open an issue if something is broken).  

To use the easy install, clone the repo and simply execute the script:

```
cd ~/
git clone --recursive git://github.com/medmonds34/.dotfiles.git
cd ~/dotfiles
./easy-install.sh
```
