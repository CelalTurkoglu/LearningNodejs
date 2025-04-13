
const fs = require('fs') //* fs = file system



//! reading files
//*bu şekilde blog1.txt dosyasından bir şeyler okuyabiliyoruz
/*
fs.readFile('./docs/blog1.txt',(err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString()) // toString fonksiyonuyla Buffer şeyini stringe çevirerek dosya içindeki yazıyı yazdırır
});
*/

//! writing files 
//*bu şekilde blog1.txt dosyasına bir şeyler yazabiliyoruz
/*
fs.writeFile('./docs/blog1.txt', 'Hello, World',() => {
    console.log('File was written')
})
*/


//*bu şekilde yeni dosya oluşturarak içine bir şeyler yazabiliyoruz
/*
fs.writeFile('./docs/blog2.txt', 'Hello, again',() => {
    console.log('New file was written')
})
*/

//! directories
//* bu şekilde yeni klasör falan oluşturuluyor işte
/*
if(!fs.existsSync('./assets')){//bu şekilde if içinde koyarsak klasör var mı diye önceden kontrol eder ve yoksa hata dönmez çünkü burası çalışmaz
//existsSync klasör var mı yok mu diye kontrol eder başında ! koyarakta klasör olmadığında ifin çalışmasını sağladık
fs.mkdir('./assets',(err) => { //mkdir=make directory
if(err){
    console.log(err)
}
console.log('folder created')//klasör zaten varsa tekrar oluşturamaz ve hata döner
})
}
else{//bu şekilde klasör varsa siler, tekrar çalıştırınca yeniden oluşturur
fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('folder deleted')
})
}
*/

//!  deleting files
//* daha önce oluşturduğumuz deleteme.txt dosyasını bu şekilde var mı diye kontrol ettikten sonra fs.unlink fonksiyonu ile siliyoruz
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted ')
    })
}

