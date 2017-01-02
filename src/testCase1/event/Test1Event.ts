import FabaEvent from "@fabalous/core/FabaEvent";

export default class Test1Event extends FabaEvent {
    view:any;
    data:string;
    constructor() {
        super("Test1Event");
    }
}