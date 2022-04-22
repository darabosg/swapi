import React from 'react';
import { Link } from 'react-router-dom';
import useGetSwapi from '../../hooks/useAxios';
import getIdFromUrl from '../../utils/getIdFromUrl';

type SpeciesTypes = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

const Home: React.FC = () => {
  const [species, error, isLoading] = useGetSwapi('/species');

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && <p>error</p>}
      {species &&
        species.data.results.map((species: SpeciesTypes) => (
          <div key={species.url}>
            <Link to={`/species/${getIdFromUrl(species.url)}`}>
              {species.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
