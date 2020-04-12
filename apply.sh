#!/bin/bash
echo 'Updating entire repository components...'
git submodule update --remote

echo ''
echo 'All components are ready. Executing compression...'
npm run compress

echo ''
echo 'Would you like to commit?'
read -p "Return [Y] to continue. Return other to quit: " flag

if [ "${flag}" = "y" ] || [ "${flag}" = "Y" ]; then
  read -p "Enter commit message: " message
  echo "${message}"
  git add .
  git commit -m "${message}"
  git push origin master
else
  echo ''
  echo 'Quitting from commitment. Bye.'
fi