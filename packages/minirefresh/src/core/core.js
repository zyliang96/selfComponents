import { isBrowser } from "../mixins/index";
import { warn, error, log } from "../utils/debug";

class Core {
    constructor() {
        if (!isBrowser()) {
            error('')
            return;
        }
    }
}
