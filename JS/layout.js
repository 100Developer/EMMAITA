$(function(){
    //tab
    $('.messege-setting>a').click(function(){
        var tab_id = $(this).attr('data-type');
        $('.messege-setting>a').removeClass('messege-setting__item--active');
        $('.tab').removeClass('tab--active');
        $(this).addClass('messege-setting__item--active');
        $("#"+tab_id).addClass('tab--active');
    });
    $('.preview-tab>a').click(function(){
        var tab_id = $(this).attr('data-type');
        $('.preview-tab>a').removeClass('tab__item--active');
        $('.preview-talk').removeClass('preview-talk--active');
        $(this).addClass('tab__item--active');
        $("#"+tab_id).addClass('preview-talk--active');
    });
    
    //고객설정
    $(".customer-setting li").click(function() {
        $(this).toggleClass("active");
    });

    //파일첨부
    var fileTarget = $('#file'); fileTarget.on('change', function(){ 
        $('.file__input').css({"display":"inline-flex"}); 
    var cur=$(".file input[type='file']").val(); 
        $(".file input[type='text']").val(cur); });    
        $(".file__input__delete").click(function() {
        $('.file__input').hide();
        $(".file__input input").val("");    
    });
        $(".file-show .file__input__delete").click(function() {
        $('.file-show .file__input').show();
    });
    
    /* input-number */
    $('.datepicker__input').each(function () {
    var spinner = $(this),
        input = spinner.find("input[type='number']"),
        btnUp = spinner.find('.datepicker__input--btnUp'),
        btnDown = spinner.find('.datepicker__input--btnDn'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
        var newVal = oldValue;
        } else {
        var newVal = oldValue + 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
        var newVal = oldValue;
        } else {
        var newVal = oldValue - 1;
        }
        spinner.find('input').val(newVal);
        spinner.find('input').trigger('change');
        });
    });

    //레이어팝업
    $('.modal-open').on('click', function() {
        var target = $(this).attr('href');
        $(target).fadeIn(0);
    });
        $('.modal-close').click(function(){
        $(this).closest('.modal').fadeOut(0);
    });

    //변수값 추가 toggle
    $('.variable-add__arrow').click(function () {
        $('.variable-add').toggleClass('variable-add--active');
        $('section.setting-wrap:last-child').toggleClass('active');
    });

});