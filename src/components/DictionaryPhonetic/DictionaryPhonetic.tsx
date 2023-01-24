import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import styles from './styles.module.scss'

type Props = {
  phoneticData: DictionaryPhoneticModel
  onFavorite: (word: string) => void
}

export default function DictionaryPhonetic({
  phoneticData,
  onFavorite,
}: Props): JSX.Element {
  const { word, isFavorite, textPhonetics } = phoneticData

  const Icon = () =>
    isFavorite ? <StarTwoTone /> : <StarOutlined style={{ color: '#434343' }} />

  const Photenics = () => {
    return (
      <>
        {textPhonetics.map((text, index) => {
          return <h3 key={index}>{text}</h3>
        })}
      </>
    )
  }

  const onClickFavorite = () => {
    onFavorite(word)
  }

  return (
    <div className={styles['container-dictionary']}>
      <div className={styles['favorite-icon']} onClick={onClickFavorite}>
        <Icon />
      </div>
      <h2>{word}</h2>
      <Photenics />
    </div>
  )
}
