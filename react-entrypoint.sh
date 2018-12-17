#!/bin/bash
until cd frontend
do
    echo "Waiting for react volume..."
    sleep 2;
done

until npm install
do
    echo "Waiting for dependencies to be ready..."
    sleep 2;
done


npm serve;