// bunun yerine daha çok express kullanılacak

const http = require('http');
const fs = require('fs');
const _ = require('lodash');
// npm install diyerek node_modules geliyor direkt

//request ve response ile siteye html özelliklerinden vs eklenebiliyor falan
const server = http.createServer((req, res) => {

    // lodash, lodash sitesinde detaylı dökümantasyon var
    const num = _.random(0, 20);
    console.log(num)

    const greet = _.once(() => {//bunlar hep lodash fonksiyonları
        console.log('hello');
    })
    greet();//yukarda once fonksiyonunun içinde yazıldığı için bir kez çalışıyor
    greet();

    //   console.log(req.url, req.method);//req=request

    //set header content type
    res.setHeader('Content-Type','text/html');//text/plain yerine html yaptık
    //res=response

/*
res.write('<head><link rel="stylesheet" href="#"></head>');
res.write('<p>hello world</p>');
res.write('<p>hello again</p>');
res.end(); 
*/

let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location','/about')
        res.end();
        break;
    default:
        path += '404.html'
        res.statusCode = 404;
        break; 
}



//*send an html file
fs.readFile(path,(err, data) => {
    if(err){
        console.log(err);
        res.end();//eğer err varsa response döngüsü bitsin diye buraya da end koyduk
    } 
    else{
        //res.write(data);
        res.end(data);//sadece bir şey göndereceksek bu şekilde kullanabiliriz 
    }
})

});

server.listen(3000,'localhost',() => {
    console.log('listening for requests on port 3000');
});