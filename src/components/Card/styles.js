import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  justify-content: center;
  margin-top: ${({mt}) => mt}px;
  margin-bottom: ${({mb}) => mb}px;
  margin-right: ${({mr}) => mr}px;
  margin-left: ${({ml}) => ml}px;
  border-radius: 8px;
  box-shadow: 0 3px 5px ${({theme}) => theme.gray300};
  background-color: ${({theme, bgColor}) => theme[bgColor]};
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const CardContent = styled.View``;

export const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const CardText = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.neutral700};
`;

export const CardActions = styled.View`
  flex-direction: row;
`;
