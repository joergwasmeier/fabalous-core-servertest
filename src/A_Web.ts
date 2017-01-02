import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaStore from "@fabalous/core/FabaStore";
import {IData} from "./A_Server";
import FabaImmutableStore from "@fabalous/core/FabaImmutableStore";
import Layout from "./testCase1/view/Layout";
import Routes from "./Routes";
import FabaCore from "@fabalous/core/FabaCore";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";

class A_Web extends FabaRuntimeWeb{
    constructor(store:FabaStore<IData>){
        let host: string = window.location.host + "/api/";
        if (host === "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host === "localhost:8080/api/") host = "localhost:3120/";

        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(window.location.protocol + "//" + host), "api");
        super(store ,Routes ,Layout, module);
    }
}

var store:FabaImmutableStore<IData> = new FabaImmutableStore({});
new A_Web(store);