import { action, computed, makeObservable, observable } from 'mobx'
import { createRef } from 'react'
import { Cursor } from '../../libs/Cursor'
import store from '../../entities/Concept/Concepts.store'

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
        if (this._items.length === 0) return [createText()]

        return this._items
    }

    onKeyPress(e, index) {
        this.currentItemIndex = index

        if (this.popover && e.keyCode >= 65 && e.keyCode <= 122) {
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
                case 'Escape':
                    this.popover = false
                    break
                case 'Enter':
                    e.preventDefault()
                    return false
            }
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

            if (prevPrevItem?.type === 'TEXT') {
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
        const conceptToInsert = {
            type: 'CONCEPT',
            value: item
        }

        const currentItemNode = this._items[this.currentItemIndex].ref.current
        const textBeforeSlash = currentItemNode.textContent.substring(0, this.slashIndex)
        const textAfterSlash = currentItemNode.textContent.substring(this.slashIndex + this.searchText.length + 2, currentItemNode.textContent.length)


        if (textAfterSlash.length > 0) {
            this._items.splice(this.currentItemIndex, 1, createText(textBeforeSlash), conceptToInsert, createText(textAfterSlash))
        } else {
            this._items.splice(this.currentItemIndex + 1, 0, conceptToInsert, createText())
            currentItemNode.textContent = textBeforeSlash
        }

        this.slashIndex = -1
        this.searchText = ''
        this.popover = false
    }
}

// Helpers

function createText(value = '') {
    return {
        type: 'TEXT',
        value,
        ref: createRef()
    }
}

// Add empty texts:
//  Before each Component Element (if it's not preceded by text already)
//  After the last Component Element (if it's not followed by text already)
// Create refs for all
function addEmptyTexts(items) {
    const result = []

    items.forEach((item, i) => {
        const previousItemIsText = i !== 0 && items[i - 1].type === 'TEXT'
        const currentItemIsText = item.type === 'TEXT'
        if (!previousItemIsText && !currentItemIsText) result.push(createText())

        result.push({
            ...item,
            ref: createRef()
        })
    })

    const lastItem = items[items.length - 1]
    if (lastItem.type !== 'TEXT') result.push(createText())

    return result
}