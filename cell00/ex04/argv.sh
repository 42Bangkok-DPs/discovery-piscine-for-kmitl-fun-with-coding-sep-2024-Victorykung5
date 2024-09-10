if [ $# -eq 0 ]; then
    echo "No arguments provided."
else
    for i in $(seq 1  $#); do
        if [ "$i" -eq 1 ]; then
            echo -n "${!i}"
        elif [ "$i" -eq 4 ]; then
            break
        else
            echo
            echo -n "${!i}"
        fi
    done
fi