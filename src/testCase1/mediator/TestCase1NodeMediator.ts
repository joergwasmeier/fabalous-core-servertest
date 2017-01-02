import Test1Event from "../event/Test1Event";
import Test1NodeCommand from "../command/server/Test1NodeCommand";
import {FabaNodeMediator} from "@fabalous/runtime-node/FabaNodeMediator";

export default class TestCase1NodeMediator extends FabaNodeMediator{
    registerCommands(): void {
        this.addCommand(Test1Event, Test1NodeCommand);
    }
}