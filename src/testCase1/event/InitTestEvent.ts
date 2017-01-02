import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitTestEvent extends FabaEvent {
    constructor() {
        super("InitTestEvent");
    }
}