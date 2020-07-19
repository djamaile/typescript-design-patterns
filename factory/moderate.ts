import { User } from "./user";

class Moderate implements User {
  public readonly name: string;
  public readonly age: number;
  public questions: Array<string>;

  constructor(name: string, age: number, questions: Array<string> = []) {
    this.name = name;
    this.age = age;
    this.questions = questions;
  }

  public greet(): string {
    return "I am a moderate level user";
  }

  public askQuestion(question: string): void {
    this.questions.push(question);
  }
}

export default Moderate;
