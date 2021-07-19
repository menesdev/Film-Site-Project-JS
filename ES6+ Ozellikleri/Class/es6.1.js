// Statik metodlar (Bu metodları obje oluşturmaya gerek duymadan kullanabiliriz.)
// Statik metodlara obje üzerinden erişemeyiz.
class Math {

    static cube (x){
        console.log(x*x*x)
    }
}

Math.cube(4)


