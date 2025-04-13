// kullanılacak olan önemli kısım
//! bu dosyanın eski tam hali notlarla birlikte diğer klasörde txt dosyasında

const express = require('express');
const morgan = require('morgan');// bu kütüphane middleware olarak kullanılıyor
const mongoose = require('mongoose');// bu kütüphane mongodb ile bağlantı kurmak için kullanılıyor
const blogRoutes = require('./routes/blogRoutes');// bu kütüphane blogRoutes.js dosyasını kullanmak için kullanılıyor


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://celal:samsun4255@cluster0.27psdxa.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}) //asenkron bir şekilde bağlantı kuruyor
    .then((result) => app.listen(3000))// bağlantı kurulduğunda 3000 portunda dinlemeye başla, çünkü yukardaki işlem asenkron.
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// listen for requests mongodb içine taşıdık yukarıya.
//*app.listen(3000);

// middleware & static files

app.use(express.static('public')); // public klasöründeki dosyaları kullanabilmemizi sağlıyor, head.ejs dosyasında link ile bağlamak da gerekiyor
app.use(express.urlencoded({ extended: true }));//* bu middleware ile formdan gelen verileri alabiliyoruz
app.use(morgan('dev'));// bu middleware kullanıldığında her request yapıldığında terminalde loglama yapıyor
/*
//* mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {// bu route ile yeni bir blog ekliyoruz
const blog = new Blog({
    title: 'new blog 3',
    snippet: 'about my new blog',
    body: 'more about my new blog'
});

blog.save()
.then((result) => {
    res.send(result);
})
.catch((err) => {
    console.log(err);
});
})

app.get('/all-blogs', (req, res) => {// bu route ile tüm blogları alıyoruz
Blog.find()
.then((result) => {
    res.send(result);
})
.catch((err) => {
    console.log(err);
});
});

app.get('/single-blog', (req, res) => {// bu route ile tek bir blogu alıyoruz
Blog.findById('67fbcdec85a35149dc013761')
.then((result) => {
    res.send(result);
})
.catch((err) => {
    console.log(err);
});
});
*/


/*
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();// bu fonksiyon bir sonraki middleware'e geçiş yapmamızı sağlar
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();// bu fonksiyon bir sonraki middleware'e geçiş yapmamızı sağlar
})
*/


//routes
app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index1.html', { root: __dirname});
    /*
    const blogs = [
        {title: 'yoshi finds eggs', snippet: 'lorem ipsum falan filan'},
        {title: 'mario finds stars', snippet: 'lorem ipsum dolor shinju falan'},
        {title: 'how to defeat bowser', snippet: 'lorem ipsum dolor sit amet conseconse'}
    ];
    res.render('index', {title: 'Home', blogs});//* bunlar hep ejs kullanımı
    */
   res.redirect('/blogs');// bu şekilde /blogs sayfasına yönlendirebiliriz
});

// blog routes
app.use('/blogs',blogRoutes);// bu şekilde blogRoutes.js dosyasını kullanıyoruz

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', {title: 'About'})
});


// 404 page  
app.use((req, res) => {// bu use fonksiyonu çalışırken express yukardan aşağıya kodu çalıştırırken yazılan 
    //*res.status(404).sendFile('./views/404.html', { root: __dirname});//uzantıyı kodda bir şeyle eşleyemezse use fonk çalışıyor ve 404 page yönlendiriliyor
    res.status(404).render('404', {title: '404'});
});//                                                      yani bu fonksiyonu 18. satıra yazsaydık /about-us sayfasına girince 404 page gelecekti



/* 
// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');// bu şekilde /about sayfasına yönlendirebiliriz
});
*/
