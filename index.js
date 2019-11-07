// Project: thai-detect
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/10/31
// Facebook: http://www.fb.com/comdevx

const detect = require('./src/detect')
const analyze = require('./src/analyze')

exports.verb = (v) => detect(v, 'verb')
exports.noun = (v) => detect(v, 'noun')
exports.sentence = (v) => analyze(v)