'use client';
import React, { ReactNode, Fragment } from 'react'
import { Link, } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";

import { View } from '../../design/view';
import { SolitoImage } from 'solito/image';
import Logo from '../../../../apps/expo/assets/images/debron-logo-web.svg';
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
      name: 'Work',
      protected: false,
    },
    {
      pathname: '/movies',
      isActive: (pathname) => pathname.startsWith('/movies'),
      name: 'About',
    },
    {
      pathname: '/schedule',
      isActive: (pathname) => pathname.startsWith('/schedule'),
      name: 'Contact',
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
        className='bg-[#a17a74] h-[70px] fixed top-0 left-0 right-0 z-10 px-3 flex-row items-center justify-center' >
        <View
          className='flex-1  flex-row items-center justify-center max-w-7xl justify-between '>
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
              width={350} height={210}
              style={{
                marginTop: 0,
                marginLeft: 10,
                height: 80,
                width: 320
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
                        className={`mr-5 text-[26px] stroke-2 stroke-white drop-shadow-2xl uppercase font-bold font-[Bebas-Regular] tracking-widest leading-90
    ${active ? 'text-[#c7dedc]' : 'text-[#136f63]'}
    
    `}        >
                        {tab.name}
                      </Text>
                    </MotiLink>
                  }
                </Fragment>

              )
            })}
            <View className='h-[30px] items-center justify-center flex-row space-x-5'>
              {
                isMobile &&
                <SideBar />

              }</View>
          </Nav>

        </View>
      </Header>
      <View
        className="self-center container min-w-screen items-center min-h-full max-w-7xl mt-[110px] "
      >
        {children}


      </View>
      <FooterComponent />

    </>
  )
}


export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
