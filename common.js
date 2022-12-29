const user = {
    name : "yeji",
};
const islogin = true;


if (user && islogin)  {
    console.log(user.name || "이름 없음"); 
}

const arr = [1,2,3];

const objArr = {0: 1, 1: 2, 2:3};

console.log(Array.isArray(arr));
console.log(Array.isArray(objArr));

console.log(arr.length);

arr.length = 10;
console.log(arr);


//const confirmBts = document.getElementsByTagName("button")[0];
//const cancelBts = document.getElementsByTagName("button")[1];
// const resetBts = document.getElementsByTagName("button")[2];

const [confirmBts, cancelBts , resetBts]=document.getElementsByTagName("button");

const originalArr = ['123', '456', '786'];

const newArr = originalArr;

originalArr.push(10);
originalArr.push(20);
originalArr.push(30);

console.log(originalArr);
console.log(newArr);

const person ={
    eyes:2,
    // speak: function(){
    //     console.log("말말");
    // }
    speak: () => console.log("말말")
}


// 화살표 함수
const sum3 = (a, b) => (a + b);
const sum4 =1;
//(매개변수) => {실행할 문장...}
// 화살표 함수 어디에 많이 쓰나
// 함수 내에 콜백함수로 건내줄때 많이 사용
const array1 = ['a','b','c'];

array1.forEach((e) =>{
    console.log("알파벳" + e);
})

//arrow function의 단점

console.log(this);

const student = {
    age : 17,
    sayAge : function(){
        console.log(this);
        console.log(this.age);
    }
}


student.sayAge();

// ["학생 a", "학생 b", "학생 c"] => map() vs forEach()

const students = array1.map((name) =>{
    return "학생" + name;
});
console.log(students);

function tamp(){
    return 1+2;
}
// console.log(temp(1,2,3,4,5));

const price = ['2000', '1000', '3000', '5000','4000'];
// function getWonPrice(pricelist){
//     price.forEach((e) => {
//         if(e >1000){
//         console.log(e + "원");
//         return newprice.push(e);
//         }
//     })
// }
getWonPrice();
function getWonPrice(pricelist){
    const newprice = price.filter(price => Number(price) > 1000);
    const result = newprice.map((price) =>{return price + "원"});
    console.log(result);
    return result
}


const btns = [...document.querySelectorAll("button")];
console.log(btns);
btns.forEach((ev)=>{
    ev.addEventListener('click', (e) => {
        playgame(e);
    })
})

function playgame (e){
    let randomnum = Math.floor(Math.random() * 3);
    console.log(randomnum);
    Userresult(e);
    function Computerresult(){
        switch (randomnum) {
            case randomnum = 0:
                return Sc();
            case randomnum = 1:
                return Rock();
            case randomnum = 2:
                return Paper();
        }
    }
   
    function Userresult(){
if(e.target.className ="r"){
        console.log(e.target.className);
        switch(randomnum){
            case randomnum = 0 :
                console.log("승리!");
                return Victory(), Computerresult();
            case randomnum = 1:
                console.log("무승부");
                return Draw(), Computerresult();   
            case randomnum = 2:
                console.log("패배..");
                return Lose(), Computerresult();
        }
    }else if (e.target.className = "s") {
        console.log(e.target.className);
        switch (randomnum) {
            case randomnum = 0:
                console.log("무승부");
                return Draw(), Computerresult();
            case randomnum = 1:
                console.log("패배..");
                return Lose(), Computerresult();
            case randomnum = 2:
                console.log("승리!");
                return Victory(), Computerresult();
        }
    }else if (e.target.className = "p") {
        console.log(e.target.className);
        switch (randomnum) {
            case randomnum = 0:
                console.log("패배...");
                return Lose(), Computerresult();
            case randomnum = 1:
                console.log("승리!");
                return Victory(), Computerresult();
            case randomnum = 2:
                console.log("무승부");
                return Draw(), Computerresult();
        }
    }
    }
    
    
}

const gameresult = document.querySelector(".result");
const Computer = document.querySelector(".computer");
console.log(gameresult);
console.log(Computer);
function Victory(){
    gameresult.innerText ="승리!";
}
function Draw() {
    gameresult.innerText = "무승부";
}
function Lose(){
    gameresult.innerText = "패배..";
}

function Sc(){
    Computer.innerText = "가위"
}
function Rock() {
    Computer.innerText = "바위"
}
function Paper() {
    Computer.innerText = "보"
}
