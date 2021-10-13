$(function(){
    $("#btn1").click(function(){
        $(this).css('background-color', 'red');
        alert('Мир jQuery');
    });
});

$(function(){
  $('button').bind('click', function(){
    alert('Я сдеяль!');
  })
})

// $('button').bind('click', function(e){
//         console.log('Событие инициировал элемент ' + e.target.tagName);
//         console.log('Событие обрабатывается для элемента ' + e.currentTarget.tagName);
//     });
//     $('div').bind('click', function(e){
//         console.log('Событие инициировал элемент ' + e.target.tagName);
//         console.log('Событие обрабатывается для элемента ' + e.currentTarget.tagName);
//     });
//     $('body').bind('click', function(e){
//         console.log('Событие инициировал элемент ' + e.target.tagName);
//         console.log('Событие обрабатывается для элемента ' + e.currentTarget.tagName);
//     });
