/*
const year = prompt("Enter a year: ")

function leapYear(year){

        if((year % 4 ==0 && year %100 != 0) || year % 400 ==0){
            return '${year} is a leap year.'
        }   else{
            return '${year} is not a leap year.'
        }
}



console.log(leapYear(year))  */

/*
const number= prompt("Enter a three digit number: ")

function isArmstrong(number){

    const len = number.length
    const newNumber= number.split("")
    console.log(newNumber)
    console.log(len)
    const sum= newNumber[0] ** len + newNumber[1]** len + newNumber[2]**len
    return sum == number? "is Armstrong" : "not Armstrong"
}

console.log(isArmstrong(number))

*/

// ________________STRING METODU____________________


let text= "Her sey güzel olacak !" // stringin uzunlugunu bulduk 22 cikti. kelimeler dahil bosluk dahil parantez icini sayiyor.
let len = text.length
console.log("length " + len)

// _______________Extract Methods_____________________

// _______________slice(start, end)__________________

let firstPart= text.slice(8, 13) // yukari da yazili olan (hersey güzel olacak ) cümlesinin en bastan 0 dan baslayarak bosluklar da dahil saydik. 8. sayi g harfine 12. sayi e ye geldi. güze yazdi. güzel yazsirmak icin 13 demeliyiz. yani start ve end kismini yaparken end de tam bitis sayisindan bir sonraki sayiyi yazacagiz.

console.log(firstPart)

let secondPart= text.slice(8) 
console.log(secondPart) // sadece starti yazdik bu nedenle güzel olacak kisminin tamammini aldi. baslangicindan sonraki kismin tamamini aliyor. start özelligi böyle. SLICE özelligi yapiyi bozmaz. 


let thirdPart = text.slice(-14, -9)// almak istedigimiz yeri sondan -1 diye saymaya baslayarak belirliyoruz. burada güzel kelimesinin araligi -14 ile -9 arasinda.<-14----- -9
console.log(thirdPart)

//__________substring methodu:

let part = text.substring (8, 13) // güzel yazdi sonuc olarak. substring metodunda negative value slice da olmasina ragmen burada olmaz. substring Xnegative...
console.log(part)


//_________________substr(start, length):
// start kismi ve uzunlugunu giriyoruz. 

let substrPart = text.substr(8,5)
console.log(substrPart) // buradAa basladigi yer güzelin g si, bitisi ise 5 harf oldugu icin end kismina sadece 5 yaziyoruz. baslangic 8 bitis 5. kelimenin uzunlugu 5 harf oldugu icin.

let substrPart2= text. substr(-14, 5)
console.log(substrPart2) // burada yukaridaki gibi eksi sayilarla sondan baslama özelliginde oldugu gibi basladik bitisi 5 harfli oldugu icin güzel kelimesini yine tam olarak almis oldu. 

//______________________SPLIT METHODU



let splittedPart= text.split(" ")
console.log(splittedPart) // yukaridaki hersey guzel olacak textini splitlerin icine alarak bize veriyor. sonuc olarak ["Her", "sey", "güzel", "olacak", "!"] texti bu sekilde bölerek bize veriyor.


let text2= "Turkey, Germany, USA, France"
let splittedPart2 = text2.split(",")// burada parantez icindeki virgul önemli kelimeler arasina virgul koyuyor. virgul koymadan yazarsak bu sefer her harfi tirnak icine aliyor.
console.log(splittedPart2) // yukarideaki gibi tirnak icinde veriyor hepsini.
console.log(splittedPart2[1])// burada parantez icine köseli parantez de sira numarasini sifirdan baslayarak aratabiliriz. mesela germany  normalde 2. sirada. ama biz bir olarak istemk zorundayiz. 


let splittedPart3 = text2.split("")// bu sekilde iki tirnak icinde virgul olmazsa her harfi tirnak icine aliyor.
console.log(splittedPart3)


//____________REPLACE METHODU_________YERINE KOYMA  DEMEK:


let string = "Current euro currency, is 15,22"

let splitat = string.split(" ")
console.log(splitat)
let currency= splitat[splitat.length - 1]

currency = currency.replace(",", ".") //burada 15,22 yi 15.22 ye replace metoduyla cevirdik. replace yerine koyma demek.
console.log("cur: ", currency)
console.log(currency)

currency= Number(currency)
console.log(currency)

let replacedStr = string.replace (",", ".")
console.log(replacedStr) // yukarida Current euro currency, is 15,22 demistik. currency den sonraki ilk virgülü burada kaldirmakla ilgili özelligi kullanmis olduk. virgül yerine nokta koydurduk. ilk virgülü kaldirir. 15,22 nin virgülü sonra oldugu icin onu kaldirmadi. ama bunu da yani tüm virgülleri kaldirmak istersek replaceAll özelligini kullaniyoruz. 

let replacedSta = string.replaceAll (",", ".")
console.log(replacedSta)// replaceAll özelligi ile text olarak verilen kisimdaki virgullerin tamami kaldirildi. 


//diger örnek;

let string2= "Welcome to DGHome"
let newString= string2.replace("DGHome", "DigiHome")
console.log(newString) // burada DGHome yazisinda kücük yazilirsa istenilen hedefe ulasilamiyor. cunku buyuk kucuk harf duyarliligi var. bunu  Regular expressions tan bulabiliriz. 


// ________________TRIM METHODu:

let string3= "Welcome to DGHome"

let newString2= string3.replace(" ", "")

console.log(newString2)// Welcometo birlesik yazdirdik. burada kelime aralarindaki bosluk alinarak birlestirme islemi yapildi. buna trim metodu diyoruz. 

//cumlenin basi ve sonundaki bosluklari kaldirmak istersek;

let string4 = "     Welcome to DGHome     "
console.log(string4)
let trimmed= string4.trim()
console.log(trimmed) 
// burada cumlenin basi ve sonundaki bosluklar alindi.

let replacedAll = string4. replaceAll(" ", "")
console.log(replacedAll)
// burada da tüm bosluklar replaceAll özelligiyle alindi. fakat bu tercih edilen bir yöntem degil. TRIM tercih edilmektedir.


// ____________________INCLUDES METHODU:
//returns true or false...
// benim elimdeki verilerde istedigim bilginin icerip icermedigini bu method ile ariyoruz. 


console.log(trimmed.includes("Welcome"))
// cevap true
//eger bilgi icermiyorsa false olarak cevap alacagiz. 


//_________________INDEXOF METHODU.

//bir kelime girdimiz var. fakat onun indexini bulmamiz gerekiyor. bu metod bu ise yariyor.

let string5 ="All is well"
let ind = string5.indexOf("l")
let lastInd =string5.lastIndexOf("l")
console.log(ind) // burada ilk l harfini bize veriyor. siralamsi 0 dan basladigi icin cevap 1 oldu. 

console.log(lastInd) // burada lastIndexOf kullandik. en son siradaki l harfini buldu bu 10. sirada oldugu icin cevap 10dur.

let ind2 = string5.indexOf("l", 5)
console.log(ind2) //burada 5. siradan sonraki l harfinin hangi sirada oldugunu veriyor. burada 9.sirada.
 
let ind3 = string5.indexOf("l", ind + 1)
console.log(ind3) // burada ilk indexten sonra baslat diyoruz.hemen 2. siradakini burada bize verdi. ikinci l. 



// Search method:

//indexOf ile benzer islemi yapiyor.daha mantikli yakalsimi olan indexOf diyor hoca.

//Concat methodu:
//iki kelimeyi birlestirmerek yazdirirken kullandigimiz + isleminin görevini görüyor. mesela;

let s1="Hello "
let s2= "World"
let s3= s1.concat(s2)
console.log(s3) //burada Helle World kelimelerini yan yana yazdirdik.

//CharAt metodu:

let char = s3.charAt(6)//burada s3 HelloWorld birlesimini ifade ediyor. 
console.log(char)//burada HelloWorld yazisindaki 6. sirada yer alan W kelimesini buldurduk.


//LowerCase and toUpperCase methodu:

//toLowerCase metodu harfleri kücültüyor. digeri büyültüyor.