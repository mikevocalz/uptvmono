const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    '@expo/html-elements',
    '@expo/vector-icons',
    'expo-router',
    'react-native-safe-area-context',
    'react-native-vector-icons-for-web',
    'react-native-vector-icons',
    'react-native-gesture-handler',
    'nativewind',
    '@gorhom/bottom-sheet',
    '@shopify/flash-list',
    'recyclerlistview',
    'expo-asset',
    'react-native-size-matters',
    'react-native-responsive-screen',
    'react-native-paper',
    'react-native-svg',
    'react-native-image-slider-banner',
    'zeego',
    'react-native-responsive-image-view',
    'react-native-reanimated-carousel',
  ],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ttf|png|jpg|jpeg|svg)$/,
      loader: 'url-loader', // or directly file-loader
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
}

module.exports = withExpo(nextConfig)
