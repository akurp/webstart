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
    var thank = $('#thank');
    var close_thank = $('#close-thank');

    $('#offer-form').on('submit', function(event){
        event.preventDefault();
        var username = $('.username').val();
        var userphone = $('userphone').val();
        if (username == '' || userphone == '')
        {
            valid = false;
            return valid;
        };
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(valid)
            {
                if (valid == true)
                {
                    thank.addClass('modal-thank_active');
                    $('#offer-form').trigger('reset');
                }
            }
        })
    });
    close_thank.on('click', function(){
        thank.removeClass('modal-thank_active');
        $('.success').hide();
    });
});