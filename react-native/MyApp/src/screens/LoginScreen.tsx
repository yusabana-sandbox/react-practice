import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`

const Title = styled.Text`
  align-self: center;
  font-size: 24px;
`

const TextField = styled.TextInput`
  height: 40px;
  background-color: #eee;
  margin-top: 16px;
  padding: 8px;
  border-color: #000;
  border-width: 0.5px;
`

const LoginButton = styled(TouchableHighlight)`
  margin-top: 16px;
  background-color: #e31676;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`

const LoginButtonTitle = styled(Text)`
  color: #fff;
  font-size: 20px;
`

const LoginScreen = () => {
  return (
    <Container>
      <Title>ログイン</Title>
      <TextField value="Email" />
      <TextField value="Password" />
      <LoginButton
        activeOpacity={0.9}
        underlayColor="#c70f66"
        onPress={() => {}}>
        <LoginButtonTitle>ログインする</LoginButtonTitle>
      </LoginButton>
    </Container>
  )
}

export { LoginScreen }
