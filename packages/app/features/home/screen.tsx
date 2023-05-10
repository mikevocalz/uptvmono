import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import Hero from 'app/components/Hero'
import { ScrollView, Image } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions } from 'react-native'

import CardRow from 'app/components/CardRow'
import CardPortraitRow from 'app/components/CardRow copy'

import { Chip } from 'react-native-paper';

const isWeb = Platform.OS === 'web'
import { cardData, images, upcoming, upcomingRev } from 'app/store/data'

import img from '../../../../apps/expo/assets/images/ad.png'


export function HomeScreen() {
  const { width, height } = useWindowDimensions();

  const newMov = [...upcoming].sort(() => Math.random() - 4);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        width: width,
        alignItems: 'center',
        paddingBottom: 200
      }}
      className={` ${!isWeb ? 'bg-slate-600' : 'bg-transparent'} flex-1  max-w-7xl min-h-screen min-w-screen `}>

      <Hero images={images} />
      <View style={{ width: width }}
        className='px-2  overflow-visible'>
        <CardRow title='Movies' cardData={cardData} />

        {isWeb &&
          <Image
            unoptimized
            src={img}
            alt="ad Photo"

            resizeMode='contain'
            width={500}
            height={240}
            style={{
              flex: 1,
              alignSelf: 'center',
              width: 500,
              height: 200
            }}
          />
        }

        <CardPortraitRow title='Upcoming Movies' cardData={upcoming} />

        <CardPortraitRow title='Featured Movies' cardData={upcomingRev} />


      </View>


    </ScrollView >
  )
}
