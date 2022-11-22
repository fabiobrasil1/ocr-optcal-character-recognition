

## Installation

It is crucial to install tesseract on your operating system. Installation depends on the operating system you use.

In my scenario I use a macbook so the easiest way to install was:

```bash
brew instalar tesseract
```

Once installed, we can now install the npm package with:

```bash
$ npm i --save node-tesseract-ocr
```

Install Multer for file upload

```bash
$ npm i -D @types/multer
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
