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
echo $msg
if [ -n "$msg" ]; then
  git add -A
  git commit -m"$msg"
  gitPull
  git status
  echo "请最后完成push"
else
  echo "请添加注释"
fi