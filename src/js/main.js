$(document).ready(function() {
    
    (function(m, e, t, r, i, k, a) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })(window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
    ym(54893842, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true
    });

    new WOW().init();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) { $('.button-top').addClass('button-top_active') } else { $('.button-top').removeClass('button-top_active') }

    });
    // обработка и отправка формы через ajax для блока предложения
    var thank = $('#thank');
    var close_thank = $('#close-thank');

    $('#offer-form').on('submit', function(event) {
        event.preventDefault();
        var username = $('.username').val();
        var userphone = $('.userphone').val();
        if (username == '' || userphone == '') {
            valid = false;
            return valid;
        };
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(valid) {
                if (valid == true) {
                    thank.addClass('modal-thank_active');
                    $('#offer-form').trigger('reset');
                }
            }
        })
    });

    // Обработка и отправка формы через ajax для блока брифа
    $('#brif-form').on('submit', function(event) {
        event.preventDefault();
        var brifname = $('.brifname').val();
        var brifphone = $('.brifphone').val();
        if (brifname == '' || brifphone == '' || brifname.length < 2 || brifname.length > 15) {
            valid = false;
            return valid;
        };
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(valid) {
                if (valid == true) {
                    thank.addClass('modal-thank_active');
                    $('#brif-form').trigger('reset');
                }
            }
        })
    });
    $('#modal-form').on('submit', function(event) {
        event.preventDefault();
        var brifname = $('.modalname').val();
        var brifphone = $('.modalphone').val();
        if (brifname == '' || brifphone == '' || brifname.length < 2 || brifname.length > 15) {
            valid = false;
            return valid;
        };
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(valid) {
                if (valid == true) {
                    modal.removeClass('modal_active');
                    thank.addClass('modal-thank_active');
                    $('#modal-form').trigger('reset');
                }
            }
        })
    });
    

    /* Подключаем модальное окно */
    close_thank.on('click', function() {
        thank.removeClass('modal-thank_active');
        $('.success').hide();
    });

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    button.on('click', function() {
        modal.addClass('modal_active');
    });
    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    // Подключае кнопку-якорь наверх
    $('body').append('<button class="button-top">');
    $('.button-top').on('click', function() {
        $('body').animate({ 'scrollTop': 0 }, 500);
        $('html').animate({ 'scrollTop': 0 }, 500); //разные браузеры работают по-разному
    });

    // подключение формы обратной связи
    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                maxlength: 15,
                minlength: 2
            },
            userphone: {
                required: true,
            }
        },
        messages: {
            username: {
                required: "Укажите имя",
                maxlength: jQuery.validator.format("Слишком длинное имя"),
                minlength: jQuery.validator.format("Минимальное количество букв: {0}"),
            },
            userphone: "Укажите телефон"
        },
    });
    $('#brif-form').validate({
        rules: {
            brifname: {
                required: true,
                minlength: 2,
                maxlength: 15,
            },
            brifphone: {
                required: true,
            },
        },
        messages: {
            brifname: {
                required: "Укажите имя",
                minlength: jQuery.validator.format("Минимальное количество букв: {0}"),
                maxlength: jQuery.validator.format("Слишком длинное имя")
            },
            brifphone: "Укажите телефон"
        }
    });
    $('#modal-form').validate({
        rules: {
            modalname: {
                required: true,
                maxlength: 15,
                minlength: 2
            },
            modalphone: {
                required: true,
            }
        },
        messages: {
            modalname: {
                required: "Укажите имя",
                maxlength: jQuery.validator.format("Слишком длинное имя"),
                minlength: jQuery.validator.format("Минимальное количество букв: {0}"),
            },
            modalphone: "Укажите телефон"
        }
    });
    // макка для телефона
    $('.phone').mask('+7 (999) 999-99-99')

    // Подключение слайдера
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    // Подключение яндекс-карты
    // ymaps.ready(init);

    // function init() {
    //     var myMap = new ymaps.Map("map", {
    //             center: [55.611409, 37.201122],
    //             zoom: 13,

    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    //         myPlacemark = new ymaps.Placemark([55.611409, 37.201122], {
    //             // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
    //             balloonContentHeader: "Ремонт квартир",
    //             balloonContentBody: "Потрясающий ремонт квартир, офисов, и чего только пожелаете",
    //             balloonContentFooter: "г. Москва, ул. Ленина, д. 10 корпус 2, оф. 308",
    //             hintContent: "Ремонт квартир"
    //         }, {
    //             preset: 'islands#orangeGlyphIcon',
    //             iconGlyph: 'home',
    //             iconGlyphColor: 'grey'
    //         });
    //     myMap.geoObjects.add(myPlacemark);
    //     myMap.events.on('click', function () {
    //         myMap.behaviors
    //             .enable('scrollZoom')
    //             .enable('multiTouch');
    //     });
    // }
    
    /* Показывать карту, когда докрутили до неё */
    var documents = $('.documents');
    var documentsTop = documents.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > documentsTop)
        {
            $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.1336551493264!2d37.31594711569665!3d55.82563939383979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b546f2fd74a4fb%3A0xe56e09b794f43fd4!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxMCwgMzA4LCDQmtGA0LDRgdC90L7Qs9C-0YDRgdC6LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDM0MDQ!5e0!3m2!1sru!2sru!4v1565972748327!5m2!1sru!2sru" width=100% height=100% frameborder="0" style="border:0" allowfullscreen></iframe>')
            $(window).unbind('scroll')
        }
    });
});