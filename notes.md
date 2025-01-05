# Docker

```bash
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql
docker exec -it mysql bash

docker build -t portfolio-pro-admin . && \
docker run -d --name portfolio-pro-admin -p 3000:3000 portfolio-pro-admin
docker exec -it portfolio-pro-admin /bin/sh

docker stop portfolio-pro-admin && \
docker rm portfolio-pro-admin && \
docker rmi portfolio-pro-admin

usr/share/nginx/html
/etc/nginx/nginx.conf
```

# SQL

```sql
mysql -u root -p
```

```sql
show databases;
```

```sql
create database `portfolio-pro`;
```

```sql
drop database portfolio;
```

```sql
create table blog (
    id bigint not null auto_increment,
    content tinytext,
    title varchar(255) not null,
    primary key (id)
) engine=InnoDB
```

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

# CURL

```bash
curl http://localhost:8080/blogs
```

```bash
curl -X POST http://localhost:8080/blogs -H "Content-Type: application/json" -d '{"title": "BlogOne", "content": "SomeContent"}'
```

# Pallette

https://colors.muz.li/palette/FF69B4/b34a98/ffe169/b39e4a/69ffff
#FF69B4
#b34a98
#ffe169
#b39e4a
#69ffff

# nginx

```conf
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;

    server {
        listen 3000;
        server_name localhost;

        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
}
```
