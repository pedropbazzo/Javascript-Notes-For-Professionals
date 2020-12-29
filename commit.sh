#!/bin/bash
# Automate commit process

git status
git add .

echo '> commit message:'
read message

PS3='Type of commit: '
options=("feat:" "add:" "fix:" "refact:" "chore:" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "feat:")
            git commit -m "feat: $message"
            git push origin master
            ;;
        "add:")
            git commit -m "add: $message"
            git push origin master
            ;;
        "fix:")
            git commit -m "fix: $message"
            git push origin master
            ;;
        "refact:")
            git commit -m "refact: $message"
            git push origin master
            ;;
        "chore:")
            git commit -m "chore: $message"
            git push origin master
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

