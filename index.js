const lodashGet = require('lodash.get')
const lodashSet = require('lodash.set')
const lodashEach = require('lodash.foreach')
const differ = (orig, patch, result, path = '')=>{
    lodashEach(patch, (patchValue, patchPath)=>{
        if(typeof patchValue === 'object') {
            differ(orig, patchValue, result, `${path}${patchPath}.`)
        } else if(['boolean','number', 'string'].includes(typeof patchValue)) {
            let a = lodashGet(orig, `${path}${patchPath}`)
            if(a !== patchValue){
                lodashSet(result, `${path}${patchPath}`, patchValue)
            }
        } 
        //Ignore patchValue: function, symbol, undefined
    })
}

module.exports = differ