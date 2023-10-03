import { Selector, t } from "testcafe";

class Navbar {
    constructor() {
        this.searchBox = Selector("#serachTerm")
        this.signInButtom = Selector("#signin_button")
    }
}

export default Navbar