// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

import * as React from 'react'
import { AppRegistry } from 'react-native'

import EntypoFont from './../public/fonts/Entypo.ttf'
import AntDesignFont from './../public/fonts/AntDesign.ttf'
import EvilIconsFont from './../public/fonts/EvilIcons.ttf'
import FeatherFont from './../public/fonts/Feather.ttf'
import FontAwesomeFont from './../public/fonts/FontAwesome.ttf'
import FontistoFont from './../public/fonts/Fontisto.ttf'
import FoundationFont from './../public/fonts/Foundation.ttf'
import IoniconsFont from './../public/fonts/Ionicons.ttf'
import MaterialCommunityIconsFont from './../public/fonts/MaterialCommunityIcons.ttf'
import MaterialIconsFont from './../public/fonts/MaterialIcons.ttf'
import OcticonsFont from './../public/fonts/Octicons.ttf'
import SimpleLineIconsFont from './../public/fonts/SimpleLineIcons.ttf'
import ZocialFont from './../public/fonts/Zocial.ttf'

export const style = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
@font-face {
  src: url(${EntypoFont});
  font-family: Entypo;
}
@font-face {
  src: url(${EvilIconsFont});
  font-family: EvilIcons;
}
@font-face {
  src: url(${FontAwesomeFont});
  font-family: FontAwesome;
}
@font-face {
  src: url(${FeatherFont});
  font-family: Feather;
}
@font-face {
  src: url(${IoniconsFont});
  font-family: Ionicons;
}
@font-face {
  src: url(${FoundationFont});
  font-family: Foundation;
}
@font-face {
  src: url(${MaterialIconsFont});
  font-family: MaterialIcons;
}
@font-face {
  src: url(${MaterialCommunityIconsFont});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${ZocialFont});
  font-family: Zocial;
}
@font-face {
  src: url(${SimpleLineIconsFont});
  font-family: SimpleLineIcons;
}
@font-face {
  src: url(${OcticonsFont});
  font-family: Octicons;
}
@font-face {
  src: url(${FontistoFont});
  font-family: Fontisto;
}
@font-face {
  src: url(${AntDesignFont});
  font-family: AntDesign;
}
`

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [
      <style key="style-reset" dangerouslySetInnerHTML={{ __html: style }} />,
      getStyleElement(),
    ]
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body className="scrollbar-thin scrollbar-thumb-[#155fce] scrollbar-track-[#1140AC] scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-32 overflow-y-scroll bg-gradient-to-r from-gray-700 to-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
