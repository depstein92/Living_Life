import axios from 'axios';

export const FETCH_WORD_SPELLED_LIKE = 'FETCH_WORD_SPELLED_LIKE';

export default function getWordsSoundLike(word){

  const wordsSoundLike = axios.get(`https://api.datamuse.com/words?sl=${word}`);

  return {
    type: FETCH_WORD_SPELLED_LIKE,
    payload: wordsSoundLike
  }
}
