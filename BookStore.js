let BookID;
let BookTitle;
let Author;
let Price;
let Quantity;
let InformationBook=[
    [1,'Start with why','Simon Sinek',80.0,13],
    [2,'But how do it Know','J. Clark Scott',59.9,22],
    [3,'Clean Code','Robert Cecil',50.0,	5],
    [4,'Zero to One','Peter Thiel',45.0,12],
    [5,'You dont know','Kyle Simpson',39.9,9]
];
//القدرة على الاستعلام عن كتاب
/*
let ok;
let SearchBookID;
let SearchBookTitle;
let SearchAuthor;
const prompt = require('prompt-sync')();
SearchBookID=prompt("What ID of Book ?");
SearchBookTitle=prompt("What Title of Book ?");
SearchAuthor=prompt("What Author of Book ?");
for(let i=0;i<InformationBook.length;i++)
  {
for(let j=0;j<4;j++){
if(InformationBook[i][j]==SearchBookID || InformationBook[i][j]==SearchBookTitle ||  InformationBook[i][j]==SearchAuthor ){
  ok=1;
}
}
  }
  if(ok==1){
console.log(SearchBookID+" , " + SearchBookTitle  +" , " +SearchAuthor+" found");

}*/

  //بيع كتاب وتصدير فاتورة
const prompt = require('prompt-sync')();
  let TitleOfBook;
  let QuantityNeed;
TitleOfBook=prompt("What Title of Book to Buy?");
QuantityNeed=prompt("What Quantity of Book to need ?");
Price=prompt("What is the amount you have? ");
for(let i=0;i<InformationBook.length;i++)
  {
for(let j=0;j<5;j++){
if(InformationBook[i][j]==TitleOfBook ){
console.log(TitleOfBook +"  found ");
j=4;
if(InformationBook[i][j]>=QuantityNeed){

console.log("Quantity in store = "+InformationBook[i][j]+"  Quantity for you : "+QuantityNeed);
InformationBook[i][j]=InformationBook[i][j]-QuantityNeed;
j=3;
if(InformationBook[i][j]<=Price){
console.log("Price =  "+  InformationBook[i][j] +" The amount you have =  "+ Price);
InformationBook[i][j]=Price - InformationBook[i][j];
console.log("Remaining amount = "+InformationBook[i][j]) ;
}
else {
  console.log("Do not have the Price");
}

}
else {
  console.log("Do not have Quantity ");
}

}


}}
