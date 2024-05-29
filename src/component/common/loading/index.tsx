import React from 'react';
import {useIsFetching, useIsMutating} from 'react-query';
import Loader from './Loader';

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  if (!(isFetching || isMutating)) {
    return null;
  }

  return <Loader />;
};

export default Loading;
