import FabaMediator from "@fabalous/core/FabaMediator";
import Test1Event from "../event/Test1Event";
import Test1NodeCommand from "../command/server/Test1NodeCommand";
/**
 * Created by creativecode on 30.12.16.
 */

export default class TestCase1NodeMediator extends FabaMediator{
    registerCommands(): void {
        this.addCommand(Test1Event, Test1NodeCommand);
    }
}