import {Image} from 'react-native';
import CustomButton from '../../../../component/common/button/Button';
import {useAuthStackNavigation} from '../../hooks/useAuthStack';
import Text from '../../../../component/common/text/Text';
import Container from '../../../../component/common/container';

const AuthReadingScreen = () => {
  const navigation = useAuthStackNavigation();

  return (
    <Container>
      <Image
        source={require('../../../../../asset/images/profile.png')}></Image>
      <Text size={20} weight="700" marginTop={25}>
        로그인이 필요해요
      </Text>
      <Text
        weight="700"
        style={{textAlign: 'center'}}
        color={'#7A7A7A'}
        marginTop={14}
        marginBottom={18}
        lineHeight={1.5}>
        해외에서도 비대면으로{'\n'}한국 대학병원 전문의를 만나보세요
      </Text>
      <CustomButton onPress={() => navigation.navigate('LoginScreen')}>
        로그인
      </CustomButton>
    </Container>
  );
};

export default AuthReadingScreen;
