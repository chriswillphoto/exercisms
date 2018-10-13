export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const questionString = this.question;
    const matched = this.parse(questionString);

    if(matched){
      return this.analyse(matched)
    }
  }

  parse(queryString) {
    return queryString.match(/(-?\d+)\s([a-z\s]+)(-?\d+)\s?(([a-z\s]+)(-?\d+))?/);
  }

  analyse(matchArray) {
    const operatorString = matchArray[2];
    let firstOperation;

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
    }
  }
}
