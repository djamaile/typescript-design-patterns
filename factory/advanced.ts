import { User } from "./user";

const answers: Array<string> = [
  "this question is a duplicate",
  "just use x",
  "this is not relevant for todays standard",
  "This feels like homework, closing it",
];

class Advanced implements User {
  public readonly name;
  public readonly age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): string {
    return "I am an advanced user";
  }

  public answerQuestion(questions: string): string {
    const answer: string = answers[Math.floor(Math.random() * answers.length)];
    return `The answer on question '${questions}' is: ${answer}, answered by ${this.name}`;
  }
}

export default Advanced;
