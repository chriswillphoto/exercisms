export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    let index1;
    let index2;
    const questionString = this.question

    console.log(questionString.match(/(-?\d+)\s([a-z\s]+)(-?\d+)/))
  }
}
