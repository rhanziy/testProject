import styled from 'styled-components';
import Container from '../../../component/common/container';
import Text from '../../../component/common/text/Text';
import {Alert, View, useWindowDimensions} from 'react-native';
import CustomButton from '../../../component/common/button/Button';
import TextInput from '../../../component/common/text/TextInput';
import {useEffect, useState} from 'react';
import useQnA from '../../../hooks/useQnA';
import {useRecoilState} from 'recoil';
import QLoadingAtom from '../../../component/atom/QLoadingAtom';

const QuestionScreen = () => {
  const [_modal, setModal] = useRecoilState(QLoadingAtom);
  const {enroll, isLoading} = useQnA();
  const [content, setContent] = useState('');

  const onSubmit = () => {
    if (content.length === 0) {
      Alert.alert('질문을 작성해주세요.');
      return;
    }

    enroll(content);
    setContent('');
  };

  useEffect(() => {
    isLoading ? setModal(true) : setModal(false);
  }, [isLoading]);

  return (
    <>
      <Container
        style={{
          justifyContent: 'flex-start',
          marginTop: 30,
        }}>
        <Text
          weight="700"
          size={20}
          lineHeight={1.5}
          marginBottom={32}
          style={{alignSelf: 'flex-start'}}>
          질문을 올리고{'\n'}고민을 해결해 보세요
        </Text>
        <InputView>
          <TextInput
            multiline={true}
            maxLength={500}
            value={content}
            onChangeText={text => setContent(text)}
            placeholder="예) 앞쪽 머리가 아픈데 타이레놀을 먹어도 될까요?"
            style={{
              height: 296,
              padding: 16,
              backgroundColor: '#F8F8F8',
              borderRadius: 4,
            }}
            showLength={true}
          />
          <InputLength>
            <Text color={'#858585'}>{content.length ?? 0}/500</Text>
          </InputLength>
        </InputView>
        <View style={{marginTop: 14}}>
          <Text size={11} color={'#858585'}>
            개인 정보 보호를 위해 개인정보는 입력하지 않도록 주의해 주세요.
          </Text>
          <Text size={11} color={'#858585'} marginTop={5}>
            서비스 목적과 맞지 않은 질문과 운영을 방해하는 행위가 지속될 경우
            이용이 한시적 또는 영구적으로 사전 안내 없이 제한 될 수 있어요.
          </Text>
        </View>
        <BottomButton>
          <CustomButton onPress={onSubmit} fontSize={'16px'}>
            질문하기
          </CustomButton>
        </BottomButton>
      </Container>
    </>
  );
};

const InputView = styled(View)`
  position: relative;
  width: 100%;
`;

const InputLength = styled(View)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const LoadingBackground = styled(View)<BackgroundProps>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 10;
`;
const BottomButton = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 42px;
  background-color: white;
`;

type BackgroundProps = {
  width: number;
  height: number;
};

export default QuestionScreen;
