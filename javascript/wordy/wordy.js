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
    return queryString.match(/(-?\d+)\s([a-z\s]+)(-?\d+)/);
  }

  analyse(matchArray) {
    const operatorString = matchArray[2];

    if (operatorString.includes('plus')){
      return parseInt(matchArray[1]) + parseInt(matchArray[3])
    }else if(operatorString.includes('minus')){
      return parseInt(matchArray[1]) - parseInt(matchArray[3])
    }else if(operatorString.includes('multiplied')){
      return parseInt(matchArray[1]) * parseInt(matchArray[3])
    }else if(operatorString.includes('divided')){
      return parseInt(matchArray[1]) / parseInt(matchArray[3])
    }
  }
}
