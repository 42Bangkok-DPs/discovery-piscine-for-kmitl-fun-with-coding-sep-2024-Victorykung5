if [ $# -eq 0 ]; then
    echo -n "No arguments supplied"
else
    for i in $(seq 1  $#); do
        mkdir "ex${!i}"
    done
fi