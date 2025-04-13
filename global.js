// global object

//console.log(global)


setTimeout(() => {
    console.log("3 saniye geçince bunu yazdır") // setTimeout olduğu için bir kez çalışır
    clearInterval(int)// bu fonksiyon sayesinde 3 saniye sonunda diğer fonksiyon da tekrar etmeyi bırakır
}, 3000);

const int= setInterval(()=>{ // setInterval fonksiyonu sayesinde sürekli belirlenen sürede tekrarlar
    console.log("her saniye bu yazıyı yazdırır")
}, 1000)

console.log(__dirname);//dosya yolunu yazdırır
console.log(__filename);//dosya adını da ekleyerek yolu yazdırır

//window object olmadığı için dom olayları yani document.... falan yok ve zaten gerek de yok server tarafında
 
