$(function () {
    // 이미지 슬라이드 이벤트
    $('#slideContent').append($('.slider_image').first().clone());
    $('#slideContent').prepend($('.slider_image').eq(-2).clone());
    let index=1;
    moveSlider(index);
    // 좌측 버튼 클릭 이벤트
    $('.slidePrev').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('#slideContent').css('left',-4800);
            index=3;
            moveSlider(index);
        }
    });
    // 우측 버튼 클릭 이벤트
    $('.slideNext').click(function () {
        if(index < 3) {
            index++;
            moveSlider(index);
        }else {
            $('#slideContent').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    setInterval(()=>{
        $('.right_control').trigger('click');
    },3000)
    function moveSlider (index) {
        $('#slideContent').animate({
            left : -(index*1200)
        },'slow');
    }
    // 배너 스케일
    $('.conbanner a').each(function () {
        $(this).hover(function () {
            $('.conbanner a img').animate({
                scale : '1.2'
            },'slow');
        },function () {
            $('.conbanner a img').animate({
                scale : '1'
            },'slow');
        });
    });
});