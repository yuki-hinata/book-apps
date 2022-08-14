import { NativeBaseProvider } from 'native-base';
import { RootNavigator } from '../navigation/RootNavigation';

export const App = () => {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
};
