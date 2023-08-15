import Design from './Design.model'
import Store from "../../services/Store";

class DesignsStore extends Store {
    constructor() {
        super()
    }

    add(item) {
        let instance = item instanceof Design ?
            item :
            new Design(item)

        this.items.push(instance)
        return instance
    }

}

export default new DesignsStore()