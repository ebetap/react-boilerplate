# React SSR Boilerplate

## Features:
- Redux,
- Redux Thunk,
- React router 4,
- React Async Component,
- React Jobs,
- Redux Form,
- React Helmet
- JSS

## Commands
- Run development: `npm run develop`
- Build: `npm run build`

## To do
- Testing environment setup

### FAQ

### Server Side API Fetching?
All API fetching should be come from HOC `withJob`. This will make sure the data loading is done on the server.

Example on `/shared/pages/landing/index.js`
```
  withJob({
    work: ({ getPosts, posts }) => {
      if (posts && posts.length) return true;
      return getPosts();
    },
  }),
```

### Styling?
Styling on this project will use `JSS` instead of `CSS`. More information about it can be found on https://github.com/cssinjs/jss

### Project structure?
- `config` (All project configurations go here)
- `client` (configuration for client side javascript. Don't touch if you're not sure)
- `server` (configuration for server side javascript. Don't touch if you're not sure)
- `shared` (working directory)
  - `assets` 
  - `components` (all reusable components go here)
  - `pages` (screens, all router related React components go here)
  - `redux` (reducers, actions, selectors)
  - `svgs` (svgs components)
  - `utils`(helper functions)
- `configure-store,js`
- `route-reducers.js` (All reducers go here)
