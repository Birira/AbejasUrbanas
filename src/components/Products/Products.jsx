/**
 * Grid de productos o categorías (placeholders).
 */

import Container from '../layout/Container';
import Section from '../layout/Section';
import styles from './Products.module.css';
import mielPanal from '../../assets/miel_panal.jpg';
import cera from '../../assets/cera.jpg';

const PRODUCTS = [
  { name: 'Miel de panal', description: 'Miel en su máximo , disfrutala tomándola del propio panal.', image: mielPanal, "precio": "3000" },
  { name: 'Cera', description: 'Cera natural secretado por las abejas obreras y utilizado en la colmena para la construcción de panales.', image: cera, "precio": "1000" },

];

export default function Products() {
  return (
    <Section id="productos">
      <Container>
        <h2 className={styles.heading}>Nuestros productos</h2>
        <ul className={styles.grid}>
          {PRODUCTS.map(({ name, description, image, precio }) => (
            <li key={name} className={styles.card}>
              <div className={styles.placeholder} aria-hidden="true" >
                <img src={image} alt={name} />
              </div>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.cardFooter}>
                <p className={styles.cardPrice}>${precio}</p>
                <button className={styles.addToCart}>Comprar ahora</button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
