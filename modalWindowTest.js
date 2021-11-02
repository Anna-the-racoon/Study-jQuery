//variant 4
$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});
});


//variant 3
// $(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
// /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
// var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
// var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
// var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
// var modal = $('.modal_div'); // все скрытые мoдaльные oкнa
//
// open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
// event.preventDefault(); // вырубaем стaндaртнoе пoведение
// var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
// overlay.fadeIn(400, //пoкaзывaем oверлэй
// function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
// $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
// .css('display', 'block')
// .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
// });
// });
//
// close.click( function(){ // лoвим клик пo крестику или oверлэю
// modal // все мoдaльные oкнa
// .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
// function(){ // пoсле этoгo
// $(this).css('display', 'none');
// overlay.fadeOut(400); // прячем пoдлoжку
// }
// );
// });
// });





//variant2
// (function($){
//   $("#put").click(function(){
// $.modal().open({
// onOpen: function(element, options){
//   $.get('http://example.com/', function(data){
//     element.html(data);
//   })
// }
// })
// })
// });



//variant 1
// (function($){
//   $('#put').click(function(){
// alert("Came to action");
//     $.fn.modalBox = function(prop){
//       let parameters = $.extend({
//           height: "250",
//           width: "500",
//           title: "JQuery Modal Box Demo",
//           description: "Example of how to create a modal box.",
//           top: "20%",
//           left: "30%",
//       }, prop);
//       alert("Read parametrs");
//
//       return this.click(function(event){
// //anything
//       });
//       alert("return");
//
//       return this;
//     }
//   })
// });





// (function ($){
//     $.fn.paulundModalBox = function (prop) {
//         let options = $.extend({
//             height: "250",
//             width: "500",
//             title: "JQuery Modal Box Demo",
//             description: "Example of how to create a modal box.",
//             top: "20%",
//             left: "30%",
//         }, prop);
//         return this.click(function (e) {
//             add_block_page();
//             add_popup_box();
//             add_styles();
//
//             $('.paulund_modal_box').fadeIn();
//         });
//         function add_styles() {
//             $('.paulund_modal_box').css({
//                 'position': 'absolute',
//                 'left': options.left,
//                 'top': options.top,
//                 'display': 'none',
//                 'height': options.height + 'px',
//                 'width': options.width + 'px',
//                 'border': '1px solid #fff',
//                 'box-shadow': '0px 2px 7px #292929',
//                 '-moz-box-shadow': '0px 2px 7px #292929',
//                 '-webkit-box-shadow': '0px 2px 7px #292929',
//                 'border-radius': '10px',
//                 '-moz-border-radius': '10px',
//                 '-webkit-border-radius': '10px',
//                 'background': '#f2f2f2',
//                 'z-index': '50',
//             });
//             $('.paulund_modal_close').css({
//                 'position': 'relative',
//                 'top': '-25px',
//                 'left': '20px',
//                 'float': 'right',
//                 'display': 'block',
//                 'height': '50px',
//                 'width': '50px',
//                 'background': 'url(images/close.png) no-repeat',
//             });
//             /*Блокировка перекрываемой страницы*/
//             var pageHeight = $(document).height();
//             var pageWidth = $(window).width();
//
//             $('.paulund_block_page').css({
//                 'position': 'absolute',
//                 'top': '0',
//                 'left': '0',
//                 'background-color': 'rgba(0,0,0,0.6)',
//                 'height': pageHeight,
//                 'width': pageWidth,
//                 'z-index': '10'
//             });
//             $('.paulund_inner_modal_box').css({
//                 'background-color': '#fff',
//                 'height': (options.height - 50) + 'px',
//                 'width': (options.width - 50) + 'px',
//                 'padding': '10px',
//                 'margin': '15px',
//                 'border-radius': '10px',
//                 '-moz-border-radius': '10px',
//                 '-webkit-border-radius': '10px'
//             });
//         }
//
//         function add_block_page() {
//             var block_page = $('<div class="paulund_block_page"></div>');
//
//             $(block_page).appendTo('body');
//         }
//
//         function add_popup_box() {
//             var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><div class="paulund_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
//             $(pop_up).appendTo('.paulund_block_page');
//
//             $('.paulund_modal_close').click(function () {
//                 $(this).parent().fadeOut().remove();
//                 $('.paulund_block_page').fadeOut().remove();
//             });
//         }
//
//         return this;
//     };
// })(jQuery);
