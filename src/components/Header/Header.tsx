import React, { useState, useContext } from 'react';
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
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import getIdFromUrl from '../../utils/getIdFromUrl';
import ColorModeContext from '../../contexts/ColorMode';

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const {
    response: characters,
    error,
    isLoading,
  } = useSwapiSearchChar(searchInput, 500);
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      variant="elevation"
      color="primary"
      sx={{ mb: { xs: 2, sm: 4 } }}
    >
      <Container maxWidth="md">
        <Toolbar variant="dense" sx={{ p: 1 }}>
          <Grid
            container
            sx={{
              justifyContent: {
                xs: 'start',
                sm: 'start',
                gridAutoFlow: 'dense',
              },
            }}
          >
            <Grid item xs={6} sm="auto">
              <Typography
                onClick={() => navigate('/')}
                variant="h4"
                noWrap
                component="h2"
                sx={{ mr: 4, mb: 1, mt: 1, cursor: 'pointer' }}
              >
                SW-API
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={'auto'}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'flex-end',
                mb: 1,
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mb: 1, mt: 1 }}>
              <Autocomplete
                size="small"
                blurOnSelect={true}
                clearOnBlur={true}
                onBlur={() => setSearchInput('')}
                sx={{ width: { xs: '100%', sm: 320 } }}
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
                    placeholder="Search for character..."
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
            <Grid item sx={{ flexGrow: 1 }}></Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'flex-end',
                mb: 1,
                mt: 1,
              }}
            >
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
