import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGetSwapi from '../../hooks/useAxios';
import getIdFromUrl from '../../utils/getIdFromUrl';

const Home: React.FC = () => {
  const [species, error, isLoading] = useGetSwapi('/species');

  useEffect(() => {
    console.log(species);
  }, [species]);

  return (
    <div>
      {species &&
        species.results.map((species: any) => (
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
