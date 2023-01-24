import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import styles from './styles.module.scss'

type Props = {
  phoneticData: DictionaryPhoneticModel
}

export default function DictionaryPhonetic({
  phoneticData,
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

  return (
    <div className={styles['container-dictionary']}>
      <div
        className={styles['favorite-icon']}
        onClick={() => console.log(!isFavorite)}
      >
        <Icon />
      </div>
      <h2>{word}</h2>
      <Photenics />
    </div>
  )
}
