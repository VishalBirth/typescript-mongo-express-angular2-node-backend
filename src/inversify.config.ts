import { Container } from "inversify";
import {TYPES} from "./type-declarations";
import {StrongUser} from "./somefile"
import {User} from "../../models/src/user.model";

var myContainer = new Container();

myContainer.bind<User>(TYPES.User).to(StrongUser);

export { myContainer };