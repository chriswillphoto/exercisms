export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    let index1;
    let index2;
    const questionString = this.question

    for (let i = 0; i < questionString.length; i++) {
      if (parseInt(questionString[i]) && !index1) {
        index1 = i;
      } else if (parseInt(questionString[i])) {
        index2 = i;
      }
    }

    console.log(index1, index2)
  }
}
