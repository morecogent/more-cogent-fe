import Claim from './Claim'
import Store from "../../services/Store";

class ClaimsStore extends Store {
    constructor() {
        super([], Claim);
    }

    add(item) {
        this.items.push(new Claim(item))
    }
}

export default new ClaimsStore()