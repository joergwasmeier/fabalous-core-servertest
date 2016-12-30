import FabaNodeCommand from "@fabalous/core/FabaNodeCommand";
import Test1Event from "../../event/Test1Event";
import {IData} from "../../../A_Server";

export default class Test1NodeCommand extends FabaNodeCommand<IData> {
    async execute(event: Test1Event) {
        setTimeout(()=>{
            event.callBack();
        }, 100);
    }
}