
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    SafeAreaView
      } from 'react-native'
import { TextInput,IconButton,Colors } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';

export default function Form() {
    const [name, setText] = useState('');
    const [gmail, setGmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [college_name1, setCollege1] = useState('');
    const [college_name2, setCollege2] = useState('');
    const [college_name3, setCollege3] = useState('');
    const [grYear, setGrYear] = useState('');
    const [grScore, setGrScore] = useState('');
    const [hscYear, setHsc] = useState('');
    const [hscScore, setHscScore] = useState('');
    const [sscYear, setSsc] = useState('');
    const [sscScore, setSscScor] = useState('');
    const [obj, setObj] = useState('');
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar hidden={true} />
            <ScrollView style={styles.scrollView}
            keyboardDismissMode={'on-drag'}>
                <Text style={styles.heading}>Please Fill Basic Your Details</Text>
                <KeyboardAvoidingView style={{ top: 10, left: 30 }}>
                    <TextInput
                        style={styles.input}
                        label="Name"
                        mode={"outlined"}
                        value={name}
                        onChangeText={text => setText(text)}
                    />
                    <TextInput
                        style={[styles.input]}
                        label="Gmail"
                        value={gmail}
                        mode={"outlined"}
                        onChangeText={text => setGmail(text)}
                    />
                    <TextInput
                        style={[styles.input]}
                        label="Contact No."
                        value={contact}
                        mode={"outlined"}
                        maxLength={13}
                        onChangeText={text => setContact(text)}
                    />
                    <TextInput
                        style={[styles.input]}
                        label="Address"
                        value={address}
                        mode={"outlined"}
                        onChangeText={text => setAddress(text)}
                    />
                </KeyboardAvoidingView>
                <Text style={[styles.heading, { top: 25, fontSize: 20 }]}>Fill Your Education Details:</Text>
                <KeyboardAvoidingView style={{ top: 10, left: 30 }}>
                    <TextInput
                        style={styles.input}
                        label="University or College Name"
                        mode={"outlined"}
                        value={college_name1}
                        onChangeText={text => setCollege1(text)}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={[styles.input, { left: 0, width: 120, margin: 3 }]}
                            label="YOP"
                            keyboardType={"numeric"}
                            value={grYear}
                            mode={"outlined"}
                            maxLength={4}
                            onChangeText={text => setGrYear(text)}
                        />

                        <TextInput
                            style={[styles.input, { left: 30, width: 90, margin: 3 }]}
                            label="%age"
                            keyboardType={"numeric"}
                            value={grScore}
                            mode={"outlined"}
                            onChangeText={text => setGrScore(text)}
                            maxLength={4}
                        />

                    </View>
                    <TextInput
                        style={[styles.input]}
                        label="Intermediate college"
                        value={college_name2}
                        mode={"outlined"}
                        onChangeText={text => setCollege2(text)}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={[styles.input, { left: 0, width: 120, margin: 3 }]}
                            label="YOP"
                            keyboardType={"numeric"}
                            value={sscYear}
                            maxLength={4}
                            mode={"outlined"}
                            onChangeText={text => setSsc(text)}
                        />

                        <TextInput
                            style={[styles.input, { left: 30, width: 90, margin: 3 }]}
                            label="%age"
                            keyboardType={"numeric"}
                            value={sscScore}
                            mode={"outlined"}
                            maxLength={4}
                            onChangeText={text => setSscScor(text)}
                        />

                    </View>
                    <TextInput
                        style={[styles.input]}
                        label="HighSchool Name"
                        value={college_name3}
                        mode={"outlined"}
                        onChangeText={text => setCollege3(text)}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={[styles.input, { left: 0, width: 120, margin: 3 }]}
                            label="YOP"
                            keyboardType={"numeric"}
                            value={hscYear}
                            mode={"outlined"}
                            maxLength={4}
                            onChangeText={text => setHsc(text)}
                        />

                        <TextInput
                            style={[styles.input, { left: 30, width: 90, margin: 3 }]}
                            label="%age"
                            keyboardType={"numeric"}
                            value={hscScore}
                            mode={"outlined"}
                            maxLength={4}
                            onChangeText={text => setHscScore(text)}
                        />
                    </View>
                    <Text style={[styles.heading, { top: 10 }]}>Carreer Objectives</Text>
                    <TextInput style={[styles.input,{height:50}]}
                        value={obj}
                        placeholder="Write your carreer objectives"
                        multiline={true}
                        textAlign={"top"}
                        onChangeText={text => setObj(text)} />
                    {/* <Text style={[styles.heading, { top: 10 }]}>Carreer Objectives</Text>
                    <TextInput style={[styles.input,{height:50}]}
                        value={lang}
                        placeholder="Languages"
                        multiline={true}
                        textAlign={"top"}
                        onChangeText={text => setLang(text)} /> */}
                </KeyboardAvoidingView>
                <IconButton
                style={{left:Dimensions.get('screen').width/4,backgroundColor:'coral',top:30}}
                icon="check"
                color={Colors.blue600}
                size={80}
                onPress={() => console.log('Pressed')}
                 />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:
    {
        // flex: 1,
        height: Dimensions.get('screen').height - 30
    },
    heading:
    {
        fontSize: 24,
        fontWeight: 'bold',
        // backgroundColor: 'skyblue',
        borderRadius: 8,
        width: null,
    },
    input:
    {
        top: 10,
        height: 45,
        width: 250,
    },
    scrollView:
    {
        height: null,
    }
})