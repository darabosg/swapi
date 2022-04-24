import { Container, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useSwapiGet from '../../hooks/useSwapiGet';
import capitalizeFirstChar from '../../utils/capitalizeFirstChar';
import getIdFromUrl from '../../utils/getIdFromUrl';
import PropertyListItem from './components/PropertyListItem';

const Character: React.FC = () => {
  const { id } = useParams();
  const { response, error, isLoading } = useSwapiGet(`/people/${id}`);

  return (
    <Container maxWidth="md">
      {response && (
        <>
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
          <Typography component="p" sx={{ mb: 1 }}>
            {capitalizeFirstChar(response?.data.gender)}, Born in{' '}
            {response?.data.birth_year}
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            Height: {response?.data.height}, Mass: {response?.data.mass}
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            Eyes: {response?.data.eye_color}
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            Hair: {response?.data.hair_color}
          </Typography>
          <Typography component="p" sx={{ mb: 1 }}>
            Skin: {response?.data.skin_color}
          </Typography>
          <Typography component="p" sx={{ mb: 0 }}>
            Species:
          </Typography>
          <Typography component="ul" sx={{ mb: 1 }}>
            {response?.data.species.map((speciesUrl: string) => (
              <PropertyListItem
                key={speciesUrl}
                id={getIdFromUrl(speciesUrl)}
                type="species"
                property="name"
              />
            ))}
          </Typography>
          <Typography component="p" sx={{ mb: 0 }}>
            Movies:
          </Typography>
          <Typography component="ul" sx={{ mb: 1 }}>
            {response?.data.films.map((filmUrl: string) => (
              <PropertyListItem
                key={filmUrl}
                id={getIdFromUrl(filmUrl)}
                type="films"
                property="title"
              />
            ))}
          </Typography>
        </>
      )}

      {isLoading && <CircularProgress color="inherit" />}
      {error && <p>Something went wrong...</p>}
    </Container>
  );
};

export default Character;
