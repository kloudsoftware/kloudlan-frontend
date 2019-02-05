#!/bin/bash
if [ $# = 0 ]
        then
                echo "Please pass the game name as parameter"
                exit
        else
				wget https://static-cdn.jtvnw.net/ttv-boxart/$1-400x533.jpg
fi
