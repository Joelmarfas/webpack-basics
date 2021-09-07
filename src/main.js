import { arrow, Dog } from './module-a';
import { query } from './module-b';

arrow();
const orelletes = new Dog('orelletes');
console.log(orelletes.sayHi());

query();