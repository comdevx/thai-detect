// Project: thai-detect
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/10/31
// Facebook: http://www.fb.com/comdevx

const detect = require('./detect')
const analyze = require('./analyze')

exports.verb = (v) => detect(v, 'verb')
exports.noun = (v) => detect(v, 'noun')
exports.sentence = (v) => analyze(v)

console.log(detect('อยู่', 'verb'), analyze('เด๋วทำตัว Responsive ต่อครับ'))