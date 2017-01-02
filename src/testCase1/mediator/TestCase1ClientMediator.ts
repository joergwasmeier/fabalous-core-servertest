import Test1Event from "../event/Test1Event";
import {FabaWebMediator} from "@fabalous/runtime-web/FabaWebMediator";
import Test1WebCommand from "../command/client/Test1WebCommand";
import InitTestEvent from "../event/InitTestEvent";
import Test1Command from "../command/client/Test1Command";

export default class TestCase1ClientMediator extends FabaWebMediator{
    registerCommands(): void {
        this.addCommand(Test1Event, Test1Command);
        this.addCommand(InitTestEvent, Test1WebCommand);
    }
}