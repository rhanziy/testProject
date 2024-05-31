import React, {PropsWithChildren} from 'react';
import {Pressable, PressableProps, Text} from 'react-native';
import styled from 'styled-components';
import {MarginProps} from '../../../@types';

const StyledButton = styled(Pressable)`
  width: 100%;
  padding: 15px 0;
  border-radius: 5px;
  line-height: 1.5px;
  align-items: center;
  justify-content: center;
  background: #5500cc;
`;

const ButtonText = styled(Text)<TextProps>`
  color: white;
  font-size: ${props => props.fontSize ?? '18px'};
  font-weight: 700;
`;

const CustomButton = ({
  children,
  fontSize,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton {...props}>
      <ButtonText fontSize={fontSize}>{children}</ButtonText>
    </StyledButton>
  );
};

export default CustomButton;

interface TextProps {
  fontSize?: string;
}
interface Props extends PressableProps, MarginProps {
  fontSize?: string;
}
