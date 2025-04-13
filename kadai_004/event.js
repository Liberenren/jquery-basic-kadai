$(function() {
    // ボタンがクリックされた場合
    $('windows').on('load',function(){
        console.log('loadイベントが発生しました');
       });
       
    $('windows').on('scroll',function(){
        console.log('scrollイベントが発生しました');
    });
   });
