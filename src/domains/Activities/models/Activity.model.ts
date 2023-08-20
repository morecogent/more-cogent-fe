import DesignTreeItem from "../../Design/models/DesignTreeItem.model"
import {computed, makeObservable, observable} from "mobx";
import {IDesignTreeItemProperties} from "../../Design/models/DesignTreeItem.types";

interface ActivityProperties extends IDesignTreeItemProperties {
    name: string
}

export default class Activity extends DesignTreeItem {
    name: string


    constructor({id, name, parentId, justificationIds}: ActivityProperties) {
        super({id, parentId, justificationIds})
        this.name = name

        makeObservable(this, {
            name: observable
        })
    }

    changeName(name){
        this.name = name
    }
}