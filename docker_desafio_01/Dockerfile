FROM golang:1.7.3 AS builder

WORKDIR /src/
COPY src/desafio_01.go go.* /src/
RUN go build -o /bin/desafio_01

FROM scratch
COPY --from=builder /bin/desafio_01 /bin/desafio_01
ENTRYPOINT ["/bin/desafio_01"]