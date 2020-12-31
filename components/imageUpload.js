import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload(){
    
    const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
  
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri });
    };
  
    if (selectedImage !== null) {
      return (
        <View >
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
          <TouchableOpacity onPress={console.log("saving")} >
            <Text >Ok</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
        <View >
          <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
          <Text >
            To share a photo from your phone with a friend, just press the button below!
          </Text>
    
          <TouchableOpacity onPress={openImagePickerAsync} >
            <Text >Pick a photo</Text>
          </TouchableOpacity>
        </View>
      );
    }
    const styles = StyleSheet.create({
        logo:
        {
            height:50,
            width:50,
        },
        thumbnail: {
            width: 300,
            height: 300,
            resizeMode: "contain"
          }
    })