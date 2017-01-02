import Test1WebCommand from "./command/client/Test1WebCommand";
import InitTestEvent from "./event/InitTestEvent";
import TestCase1ClientMediator from "./mediator/TestCase1ClientMediator";

module.exports = {
    mediator: TestCase1ClientMediator,
    initEvent: InitTestEvent,
};