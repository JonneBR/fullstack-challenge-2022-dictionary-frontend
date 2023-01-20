import { StarTwoTone } from '@ant-design/icons'
import styles from './styles.module.scss'

export default function Dictionary() {
  return (
    <div className={styles['container-dictionary']}>
      <div className={styles['favorite-icon']}>
        <StarTwoTone />
      </div>
      <h2>hello</h2>
      <h3>həˈləʊ</h3>
    </div>
  )
}
