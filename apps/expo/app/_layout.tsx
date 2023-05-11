
import { Provider } from 'app/provider'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { Asset } from 'expo-asset';

import {
  Inter_600SemiBold
} from '@expo-google-fonts/inter';

import { LeagueGothic_400Regular } from '@expo-google-fonts/league-gothic'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {

  LogBox.ignoreAllLogs();

  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require('../../../node_modules/react-native-paper/src/assets/back-chevron.png')])
    ]);
  };

  const [loaded, error] = useFonts({
    Inter_600SemiBold, LeagueGothic_400Regular,
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    "Real-SemiBold": require('../assets/fonts/realpolitiksemibold.ttf'),
    "Orbitron-Medium": require('../assets/fonts/OrbitronMedium500.ttf'),
    "Orbitron-Bold": require('../assets/fonts/OrbitronBold700.ttf'),
    ...FontAwesome.font,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    loadResourcesAsync()
  }, []);


  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Provider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ headerShown: true, presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </Provider>
    </>
  );
}
