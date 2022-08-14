import React from 'react';
import { Box, Button, Text, View } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../../../types/Routes';

type Props = NativeStackScreenProps<Routes, 'Register'>;

export const TopScreen = ({ navigation }: Props) => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text fontSize={32} bold p={30}>
        Tech広場
      </Text>
      <Box alignItems="center" mb={8}>
        <Button onPress={() => navigation.navigate('LoginScreen')}>ログインする</Button>
      </Box>
      <Box alignItems="center">
        <Button onPress={() => navigation.navigate('Register')}>新規登録を行う</Button>
      </Box>
    </View>
  );
};
