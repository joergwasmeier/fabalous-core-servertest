import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import * as React from "react";
import {ReactElement} from "react";

/**
 * Created by creativecode on 02.01.17.
 */

export default class Layout extends FabaWebBaseComponent<any>{
    constructor(props){
        super(props);
    }

    render(): ReactElement<any> {
        return <div>
            Core Server Tests
            <br/><br/>
            {this.props.childs}
        </div>
    }
}