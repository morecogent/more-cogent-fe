import ClaimModel from './Claim.model'
import Store from "../../services/Store";

class ClaimsStore extends Store {
    constructor() {
      super()
    }

    add(item) {
        this.items.push(new ClaimModel(item))
    }
}

export default new ClaimsStore()