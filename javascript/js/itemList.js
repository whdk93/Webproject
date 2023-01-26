window.onload = function () {
    let itemList=[];
    let addButton=document.querySelector("#add"); // id를 add로 가진 html요소 선택
    let input=document.querySelector("#item");
    input.addEventListener("keydown", function(event){ //keydown: 키보드 입력 액션 keyCode 13:엔터키번호?
        if(event.keyCode == 13) {
            addList();
        }
        //console.log("입력중...");
    });
    addButton.addEventListener("click",addList); //버튼을 누르면 목록이 추가됨
    // 목록을 추가하는 함수
    function addList() {
        let item=input.value;
        if(item !== "") {
            itemList.push(item);
            input.value="";
            input.focus();
            showList();
        }else {
            alert("준비물을 입력한 후 추가를 눌러주세요");
        }
    }
    // 목록을 보여주는 함수
    function showList() {
        let list="<ul>";
        for(let i=0; i<itemList.length; i++) {
            list+="<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
        }
        list+="</ul>";
        document.querySelector("#itemList").innerHTML=list;
        let remove=document.querySelectorAll('.close'); // querySelectorAll: 배열처럼 값을 가져감
        for(let i=0; i<remove.length; i++) {
            remove[i].addEventListener('click',removeList);
        }
    }
    // 선택한 항목을 목록에서 삭제하는 함수
    function removeList() {
        let id=this.getAttribute('id');
        itemList.splice(id,1);
        console.log(itemList);
        showList();
    }
}