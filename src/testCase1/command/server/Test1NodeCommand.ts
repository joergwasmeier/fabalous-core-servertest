import Test1Event from "../../event/Test1Event";
import {IData} from "../../../A_Server";
import {FabaNodeCommand} from "@fabalous/runtime-node/FabaNodeCommand";

export default class Test1NodeCommand extends FabaNodeCommand<IData> {
    async execute(event: Test1Event) {
        console.log("Test1NodeCommand");
        event.data = "test";
        setTimeout(()=>{
            event.callBack();
        }, 1000);
    }
}