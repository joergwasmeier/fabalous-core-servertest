import FabaCore from "@fabalous/core/FabaCore";
import TestCase1NodeMediator from "./testCase1/mediator/TestCase1NodeMediator";
import Test1Event from "./testCase1/event/Test1Event";
import FabaStore from "@fabalous/core/FabaStore";
import FabaNodeRuntime from "@fabalous/runtime-node/FabaNodeRuntime";

class A_Server extends FabaNodeRuntime {
    constructor(data:FabaStore<IData>){
        super(data);
        require('source-map-support').install();
        console.log("Start");
        FabaCore.addMediator(TestCase1NodeMediator);
    }
}

export interface IData {
    serverResult:string;
}

var test:FabaStore<IData> = new FabaStore({serverResult:""});
new A_Server(test);