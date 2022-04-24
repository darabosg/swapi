import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useSwapiGet from '../../hooks/useSwapiGet';
import getIdFromUrl from '../../utils/getIdFromUrl';
import { SpeciesTypes } from '../../utils/types';

import {
  Container,
  Pagination,
  PaginationItem,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const Home: React.FC = () => {
  const { page = 1 } = useParams();
  const { response, error, isLoading } = useSwapiGet(`/species/?page=${page}`);
  const navigate = useNavigate();

  const pageCount = Math.ceil(response?.data.count / 10);

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
        Species:
      </Typography>
      <Grid container sx={{ mb: 4, justifyContent: 'center' }}>
        <Grid item>
          {isLoading && <CircularProgress color="inherit" />}
          {error && <p>Something went wrong...</p>}
          {response && (
            <Pagination
              count={pageCount}
              page={Number(page)}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${item.page}`}
                  {...item}
                />
              )}
            />
          )}
        </Grid>
      </Grid>
      {response && (
        <Grid container columnSpacing={4} rowSpacing={{ xs: 1, sm: 2 }}>
          {response.data.results.map((species: SpeciesTypes) => (
            <Grid item key={species.url} xs={12} sm={6}>
              <Paper
                sx={{
                  textAlign: 'center',
                  height: { xs: 40, sm: 60 },
                  lineHeight: { xs: '40px', sm: '60px' },
                  cursor: 'pointer',
                  fontSize: 18,
                }}
                elevation={6}
                onClick={() =>
                  navigate(`/species/${getIdFromUrl(species.url)}`)
                }
              >
                {species.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
