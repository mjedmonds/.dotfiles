# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
#ZSH_THEME="robbyrussell"
#ZSH_THEME="avit"
ZSH_THEME="../../../zsh-extra/minimal/minimal"
#ZSH_THEME="kardan"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git brew)

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"
#

source $ZSH/oh-my-zsh.sh
export CFLAGS=-I/usr/lib/python2.7/site-packages/numpy/core/include/

# Share history aross zsh sessions
# Appends every command to the history file once it is executed
setopt inc_append_history
# Reloads the history whenever you use it
setopt share_history

# bind the up/down arrows to complete the previous command matching up tot eh cursor
bindkey '\e[A' history-search-backward
bindkey '\e[B' history-search-forward

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='vim'
fi

#source tmuxinator settin
#source ~/.bin/tmuxinator.zsh

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# colored completion - use my LS_COLORS
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}

alias ll="ls -alh"

alias ytrip="youtube-dl -f 'bestaudio' --extract-audio --audio-format mp3 --audio-quality 0 --output \"%(title)s.%(ext)s\""

BASE16_SHELL=$HOME/.config/base16-shell/
[ -n "$PS1" ] && [ -s $BASE16_SHELL/profile_helper.sh ] && eval "$($BASE16_SHELL/profile_helper.sh)"

# OS X sepcific settings
if [[ "$OSTYPE" = "darwin"* ]]; then
  #Set colors to match iTerm2 Terminal Colors
  export TERM=xterm-256color

  #alias python="python3.5"
  #alias pip="pip3.5"
  alias matlab="/Applications/MATLAB_R2015b.app/bin/matlab -nodesktop"

  alias edit="mvim"

  alias rm='safe-rm'
  alias trash="trash"

  if [[ -e ~/catkin_ws/install_isolated/setup.zsh ]] ; then
    source ~/catkin_ws/install_isolated/setup.zsh
  fi

fi

#linux specific settings
if [[ "$OSTYPE" = "linux"* ]]; then
  LD_LIBRARY_PATH=/usr/local/lib:LD_LIBRARY_PATH:/usr/local/cuda-7.5/lib64
  # pkg-config path (for OMPL)
  export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH

  export PATH=$PATH:~/Developer/clion-2016.2.2/bin/

  if [[ -e /opt/ros/indigo/setup.zsh ]]; then
    source /opt/ros/indigo/setup.zsh
  fi
  if [[ -e ~/catkin_ws/devel/setup.zsh ]]; then
    source ~/catkin_ws/devel/setup.zsh
  fi
  # prevent use of rm directly
  # (you can explicitly run rm with \rm)
  alias rm='safe-rm'
  alias trash="trash-put"
fi


source ~/.dotfiles/zsh-extra/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

