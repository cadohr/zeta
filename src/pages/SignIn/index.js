import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import {
  Background,
  Container,
  Form,
  FormLabel,
  FormInput,
  SubmitButton,
  ForgotPasswordButton,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest());
  }

  return (
    <>
      <Background />
      <Container>
        <Form>
          <FormLabel>Qual sua conta?</FormLabel>
          <FormInput
            value={account}
            onChangeText={setAccount}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Número da conta"
          />

          <FormLabel>Senha</FormLabel>
          <FormInput
            value={password}
            onChangeText={setPassword}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha de 4 dígitos"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            ACESSAR
          </SubmitButton>
          <ForgotPasswordButton>ESQUECI MINHA SENHA</ForgotPasswordButton>
        </Form>
      </Container>
    </>
  );
}
