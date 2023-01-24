import { StarOutlined, StarTwoTone } from '@ant-design/icons'
import { Dispatch, SetStateAction } from 'react'
import { DictionaryPhoneticModel } from '../../data/models/dictionary-phonetic'
import styles from './styles.module.scss'

type Props = {
  phoneticData: DictionaryPhoneticModel
  onFavorite: (word: string) => void
  setTest: Dispatch<SetStateAction<boolean>>
}

export default function DictionaryPhonetic({
  phoneticData,
  onFavorite,
  setTest,
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
    // setTest((prev) => !prev)
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
