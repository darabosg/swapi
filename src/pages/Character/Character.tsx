import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGetSwapi from '../../hooks/useAxios';
import getIdFromUrl from '../../utils/getIdFromUrl';

const Character = () => {
  const { id } = useParams();
  const [character, error, isLoading] = useGetSwapi(`/people/${id}`);

  useEffect(() => {
    console.log(error);
  });

  return (
    <div>
      <p>char</p>
      <p>{character && character.name}</p>
    </div>
  );
};

export default Character;
