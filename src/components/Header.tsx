import styles from './Header.module.css';
import devLogo from '../assets/dev-to-logo-green.png';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={devLogo} alt="Logo dev" />
      <strong>Complains</strong>
    </header>
  );
}