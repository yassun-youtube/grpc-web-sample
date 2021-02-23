import * as grpcWeb from 'grpc-web';

import * as proto_helloworld_pb from '../proto/helloworld_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: proto_helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: proto_helloworld_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<proto_helloworld_pb.HelloReply>;

  sayRepeatHello(
    request: proto_helloworld_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_helloworld_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: proto_helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_helloworld_pb.HelloReply>;

  sayRepeatHello(
    request: proto_helloworld_pb.RepeatHelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<proto_helloworld_pb.HelloReply>;

}

