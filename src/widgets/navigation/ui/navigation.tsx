import { Link } from 'react-router-dom'
import { routes } from './../../../shared/config/routes'
import styles from './navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <Link to={routes.getHome()} className={styles.navLink}>
        Главная
      </Link>
      <Link to={routes.getRandomPost()} className={styles.navLink}>
        Рандомный пост
      </Link>
    </nav>
  )
}
