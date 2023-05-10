import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { ScrollView } from 'app/design/TailwindComponents'
import { useWindowDimensions } from 'react-native'

export function ProfileScreen() {
  const { width, height } = useWindowDimensions();

  const isWeb = width < 600

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      nestedScrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: height,
        alignItems: 'center'
      }}
      className={` ${!isWeb ? 'bg-slate-600' : 'bg-transparent'} h-[100%] min-w-screen w-full pb-[200px]`}>
      <H1>Welcome to Solito.</H1>

    </ScrollView>
  )
}