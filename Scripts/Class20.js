/**
 * Created by 技术2 on 2016/4/7.
 */
var book = {
    title : "Professional JavaScript",
    authors :[
        "Nicholas C. Zakas"
    ],
    edition : "3",
    year : 2011,
    releaseDate : new Date(2011,11,1)
};
var jsonText = JSON.stringify(book);
var bookCopy = JSON.parse(jsonText,function (key,value) {
    if(key == "releaseDate"){
        return new Date(value);
    }
    else {
        return value;
    }
});
console.log(book);
console.log(bookCopy);
