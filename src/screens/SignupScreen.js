import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(email + ' ' + password)

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up here</Text>
      </Spacer>
      <Spacer />
      <Input
        label='Email'
        autoCapitalize='none'
        autoCapitalize={false}
        value={email}
        onChangeText={newEmail => {
          setEmail(newEmail)
        }}
      />
      <Spacer />

      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCapitalize={false}
        secureTextEntry
      />
      <Spacer />

      <Button title='Sign up' />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
})

export default SignupScreen
