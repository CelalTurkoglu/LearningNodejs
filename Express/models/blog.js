const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create blog schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });// timestamps: true ile oluşturulma ve güncellenme tarihlerini otomatik olarak ekliyoruz
// create blog model

const Blog = mongoose.model('Blog', blogSchema);// model ismi büyük harfle başlar, bu yüzden Blog
module.exports = Blog;// bu modeli dışarı aktarıyoruz ki diğer dosyalarda kullanabilelim
