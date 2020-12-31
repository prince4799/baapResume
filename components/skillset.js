import React from 'react'
import {View,Text,StyleSheet,TouchableHighlight,Dimensions,SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function SkillSet ({text,handleDeleteSkill}){
    return(
        <SafeAreaView style style={styles.container}>
        <Icon
            name="trash"
            size={30}
            color="#900"
            onPress={handleDeleteSkill}
            style={{backgroundColor:'coral',right:10,height:35}}
            />
            <Text
            style={{fontSize:18,right:10}}>{'\u2022'}{text}</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:
    {
        top:80,
        // justifyContent:'flex-start',
        flexDirection:'row',
        width:Dimensions.get('screen').width-30,
        margin:3,
        right:5
    }
})