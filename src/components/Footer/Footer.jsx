/**
 * Pie de página con enlaces y copyright.
 */

import Container from '../layout/Container';
import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>Abejas Urbanas Unidas</span>
            <p className={styles.tagline}>
              Productos de calidad para el cuidado de tus abejas.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
