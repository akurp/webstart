// javascript
// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close')

// button.addEventListener('click', function(){
//     modal.classList.add('modal_active');
//     setTimeout(() => modal.classList.remove('modal_active'),5000);
// });
// close.addEventListener('click', function(){
//     modal.classList.remove('modal_active');
// })

// jquery

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){$('.button-top').addClass('button-top_active')}
        else{$('.button-top').removeClass('button-top_active')}

    });
    // обработка и отправка формы через ajax
    var thx = $('#thx');
    var close_thx = $('#close-thx');

    $('#offer-form').on('submit', function(event){
        event.preventDefault();
        var username = $('username').val();
        var userphone = $('phone').val();
        if(username == '' || phone == '')
        {
            valid = false;
            return valid
        }
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data){
                // $('.success').text('Спасибо за заявку, скоро мы вам перезвоним.')
                // $('.input').val('');
                if(valid == true)
                {
                    thx.addClass('thx-window_active');
                    $('#offer-form').trigger("reset");
                }
            }
        });
    });
});