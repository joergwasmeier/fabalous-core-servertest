import FabaServer from "@fabalous/core/FabaServer";
import FabaCore from "@fabalous/core/FabaCore";
import TestCase1NodeMediator from "./testCase1/mediator/TestCase1NodeMediator";
import Test1Event from "./testCase1/event/Test1Event";
import FabaStore from "@fabalous/core/FabaStore";
class A_Server extends FabaServer {
    constructor(data:FabaStore<IData>){
        super(data);
        console.log("start");

        FabaCore.addMediator(TestCase1NodeMediator);

        new Test1Event().dispatch().then(()=>{
                console.log("fin");
            }
        );

        this.asyncTest();
    }

    async asyncTest(){
        var test1 = await new Test1Event().dispatch();
        console.log("test1: " + test1);
        var test2 = await new Test1Event().dispatch();
        console.log("test2: " +test2);
        var test3 = await new Test1Event().dispatch();
        console.log("test3: " +test3);
    }
}

export interface IData {

};

var test:FabaStore<IData> = new FabaStore({});
new A_Server(test);