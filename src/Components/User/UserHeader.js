import React from 'react';
import UserNavHeader from './UserNavHeader';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/post':
        setTitle('Poste sua foto');
        break;
      case '/conta/stats':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserNavHeader />
    </header>
  );
};

export default UserHeader;
