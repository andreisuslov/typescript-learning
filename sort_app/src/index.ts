import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedLIst';

const numbersCollection = new NumbersCollection([10, 30, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('AaabbBBAacC');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(5);
linkedList.add(10);
linkedList.add(-1);

linkedList.sort();
linkedList.print();