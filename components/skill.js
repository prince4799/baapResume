import React,{ useState} from 'react'
import {View, Text,TextInput,ScrollView, Dimensions,TouchableHighlight,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import SkillSet from './skillset'

export default function Skill(){
    const [value,setValue]= useState('');
    const [skills,setSkill]= useState([]);

    const handleSkills =()=>{
        if(value.length>0)
        {
            setSkill([...skills,{text:value,key:Date.now()}])
            setValue('')
        }
    }

    const handleDeleteSkill =(id)=>{
        setSkill(
            skills.filter((skill)=>{
                if(skill.key!==id)
                return true
            }
            ))
    }

    return(
        <View style={styles.container}>
            <Text
            style={styles.heading}>Enter Your Skills</Text>
            <View style={{top:30,flexDirection:'row'}} >
            <TextInput
            value={value}
            returnKeyType={'done'}
            multiline={true}
            onChangeText={(text)=>setValue(text)} 
            style={styles.input} />
                <Icon
                name="plus"
                size={30} 
                color="#006"
                style={{padding:5 ,top:30,height:40 }}
                onPress={handleSkills}/>
            </View>
          {skills.map((val) => (
            <SkillSet
              text={val.text}
              key={val.key}
              handleDeleteSkill={() => handleDeleteSkill(val.key)}
            />
          ))}
        </View>
    )
}
const styles = StyleSheet.create({
    heading:
    {
        fontSize: 24,
        fontWeight: 'bold',
        width: null,
        top:30,
        alignSelf:'center'
        // bottom:700
    },
    container:
    {
        flex:1
    },
    input:
    {
        fontSize:18,
        borderWidth:0.5,
        width:250,
        top:30

    }
})