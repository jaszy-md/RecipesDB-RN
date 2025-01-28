import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Images from 'Theme/Images'
import styles from './HomeScreenStyle';

const HomeScreen = () => (
  <ImageBackground source={Images.HomeBackground} style={styles.background}>
    <View style={styles.overlay}>
      <Text style={styles.text}>Find your Recipes</Text>
    </View>
  </ImageBackground>
);

export default HomeScreen;
