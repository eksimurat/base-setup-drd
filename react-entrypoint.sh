#!/bin/bash
until cd frontend
do
    echo "Waiting for react volume..."
    sleep 2;
done


npm start;