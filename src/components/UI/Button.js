import styles from './Button.module.css'
function Button(props) {
  const { children, title } = props
  return (
    <button {...props} className={styles.buttons} title={title}>
      {children}
    </button>
  )
}

export default Button
