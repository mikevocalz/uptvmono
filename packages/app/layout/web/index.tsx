'use client';
import React, { ReactNode, Fragment } from 'react'
import { Link, } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import { View } from '../../design/view';
import { SolitoImage } from 'solito/image';
import Logo from '../../../../apps/expo/assets/images/logo.svg';
import FooterComponent from 'app/components/FooterComponent';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import { Text } from 'app/design/typography'
import { ScrollView } from 'app/design/view'

import { StyleSheet, useWindowDimensions } from 'react-native'
import { Header, Nav, A } from 'app/design/TailwindComponents';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideBar from 'app/components/Sidebar';
import { Platform } from 'react-native';


const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
    {
      pathname: '/',
      isActive: (pathname) => pathname === '/',
      name: 'Home',
    },
    {
      pathname: '/shows',
      isActive: (pathname) => pathname.startsWith('/shows'),
      name: 'Shows',
      protected: false,
    },
    {
      pathname: '/movies',
      isActive: (pathname) => pathname.startsWith('/movies'),
      name: 'Movies',
    },
    {
      pathname: '/schedule',
      isActive: (pathname) => pathname.startsWith('/schedule'),
      name: 'Schedule',
    },
  ]



// this will only run on Web
function WebLayout({ children }: { children: ReactNode }) {

  const { pathname } = useRouter()

  const { width, height } = useWindowDimensions();

  const isMobile = width < 600



  return (
    <>
      <Header
        className='bg-slate-900  fixed top-10 left-0 right-0 z-10 pb-70 px-3 flex-row items-center justify-center' >
        <View
          className='h-[40px]  w-full fixed top-0 left-0 right-0 bg-slate-800 pb-70 flex-row items-center justify-start   '>

          <A href={'http://www.uptv.com'} className='h-[30px] sm:ml-[35%] items-center border-r-[1px] border-white'>
            <SolitoImage
              alt='pruLTD-logo'
              src={Logo}
              resizeMode='contain'
              width={100} height={40}
              style={{
                marginTop: 3,
                marginLeft: 10,
                height: 25,
                width: 100,
                marginRight: 15
              }}
            />
          </A>
          <A href={'https://upfaithandfamily.com'} className='h-[30px] items-center border-r-[1px] border-white'>
            <SolitoImage
              alt='pruLTD-logo'
              src={'https://uptv.com/wp-content/themes/uptv2020/img/upff-logo-white.svg'}
              resizeMode='contain'
              width={100} height={40}
              style={{
                marginTop: 3,
                marginHorizontal: 30,
                height: 25,
                width: 100,

              }}
            />
          </A>
          <A href={'https://aspire.tv'} className='h-[30px] items-center'>
            <SolitoImage
              alt='pruLTD-logo'
              src={'https://uptv.com/wp-content/themes/uptv2020/img/aspiretv-logo-white.svg'}
              resizeMode='contain'
              width={100} height={40}
              style={{
                marginTop: 2,
                marginHorizontal: 30,
                height: 30,
                width: 100,

              }}
            />
          </A>
        </View>
        <View
          className='flex-1 h-[70px] flex-row items-center justify-center max-w-7xl justify-between '>
          <Link
            href={'/'}
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            <SolitoImage
              alt='pruLTD-logo'
              src={Logo}
              resizeMode='contain'
              width={250} height={110}
              style={{
                marginTop: 0,
                marginLeft: 10,
                height: 40,
                width: 100
              }}
            />
          </Link>

          <Nav
            className='flex-row items-end gap-3 z-10'
          >
            {tabs.map((tab) => {
              const active = tab.isActive(pathname)
              // if (tab.protected && !auth) {
              //   return null
              // }
              return (

                <Fragment key={tab.pathname}>
                  {!isMobile &&
                    <MotiLink
                      href={tab.pathname}
                      animate={({ hovered, pressed }) => {
                        'worklet'

                        return {
                          scale: pressed ? 0.95 : hovered ? 1.2 : 1,
                        }
                      }}
                      transition={{
                        type: 'timing',
                        duration: 150,
                      }}
                    >
                      <Text selectable={false}
                        className={`mr-4 text-xl uppercase font-bold font-[Inter_600SemiBold] tracking-widest leading-90
    ${active ? 'text-blue-400' : 'text-[#fff]'}
    
    `}        >
                        {tab.name}
                      </Text>
                    </MotiLink>
                  }
                </Fragment>

              )
            })}
            <View className='h-[30px] items-center justify-center flex-row space-x-5'>
              {!isMobile &&
                <Link href={'/discover'}
                  style={{
                    marginLeft: width < 400 ? 500 : 30

                  }}
                >
                  <Icon.Button
                    style={{
                      height: 35,
                      width: 35,
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 4,
                      marginLeft: width < 400 ? 500 : 30
                    }}
                    backgroundColor={'transparent'}
                    name="search" size={30} color="#fff" onPress={() => null} />
                </Link>
              }
              {
                isMobile &&
                <SideBar />

              }</View>
          </Nav>

        </View>
      </Header>
      <View
        className="self-center container min-w-screen items-center min-h-full   max-w-7xl mt-[110px] "
      >
        {children}


      </View>
      <FooterComponent />

    </>
  )
}


export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
