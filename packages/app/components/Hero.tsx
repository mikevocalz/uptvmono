import {
  ActivityIndicator, Dimensions, Pressable, Animated
} from 'react-native';


import { useNavigation, useRouter, useSearchParams, Stack } from "expo-router";
import { FC, useState, useRef, useMemo, useEffect, useLayoutEffect } from 'react';
import { Text, View, Image } from 'app/design/TailwindComponents';


import Carousel from 'react-native-reanimated-carousel';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


const Hero: FC<any> = ({ images }) => {
  const img = images[1]
  const width = Dimensions.get('window').width;

  const [imgIndex, setImgIndex] = useState<number>(0)

  const scrollX = useRef(new Animated.Value(0)).current;
  const isCarousel = useRef<any>(null);

  const handleIndex = (index: number) => {
    setImgIndex(index)
  }

  const setState = useState({})[1]
  const fakeThis: any = useMemo(() => ({ setState }), [setState])

  // with useLayoutEffect()
  useLayoutEffect(() => {
    loc(fakeThis)

    return () => {
      rol();
    }
  }, [fakeThis])

  let dimensions = Dimensions.get("window")
  let imageHeight = Math.round((dimensions.width * 12) / 22);
  let imageWidth = width;

  return (
    <Carousel
      loop
      width={width}
      height={imageHeight}
      autoPlay={true}
      data={images}
      snapEnabled
      // autoPlayReverse
      // vertical
      scrollAnimationDuration={10000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={({ item, index }: any) => {

        return (
          <View className='relative aspect-video object-contain w-full h-full max-h-500  max-w-900 bg-red-500 overflow-hidden'>

            <Image
              unoptimized
              fill
              className='max-h-500  max-w-900 faspect-video'
              alt={`${item.title}`}
              src={item.imgUrl}
              contentPosition={{ top: 0, right: '50%', }}
              resizeMode="cover"
              //width={width}
              //height={imageHeight}
              style={{

              }}
            />


            <View
              className='flex flex-col absolute md:left-10 md:bottom-30 left-4 bottom-10  '>
              <Text className='text-white font-bold font-[Inter_600SemiBold] text-2xl md:text-5xl'>
                {item.title}
              </Text>
              <Text className='text-white font-bold text-xl mt-1'>
                {item.subTitle}
              </Text>
              <View className='flex-row space-x-4 items-center'>
                <Text className='text-zinc-300  md:text-2xl text-lg'>
                  {item.time}
                </Text>
                {item.isNew === true &&
                  <Text className='bg-sky-600 p-2 rounded-lg'>New</Text>
                }
              </View>
            </View >

          </View >
        )
      }
      }
    />

  )
}


export default Hero