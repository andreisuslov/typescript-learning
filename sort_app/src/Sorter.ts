import { NumbersCollection } from './NumbersCollection';

// directions on how to be an argument in class's constructor
interface Sortable {
  length: number;
  compare (leftIndex: number, rightIndex: number): boolean;
  swap (leftIndex: number, rightIndex: number): void;
}

/*
Abstract class ->
- Sets up a contract between different classes
- Can't be used to create an object directly
- Only used as a parent class when we are trying to build up a definition of an object
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet
(we we still have to provide names and types for the un-implementer methods)
- Can make child classes promise to implement some other method
- Strongly couples classes together

Interface class ->
- Sets up a contract between different classes
- Used when we have very different objects that we want to work together
- Promotes loose coupling
*/

export abstract class Sorter {
  abstract compare(leftIndex: number, eightIndex: number): boolean;
  abstract swap(leftIndex: number, eightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
