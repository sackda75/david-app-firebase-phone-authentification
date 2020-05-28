import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

const TabBarIcon = (props) => {

  return (
    
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

  )
}

export default TabBarIcon 