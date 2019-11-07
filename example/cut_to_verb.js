const thaiCut = require('thai-cut-slim')
const thaiDetect = require('..')

const text = 'แมวเล่นในสวน'

thaiCut.cut(text).forEach(t => console.log(thaiDetect.verb(t)))