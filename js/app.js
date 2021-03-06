$(document).ready(function () {
    $('#home').height($(window).height() + 50);
    $.backstretch('img/computer.jpg');

    $(window).scroll(function () {
        var st = $(this).scrollTop(),
			wh = $(window).height(),
			sf = 1.2 - st / (10 * wh);

        $('.backstretch img').css({
            'transform': 'scale(' + sf + ')',
            '-webkit-transform': 'scale(' + sf + ')'
        });

        $('#home .container').css({ 'opacity': (1.4 - st / 400) });

        if ($(window).scrollTop() > ($(window).height() + 50)) {
            $('.backstretch').hide();
        } else {
            $('.backstretch').show();
        }

    });

    if ($(window).scrollTop() < ($(window).height() - 50)) {
        $('#portfolio-navbar').removeClass('scrolled');
    }
    else {
        $('#portfolio-navbar').addClass('scrolled');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() < ($(window).height() - 50)) {
            $('#portfolio-navbar').removeClass('scrolled');
        }
        else {
            $('#portfolio-navbar').addClass('scrolled');
        }
    });

    $('a.scrollto').click(function (e) {
        $('html,body').scrollTo(this.hash, this.hash, { gap: { y: -70} });
        e.preventDefault();

        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    $('.chart').waypoint(function () {
        $(this).easyPieChart({
            barColor: '#EC9F05',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });

    $('#contactForm').submit(function () {
        var $inputs = $('#contactForm :input');

        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        })

        var link = "mailto:shilpanaidu85@yahoo.com"
             + "&subject=" + escape("Portfolio Message")
             + "&body=" + values;

        window.location.href = link;
    });
});