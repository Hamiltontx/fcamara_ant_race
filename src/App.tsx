import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Image,
  useWindowDimensions,
} from 'react-native';
import AntsProvider from './context/AntsProvider';
import Controls from './components/Controls'
import Ants from './components/Ants'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Image source={require('./assets/bg_race.png')} resizeMode="stretch" style={[styles.image, { height: height }]} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.backgroundStyle, { marginTop: 60 }]}>

        <AntsProvider>
          <>
            <Controls />
            <Ants />
          </>
        </AntsProvider>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    position: 'absolute',
    top: 60
  }
});

export default App;
