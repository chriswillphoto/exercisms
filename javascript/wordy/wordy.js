export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const questionString = this.question;
    const matched = this.parse(questionString);

    if(matched){
      return this.analyse(matched)
    }else{
      throw new ArgumentError
    }
  }

  parse(queryString) {
    return queryString.match(/(-?\d+)\s([a-z\s]+)(-?\d+)\s?(([a-z\s]+)(-?\d+))?/);
  }

  analyse(matchArray) {
    const operatorString = matchArray[2];
    let firstOperation;
    let secondOperation;

    if (operatorString.includes('plus')){
      firstOperation = parseInt(matchArray[1]) + parseInt(matchArray[3])
    }else if(operatorString.includes('minus')){
      firstOperation = parseInt(matchArray[1]) - parseInt(matchArray[3])
    }else if(operatorString.includes('multiplied')){
       firstOperation = parseInt(matchArray[1]) * parseInt(matchArray[3])
    }else if(operatorString.includes('divided')){
      firstOperation = parseInt(matchArray[1]) / parseInt(matchArray[3])
    }

    if(!matchArray[4]){
      return firstOperation;
    }else{
      const secondOperatorString = matchArray[5]
      if (secondOperatorString.includes('plus')){
        secondOperation = firstOperation + parseInt(matchArray[6])
      }else if(secondOperatorString.includes('minus')){
        secondOperation = firstOperation - parseInt(matchArray[6])
      }else if(secondOperatorString.includes('multiplied')){
         secondOperation = firstOperation * parseInt(matchArray[6])
      }else if(secondOperatorString.includes('divided')){
        secondOperation = firstOperation / parseInt(matchArray[6])
      } 

      return secondOperation
    }
    
  }
}

export class ArgumentError extends Error {

}