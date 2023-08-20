import Activity from '../models/Activity.model'
import Store from "../../../system-wide/services/Store";

class ActivitiesStore extends Store {
    constructor() {
        super([], Activity)
    }

    add(item: Activity) {
        this.items.push(item)
        return item
    }

}

export default new ActivitiesStore()