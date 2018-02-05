import gql from 'graphql-tag';


export default gql`
{
wordsWithSingleRelation($word: $String, $typeOfQuery:$String){
  wordList(word: $word, typeOfQuery: $typeOfQuery)
  scoreList(word: $word, typeOfQuery: $typeOfQuery)
 }
}

`
