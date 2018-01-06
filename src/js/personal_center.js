/**
 * Created by Administrator on 2018/1/6.
 */
$(function(){
    $('.section_li').click(function(){
        if($(this).children('ul').css('display') === 'none'){
            $(this).children('ul').css('display','block');
            console.log($(this).children('.tier1 .tier1_r'))
            $(this).children('.tier1').children('.tier1_r').css('transform','rotate(-90deg)');
        } else{
            $(this).children('ul').css('display','none');
            $(this).children('.tier1').children('.tier1_r').css('transform','rotate(0deg)');
        }
    })
});