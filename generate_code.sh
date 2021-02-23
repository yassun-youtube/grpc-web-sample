#!/bin/sh

protoc proto/helloworld.proto \
       --js_out=import_style=commonjs:client/src/helloworld \
       --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:client/src/helloworld \
       --go-grpc_out=api/helloworld \
       --go_out=api/helloworld