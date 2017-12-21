# Mithril Redux Webpack Starter

An opinionated starter kit for building projects using [Mithril](https://mithril.js.org), [Redux](https://redux.js.org), and [Webpack](https://webpack.js.org).

The starter uses [oncomouse/mithril-redux](https://github.com/oncomouse/mithril-redux) to connect the Redux store to Mithril components. It also includes [redux-saga](https://redux-saga.js.org), [redux-persist](https://github.com/rt2zz/redux-persist), and [ramda](https://ramdajs.com).

You can use either [hyperscript](https://mithril.js.org/hyperscript.html) or [JSX](https://mithril.js.org/jsx.html) for your view components and containers. Components can be either objects or ES6 classes.

## Stylesheets

Include global SCSS code in `app/stylesheets/global.scss`. Support for [CSS Modules](https://github.com/css-modules/css-modules) and [Tachyons](https://github.com/tachyons-css/tachyons-sass) is included. CSS files are processed via PostCSS and loaded via ExtractTextPlugin at build.