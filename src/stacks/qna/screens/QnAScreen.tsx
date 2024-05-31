import Text from '../../../component/common/text/Text';
import Container from '../../../component/common/container';
import {Image, View} from 'react-native';
import CustomButton from '../../../component/common/button/Button';
import styled from 'styled-components';
import useQnA from '../../../hooks/useQnA';
import {ScrollView} from 'react-native-gesture-handler';
import QnAItemComponent from './component/QnAItemComponent';
import {useQnAStackNavigation} from '../hooks/useAuthStack';

const QnAScreen = () => {
  const navigation = useQnAStackNavigation();
  const {qna} = useQnA();

  console.log(qna);
  return (
    <>
      {qna ? (
        <Container>
          <Image source={require('../../../../asset/images/noData.png')} />
          <Text size={20} weight="700" marginTop={20} marginBottom={14}>
            아직 질문 내역이 없어요
          </Text>
          <Text>오케이닥 AI에게 의료 상담 해보세요</Text>
        </Container>
      ) : (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 100}}>
          {/* <QnAItemComponent data={qna} /> */}
        </ScrollView>
      )}
      <BottomButton>
        <CustomButton
          onPress={() => navigation.navigate('QuestionScreen')}
          fontSize={'16px'}>
          질문하기
        </CustomButton>
      </BottomButton>
    </>
  );
};

const BottomButton = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 42px;
  background-color: white;
`;

export default QnAScreen;
