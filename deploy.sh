if [ ! -f ./secret ]
then
    echo "You need the secret deployment codez... see Jen!"
    exit -1
fi

source secret

echo $ACCESS_KEY 
echo ";;;;;"
middleman sync
