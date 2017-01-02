import Test1Event from "../../event/Test1Event";
import {IData} from "../../../A_Server";
import {FabaNodeCommand} from "@fabalous/runtime-node/FabaNodeCommand";

export default class Test1NodeCommand extends FabaNodeCommand<IData> {
    async execute(event: Test1Event) {
        console.log("Test1NodeCommand with 2 secs delay");
        
        event.data = "test";
        setTimeout(()=>{
            console.log("Send back");

            event.callBack();
        }, 2000);
    }
}