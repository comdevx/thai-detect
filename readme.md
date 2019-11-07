# thai-detect
ระบบตรวจสอบ คำนาม คำกริยา และวิเคราะห์ประโยค ว่าเป็น บอกเล่า ปฏิเศธ คำถาม คำสั่ง ต้องการ หรือ ขอร้อง

## Installation

```bash
git clone https://github.com/comdevx/thai-detect.git
```

## Usage
เช็คคำ ทรงเครื่อง ว่าเป็นกริยาหรือไม่ โดย verb จะคืนค่าเป็น true หรือ false
```nodejs
const thaiDetect = require('../')

thaiDetect.verb('ทรงเครื่อง') # returns { word: 'ทรงเครื่อง', verb: true }
or
thaiDetect.verb('ทรงเครื่อ') # returns { word: 'ทรงเครื่อ', verb: false }
```

เช็คคำ ทรงเครื่อง ว่าเป็นคำนามหรือไม่ โดย noun จะคืนค่าเป็น true หรือ false
```nodejs
const thaiDetect = require('../')

thaiDetect.noun('โครเอเชีย') # returns { word: 'โครเอเชีย', noun: true }
or
thaiDetect.noun('โครเอเชียง') # returns { word: 'โครเอเชียง', noun: false }
```

วิเคราะห์ประโยคโดยเช็คว่าประโยคเป็นรูปแบบไหน โดยจะคืนค่ามาเป็น Object แล้วตามด้วยฟิลด์ที่บอกว่่าอารมณ์ไปทางไหน (เยอะสุดจะอยู่บน)
```nodejs
const thaiDetect = require('../')

thaiDetect.sentence('พ่อพาพวกเราไปเที่ยวสวนสัตว์') # returns { tell: 1, refuse: 0, question: 0, command: 0, want: 0, please: 0 }

thaiDetect.sentence('วันนี้เขาไม่ได้มาโรงเรียน') # returns { refuse: 1, tell: 0, question: 0, command: 0, want: 0, please: 0 }

thaiDetect.sentence('อะไรอยู่ในตู้') # returns { question: 2, tell: 0, refuse: 0, command: 0, want: 0, please: 0 }

thaiDetect.sentence('คุณพูดช้าๆ หน่อยซิ') # returns { command: 1, please: 1, tell: 0, refuse: 0, question: 0, want: 0 }

thaiDetect.sentence('แม่ต้องการให้ฉันไปตลาด') # returns { want: 1, tell: 0, refuse: 0, question: 0, command: 0, please: 0 }

thaiDetect.sentence('ช่วยเปิดประตูให้ฉันหน่อย') # returns { please: 2, tell: 0, refuse: 0, question: 0, command: 0, want: 0 }
```

## List
| Plugin | README |
| ------ | ------ |
| tell | บอกเล่า |
| refuse | ปฏิเสธ |
| question | คำถาม |
| command | คำสั่ง |
| want | ต้องการ |
| please | ขอร้อง ชักชวน อนุญาต |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)