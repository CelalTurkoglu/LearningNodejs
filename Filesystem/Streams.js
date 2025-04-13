const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog3.txt', {
    encoding: 'utf8',// bu , {encoding: 'utf8'} çıktının hepsini direkt doğru formatta yazdırır
    highWaterMark: 500//buda kaç byte parçalara bölceğini belirler, mesela burda 500 bytelık paraçlara böldürdük
    }); 

const writeStream = fs.createWriteStream('./docs/blog4.txt')
   

/*
//bu arada blog3.txt dosyası 65kb üstü olması gerek çünkü 65kb parçalara bölüyor bu fonksiyon
readStream.on('data', (chunk)=>{
    console.log('----- YENİ PARÇA -----');
    console.log(chunk);// yukarda , {encoding: 'utf8'} yazıldığı için toString fonksiyonuna gerek yok
    writeStream.write('\nYENİ PARÇA\n')
    writeStream.write(chunk)
});
*/

// piping
//*bu şekilde yukardaki kodları yazmadan direkt olarak 65 kb parçalara bölerek okuduğunu yazdırabiliriz canlı olarak
readStream.pipe(writeStream)
