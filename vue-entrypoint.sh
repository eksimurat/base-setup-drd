until cd vue
do
    echo "Waiting for vue volume..."
    sleep 2
done

until npm install
do
    echo "Waiting for dependencies to be ready..."
    sleep 2
done


npm serve