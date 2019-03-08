import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'
import '../styles/reset'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Wrapper from '../components/Wrapper'
import Menu from '../components/Menu'
import { injectGlobal } from 'emotion'

injectGlobal`
:root {
--color-base: #E6E3E1 ;
--color-secondary: #100B00 ;
--color-tertiary: #223843 ;
--color-highlight: #FE5F55 ;
--color-accent: #FBF2F0 ;
}
@media (prefers-color-scheme: dark) {
:root {
--color-base: #100B00;
--color-secondary: #E6E3E1;
--color-tertiary: #F4DAD3;
--color-highlight: #FE5F55;
--color-accent: #FCFCFC; 
 }
}

body {
  background: var(--color-base);
  color: var(--color-secondary);
}
h1,h2,h3,h4,h5,h6,a,strong {
  color: var(--color-secondary);
}
p {
  color: var(--color-secondary);
}
a{
  transition: all 0.5s;
  color: var(--color-secondary);
  &:hover {
  color: var(--color-highlight);
  }
}
svg {
  transition: all 0.5s;
  fill: var(--color-tertiary);
  &:hover {
    fill: var(--color-highlight);
  }
}
.bm-overlay, .bm-menu-wrap {
  background: var(--color-base);
}
.bm-cross {
  background: var(--color-tertiary);
}
.bm-burger-bars {
  background: var(--color-tertiary);
}
`

const Layout = ({ children, location }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <html lang="en" />
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/logo.png" />
        <link rel="apple-touch-icon" href="/logos/logo.png" />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Wrapper>
          <div id="outer-container">
            <Menu />
            <div className="siteContent" id="page-wrap">
              {children}
            </div>
          </div>
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

export default Layout
