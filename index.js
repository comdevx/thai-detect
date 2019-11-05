// Project: thai-detect
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/10/31
// Facebook: http://www.fb.com/comdevx

const fs = require('fs')
const thaiCut = require('thai-cut-slim')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8')
}

exports.verb = (v) => detectFunc(v, 'verb')
exports.noun = (v) => detectFunc(v, 'noun')
// exports.sentence = (v) => sentenceFunc(v)

console.log(sentenceFunc('ไม่นะ ห้ามทำซิ'))

function detectFunc(v, t) {

    let verb = require("./verb.txt")
    verb = verb.split('\n')

    let noun = require("./proper_noun.txt")
    noun = noun.split('\n')

    const l = t === 'verb' ? verb : noun

    const r = l.some(l2 => {

        return v === l2

    })

    return ({ word: v, [t]: r })

}

function sentenceFunc(v) {

    let word = require("./word.txt")
    word = word.split('\n')
    word = word.map(s => s.split(' '))

    v = v.replace(/\s/g, '')
    const result = {
        tell: 0,
        refuse: 0,
        question: 0,
        please: 0,
        want: 0,
        command: 0
    }

    const obj = {}

    word.forEach(w => {

        if (!obj[w[1]])
            Object.assign(obj, { [w[1]]: [w[0]] })
        else
            obj[w[1]].push(w[0])

    })

    Object.keys(obj).forEach(o => {

        obj[o].forEach(a => {

            if (!o.match(/\d+/g) && v.search(a) !== -1) result[o]++

            if (o.match(/\d+/g)) {
                const toSplit = thaiCut.cut(v)
                if (toSplit[0] === a && v.search(toSplit[0]) !== -1) result[o.replace(/\d+/g, '')]++
                const l = toSplit.length - 1
                if (toSplit[l] === a && v.search(toSplit[l]) !== -1) result[o.replace(/\d+/g, '')]++
            }

        })

    })

    return convert(result)

}

function convert(v) {
    let l = []
    const obj = {}
    for (var k in v) {
        l.push([k, v[k]])
    }

    l.sort(function (a, b) {
        return b[1] - a[1]
    })

    l.forEach(a => Object.assign(obj, { [a[0]]: a[1] }))

    return obj
}