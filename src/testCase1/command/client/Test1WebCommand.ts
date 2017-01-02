import Test1Event from "../../event/Test1Event";
import {FabaWebCommand} from "@fabalous/runtime-web/FabaWebCommand";
import {IData} from "../../../A_Server";
import * as React from "react";
import TestCase1View from "../../view/TestCase1View";

export default class Test1WebCommand extends FabaWebCommand<IData> {
    async execute(event: Test1Event) {
        event.view = React.createElement(TestCase1View, {});
        event.callBack();
    }
}