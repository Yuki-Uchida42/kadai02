// ここからコードを書きます🤗
//alert(1);
//演習1
// console.log("はじめてのジャバスクリプト");

//演習2
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5")

// //変数

// const a ="ジーズアカデミー"

// console.log(a)

// const ten=10;

// const kekka=ten+ten;

// console.log(kekka);

//if文

// const a=90

// if(a>=80){
//     console.log("素晴らしい");
// } else{
//     console.log("もっと");
// }



// const random=Math.floor(Math.random()*4);
// console.log(random,"おみくじ");


// if(random===0){
// console.log("大吉");
// }else if(random===1){
// console.log("中吉");
// }else if(random===2){
// console.log("小吉");
// }else if(random===3){
// console.log("吉");
// }


// $("h1").on("click", function () {
//     $("h1").css("color", "red");
//   });

$(".s").on("click", function () {
    const random = Math.floor(Math.random() * 3);
    console.log(random, "ランダム数字");
    const random2 = Math.floor(Math.random() * 3);
    console.log(random2, "ランダム数字2");
  


    if (random === 0 && random2===1) {
        console.log("Aの勝ち！");
        $("h1").text("Aの勝ち！");
        $(".a").text("ぐー");
        $(".b").text("ちょき");
        $("h1").css("color","red")
        $(".title-a").css("color","red")
        $(".title-b").css("color","black")
      } else if (random === 0 && random2===2) {
        console.log("Bの勝ち！");
        $("h1").text("Bの勝ち！");
        $(".a").text("ぐー");
        $(".b").text("ぱー");
        $("h1").css("color","blue")
        $(".title-a").css("color","black")
        $(".title-b").css("color","blue")
      } else if (random === 0 && random2===0) {
        console.log("あいこ→もう一度");
        $("h1").text("もう一度");
        $(".a").text("ぐー");
        $(".b").text("ぐー");
        $("h1").css("color","black")
        $(".title-a").css("color","black")
        $(".title-b").css("color","black")
      } else if (random === 1 && random2===1) {
        console.log("あいこ→もう一度");
        $("h1").text("もう一度");
        $(".a").text("ちょき");
        $(".b").text("ちょき");
        $("h1").css("color","black")
        $(".title-a").css("color","black")
        $(".title-b").css("color","black")
      } else if (random === 1 && random2===2) {
        console.log("Aの勝ち！");
        $("h1").text("Aの勝ち！");
        $(".a").text("ちょき");
        $(".b").text("ぱー");
        $("h1").css("color","red")
        $(".title-a").css("color","red")
        $(".title-b").css("color","black")
      } else if (random === 1 && random2===0) {
        console.log("Bの勝ち！");
        $("h1").text("Bの勝ち！");
        $(".a").text("ちょき");
        $(".b").text("ぐー");
        $("h1").css("color","blue")
        $(".title-a").css("color","black")
        $(".title-b").css("color","blue")
      } else if (random === 2 && random2===1) {
        console.log("Bの勝ち！");
        $("h1").text("Bの勝ち！");
        $(".a").text("ぱー");
        $(".b").text("ちょき");
        $("h1").css("color","blue")
        $(".title-a").css("color","black")
        $(".title-b").css("color","blue")
      } else if (random === 2 && random2===2) {
        console.log("あいこ→もう一度");
        $("h1").text("もう一度");
        $(".a").text("ぱー");
        $(".b").text("ちょき");
        $("h1").css("color","black")
        $(".title-a").css("color","black")
        $(".title-b").css("color","black")
      } else if (random === 2 && random2===0) {
        console.log("Aの勝ち！");
        $("h1").text("Aの勝ち！");
        $(".a").text("ぱー");
        $(".b").text("ぐー");
        $("h1").css("color","red")
        $(".title-a").css("color","red")
        $(".title-b").css("color","black")
      } 
  });