import {Text, TextInput, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <TextInput
          keyboardType={'email-address'}
          placeholder="아이디"
          placeholderTextColor={'#ddd'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
