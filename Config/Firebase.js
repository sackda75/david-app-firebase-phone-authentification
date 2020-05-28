import * as firebase from 'firebase'

import '@firebase/auth'

const firebaseConfig = {

  apiKey: 'AIzaSyAEjIEqHkANiindjxlzGqbynUr3Xic-Zq0',
  authDomain: 'reactnativeloginlogup.firebaseapp.com',
  databaseURL: 'https://reactnativeloginlogup.firebaseio.com',
  projectId: 'reactnativeloginlogup',
  storageBucket: 'reactnativeloginlogup.appspot.com',
  messagingSenderId: '659543949086',
  appId: '1:659543949086:web:a05f84894630771c2dd30f'
  
}

firebase.initializeApp(firebaseConfig)

export default firebase