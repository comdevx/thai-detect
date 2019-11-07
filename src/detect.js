// Project: thai-detect
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/10/31
// Facebook: http://www.fb.com/comdevx

const fs = require('fs')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8')
}

module.exports = (v, t) => {

    let verb = require("../data/verb.txt")
    verb = verb.split('\n')

    let noun = require("../data/proper_noun.txt")
    noun = noun.split('\n')

    const l = t === 'verb' ? verb : noun

    const r = l.some(l2 => {

        return v === l2

    })

    return ({ word: v, [t]: r })

}