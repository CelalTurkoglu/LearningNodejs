const express = require('express');
const Blog = require('../models/blog');//* bu kütüphane ile blog modelini alıyoruz
const router = express.Router();//* bu kütüphane ile router oluşturuyoruz




// blog routes
router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // bu şekilde en son eklenen blogları alıyoruz, sort ile sıralıyoruz. son eklenen en üstte olacak
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    const blog = new Blog(req.body);// req.body ile formdan gelen verileri alıyoruz
    blog.save()
    .then((result) => {
        res.redirect('/blogs');// bu şekilde /blogs sayfasına yönlendirebiliriz
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

router.get('/:id', (req, res) => { 
    const id = req.params.id;// bu şekilde url'den gelen id'yi alıyoruz
    Blog.findById(id)// bu şekilde id'ye göre blogu buluyoruz
    .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' });// bu şekilde blog detay sayfasını render ediyoruz
        })
        .catch((err) => {
            console.log(err)
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;// bu şekilde url'den gelen id'yi alıyoruz
    Blog.findByIdAndDelete(id)// bu şekilde id'ye göre blogu siliyoruz
        .then((result) => {
            res.json({ redirect: '/blogs' });// bu şekilde json olarak yönlendirme yapıyoruz
        })
        .catch((err) => {
            console.log(err)
        });
});


module.exports = router;//* bu şekilde router'ı dışarı aktarıyoruz
