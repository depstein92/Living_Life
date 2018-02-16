import axios from 'axios';

export const FETCH_WORD_SIMILIAR_TOO = 'FETCH_WORD_SIMILIAR_TOO';
export const FETCH_WORD_SPELLED_LIKE = 'FETCH_WORD_SPELLED_LIKE';


export function getWordsSimilar(word){ /* default removed could cause error*/

  const wordsSimiliar = axios.get(`https://api.datamuse.com/words?ml=${ word }`);

  return {
    type: FETCH_WORD_SIMILIAR_TOO,
    payload: wordsSimiliar
  }
}

export function getWordsSoundLike(word){ /*default removed could cause error*/

  const wordsSoundLike = axios.get(`https://api.datamuse.com/words?sl=${word}`);

  return {
    type: FETCH_WORD_SPELLED_LIKE,
    payload: wordsSoundLike
  }
}
