import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Text from '../../../../component/common/text/Text';
import CustomButton from '../../../../component/common/button/Button';
import {useState} from 'react';
import Container from '../../../../component/common/container';
import useUser from '../../../../hooks/useUser';

const LoginScreen = () => {
  const {login} = useUser();
  const width = useWindowDimensions().width;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    login({id, password});
  };
  return (
    <Container>
      <Image
        source={require('../../../../../asset/images/logo.png')}
        width={135}
        height={30}
      />
      <Text size={18} weight="500" color={'#3E0095'} marginTop={6}>
        해외에서도 대학병원 전문의를 만나보세요
      </Text>
      <TouchableWithoutFeedback style={[styles.container, {width}]}>
        <TextInput
          keyboardType={'email-address'}
          placeholder="이메일"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={text => setId(text)}
          value={id}
          style={{
            padding: 15,
            borderWidth: 1,
            borderColor: '#DBDBDB',
            borderRadius: 3,
          }}
        />
        <TextInput
          secureTextEntry
          placeholder="비밀번호"
          returnKeyType="next"
          onChangeText={text => setPassword(text)}
          value={password}
          onSubmitEditing={onSubmit}
          style={{
            padding: 15,
            borderWidth: 1,
            borderColor: '#DBDBDB',
            borderRadius: 3,
            marginTop: 12,
          }}
        />
      </TouchableWithoutFeedback>
      <CustomButton onPress={onSubmit}>로그인</CustomButton>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
