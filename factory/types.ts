import Beginner from "./beginner";
import Moderate from "./moderate";
import Advanced from "./advanced";

type UserType = Beginner | Moderate | Advanced;
enum userLevels {
  beginner = "beginner",
  moderate = "moderate",
  advanced = "advanced",
}
interface GivenUser {
  name: string;
  age: number;
}
interface BeginnerUser extends GivenUser {
  [userLevels.beginner]: string;
}
interface ModerateUser extends GivenUser {
  [userLevels.moderate]: string;
}
interface AdvanceUser extends GivenUser {
  [userLevels.advanced]: string;
}

type PossibleUsers = BeginnerUser | ModerateUser | AdvanceUser;

export {
  UserType,
  PossibleUsers,
  BeginnerUser,
  ModerateUser,
  AdvanceUser,
  userLevels,
};
