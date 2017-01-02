import FabaCore from "@fabalous/core/FabaCore";
import TestCase1NodeMediator from "./testCase1/mediator/TestCase1NodeMediator";
import Test1Event from "./testCase1/event/Test1Event";
import FabaStore from "@fabalous/core/FabaStore";
import FabaNodeRuntime from "@fabalous/runtime-node/FabaNodeRuntime";

class A_Server extends FabaNodeRuntime {
    constructor(data:FabaStore<IData>){
        super(data);
        console.log("start");

        FabaCore.addMediator(TestCase1NodeMediator);

        new Test1Event().dispatch().then(()=>{
                console.log("fin d");
            }
        );

        this.asyncTest();
    }


    async asyncTest(){
        let test1 = await new Test1Event().dispatch();
        console.log("test1: " + test1);
        let test2 = await new Test1Event().dispatch();
        console.log("test2: " +test2);
        let test3 = await new Test1Event().dispatch();
        console.log("test3: " +test3);
    }
}

export interface IData {

}

var test:FabaStore<IData> = new FabaStore({});
new A_Server(test);