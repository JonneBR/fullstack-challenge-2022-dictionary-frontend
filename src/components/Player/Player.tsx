import { Slider } from 'antd'
import Image from 'next/image'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import styles from './styles.module.scss'

// https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3
export default function Player() {
  const isPlaying = false
  const episode = true
  return (
    <>
      <div className={styles.progress}>
        <span>{convertDurationToTimeString(0)}</span>
        <div className={styles.slider}>
          {episode ? (
            <Slider defaultValue={30} disabled={false} />
          ) : (
            <Slider disabled={true} />
          )}
        </div>
        <span>{convertDurationToTimeString(1)}</span>
      </div>
      <div className={styles.buttons}>
        <button
          type='button'
          // onClick={playPrevious}
          // disabled={!episode || !hasPrevious}
        >
          <Image
            src='/svg/play-previous.svg'
            alt='Tocar anterior'
            width={25}
            height={25}
          />
        </button>
        <button
          type='button'
          // disabled={!episode}
          className={styles.playButton}
          // onClick={togglePlay}
        >
          {isPlaying ? (
            <Image src='/svg/pause.svg' alt='Pausar' width={25} height={25} />
          ) : (
            <Image src='/svg/play.svg' alt='Tocar' width={25} height={25} />
          )}
        </button>
        <button
          type='button'
          // onClick={playNext}
          // disabled={!episode || !hasNext}
        >
          <Image
            src='/svg/play-next.svg'
            alt='Tocar próxima'
            width={25}
            height={25}
          />
        </button>
      </div>
    </>
  )
}
