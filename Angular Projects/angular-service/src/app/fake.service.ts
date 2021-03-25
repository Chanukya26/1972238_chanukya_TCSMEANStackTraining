import {Injectable} from "@angular/core";


@Injectable()
export class FakeService{
    sayHello():string{
        return " welcome to userdefined DI";
    }
}