import App from './App';
import React from 'react';
import get from 'lodash/get'
import { StaticRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import initStore from "./redux/createStore";
import serialize from "serialize-javascript";
import user from "./redux/stores/user";
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ?
    assets[entrypoint].css.map(asset=>
      `<link rel="stylesheet" href="${asset}">`
    ).join('') : '' : '';
};

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const store = initStore({
      user: {
        ...user,
        // isLoggedIn: Boolean(get(req, "cookies.token", 'false')),
        isLoggedIn: true,
      },
    });
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    // Grab the initial state from our Redux store
    const finalState = store.getState();
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
             ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }

    </head>
    <body>
        <div id="root">${markup}</div>
                        <script>
                  window.__PRELOADED_STATE__ = ${serialize(finalState)};
        </script>
    </body>
</html>`
      );
    }
  });

export default server;