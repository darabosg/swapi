import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useGetSwapi from '../../hooks/useAxios';
import getIdFromUrl from '../../utils/getIdFromUrl';

const Species = () => {
  const { id } = useParams();
  const [species, error, isLoading] = useGetSwapi(`/species/${id}`);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && <p>error</p>}
      {species &&
        species.data.people.map((characterUrl: string) => (
          <div key={characterUrl}>
            <Link to={`/character/${getIdFromUrl(characterUrl)}`}>
              {characterUrl}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Species;
