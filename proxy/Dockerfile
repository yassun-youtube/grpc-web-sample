FROM envoyproxy/envoy:v1.17.0
COPY ./envoy.yml /etc/envoy/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml
EXPOSE 8080
