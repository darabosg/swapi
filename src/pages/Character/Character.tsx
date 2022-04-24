import { Container, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSwapiGet from '../../hooks/useSwapiGet';

const Character: React.FC = () => {
  const { id } = useParams();
  const { response, error, isLoading } = useSwapiGet(`/people/${id}`);

  return (
    <Container maxWidth="lg">
      <Typography
        fontSize={{
          sm: 42,
          xs: 30,
        }}
        component="h1"
        sx={{ mb: 1 }}
      ></Typography>
      {isLoading && <p>Loading</p>}
      {error && <p>error</p>}
      <p>char</p>
      <p>{response && response.data.name}</p>
    </Container>
  );
};

export default Character;
