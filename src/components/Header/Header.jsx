/**
 * Cabecera con logo y navegación principal.
 * Navegación con anclas a secciones de la página.
 */

import Container from '../layout/Container';
import styles from './Header.module.css';
import logo from '../../assets/logo_abejas.png';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#cta' },
];

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <Container>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo} aria-label="Ir al inicio">
            <img src={logo} alt="" className={styles.logoImage} />
            <span className={styles.logoText}>Abejas Urbanas Unidas</span>
          </a>
          <nav className={styles.nav} aria-label="Navegación principal">
            <ul className={styles.navList}>
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
