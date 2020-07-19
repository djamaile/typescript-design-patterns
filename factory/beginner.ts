import { User } from "./user";

class Beginner implements User {
  public readonly name: string;
  public readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): string {
    return "I am a noob";
  }
}

export default Beginner;
