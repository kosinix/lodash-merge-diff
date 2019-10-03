const lodashGet = require('lodash.get')
const lodashSet = require('lodash.set')
const lodashEach = require('lodash.foreach')
const differ = (orig, patch, result, path = '') => {
    lodashEach(patch, (patchValue, patchPath) => {
        if (['boolean', 'number', 'string'].includes(typeof patchValue)) {
            let a = lodashGet(orig, `${path}${patchPath}`)
            if (a !== patchValue) {
                lodashSet(result, `${path}${patchPath}`, patchValue)
            }
        } else if (typeof patchValue === 'object' && patchValue instanceof Date) {
            let a = lodashGet(orig, `${path}${patchPath}`)
            if (a instanceof Date) { // Null check
                if (a.getTime() !== patchValue.getTime()) {
                    lodashSet(result, `${path}${patchPath}`, patchValue)
                }
            } else { // They are not equal since a is not a Date object
                lodashSet(result, `${path}${patchPath}`, patchValue)
            }
        } else if (typeof patchValue === 'object') {
            differ(orig, patchValue, result, `${path}${patchPath}.`)
        }
        //Ignore patchValue: function, symbol, undefined
    })
}

module.exports = differ