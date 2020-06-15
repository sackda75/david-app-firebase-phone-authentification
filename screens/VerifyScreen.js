import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native'
import firebase from '../Config/Firebase'
import TouchableScale from 'react-native-touchable-scale'

const VerifyScreen = ({ route, navigation }) => {

  const { verificationId } = route.params
  const [visibleModal, setVisibleModal] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  
  const verifyCode = () => {
    setLoading(true)
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    )
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        if (result.user) {
          setLoading(false)
          displayModal()
          navigation.navigate('HomeApp')
        }
      })
      .catch((e) => console.log(e))
  }

  const displayModal = () => {
    setVisibleModal(true)
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/image.png')} />
      <Text style={styles.title}>Entrer le code reçu par SMS</Text>
      <TextInput
        placeholder='Code'
        placeholderTextColor='white'
        style={styles.input}
        onChangeText={setCode}
        returnKeyType='done'
        keyboardType='phone-pad'
      />
      <TouchableScale onPress={verifyCode} style={styles.button} activeScale={1.2}>
        {loading ? (
          <ActivityIndicator color='#87c965' />
        ) : (
          <Text style={styles.textButton}>Valider</Text>
        )}
      </TouchableScale>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9400d3'
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    width: '60%',
    fontSize: 17,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'muli'
  },
  input: {
    width: '60%',
    color: 'white',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    fontFamily: 'muli',
    marginBottom: 20
  },
  button: {
    width: 220,
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40
  },
  textButton: {
    fontFamily: 'muli',
    color: '#9400d3',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default VerifyScreen