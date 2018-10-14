export default class Triangle{
  constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    this.sidesArray = [side1, side2, side3]
    console.log('whatever')
  }

  kind(){
    if(this.side1 == this.side2 && this.side2 == this.side3){
      return 'equilateral'
    }
  }
}