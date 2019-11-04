The application uses the endpoint /API/Guess/?player?guess, the endpoint has a specific number the user can guess. The answer is 70

There is only one page and which uses three components, GNHeader which stands for GuessNumberHeader,
GNMessageContainer to report get all users feedback, and a GNPlayerContainer component which then handles two player components.

The Application is SSR with express node.js

The store holds the values for the client and is used for most of the components. 




# guessthenumberapp

> Three players guess the number to win the game


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
# GuessTheNumber
