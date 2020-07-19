import Beginner from "./beginner";
import Moderate from "./moderate";
import Advanced from "./advanced";
import {
  BeginnerUser,
  ModerateUser,
  AdvanceUser,
  PossibleUsers,
  UserType,
  userLevels,
} from "./types";

class UserFactory {
  public users: Array<UserType>;

  constructor(users = []) {
    this.users = users;
  }

  createUser(type: BeginnerUser): Beginner;
  createUser(type: ModerateUser): Moderate;
  createUser(type: AdvanceUser): Advanced;

  public createUser(userOptions: PossibleUsers): UserType {
    switch (userLevels[Object.keys(userOptions)[0]]) {
      case "beginner":
        const beginner = new Beginner(userOptions.name, userOptions.age);
        this.users.push(beginner);
        return beginner;
      case "moderate":
        const moderate = new Moderate(userOptions.name, userOptions.age);
        this.users.push(moderate);
        return moderate;
      case "advanced":
        const advanced = new Advanced(userOptions.name, userOptions.age);
        this.users.push(advanced);
        return advanced;
      default:
        throw new Error("This user is not valid");
    }
  }

  public getUsers(): Array<UserType> {
    return this.users;
  }
}

export default UserFactory;
