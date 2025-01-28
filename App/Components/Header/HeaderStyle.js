import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from 'Theme'

const { size, types } = Fonts

const style = StyleSheet.create({
  container: {
    ...ApplicationStyles.centeredContainer,
  },

  text: {
    fontSize: size.title,
    color: Colors.black,
    fontFamily: types.interR.fontFamily,
  },

  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },

})

export default style
