$.fn.pivot=function (options) {
// 플러그인 만드는 방법
    // 변수를 선언
    let $target=$(this); // 이미지 나열된 객체
    let $items=$target.children(); // 각각 이미지
    let $container=$target.wrap('<div></div>').parent(); // 이미지가 실제로 보일 공간
    let option = {
        width : 500,
        height : 450
    };
    // 옵션 처리
    $.extend(option, options);
    // 스타일을 지정
    $target.css({
        width : $items.length * option.width,
        height : option.height,
        position : 'absolute'
    });
    $items.css({
        width : option.width,
        height : option.height,
        float : 'left'
    });
    $container.css({
        width : option.width,
        height : option.height,
        position : 'relative',
        overflow : 'hidden'
    });
    // 이벤트를 연결(플러그인 동작 영역)
    let originLeft=0;
    let oldLeft=0;
    let nowPosition=0;
    let isDown=false;
    $target.on({
        mousedown : function (event) {
            isDown=true;
            oldLeft=originLeft=event.clientX; // 클릭한 지점의 x값
            event.preventDefault(); // 기본 이벤트 제거
        },
        mousemove : function (event) {
            if(isDown) {
                let distance=oldLeft-event.clientX;
                oldLeft=event.clientX;
                $target.animate({
                    left: '-=' + distance
                },0);
                $target.stop(true); // 여러번 짧게 동작했을 때 queue에 남아있는 동작을 삭제
            }
            event.preventDefault();
        },
        mouseup : function (event) {
            //내부 함수
            function movePosition(direction) {
                //위치를 지정
                let changePosition=nowPosition+direction;
                if(changePosition >= 0 && changePosition < $items.length) {
                    nowPosition = changePosition;
                }
            }
            // 요소의 1/4이상 드래그 했을 경우 피벗
            if(originLeft-event.clientX > option.width/4) {
                movePosition(+1);
            }else if (originLeft-event.clientX < -option.width/4) {
                movePosition(-1);
            }
            $target.animate({
                left: -nowPosition*option.width
            },500);
            isDown=false;
            event.preventDefault();
        }
    });
}