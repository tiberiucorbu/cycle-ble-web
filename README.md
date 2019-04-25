# Cycle Web App

This is an experimental app that enables a chrome powered page to connect to a Bluetooth Low Energy "Cycle Speed and Cadence" Service and display it's measurement

## Building

### Install the dependencies

```shell
npm ci
```

### Building the repo

```shell
npm run build
```

### Building only types

```shell
npm run build:types
```

### Type-Checking the repo

```shell
npm run type-check
```

And to run in --watch mode:

```shell
npm run type-check:watch
```

## Docker

Build it inside a container

### build

    docker build -t es-variants-build .

where `es-variants-build` is a name chosen by you. 

### run

cmd :

    docker run -v "%cd%/src:/src" es-variants-build

bash:
    
    docker run -v "$pwd/src:/src/src" es-variants-build

