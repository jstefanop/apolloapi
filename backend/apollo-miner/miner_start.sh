#!/bin/bash

cd /opt/apolloapi/backend/apollo-miner
settings=$(cat miner_config)

start_hashboards()
{
    while [ $1 ];
            do
            screen -dmS miner ./fb-apollo-miner -comport $ports -ao_mode 1 $settings
            sleep .1
            shift
    done
}

#reset internal hashboard
gpio write 0 0
sleep .5
gpio write 0 1

sleep 10
#start internal hashboard

screen -dmS miner ./fb-apollo-miner -comport /dev/ttyS1 -ao_mode 1 $settings

#find and start external hashboards

ports=$(ls /dev/ttyACM*)
start_hashboards $ports

echo "Started"
