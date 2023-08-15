import {makeObservable, observable} from 'mobx'
import {v4} from 'uuid'
import DesignTree from "./DesignTree";
import Goal from "./Goal.model";

type DesignConstructor = {
    id?: string
    name?: string
    mainTree: Goal[]
}

export default class Design {
    id: string
    name: string
    mainTree: DesignTree

    constructor({id, name, mainTree}: DesignConstructor) {
        this.id = id || v4()
        this.name = name || 'Default design name'
        this.mainTree = new DesignTree(mainTree)
        // this.sideTrees = sideGoals

        makeObservable(this, {
            mainTree: observable,
            // sideTrees: observable
        })
    }

}