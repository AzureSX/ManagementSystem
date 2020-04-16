git pull

npm install && npm run build

#删除容器
docker rm -f ManagementSystem &> /dev/null

#启动容器
docker run -d --restart=on-failure:5\
    -p 8080:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name ManagementSystem nginx
