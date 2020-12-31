
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default function Resume() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'
          }}
          style={styles.profilePic} />
        <Text style={styles.contact}>Contacts:</Text>
        <View
          style={styles.Border} />
        <Text
          style={styles.Information}>{'\u2022'} softprince4799@ gmail.com</Text>
        <Text
          style={styles.Information}>{'\u2022'} +919621205058</Text>
        {/* <Text
          style={styles.Information}>{'\u2022'} 681,NiralaMarg,   Daraganj,Prayagraj,UP</Text> */}
        <Text style={styles.heading}>Skills:</Text>
        <View
          style={[styles.Border, { top: 60 }]} />
        <Text style={[styles.Information, { top: 65, color: '#edc877' }]}>
          Languages,tools & Libraries:
        </Text>
        <Text style={[styles.Information, { top: 70 }]}>
          {'\u2022'} Reactjs{'\n'}
          {'\u2022'} React Native{'\n'}
          {'\u2022'} Nodejs{'\n'}
          {'\u2022'} expressjs{'\n'}
          {'\u2022'} C{'\n'}
          {'\u2022'} Python{'\n'}
          {'\u2022'} JavaScript{'\n'}
        </Text>
        <Text style={[styles.Information, { top: 65, color: '#edc877' }]}>
          Databases:
        </Text>
        <Text style={[styles.Information, { top: 70 }]}>
          {'\u2022'} MongoDB{'\n'}
          {'\u2022'} SQL{'\n'}
          {'\u2022'} SQlite{'\n'}
        </Text>
        <Text style={[styles.heading, { top: 70 }]}>Languages:</Text>
        <View
          style={[styles.Border, { top: 70 }]} />
        <Text style={[styles.Information, { top: 70 }]}>
          {'\u2022'} English{'\n'}
          {'\u2022'} Hindi{'\n'}
        </Text>
        <Text style={[styles.heading, { top: 70 }]}>Address:</Text>
        <View
          style={[styles.Border, { top: 70 }]} />
        <Text style={[styles.Information, { top: 70 }]}>
          {'\u2022'} 681,NiralaMarg,  Daraganj,Prayagraj,UP
        </Text>
      </View>
      <View style={styles.portfolio}>
        <View style={{
          height: 60
        }}>
          <Text style={styles.name}>Prince Verma</Text>
        </View>
        <Text style={[
          styles.heading, styles.subHeading
        ]}>Profile Summary:</Text>
        < Text style={styles.text}>An enthusiastic fresher with highly{'\n'}motivated and leadership skills having Bachelor of technology degree in{'\n'}Computer Science and Engineering eager to learn new technologies and methodologies.Always willing to{'\n'}innovate the new things which can{'\n'}improve the existing technology.
</Text>

        <Text style={[
          styles.heading, styles.subHeading]}>Education:</Text>
        < Text
          style={[styles.text, { top: 20 }]}>
          {'\u2022'} B.Tech.   80% (till now){'\n'}
          {'\u2022'} Intermediate    87%{'\n'}
          {'\u2022'} Highschool    71%{'\n'}
        </Text>
        <Text style={[styles.heading, styles.subHeading]}>Projects</Text>
        <Text style={[styles.Information, { top: 10, color: '#edc877', fontWeight: 'bold' }]}>
          {'\u2022'}WeatherApp with dynamic background :{'\n'}</Text>
        <Text style={[styles.text, { top: 1 }]}>
          -Using React Native as front-end.{'\n'}
          -Using openweather and Unsplash API.{'\n'}
          -github.com/prince4799/weatherApp
           </Text>
           <Text style={[styles.Information, { top: 10, color: '#edc877', fontWeight: 'bold' }]}>
          {'\u2022'}Todo App :{'\n'}</Text>
        <Text style={[styles.text, { top: 1 }]}>
          -Using React Native as front-end.{'\n'}
          -github.com/prince4799/todo_app
           </Text>
           <Text style={[styles.Information, { top: 10, color: '#edc877', fontWeight: 'bold' }]}>
          {'\u2022'}Login and signUp screen :{'\n'}</Text>
        <Text style={[styles.text, { top: 1 }]}>
          -Using React Native as front-end.{'\n'}
          -Nodejs and express for back-end.{'\n'}
          -mongoDB for databse{'\n'}
          -github.com/prince4799/login-and-signup-screen-
           </Text>
           <Text style={[styles.Information, { top: 10, color: '#edc877', fontWeight: 'bold' }]}>
          {'\u2022'}Flappy bird Game :{'\n'}</Text>
        <Text style={[styles.text, { top: 1 }]}>
          -Using React Native.{'\n'}
          - github.com/prince4799/flappy_bird
           </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  profile:
  {
    height: (Dimensions.get('screen').height),
    backgroundColor: '#131138',
    flex: 1,
    alignItems: 'stretch',
    borderRightWidth: 2,
    borderColor: '#fff'
  },
  portfolio:
  {
    flex: 2,


  },
  profilePic:
  {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#bd8619',
    alignSelf: 'center',
    top: 20
  },
  contact:
  {
    fontSize: 18,
    color: '#bd8619',
    alignSelf: 'flex-start',
    top: 30,
    fontWeight: 'bold'
  },
  Information:
  {
    color: '#ffffff',
    fontSize: 12,
    alignSelf: 'stretch',
    top: 30,
    left: 0,
    flexWrap: 'wrap-reverse'
  },
  heading:
  {
    fontSize: 18,
    color: '#bd8619',
    alignSelf: 'flex-start',
    top: 60,
    fontWeight: 'bold'
  },
  subHeading:
  {
    color: 'black',
    top: 10,
    backgroundColor: '#7d808a',
    width: 250
  },
  Border:
  {
    borderBottomWidth: 2,
    borderColor: '#bd8619',
    top: 30
  },
  name: {
    fontSize: 32,
    top: 10,
    color: '#bd8619',
    fontWeight: '600',
  },
  text: {
    color: 'black',
    top: 10,
    left: 5,
    width: 250,
    fontSize: 12
  }
});
