$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    button.on('click', function(){
        modal.addClass('modal_active');
    });
    close.on('click', function(){
        modal.removeClass('modal_active');
    });
    // Подключим кнопку-якорь наверх
    $('body').append('<button class="button-top">');
    $('.button-top').on('click', function(){
        $('body').animate({'scrollTop': 0}, 500);
        $('html').animate({'scrollTop': 0}, 500); //разные браузеры работают по-разному
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){$('.button-top').addClass('button-top_active')}
        else{$('.button-top').removeClass('button-top_active')}

    });
});