import React from 'react';
import useSwapiGet from '../../../hooks/useSwapiGet';
import { CircularProgress } from '@mui/material';

type PropsTypes = {
  id: string;
  type: string;
  property: string;
};

const PropertyListItem: React.FC<PropsTypes> = ({ id, type, property }) => {
  const { response, error, isLoading } = useSwapiGet(`/${type}/${id}`);

  return (
    <>
      {isLoading && (
        <li>
          <CircularProgress color="inherit" size={15} />
        </li>
      )}
      {error && <li>Something went wrong...</li>}
      {response && <li>{response.data[property]}</li>}
    </>
  );
};

export default PropertyListItem;
