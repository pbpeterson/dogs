import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/UseForm';
import useFetch from '../../Hooks/UseFetch';
import { PHOTO_POST } from '../../api';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <Input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
