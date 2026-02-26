FROM golang:1.25.5-alpine AS builder

RUN apk add --no-cache git

WORKDIR /build

COPY src/go.mod src/go.sum ./
RUN go mod download

COPY ./src .

RUN CGO_ENABLED=0 GOOS=linux go build \
    -ldflags="-s -w -extldflags '-static'" \
    -trimpath \
    -o v2fly  \
    ./main

FROM alpine:latest

RUN apk --no-cache add ca-certificates tzdata gettext
RUN addgroup -S v2fly && adduser -S v2fly -G v2fly

COPY --from=builder /build/v2fly /app/v2fly

RUN mkdir /etc/v2ray/
RUN chown -R v2fly:v2fly /etc/v2ray/

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

RUN chown v2fly:v2fly /app/v2fly
USER v2fly

WORKDIR /app

CMD ["./entrypoint.sh"]
