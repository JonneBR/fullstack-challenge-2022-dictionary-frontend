import { Slider } from 'antd'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import styles from './styles.module.scss'

type Props = {
  audio: string
  playNextAudio: () => void
  playPreviousAudio: () => void
}

export default function DictionaryPlayer(props: Props) {
  const { audio, playNextAudio, playPreviousAudio } = props

  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  function setupProgressListener() {
    if (audioRef.current !== null) {
      audioRef.current.currentTime = 0

      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current !== null) {
          setProgress(Math.floor(audioRef.current.currentTime))
        }
      })
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function handleEpisodeEnded() {
    setIsPlaying(false)
  }

  function playPrevious() {
    playPreviousAudio()
  }

  function playNext() {
    playNextAudio()
  }

  return (
    <>
      <div className={styles.progress}>
        <span>{convertDurationToTimeString(progress)}</span>
        <div className={styles.slider}>
          <Slider max={1} value={progress} disabled={true} />
        </div>
        <audio
          src={audio}
          ref={audioRef}
          // autoPlay
          onEnded={handleEpisodeEnded}
          // loop={isLooping}
          // onPlay={() => setPlayingState(true)}
          // onPause={() => setPlayingState(false)}
          onLoadedMetadata={setupProgressListener}
        />
        <span>{convertDurationToTimeString(1)}</span>
      </div>
      <div className={styles.buttons}>
        <button
          type='button'
          onClick={playPrevious}
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
          disabled={!audio}
          className={styles.playButton}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Image src='/svg/pause.svg' alt='Pausar' width={25} height={25} />
          ) : (
            <Image src='/svg/play.svg' alt='Tocar' width={25} height={25} />
          )}
        </button>
        <button
          type='button'
          onClick={playNext}
          // disabled={!episode || !hasNext}
          // disabled={!hasNext}
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
