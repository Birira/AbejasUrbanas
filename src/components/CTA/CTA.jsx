/**
 * Call to action: contacto o suscripción.
 */

import Container from '../layout/Container';
import Section from '../layout/Section';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <Section id="cta" variant="dark">
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Contacta con nosotros</h2>
          <a href="mailto:contacto@ejemplo.com" className={styles.button}>
            Contactar
          </a>
        </div>
      </Container>
    </Section>
  );
}
