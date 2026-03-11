/**
 * Sección de beneficios o características del producto/servicio.
 */

import Container from '../layout/Container';
import Section from '../layout/Section';
import styles from './Beneficios.module.css';

const BENEFICIOS = [
  {
    title: 'Productos de calidad',
    description: 'Miel orgánica y natural.',
  },
  {
    title: 'Envíos a todo el país',
    description: 'Recibe tu pedido a lo largo de todo el país.',
  },

];

export default function Beneficios() {
  return (
    <Section id="beneficios" variant="alt">
      <Container>
        <h2 className={styles.heading}>Por qué elegirnos</h2>
        <ul className={styles.grid}>
          {BENEFICIOS.map(({ title, description }) => (
            <li key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
