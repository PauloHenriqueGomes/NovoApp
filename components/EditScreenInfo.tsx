import React, { useState } from 'react';
import { StyleSheet, ImageBackground, TextInput, View, Button, Alert, Image } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text } from './Themed';

import Colors from '@/constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://storage.googleapis.com/concursos/5625.json');
      const data = await response.json();
      Alert.alert('API Response', JSON.stringify(data));
      console.log('API Response:', data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data');
    }
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/imagem2.jpg')} 
      style={styles.backgroundImage}
    >
      <View>
        <View style={styles.getStartedContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter text here"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button title="Game" onPress={fetchData} />
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Open up the code for this screenn:
          </Text>



          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Olá Mundoo!
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <ExternalLink
            style={styles.helpLink}
            href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              Compre com mais facilidade
            </Text>
            <TextInput style={styles.input} placeholder="Enter text here" />
          </ExternalLink>
          
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('@/assets/images/pic1.jpg')} style={styles.image} />
          <Image source={require('@/assets/images/pic2.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('@/assets/images/pic3.jpg')} style={styles.image} />
          <Image source={require('@/assets/images/pic4.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('@/assets/images/pic5.jpg')} style={styles.image} />
          <Image source={require('@/assets/images/pic6.jpg')} style={styles.image} />
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
