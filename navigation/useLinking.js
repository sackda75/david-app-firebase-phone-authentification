import { Linking } from 'expo'
import { useLinking } from '@react-navigation/native'

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        }
      }
    }
  })
}