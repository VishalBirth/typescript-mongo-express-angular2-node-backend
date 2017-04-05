import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "./type-declarations";

import {User} from "../../models/src/user.model";

@injectable()
class StrongUser implements User {

  public id;
  public email;
  public password;

  public hit() {
    return "cut!";
  }
}

export {StrongUser};