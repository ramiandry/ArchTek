import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import image1 from '../assets/images/swipe1.jpg';
import image2 from '../assets/images/swipe2.jpg';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Index = () => {
  // Création de la référence pour PagerView
  const pagerViewRef = useRef(null);

  const handleNavigate = () => {
    router.push('/Tab');
  };

  // Fonction pour passer à la page suivante
  const goToNextPage = () => {
    if (pagerViewRef.current) {
      pagerViewRef.current.setPage(1); // Change la page, ici on va à la page 1
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <PagerView style={styles.container} initialPage={0} ref={pagerViewRef}>
          <ImageBackground source={image1} resizeMode="cover" style={styles.image} key={1}>
            <View style={styles.container2}>
              <Text style={styles.text}>Create Your Dream Home in Madagascar</Text>
              <Text style={styles.text2}>
                Long-term rental of villas with a guarantee of conformity with photographs
              </Text>
              <TouchableOpacity style={styles.button} onPress={goToNextPage}>
                <Text style={styles.text3}>Next</Text>
                <Ionicons name="arrow-forward-circle" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <ImageBackground source={image2} resizeMode="cover" style={styles.image} key={2}>
            <View style={styles.container2}>
              <Text style={styles.text}>Create Your Dream Home in Madagascar</Text>
              <Text style={styles.text2}>
                Long-term rental of villas with a guarantee of conformity with photographs
              </Text>
              <TouchableOpacity style={styles.button} onPress={() => handleNavigate()}>
                <Text style={styles.text3}>Get Started</Text>
                <Ionicons name="arrow-forward-circle" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </PagerView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '464646',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    color: '464646',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  text3: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#998675',
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
    width: '100%',
  },
  container2: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: 280,
    borderRadius: 20,
    position: 'absolute',
    left: '10%',
    bottom: '5%',
    padding: 30,
  },
});

export default Index;
