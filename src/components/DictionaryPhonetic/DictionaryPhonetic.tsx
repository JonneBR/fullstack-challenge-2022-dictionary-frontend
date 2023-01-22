import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { usePlayer } from '../../contexts/PlayerContext'
import styles from './styles.module.scss'

type Props = {
  props: { word: string; isFavorite: boolean; textPhonetics: string[] }
}

export default function DictionaryPhonetic({ props }: Props): JSX.Element {
  const { word, isFavorite, textPhonetics } = props

  const { selectedWord } = usePlayer()

  const Icon = () =>
    isFavorite ? <StarTwoTone /> : <StarOutlined style={{ color: '#434343' }} />

  const Photenics = () => {
    return (
      <>
        {textPhonetics.map((text) => {
          return <h3 key={text}>{text}</h3>
        })}
      </>
    )
  }

  return (
    <div className={styles['container-dictionary']}>
      <div
        className={styles['favorite-icon']}
        // onClick={() => setIsFavorite(!isFavorite)}
      >
        <Icon />
      </div>
      <h2>{selectedWord}</h2>
      <Photenics />
    </div>
  )
}
