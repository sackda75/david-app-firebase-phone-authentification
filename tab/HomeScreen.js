import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'

import { Divider } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, SafeAreaView, TouchableOpacity, Linking, StyleSheet, ScrollView, Image } from 'react-native'

import CustomHeader from '../CustomHeader'

let monCv =  
    <Text 
      style={{color: '#9400d3'}}
      onPress={() => Linking.openURL('https://drive.google.com/open?id=1MRRYv9VEtUF_dNfFrMrJdNJCct-5YNLJ')}>
      CV David SOUKSAVAT
    </Text>

function HomeScreen({navigation}) {

    const [email, setEmail] = useState('')
    console.log(email)

    
    const [displayName, setDisplayName] = useState('')
    console.log(displayName)

    useEffect(() => {

        const {email, displayName} = firebase.auth().currentUser
        setEmail(email)
        setDisplayName(displayName)

      }, [])



  const br = `\n`
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <CustomHeader title='Home' isHome={true} navigation={navigation}/>
        <View style={styles.container}>
            <View style={styles.must}>

                <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                      <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 20, textDecorationLine: 'underline' }}>PRESENTATION</Text>
                </View>

                <ScrollView>

                {/* <Text>Bonjour {email}</Text> */}

                <View style={{height: 200, alignItems: 'center', justifyContent: 'center', marginTop: 0, backgroundColor: '#0000'}}>
                    <Image
                          style={{width: 120, height: 120, borderRadius: 60}} 
                          source={require('../assets/images/dave.png')}
                    />
                </View>

                    <Text>
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Peux-tu te présenter ?</Text>
                      {br}
                      {br}
                          Je m'appelle David. Après 20 ans dans le commerce et la vente, j'ai souhaité me reconvertir dans le domaine informatique et plus particulièrement dans le développement web.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>De quoi s'agit-il ?</Text>
                      {br}
                      {br}
                          Il s'agit de mon curriculum vitæ sous forme d'une application mobile que vous pouvez découvrir en parcourant les différentes pages.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Quel est le but de cette application ?</Text>
                      {br}
                      {br}
                          J'ai voulu créer cette application afin de montrer de manière originale mon parcours professionnel.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Quel est le language utilisé ?</Text>
                      {br}
                      {br}
                          Cette application est développée en language REACT NATIVE <MaterialCommunityIcons name='react' color='#48dbfb' size={18} /> qui a l'avantage d'être rapide et cross-plateform <MaterialCommunityIcons name='android' color='#6ab04c' size={18} /><MaterialCommunityIcons name='apple' color='#596275' size={18} /><MaterialCommunityIcons name='windows' color='#0fbcf9' size={18} />.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Est-ce qu'on trouve tous les éléments d'un CV ?</Text>
                      {br}
                      {br}
                          Oui tous les éléments d'un CV classique. Bien entendu, un CV ne comporte pas autant d'éléments, le but étant de pouvoir tester certaines fonctionnalités.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Peut-on voir ton CV au format 4A ?</Text>
                      {br}
                      {br}
                          Oui le lien est le suivant : {monCv}.
                      {br}
                      {br}
                      {br}
                          <Text style={{fontStyle: 'italic', fontSize: 15}}>Que souhaites-tu faire par la suite ?</Text>
                      {br}
                      {br}
                          Je suis à la recherche d'un emploi ou stage en tant que Developpeur Web Junior.
                      {br}
                      {br}
                      {br}

                    <Divider style={{ backgroundColor: 'black', width: 330, height: 1 }} />
                      
                    <Text>{br}</Text>

                    </Text>
                  
                    
                    
                    <Text onPress={() => navigation.navigate('HomeDetail')}>
                            <MaterialCommunityIcons name='plus-circle-outline' color='#9400d3' size={18} /> Sommaire
                    </Text>

                    <View style={{marginBottom: 70, alignItems: 'center'}}>
                        <TouchableOpacity
                              style={{
                                  marginTop: 15,
                                  paddingTop: 15,
                                  paddingBottom: 15,
                                  marginLeft: 30,
                                  marginRight: 30,
                                  backgroundColor: '#ffff ',
                                  borderRadius: 50,
                                  borderWidth: 2,
                                  borderColor: '#9400d3',
                                  width: 170,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                              }}
                              onPress={() => navigation.navigate('HomeDetail')}
                        >
                              <MaterialCommunityIcons name='chevron-right' color='#9400d3' size={23} />
                              <Text style={{ color: '#9400d3', fontWeight: 'bold'}}> VALIDER</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </View>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0000'
    },
    must: {
      marginHorizontal: 20
    },
    vert: {
      textAlign: 'justify'
    }
  })

export default HomeScreen