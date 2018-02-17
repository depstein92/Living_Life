import axios from 'axios';

export const FETCH_WORD_SIMILIAR_TOO = 'FETCH_WORD_SIMILIAR_TOO';

export default function getWordsSimilar(word){ 

  const wordsSimiliar = axios.get(`https://api.datamuse.com/words?ml=${ word }`);

  return {
    type: FETCH_WORD_SIMILIAR_TOO,
    payload: wordsSimiliar
  }
}
