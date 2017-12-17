# Mithril Redux Webpack Starter

An opinionated starter kit for building projects using [Mithril](https://mithril.js.org), [Redux](https://redux.js.org), and [Webpack](https://webpack.js.org).

The starter uses [oncomouse/mithril-redux](https://github.com/oncomouse/mithril-redux) to connect the Redux store to Mithril components. It also includes [redux-saga](https://redux-saga.js.org), [redux-persist](https://github.com/rt2zz/redux-persist), and [ramda](https://ramdajs.com).

## Stylesheets

Include global SCSS code in `app/stylesheets/global.scss` and build CSS modules from the `app/stylesheets/components` directory. CSS files are processed via PostCSS and loaded via ExtractTextPlugin at build.