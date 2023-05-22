import { A, H1, P, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { ScrollView, Text, } from 'app/design/TailwindComponents'
import { Platform, Image, useWindowDimensions } from 'react-native'
import { Card } from 'react-native-paper'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


export function TriviaScreen() {
  const { width, height } = useWindowDimensions();

  const isWeb = Platform.OS === 'web'

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      nestedScrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      className={` ${!isWeb ? 'bg-slate-600' : 'bg-transparent'} h-[100%] min-w-screen w-full `}>

      <Text className='text-white text-3xl text-center font-bold'>There is No Watch Party at the Moment</Text>


    </ScrollView>
  )
}