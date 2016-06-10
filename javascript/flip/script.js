// script.js

$(function(){
  /*
  //クリックで、上下のdivを両方ともひっくり返す
  $('.flip').flip({trigger: 'manual', axis: 'x'}).on('flip:done', function(){
  });

  $('.flip').on('click', function(){
    $('.flip').flip('true');
  });
*/

  $('.flip').flip({trigger: 'manual', axis: 'x'}).on('flip:done', function(){
  });

  $('.pic, .do').on('click', function(){
    $('.flip').flip('true');
  });

/*
  $('.flip').flip({trigger: 'manual', axis: 'x'}).on('flip:done', function(){
  });

  $('.do').on('click', function(){
    $('.flip').flip('true');
  });
*/

//「もう一度引く」ボタン押下で、再読み込み実行
$('#again').on('click', function(){
  location.reload();
});

/*
  //backの画像をランダムに変える
  var array =[
  "img/BOYS_OF_YOGA2.jpeg",
  "img/butterfly.png",
  "img/プロフィール画像.png"];

  var l = array.length;
  var r = Math.floor(Math.random()*l);
  var imgurl = array[r];
  $('#result_img').attr({"src":imgurl});
*/

  //backの画像とメッセージをセットで、ランダム表示させる（オブジェクトを用いた配列）
  var array = [{
    img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  },
  {
    img: "img/butterfly.png",　title: "変容", msg: "変容の時です！抗わずに、波に乗ってみましょう！！"
  },
  {
    img: "img/プロフィール画像.png",　title: "サイト運営者", msg: "hello！！"
  }

  //ランダム表示の確率を変えてみる
  ,
  {img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  },
  {
    img: "img/butterfly.png",　title: "変容", msg: "変容の時です！抗わずに、波に乗ってみましょう！！"
  },
  {img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  },
  {
    img: "img/butterfly.png",　title: "変容", msg: "変容の時です！抗わずに、波に乗ってみましょう！！"
  },
  {img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  },
  {
    img: "img/butterfly.png",　title: "変容", msg: "変容の時です！抗わずに、波に乗ってみましょう！！"
  },
  {img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  },
  {img: "img/BOYS_OF_YOGA2.jpeg", title: "挑戦", msg: "準備完了です！自分を信じて、やっちゃいましょう！！"
  }

  ];

  var l = array.length;
  var r = Math.floor(Math.random()*l);
  var imgurl = array[r].img;
  var title = array[r].title;
  var msg = array[r].msg;
  $('#result_img').attr({"src":imgurl});
  $('.back h3').text(title);
  $('.back p').text(msg);

});


