#!/bin/bash
gitPull(){
  echo '开始拉取'
  pullResult=$(git pull)
  echo $pullResult
  if [ "$pullResult"x = "Already up-to-date."x ]; then
    echo '拉取完成'
  elif [ "$pullResult"x = "Already up to date."x ]; then
    echo '拉取完成'
  elif [ "$pullResult"x = "已经是最新的。"x ]; then
    echo '拉取完成'
  else
      echo "远程有更新，请确认拉取结果后重试"
      exit
  fi
}
msg=$1 # $1 为第一个参数
if [ -n "$msg" ]; then
  git add -A
  git commit -m"$msg"
  gitPull
  git status
  read -r -p "请输入需要push到的远程分支" input
  if [ -n "$input" ]; then
    git push origin $input
  else 
      echo "请输入远程分支"
      exit
  fi    
else
  echo "请添加注释"
fi