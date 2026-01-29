import React from 'react';
import { useParams } from 'react-router-dom';

const EditMovie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = React.useState({ id: id || null });

  React.useEffect(() => {
    if (id) {
      setMovie({ id });
    }
  }, [id]);

  return (
    <div>
      <h1>edit movie page {movie.id}</h1>
    </div>
  );
};

export default EditMovie;