IP_ADDR=$(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}')
echo "LOCAL_IP_ADDR=${IP_ADDR}" >> .env