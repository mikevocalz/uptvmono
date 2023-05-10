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

import star from '../../../../apps/expo/assets/images/star.png'

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
      <View className='bg-slate-900 rounded-3xl shadow-xl items-center justify-center'
        style={{
          flexShrink: 1,
          aspectRatio: 4 / 3,
          paddingHorizontal: wp(10),
          paddingVertical: wp(20)
        }}>
        <Card.Content>
          <Text className='text-white text-3xl text-center font-bold'>There is No Watch Party at the Moment</Text>
          <Text className='text-white text-xl text-center font-bold'>As soon as one starts you will be notified</Text>
        </Card.Content>
        <View className='absolute right-4 bottom-0'>
          <Image
            alt='star'
            resizeMode='contain'
            style={{
              height: 60,
              width: 60,
            }}
            source={star}
          />
        </View>
      </View>
    </ScrollView>
  )
}