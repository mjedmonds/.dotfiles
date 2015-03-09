#medmonds34 dotfiles
Personal dotfiles for Linux/Unix systems

##Installation
To install, run:

```
cd ~/
git clone --recursive git://github.com/medmonds34/dotfiles.git
```

Or:

```
cd ~/
git clone git://github.com/medmonds34/dotfiles.git
cd dotfiles
git submodule update --init --recursive
```

##Symlinking to ~/
After installing, the symlinks still need to be created. I use ```stow```, but you can manually link or use other helpers such as ```homesick``` or ```homeshick```.

```
stow vim
stow zsh
stow bash
stow tmux
stow tmuxinator
stow git
```

##Updating and Adding Submodules

To update all submodules, run:

```
git submodule update --init --recursive
```

To add another git repo, ```cd``` to the appropiate directory and run:

```
git submodule add git://github.com/foo/bar.git
```

##Plugin Installation
Some plugins still need to be installed on new systems. These instructions were copied from plugin sources.

###Command-t

```
cd ~/.vim/bundle/command-t/ruby/command-t
ruby extconf.rb
make
```
