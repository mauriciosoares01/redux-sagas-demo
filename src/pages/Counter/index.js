import React, {useState, useEffect} from 'react';
import {Container, Title, Value, Button, Label, BoxButtons} from './styles.js';

function Counter() {
  const [count, setCount] = useState();

  useEffect(() => {}, []);

  return (
    <Container>
      <Title>Counter</Title>
      <BoxButtons>
        <Button>
          <Label>-</Label>
        </Button>
        <Value>0</Value>
        <Button>
          <Label>+</Label>
        </Button>
      </BoxButtons>
    </Container>
  );
}

export default Counter;
