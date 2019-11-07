const thaiCut = require('thai-cut-slim')
const thaiDetect = require('..')

const text = 'ปากกาที่วางบนโต๊ะซื้อมาจากญี่ปุ่น'

thaiCut.cut(text).forEach(t => console.log(thaiDetect.noun(t)))