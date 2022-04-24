import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSwapiSearchChar from '../../hooks/useSwapiSearchChar';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Autocomplete,
  CircularProgress,
  Box,
  Container,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import getIdFromUrl from '../../utils/getIdFromUrl';

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const {
    response: characters,
    error,
    isLoading,
  } = useSwapiSearchChar(searchInput, 1000);
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      variant="elevation"
      color="primary"
      sx={{ mb: { xs: 2, sm: 4 } }}
    >
      <Container maxWidth="md">
        <Toolbar variant="dense">
          <Grid
            container
            sx={{ justifyContent: { xs: 'center', sm: 'start' } }}
          >
            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography
                onClick={() => navigate('/')}
                variant="h4"
                noWrap
                component="h1"
                sx={{
                  mr: 4,
                  cursor: 'pointer',
                }}
              >
                SWAPI
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                size="small"
                blurOnSelect={true}
                clearOnBlur={true}
                onBlur={() => setSearchInput('')}
                sx={{ width: { xs: '100%', sm: 300 } }}
                autoHighlight={true}
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={(character) => character.name}
                open={searchInput.length !== 0}
                options={characters}
                loading={isLoading && searchInput.length !== 0}
                inputValue={searchInput}
                noOptionsText={'No character found'}
                popupIcon={false}
                onChange={(e, char) => {
                  char && navigate(`/character/${getIdFromUrl(char.url)}`);
                  setSearchInput('');
                }}
                renderInput={(params) => (
                  <TextField
                    error={Boolean(error)}
                    hiddenLabel
                    {...params}
                    sx={{ pt: 0 }}
                    placeholder="Start typing to search..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchInput(e.target.value)
                    }
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: <SearchIcon color="inherit" />,
                      endAdornment: isLoading && (
                        <CircularProgress color="inherit" size={20} />
                      ),
                    }}
                  />
                )}
                renderOption={(props, character) =>
                  character && (
                    <Box component="li" {...props} key={character.url}>
                      {character.name}
                    </Box>
                  )
                }
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
