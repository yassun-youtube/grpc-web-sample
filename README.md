# gRPC Web サンプル

## Setup

```
# client
cd client
yarn
# proxy
cd proxy
docker build -t <proxy-name> .
```

## Launch

```
# Server
cd api
go run server.go
# client
cd client
yarn dev
# proxy
docker run -it -p 8080:8080 <proxy-name>

# Access Web Site
http://localhost:5000
```
