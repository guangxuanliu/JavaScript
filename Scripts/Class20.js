var book = {
    title : "Professional JavaScript",
    author :[
        "Nicholas C.Zakas"
    ],
    edition : 3,
    years : 2011,
    toJSON : function () {
        return this.title;
    }
};
var jsonText = JSON.stringify(book);
var jsonCopy = JSON.stringify(book,null,4);
var jsonCopy2 = JSON.stringify(book,function (key, value) {
   switch (key){
       case "author":
           return "Liu Guangxuan";
       case "years":
           return 2017;
       default:
           return value;
   }
},4);
console.log(book);
console.log(jsonText);
console.log(jsonCopy);
console.log(jsonCopy2);