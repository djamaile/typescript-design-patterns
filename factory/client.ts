import Advanced from "./advanced";
import Beginner from "./beginner";
import Factory from "./factory";
import Moderate from "./moderate";
import { userLevels } from "./types";

const factory = new Factory();
const john: Beginner = factory.createUser({
  [userLevels.beginner]: userLevels.beginner,
  name: "John",
  age: 16,
});
const keek: Moderate = factory.createUser({
  [userLevels.moderate]: userLevels.moderate,
  name: "Keek",
  age: 26,
});
const peter: Moderate = factory.createUser({
  [userLevels.moderate]: userLevels.moderate,
  name: "Peter",
  age: 26,
});

const lisa: Advanced = factory.createUser({
  [userLevels.advanced]: userLevels.advanced,
  name: "Lisa",
  age: 32,
});

peter.askQuestion("How can we invert a linkedlist");
peter.askQuestion("How can we do x");
peter.askQuestion("How can we replace Angular with React");
keek.askQuestion("Can you do my homework?");

const users = factory.getUsers();
const moderateUsers = users.filter((user) => user instanceof Moderate);
console.log(moderateUsers);

function getQuestions(users: Array<any>): Array<string> {
  const questions: Array<string> = [];
  for (const user of users) {
    if (user.questions) {
      questions.push(user.questions);
    }
  }

  return questions.flat();
}

function answerQuestions(user: Advanced, questions: Array<string>): void {
  while (questions.length > 0) {
    console.log(user.answerQuestion(questions.pop()) + "\n");
  }
}

const questions: Array<string> = getQuestions(moderateUsers);
answerQuestions(lisa, questions);
