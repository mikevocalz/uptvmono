import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import LogoTitle from 'app/components/LogoTitle'
import { Avatar } from 'react-native-paper';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#bae6fd',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarLabelStyle: {
          fontFamily: 'Inter_600SemiBold',
          fontSize: 14,
          textTransform: 'uppercase',
          marginBottom: -2,
          letterSpacing: 2
        },
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: "#0f172a",

        },
        headerTitle: () => <LogoTitle width={70} height={45} />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                // <FontAwesome
                //   name="user-circle-o"
                //   size={25}
                //   color={'#cbd5e1'}
                //   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                // />
                <Avatar.Image size={40} source={{ uri: "https://media.licdn.com/dms/image/C4E03AQG7C1E5Npkbuw/profile-displayphoto-shrink_800_800/0/1566231506479?e=1689206400&v=beta&t=Srcle5r6uVrLE8u29fUS_AS75tmdW5KAvl7uf1wIz8I" }}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, borderRadius: 40 / 2, borderColor: '#fff' }} />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Schedule',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Trivia',
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}
