/**
 * Sección hero: mensaje principal y CTA.
 */

import Container from '../layout/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Miel de abeja
          </h1>
          <p className={styles.subtitle}>
          Miel de una alta variedad floral, libre de pesticidas, rica en múltiples vitaminas, antioxidantes, fuente de carbohidratos, 
          además una buena ayuda frente a las alergias y el colesterol.
          </p>
          <div className={styles.actions}>
            <a href="#productos" className={styles.primaryBtn}>
              Ver productos
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
