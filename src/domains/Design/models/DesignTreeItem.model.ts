import {action, computed, makeObservable, observable} from 'mobx'
import {v4} from 'uuid'
import conceptsStore from "../../../system-wide/entities/Concept/Concepts.store";
import claimsStore from "../../../system-wide/entities/Claim/Claims.store";
import {IDesignTreeItem, IDesignTreeItemProperties} from "./DesignTreeItem.types";

export default abstract class DesignTreeItem implements IDesignTreeItem {
    id
    parentId
    conceptId
    justificationIds

    constructor({id, conceptId, parentId, justificationIds}: IDesignTreeItemProperties) {
        this.id = id || v4()
        this.parentId = parentId
        this.conceptId = conceptId
        this.justificationIds = justificationIds || []

        makeObservable(this, {
            justificationIds: observable,

            name: computed,
            concept: computed,
            justifications: computed,
            justificationsSize: computed,
            isJustified: computed,

            justify: action,
            removeJustification: action
        })
    }

    get name() {
        return this.concept.name
    }

    get concept(){
        const concepts = conceptsStore.getByIds([this.conceptId])
        return concepts[0]
    }

    get justifications(){
        return claimsStore.getByIds(this.justificationIds)
    }

    get justificationsSize(){
        return this.justificationIds.length
    }

    get isJustified(){
        return this.justificationsSize > 0
    }

    justify(claimId: string){
        this.justificationIds.push(claimId)
    }

    removeJustification(id: string){
        this.justificationIds = this.justificationIds.filter(itemId => itemId !== id)
    }
}