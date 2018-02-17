import axios from 'axios';

export const FETCH_WORD_SOUND_LIKE = 'FETCH_WORD_SOUND_LIKE';

export default function getWordsSoundLike(word){

  const wordsSoundLike = axios.get(`https://api.datamuse.com/words?sl=${word}`);

  return {
    type: FETCH_WORD_SOUND_LIKE,
    payload: wordsSoundLike
  }
}
