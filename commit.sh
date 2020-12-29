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
            echo '> feat successfull commited 🔥'
            break
            ;;
        "add:")
            git commit -m "add: $message"
            git push origin master
            echo '> add successfull commited ⚡'
            break
            ;;
        "fix:")
            git commit -m "fix: $message"
            git push origin master
            echo '> fix successfull commited 🐛'
            break
            ;;
        "refact:")
            git commit -m "refact: $message"
            git push origin master
            echo '> refact successfull commited 🚧'
            break
            ;;
        "chore:")
            git commit -m "chore: $message"
            git push origin master
            echo '> chore successfull commited 😎'
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

