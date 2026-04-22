var name="anne";
console.log(name) ;  

var schoolTeam='basketball';
var schoolNumber=29;

var isRegistered= true;
console.log(isRegistered);

var job;
console.log(job);

job='student';
console.log(job);

console.log(name + ' ' + schoolNumber);

schoolTeam='tennis';
console.log(schoolTeam);

alert(schoolTeam);

var age= prompt('How old is he?');
console.log('Anne is' + age + 'years old.');

//logical operation
 var distancetoschool, distancetohome;
 distancetohome=14;
 distancetoschool=6;
 var iscloser=distancetohome<distancetoschool;
 console.log(iscloser)

 //conditional statement
 var grade;
 grade=38;
 if(grade<40){
    console.log('you can not go to the class');

 }
 else if(grade>40 && grade<45){
    console.log('but you can enter the exam');

 }
 else('you can go to the class');

 //ternary operation
 var number=80;
 grade<45 ? console.log('you can not go to class')
 : console.log('you can go to class')

var result=grade<45 ? 'failure':'success';
console.log(result);

//swtich case
var day;
day='monday';
switch(day){
   case 'saturday':
   console.log('i like saturday');
   break;
   case 'monday':
   console.log('i dont like  monday');
   break;
   case 'friday':
   console.log('i really like saturday');
   break;
   default:
      console.log('I dont know the day');
      break;
}

//while statement

var number=132;
while (number<=148){
   console.log(number);
   number+=2;
}

//Function Argument

function cube(number){
   console.log(number+ number+ number);
}

cube(3);

//Return Function

function enterCafe(Age){
   if(Age <18){
      return 'You Can not Enter Cafe';
   }
   return 'You can Enter Cafe';
}

var cafe= enterCafe(19);
console.log(cafe);

function subtraction(x,y){
   return y-x;
}

var result=subtraction(19-9);
console.log(result);

var isOdd=function(number){
   if(number % 2!==0){
      return true;
   }
   return false;

}
console.log(isOdd(5));

function addition(num){
   return 1+num;
}

var total=addition(5)
console.log(total);

//Array 

var books =['harry', 'hobbit','anne','asrufa','masrafi']
console.log(books[books.length-1]);

var films=[
   ['annes','asrufas','pipis'],
   ['masrafis','alamins','popos'],
   ['hgyfyu','gfhbj','uhtfyhg']
]
console.log(films[2][2]);