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

module.exports = (v) => {

    let rem = require("../data/remove.txt")
    rem = rem.split('\n')
    let rex = ''
    rem.forEach((r, i) => rex += i === 0 ? r : '|' + r)
    rex = new RegExp(rex)
    v = v.replace(rex, '')

    let word = require("../data/word.txt")
    word = word.split('\n')
    word = word.map(s => s.split(' '))
    v = v.replace(/\s/g, '')
    const result = {
        tell: 0 // default
    }
    const obj = {}

    word.forEach(w => {

        if (!obj[w[1]]) {

            Object.assign(obj, { [w[1]]: [w[0]] })
            Object.assign(result, { [w[1].replace(/\d+/g, '')]: 0 })

        } else {

            obj[w[1]].push(w[0])

        }

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
        let result = Object.values(obj)
        result = Math.max(...result)

        if (result === 0) obj['tell']++

        return obj

    }

}