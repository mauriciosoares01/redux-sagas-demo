import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
`;

export const Value = styled.Text`
  font-size: 20px;
  margin: 10px 25px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  background: #000;
`;

export const Label = styled.Text`
  font-weight: 500;
  font-size: 24px;
  color: #fff;
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  margin: 10px;
`;
