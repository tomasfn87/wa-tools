import remove_function_expression from '../remove_fe.js'
import { expect } from "chai"

const test1 = `(function() {
    const click_url = '{{Click URL}}'
    if (click_url) {
        return click_url
    }
    return ''
})`

const test2 = `function() {
    const click_url = '{{Click URL}}'
    if (click_url) {
        return click_url
    }
    return ''
}`

const test3 = `() => {
    const click_url = '{{Click URL}}'
    if (click_url) {
        return click_url
    }
    return ''
}`

const test4 = `(function() {
    const click_url = '{{Click URL}}'
    if (click_url) {
        return click_url
    }
    return ''
})()`

describe('Remove Function Expression', () => {
    it(`remove_function_expression(\n${test1})\n   --> \n${test2}`, () => {
        let result = remove_function_expression(test1)
        expect(result).to.equal(test2)
    })

    it(`remove_function_expression(\n${test2})\n   --> \n${test2}`, () => {
        let result = remove_function_expression(test2)
        expect(result).to.equal(test2)
    })

    it(`remove_function_expression(\n${test3})\n   --> \n${test3}`, () => {
        let result = remove_function_expression(test3)
        expect(result).to.equal(test3)
    })

    it(`remove_function_expression(\n${test4})\n   --> \n${test4}`, () => {
        let result = remove_function_expression(test4)
        expect(result).to.equal(test4)
    })
})