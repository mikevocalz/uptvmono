import {
  View as RNView,
  ScrollView as RNScrollView,
  Text as RNText,
  Pressable as RNPressable,
  FlatList as RNFlatlist,
} from 'react-native'

import {
  Article as RNArticle,
  Header as RNHeader,
  Nav as RNNav,
  Section as RNSection,
  Footer as RNFooter,
  A as RNA,
} from '@expo/html-elements'

import { SolitoImage as RNImage } from 'solito/image'
import { styled } from 'nativewind'
import { MotiPressable as MtPressable } from 'moti/interactions'
import { MotiLink as MtLink } from 'solito/moti'

export const View = styled(RNView)
export const ScrollView = styled(RNScrollView)
export const FlatList = styled(RNFlatlist)
export const Text = styled(RNText)
export const Pressable = styled(RNPressable)
export const Image = styled(RNImage)

export const A = styled(RNA)
export const MotiPressable = styled(MtPressable)
export const MotiLink = styled(MtLink)
export const Article = styled(RNArticle)
export const Header = styled(RNHeader)
export const Section = styled(RNSection)
export const Footer = styled(RNFooter)
export const Nav = styled(RNNav)
