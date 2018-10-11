export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const questionString = this.question
    const matched = this.parse(questionString)

    console.log(matched[2])
  }

  parse(queryString){
    return queryString.match(/(-?\d+)\s([a-z\s]+)(-?\d+)/)
  }

  analyse(matchArray){
    
  }
}
