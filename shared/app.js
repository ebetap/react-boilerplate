import React from 'react';
import Helmet from 'react-helmet';
import config from '../config';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';

class App extends React.Component {
  componentDidMount() {
    // Remove jss string generated by server
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{config('htmlPage.defaultTitle')}</title>
          <meta name="application-name" content={config('htmlPage.defaultTitle')} />
          <meta name="description" content={config('htmlPage.description')} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="msapplication-TileColor" content="#2b2b2b" />
          <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
          <meta name="theme-color" content="#2b2b2b" />
          <title>{config('htmlPage.defaultTitle')}</title>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#00a9d9" />
          <link rel="icon" type="image/png" href="/favicons/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="/favicons/favicon-128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#2b2b2b" />
          <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="/favicons/mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png" />
          <link rel="manifest" href="/manifest.json" />
          <style>
            {'html { box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; } *, *::before, *::after { box-sizing: inherit; } body { background-color: #fff; margin: 0; padding: 0; font-family: -apple-system, "BlinkMacSystemFont", "Helvetica Neue", "Segoe UI", sans-serif; font-size: 14px; line-height: 1.5; color: #445d6e; font-variant-ligatures: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; overflow-x: hidden; } button, input, select, textarea { font: inherit; margin: 0; } a { text-decoration: none; } h1,h2,h3,h4,h5,h6 { margin-top: 0; margin-bottom: 0 } h1 { font-size: 32px; font-weight: 600 } h2 { font-size: 24px; font-weight: 600 } h3 { font-size: 20px; font-weight: 600 } h4 { font-size: 16px; font-weight: 600 } h5 { font-size: 14px; font-weight: 600 } h6 { font-size: 12px; font-weight: 600 }'}
          </style>
        </Helmet>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;