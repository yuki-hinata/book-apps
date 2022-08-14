import React from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Input, Button } from 'native-base';

export const RegisterScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>メールアドレス</Text>
        <Input w="95%" keyboardType="email-address" />
        <Text style={styles.text}>パスワード</Text>
        <Input type="password" w="95%" />
        <Text style={styles.text}>ニックネーム</Text>
        <Input w="95%" />
      </View>
      <View style={styles.container}>
        <Button>新規登録をする</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 8 },
  subContainer: { alignItems: 'center' },
  text: {
    paddingVertical: 24,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#7B8D93',
  },
  button: { paddingTop: 24 },
});
