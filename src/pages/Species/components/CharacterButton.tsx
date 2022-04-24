import React from 'react';
import { Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSwapiGet from '../../../hooks/useSwapiGet';

type PropsTypes = {
  charId: string;
};

const CharacterButton: React.FC<PropsTypes> = ({ charId }) => {
  const { response, error, isLoading } = useSwapiGet(`/people/${charId}`);

  const navigate = useNavigate();
  return (
    <>
      {response && (
        <Paper
          sx={{
            textAlign: 'center',
            height: { xs: 40, sm: 60 },
            lineHeight: { xs: '40px', sm: '60px' },
            cursor: 'pointer',
            fontSize: 18,
          }}
          elevation={6}
          onClick={() => navigate(`/character/${charId}`)}
        >
          {response.data.name}
          {error && <p>Something went wrong...</p>}
          {isLoading && <CircularProgress color="inherit" />}
        </Paper>
      )}
    </>
  );
};

export default CharacterButton;
