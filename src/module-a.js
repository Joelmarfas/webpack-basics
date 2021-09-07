import { query } from "./module-b";

export const arrow = () => {
    let variable = 'canvi let';
    console.log('la funció fletxa rutlla');
    variable = 'variable let canviada';
    console.log(variable);
  };
  
  export class Dog {
    constructor(name) {
      this.name = name;
    }   
  
    sayHi() {
      return `${this.name} say bub bub!`;
    }
  }

  