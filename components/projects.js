import React,{ useState} from 'react'
import {View, Text,TextInput,StatusBar,StyleSheet,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default function Projects(){
    const [project,setProject]= useState('');
    const [details,setDetails]= useState('');
    const [addProjects,setAddProjects]= useState([]);

    const addProject =()=>{
        if(project.length>0&&details.length>0)
        { 
            console.log("Adding")
            setAddProjects([...addProjects,{text:project,text2:details,key:Date.now()}])
            setProject('')
            setDetails('')    
        }
    }

    const deleteProject= (id)=>{
        setAddProjects(
            addProjects.filter((text)=>{
                if(text.key!==id)
                return true
            })
        )
    }

    return(
        <View style={styles.container} >
            <StatusBar hidden={true}/>
            <Text style={{
                fontSize:24,
                fontWeight: 'bold',
                }}>Enter Your Project Details</Text>
            <TextInput
            placeholder={"Project Name"}
            style={styles.name}
            value={project}
            onChangeText={text=>setProject(text)}/>
            <TextInput
            placeholder={"Project Details"}
            value={details}
            style={styles.detail}
            multiline={true}
            onChangeText={text=>setDetails(text)}/>
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Icon
            name={'plus'}
            size={30}
            color="red"
            onPress={addProject}
            style={{right:100,
            backgroundColor:'coral',
            borderRadius:15}}
             />
            <Icon
            name={'check-circle'}
            size={30}
            color="red"
            style={{backgroundColor:'yellow',
            borderRadius:10}} 
            />
            </View>
            {addProjects.map((val)=>(
               <>
                <Text style={styles.Pheading} >{val.text}</Text>
                    <Text style={styles.Pdetail} >{val.text2}</Text>
                    <Icon
                    name={"trash"}
                    size={20}
                    color={'coral'} 
                    onPress={()=>deleteProject(val.key)}/>
            </>
            ))}
            </View>

    )
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        width:Dimensions.get('screen').width - 30
    },
    Pheading:
    {
        fontSize:18,
        fontWeight: 'bold'
    },
    Pdetail:
    {
        fontSize:12
    },
    name:
    {
           borderWidth:1,
           borderColor:'black' ,
           margin:3
        },
        detail:
        {
            margin:3,
            borderWidth:1,
            borderColor:'black' 

    }
})