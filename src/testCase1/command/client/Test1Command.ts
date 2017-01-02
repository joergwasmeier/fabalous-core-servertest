import Test1Event from "../../event/Test1Event";
import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import {IData} from "../../../A_Server";
import * as React from "react";
import TestCase1View from "../../view/TestCase1View";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";

export default class Test1Command extends FabaWebCommand<IData> {
    async execute(event: Test1Event) {
        console.log("execute Test1Command");
        FabaRuntimeWeb.sendToEndpoint(event, "api");
        super.sendToEndpoint(event);
    }
    
    async result(event:Test1Event){
        console.log("result");
        console.log(event);
    }
}