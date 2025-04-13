const xyz= require('./people'); //!  bu şekilde people.js dosyasını import ettik gibi oldu

console.log(xyz)//bunu yazarsak {} döner çünkü xyz aslında boş bir obje
//* eğer diğer dosyada export edilmiş bir şey varsa o zaman xyz yazdırırken boş dönmez, export edilenler döner
//* şimdi ben diğer dosyada people dizisini export ettim ve bu js dosyasını çalıştırdığımda xyz yazdırmak istersem people dizisini yazar

//? console.log(people)//bunu yazarsak da olmaz ve people is not defined hatası döner

// yani people.js dosyasını require ile import ettik diye direkt her şeye erişebiliriz anlamına gelmez
// import (require) ettiğimiz dosyanın içinden export edilen şeylere direkt olarak erişilebilir

console.log(xyz.ages)//sadece ages dizisini yazdırır 


const {ages} = require('./people') // bu şekilde diziyi import ettikten sonra direkt diziyi yazdırabiliriz
console.log(ages)                  // ama ages dizisi diğer dosyada export edildiğinde burdan import edilebilir



//! os direkt node ile birlikte geliyor
const os=require('os')

console.log(os.platform(), os.homedir()) // mesela bu şekilde os hakkında bilgi alınabilir


