if [ ! -f ./secret ]
then
    echo "You need the secret deployment codez... see Jen!"
    exit -1
fi

source secret

echo "Deploying with the credentials found in ./secret (access key  $ACCESS_KEY )"

middleman sync
