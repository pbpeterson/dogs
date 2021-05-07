import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Post } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserNavHeader.module.css';
import UseMedia from '../../Hooks/UseMedia';

const UserNavHeader = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = UseMedia('(max-width:40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/stats" activeClassName={styles.active}>
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post" activeClassName={styles.active}>
          <Post />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserNavHeader;
