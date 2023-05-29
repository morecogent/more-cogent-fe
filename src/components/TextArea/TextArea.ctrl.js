import { action, computed, makeObservable, observable } from 'mobx'
import {NarrationElementModel} from '../../entities/Story/Narration.model'

export default class TextAreaCtrl {
    popover = false
    slashIndex = -1
    searchText = ''
    currentItemIndex = -1

    constructor() {
        makeObservable(this, {
            popover: observable,
            slashIndex: observable,
            searchText: observable,
            currentItemIndex: observable,
            updateText: action
        })
    }

    onKeyPress(e, index, narration) {
        console.log(e)
        this.currentItemIndex = index

        if(this.popover && e.keyCode >= 65 && e.keyCode <= 122){
            this.searchText += e.key
        }
        if(!e.shiftKey){
            switch(e.code){
                case 'Backspace':
                    if(!this.searchText.length)
                        return this.popover = false
                    this.searchText = this.searchText.slice(0, -1)
                    break
                case 'Slash':
                    this.slashIndex = e.target.innerText.length
                    this.popover = true
                    break
                case 'Escape':
                    this.popover = false
                    break
                case 'Enter':
                    this.addParagraph(narration)
                    break
            }
        }
    }

    updateText(e, item) {
        console.log(e.target.innerText)
        item.setContent(e.target.innerText)
    }

    addParagraph(narration) {
        narration.addParagraph()
    }

    replaceSlash(claimId, items){
        const claim = new NarrationElementModel({type: 'claim', content: claimId})
        items.splice(this.currentItemIndex + 1, 0, claim)
        items[this.currentItemIndex].content = items[this.currentItemIndex].content.slice(0, this.slashIndex - 1)
        this.slashIndex = -1
        this.searchText = ''
        this.popover = false

        const nextSpan = new NarrationElementModel({type: 'span', content: ''})
        items.splice(this.currentItemIndex + 2, 0, nextSpan)
    }
}