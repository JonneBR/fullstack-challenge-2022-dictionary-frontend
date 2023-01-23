import { DictionaryCache } from '../../../src/data/models/dictionary-cache'

export const mockHistory = (): DictionaryCache => ({
  father: {
    word: 'father',
    isFavorite: false,
    textPhonetics: ['/ˈfaːðə/', '/ˈfɑːðə(ɹ)/', '/ˈfɑðɚ/'],
    firstAudio:
      'https://api.dictionaryapi.dev/media/pronunciations/en/father-uk.mp3',
    definitionMeanings: [
      'noun - A (generally human) male who begets a child.',
      'verb - To be a father to; to sire.',
    ],
  },
})
