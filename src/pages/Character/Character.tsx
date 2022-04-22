import React from 'react';
import { useParams } from 'react-router-dom';
import useGetSwapi from '../../hooks/useAxios';

const Character = () => {
  const { id } = useParams();
  const [character, error, isLoading] = useGetSwapi(`/people/${id}`);

  return (
    <div>
      {isLoading && <p>Loading</p>}
      {error && <p>error</p>}
      <p>char</p>
      <p>{character && character.data.name}</p>
    </div>
  );
};

export default Character;
