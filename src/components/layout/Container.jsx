/**
 * Contenedor que centra el contenido y aplica padding consistente.
 * Uso: envolver el contenido de cada sección para ancho máximo controlado.
 */

import styles from './Container.module.css';

export default function Container({ children, className = '' }) {
  return (
    <div className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}
