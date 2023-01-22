import styles from './styles.module.scss'

type Props = {
  definitions: string[]
}

export default function DictionaryMeanings(props: Props) {
  const { definitions } = props

  const Definitions = () => {
    return (
      <>
        {definitions.map((definition) => {
          return <p key={definition}>{definition}</p>
        })}
      </>
    )
  }
  return (
    <div className={styles['container-word-meanings']}>
      <h1>Meanings</h1>
      <Definitions />
    </div>
  )
}
