import React from 'react';
import { useParams } from 'react-router';
import { PHOTO_GET } from '../api';
import UseFetch from '../Hooks/UseFetch';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = UseFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} />
      </section>
    );
  else return null;
};

export default Photo;
