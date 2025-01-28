import React from 'react'
import { View, Image } from 'react-native'
import style from './HeaderStyle'
import Images from 'Theme/Images'

const Header = () => {
  return (
    <View style={style.container}>
      <Image source={Images.HeaderLogo} style={style.logo} />
    </View>
  )
}

export default Header
