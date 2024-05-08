FROM golang:latest

WORKDIR /app

COPY src .

RUN go mod download

ENTRYPOINT ["go", "run", "main.go"]

EXPOSE $PORT
