import React, { useRef } from 'react'
import firebase from '../Config/Firebase'
import TouchableScale from 'react-native-touchable-scale'

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { Text, View, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native'

const PhoneNumberScreen = ({ navigation }) => {

  const [phone, setPhone] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const recaptchaVerifier = useRef(null)

  sendCode = () => {
    if (phone.length >= 9) {
      setLoading(true)
      const phoneProvider = new firebase.auth.PhoneAuthProvider()
      phoneProvider
        .verifyPhoneNumber(phone, recaptchaVerifier.current)
        .then((id) => {
          setLoading(false)
          navigation.navigate('verify', { verificationId: id })
        })
        .catch((e) => console.log(e))
    } else {
      alert('Numéro invalide')
    }
  }

  return (
    <View style={styles.container}>
      <Image style={{ width: 150, height: 150, marginBottom: 50 }} source={require('../assets/images/logo1.png')} />
      <Text style={styles.title}>
        Connectez-vous avec votre numéro de téléphone
      </Text>
      <TextInput
        placeholder='Numéro de téléphone'
        placeholderTextColor='#9400d3'
        style={styles.input}
        onChangeText={setPhone}
        returnKeyType='done'
        keyboardType='phone-pad'
        autoCompleteType='tel'
      />
      <TouchableScale onPress={sendCode} style={styles.button} activeScale={1.2}>
        {loading ? (
          <ActivityIndicator color='#87c965' />
        ) : (
          <Text style={styles.textButton}>Valider</Text>
        )}
      </TouchableScale>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    width: '60%',
    fontSize: 17,
    marginBottom: 20,
    color: '#9400d3',
    fontFamily: 'muli'
  },
  input: {
    width: '60%',
    color: '#9400d3',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#9400d3',
    fontFamily: 'muli',
    marginBottom: 20
  },
  button: {
    width: 220,
    marginTop: 20,
    backgroundColor: '#9400d3',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40
  },
  textButton: {
    fontFamily: 'muli',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default PhoneNumberScreen