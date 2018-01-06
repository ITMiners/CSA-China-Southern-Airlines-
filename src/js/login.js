$(
    function(){
        $('.login_type').children().click(function(){
            $('.login_type').children().removeClass('active');
            $(this).addClass('active');
            if($(' #vip_type').attr('class') === 'active'){
                $('.vip_login_container').css('display','block');
                $('.dynamic_lgoin_container').css('display','none');
            } else {
                $('.vip_login_container').css('display','none');
                $('.dynamic_lgoin_container').css('display','block');
            }
        });
    }
);