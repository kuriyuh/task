//bodyの背景をアニメーションにする
//元ネタ　http://actyway.com/8222


(function(d,b,w){
  var q = d.createElement('div'); // div 用意
  q.id = "spot"; // id は sakura を
 
  // 上の div に style を追加
  q.innerHTML = '<style>' + 'html,body{overflow-y:hidden;}.lights{position:absolute;height:0;width:0;border: 30px solid pink;border-radius: 30px;}'

  //大きさをランダムに変更させる（style編）
  + '.type1{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}' + '.type2{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);}' + '.type3{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);}' + '.type4{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}' + '.type5{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);}'
  //色をランダムに変化させる（styleのみ）
  + '.type1{border-color:#56D8FF;}' +
    '.type2{border-color:#ED33B3;}' +
    '.type3{border-color:#BAFF00;}' +
    '.type4{border-color:#28EF50;}' +
    '.type5{border-color:#FF4D4A;}' +
  '</style>';
  b.appendChild(q);

  var h = w.innerHeight; // window の高さ
  var u = d.documentElement.scrollTop || b.scrollTop; // スクロール位置
  var z = 9999; // z-index 開始値
  var t = new Array(); // top 値の配列
  var l = new Array(); // left 値の配列
  var y = new Array(); // ゆらぐ最大値の配列
  var s = new Array(); // 落下スピードの値の配列
  var g = new Array(); // 花びら1枚1枚用の id の配列
  var c = new Array(); // ゆらぎのカウントの配列
 
  // スクロールした時に u の値を更新
  d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
 
  // 花びら30枚用意する為のループ
  for(var i=0;i<14;i++){
    var m = d.createElement('div'); // div 用意
    m.id = 'spotlight'+i; // 花びらの id
    t[i] = Math.random()*-1000+u; // 花びらの最初の top
    l[i] = Math.random()*w.innerWidth; // 花びらの最初の left
    //m.setAttribute('class','lights'); // class を追加
    m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;left:'+l[i]+'px;'); // style を追加

    //大きさをランダムに変える（JacaScript編）
    var clss = 'lights type'+(Math.floor(Math.random()*5)+1);
    m.setAttribute('class', clss);

    q.appendChild(m); // 最初の div に花びらの div を追加
    y[i] = Math.random()*40+30; // ゆらぐ最大幅
    s[i] = Math.random()*5+3; // スピード
    g[i] = d.getElementById('spotlight'+i); // id 指定
    c[i] = 0; // ゆらぎの初期値
  }
 
  // 花びらを繰り返し動かす部分
  setInterval(function(){
    for(var i=0;i<14;i++){
      if(t[i]<u+h-40){
        if(y[i]>=c[i]){ // ゆらぎの値が最大値以下なら
          l[i] = l[i]+0.5+Math.random()*0.5; // left を増やす
        }else{
          l[i] = l[i]-0.5-Math.random()*0.5; // left を減らす
        }
        if((y[i]*2)<=c[i]){ // ゆらぎの折り返しの為にカウントを0に
          c[i] = 0;
        }
      }else{ // ウィンドウの下まで移動した場合
        t[i] = u-40; // top 指定で上に戻す
        l[i] = Math.random()*w.innerWidth; // left 指定
      }
      t[i] = t[i]+s[i]; // top の値を更新
      g[i].style.top = t[i]+'px'; // top をスタイルで更新
      g[i].style.left = l[i]+'px'; // left をスタイルで更新
      c[i]++; // カウンタに1プラス
    }
  },45);
})(window.document,window.document.body,window);


/*
//元ネタ
(function(d,b,w){
  var q = d.createElement('div');
  q.id = "sakura";
  q.innerHTML = '<style>'+
  'html,body{overflow-x:hidden;}'+
  '.hana{'+
  'position:absolute;height:0;width:0;'+
  'border: 10px solid pink;'+
  'border-radius: 15px;'+
  'border-top-right-radius: 0;'+
  'border-bottom-left-radius: 0;}'+
  '.hana::after{'+
  'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
  'border: 10px solid pink;'+
  'border-radius: 15px;'+
  'border-top-right-radius: 0;'+
  'border-bottom-left-radius: 0;'+
  '-webkit-transform: rotate(15deg);-ms-transform: rotate(15deg);transform: rotate(15deg);'+
  '}</style>';
  b.appendChild(q);

  var h = w.innerHeight;
  var u = d.documentElement.scrollTop || b.scrollTop;
  var z = 9999;
  var t = new Array();
  var l = new Array();
  var y = new Array();
  var s = new Array();
  var g = new Array();
  var c = new Array();
  d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;},false);
  for(var i=0;i<30;i++){
    var m = d.createElement('div');
    m.id = 'hanabira'+i;
    t[i] = Math.random()*-1000+u;
    l[i] = Math.random()*w.innerWidth;
    m.setAttribute('class','hana');
    m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;left:'+l[i]+'px;');
    q.appendChild(m);
    y[i] = Math.random()*40+5;
    s[i] = Math.random()*5+2;
    g[i] = d.getElementById('hanabira'+i);
    c[i] = 0;
  }
  setInterval(function(){
    for(var i=0;i<30;i++){
      if(t[i]<u+h-40){
        if(y[i]>=c[i]){
          l[i] = l[i]+0.5+Math.random()*0.5;
        }else{
          l[i] = l[i]-0.5-Math.random()*0.5;
        }
        if((y[i]*2)<=c[i]){
          c[i] = 0;
        }
      }else{
        t[i] = u-40;
        l[i] = Math.random()*w.innerWidth;
      }
      t[i] = t[i]+s[i];
      g[i].style.top = t[i]+'px';
      g[i].style.left = l[i]+'px';
      c[i]++;
    }
  },45);
})(window.document,window.document.body,window);
*/

