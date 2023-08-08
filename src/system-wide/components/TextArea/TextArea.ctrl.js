import { action, computed, makeObservable, observable } from 'mobx'
import { createRef } from 'react'
import { Cursor } from '../../libs/Cursor'
import store from '../../entities/Concept/Concepts.store'
import TextFragment from '../../entities/Claim/TextFragment'

class TextAreaElement {
    constructor(item = '') {
        if(typeof item === 'string'){
            this.item = new TextFragment(item)
        } else {
            this.item = item
        }
        this.ref = createRef()
    }

    isText(){
        return this.item.type === 'TEXT'
    }
}

export default class TextAreaCtrl {
    popover = false
    popoverItems = store.items
    slashIndex = -1
    searchText = ''
    currentItemIndex = -1

    constructor({ items }) {
        this._items = addEmptyTexts(items)

        makeObservable(this, {
            popover: observable,
            _items: observable,
            items: computed,
            slashIndex: observable,
            searchText: observable,
            currentItemIndex: observable,
            updateText: action,
            onKeyPress: action
        })
    }

    get items() {
        if (this._items.length === 0) return [new TextAreaElement()]

        return this._items
    }

    onKeyPress(e, index) {
        this.currentItemIndex = index

        if (this.popover && (e.keyCode >= 65 && e.keyCode <= 122) || e.keyCode === 32) {
            this.searchText += e.key
        }
        if (!e.shiftKey) {
            switch (e.code) {
                case 'Backspace':
                    this._onBackspace(e)
                    break
                case 'Slash':
                    this._onSlash(e)
                    break
                case 'ArrowLeft':
                    if(this.currentItemIndex > 0) this._onArrowLeft(e)
                    break
                case 'ArrowRight':
                    if(this.currentItemIndex < this.items.length - 1) this._onArrowRight(e)
                    break
                case 'Escape':
                    this.popover = false
                    break
                case 'Enter':
                    e.preventDefault()
                    return false
            }
        }
    }

    _onArrowLeft(e) {
        const currentPosition = Cursor.getCurrentCursorPosition(e.target)

        if (currentPosition === 0) {
            const nextNode = this._items[this.currentItemIndex - 2].ref.current
            Cursor.setCurrentCursorPosition(nextNode.textContent.length, nextNode)
            nextNode.focus()
            e.preventDefault()
        }
    }

    _onArrowRight(e) {
        const currentPosition = Cursor.getCurrentCursorPosition(e.target)
        const currentLength = e.target.textContent.length

        if (currentPosition === currentLength) {
            const nextNode = this._items[this.currentItemIndex + 2].ref.current
            Cursor.setCurrentCursorPosition(nextNode.textContent.length, nextNode)
            nextNode.focus()
            e.preventDefault()
        }
    }

    // Set slashIndex on the Caret's index
    _onSlash() {
        const selection = window.getSelection()
        this.slashIndex = selection.baseOffset
        this.popover = true
    }

    // TODO: bug - cannot remove last CONCEPT (human) without clicking again on input
    _onBackspace(e) {
        if (this.popover && !this.searchText.length) return this.popover = false
        this.searchText = this.searchText.slice(0, -1)

        if (e.target.innerText === '') {
            const prevPrevItem = this._items[this.currentItemIndex - 2]

            this._items.splice(this.currentItemIndex - 1, 2)

            if (prevPrevItem?.item.isText()) {
                const length = prevPrevItem.ref.current.textContent.length
                Cursor.setCurrentCursorPosition(length, prevPrevItem.ref.current)
            }
            e.preventDefault()
        }
    }

    updateText(e, item) {
        console.log(e.target.innerText)
        // item.setContent(e.target.innerText)
    }

    // Change input into the item selected
    //
    // Based on TEXT item's length and slashIndex
    //    if the slashIndex + searchText === items.length -> .splice() item + empty TEXT after currentItemIndex
    //    else place concept between split TEXT
    // ? Change name to insertComponent
    replaceSlash(item) {
        const conceptToInsert = new TextAreaElement(item)

        const currentItemNode = this._items[this.currentItemIndex].ref.current
        const textBeforeSlash = currentItemNode.textContent.substring(0, this.slashIndex)
        const textAfterSlash = currentItemNode.textContent.substring(this.slashIndex + this.searchText.length + 2, currentItemNode.textContent.length)

        if (textAfterSlash.length > 0) {
            this._items.splice(
                this.currentItemIndex,
                1,
                new TextAreaElement(textBeforeSlash), conceptToInsert, new TextAreaElement(textAfterSlash)
            )
        } else {
            this._items.splice(
                this.currentItemIndex + 1,
                0,
                conceptToInsert, new TextAreaElement()
            )
            currentItemNode.textContent = textBeforeSlash
        }

        this.slashIndex = -1
        this.searchText = ''
        this.popover = false
    }
}

// Helpers

// Add empty texts:
//  Before each Component Element (if it's not preceded by text already)
//  After the last Component Element (if it's not followed by text already)
// Create refs for all
function addEmptyTexts(items) {
    const result = []

    items.forEach((item, i) => {
        const previousItemIsText = i !== 0 && items[i - 1] instanceof TextFragment
        const currentItemIsText = item instanceof TextFragment
        if (!previousItemIsText && !currentItemIsText) result.push(new TextAreaElement())

        result.push(new TextAreaElement(item))
    })

    const lastItem = items[items.length - 1]
    if (!(lastItem instanceof TextFragment)) result.push(new TextAreaElement())

    return result
}