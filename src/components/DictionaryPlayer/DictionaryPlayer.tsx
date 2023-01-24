import { Slider } from 'antd'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { DictionaryCache } from '../../data/models/dictionary-cache'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import styles from './styles.module.scss'

type Props = {
  audio: string
  audioData: DictionaryCache
  playNextAudio: () => void
  playPreviousAudio: () => void
}

export default function DictionaryPlayer(props: Props) {
  const { audio, audioData, playNextAudio, playPreviousAudio } = props

  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const hasNext = false
  // const hasPrevious = true

  // useEffect(() => {
  //   const audioInstance = new Audio(audio)
  //   audioInstance.addEventListener('loadedmetadata', (e) => {
  //     if (e.target !== null) {
  //       const duration = (e.target as HTMLAudioElement).duration
  //       durationRef.current = duration
  //     }
  //   })
  // }, [audio])

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

  function handleSeek(amount: number) {
    setProgress(amount)
  }

  function playPrevious() {
    // console.log(audioData)
    // const wordsArray = Object.keys(audioData)
    // const indexFather = wordsArray.indexOf('father')
    // const previousIndex = wordsArray[indexFather - 1]
    // if (previousIndex !== undefined) {
    //   console.log(audioData[previousIndex].firstAudio)
    // }
    playPreviousAudio()
  }

  function playNext() {
    playNextAudio()
  }

  return (
    <>
      <p>{audio}</p>
      <div className={styles.progress}>
        <span>{convertDurationToTimeString(progress)}</span>
        <div className={styles.slider}>
          <Slider
            max={1}
            value={progress}
            onChange={handleSeek}
            disabled={true}
          />
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
