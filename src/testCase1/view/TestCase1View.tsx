import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import * as React from "react";
import {ReactElement} from "react";
import Test1Event from "../event/Test1Event";

/**
 * Created by creativecode on 02.01.17.
 */

export default class TestCase1View extends FabaWebBaseComponent<any>{
    constructor(props){
        super(props);
    }

    triggerTestClick(){
        new Test1Event().dispatch();
    }

    render(): ReactElement<any> {
        return <div>
           <button onClick={this.triggerTestClick}>Send Event to Server</button>
        </div>
    }
}