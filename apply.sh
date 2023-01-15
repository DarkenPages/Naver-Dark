#!/bin/bash
echo ''
echo 'Injecting all required headers'
python3 injectors.py

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
  echo 'Job interrupted.'
fi
