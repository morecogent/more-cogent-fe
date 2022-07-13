import { action, computed, makeObservable, observable } from 'mobx'

export default class TextAreaCtrl {
    popover = false
    slashIndex = -1
    searchText = ''

    constructor() {
        makeObservable(this, {
            popover: observable,
            slashIndex: observable,
            searchText: observable,
            updateText: action
        })
    }

    onKeyPress(e) {
        console.log(e)
        if(this.popover && e.keyCode >= 65 && e.keyCode <= 122){
            this.searchText += e.key
        }
        switch(e.code){
            case 'Backspace':
                this.searchText = this.searchText.slice(0, -1)
                console.log(this.searchText);
                break
            case 'Slash':
                console.log(e.target.innerText.length)
                this.slashIndex = e.target.innerText.length
                this.popover = true
                break
            case 'Escape':
                console.log("bye")
                this.popover = false
                break
        }
    }

    updateText(e, item) {
        console.log(e.target.innerText)
        item.setContent(e.target.innerText)
    }

    replaceSlash(claimId){

    }
}