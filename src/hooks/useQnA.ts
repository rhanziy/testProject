import {httpClient} from './../api/httpClient';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {Alert} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import uuid from 'react-native-uuid';

const {post, remove} = httpClient();

const myUuid = '2df6aeb9-80f5-450d-8010-c958a121df3b';
const randomId = uuid.v4();

const getQnA = async (): Promise<QnAInterface> => {
  try {
    const response = await axios.get(`${Config.API_URL}/ai_qnas/${randomId}`);
    return response.data as QnAInterface;
  } catch (err) {
    return [] as unknown as QnAInterface;
  }
};

const enrollQnAApi = async (content: string) => {
  await post(`/ai_qnas/${randomId}`, {
    patient_id: myUuid,
    question_message: content,
  });
};

const removeQnAApi = async (id: string) => {
  await remove(`/ai_qnas/${id}`);
};

const useQnA = () => {
  const queryClient = useQueryClient();

  const {data: qna} = useQuery<QnAInterface>('qna', getQnA);

  const {mutate: enroll, isLoading} = useMutation(enrollQnAApi, {
    onMutate: () => {},
    onSuccess: () => {
      Alert.alert('등록되었습니다.');
      queryClient.invalidateQueries(['qna']);
    },
    onError: err => {
      console.log(err);
      Alert.alert('등록이 실패하였습니다.');
    },
  });

  const {mutate: remove} = useMutation(removeQnAApi, {
    onSuccess: () => {
      Alert.alert('삭제되었습니다.');
      queryClient.invalidateQueries(['qna']);
    },
  });

  return {enroll, isLoading, remove, qna};
};

export default useQnA;

interface Message {
  role: string;
  content: string;
}

interface Question {
  messages: Message[];
}

interface AnswerChoice {
  message: {
    content: string;
  };
}

interface Answer {
  choices: AnswerChoice[];
}

export interface QnAItem {
  answer: Answer;
  createdAt: string;
  question: Question;
  clinical_department: {
    name: string;
  };
}

export interface QnAInterface {
  response: QnAItem[];
}
