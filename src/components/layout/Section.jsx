/**
 * Wrapper semántico para secciones de la landing.
 * Acepta variant para estilos alternativos (ej. fondo destacado).
 */

import styles from './Section.module.css';

const VARIANTS = ['default', 'alt', 'dark'];

export default function Section({
  children,
  variant = 'default',
  id,
  className = '',
  as: Component = 'section',
}) {
  const variantClass = VARIANTS.includes(variant) ? styles[variant] : styles.default;
  const classNames = [styles.section, variantClass, className].filter(Boolean).join(' ');

  return (
    <Component id={id} className={classNames}>
      {children}
    </Component>
  );
}
