import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSwapiGet from '../../hooks/useSwapiGet';
import getIdFromUrl from '../../utils/getIdFromUrl';
import CharacterButton from './components/CharacterButton';

const Species: React.FC = () => {
  const { id } = useParams();
  const { response, error, isLoading } = useSwapiGet(`/species/${id}`);

  return (
    <Container maxWidth="md">
      <Typography
        fontSize={{
          sm: 42,
          xs: 30,
        }}
        component="h1"
        sx={{ mb: 1 }}
      >
        {response?.data.name}
      </Typography>
      <Grid container sx={{ mb: 4, justifyContent: 'center' }}>
        <Grid item>
          {isLoading && <CircularProgress color="inherit" />}
          {error && <p>Something went wrong...</p>}
        </Grid>
        {response && (
          <Grid container columnSpacing={4} rowSpacing={{ xs: 1, sm: 2 }}>
            {response.data.people.map((characterUrl: string) => (
              <Grid item key={characterUrl} xs={12} sm={6}>
                <CharacterButton charId={getIdFromUrl(characterUrl)} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Species;
