import React from "react";
// css 연결
import "../css/reset.css";
import "../css/style.css";
// jquey 연결
import $ from "jquery";

function SideBar() {  
    // sideBtn 클릭 시, 이벤트 버블링이 발생하여 중복 클릭됨.
    // click 이벤트만 제거할 수 있도록 .off('click') 추가하여 구현
    $('.sideBtn').off('click').on('click', function(){
        const sideBtn = $('.sideBtn-menu-wrap .sideBtn-menu');
        if(sideBtn.hasClass('active')){
            $('.sideBtn-menu-wrap .sideBtn-menu').removeClass('active');
        } else{
            $('.sideBtn-menu-wrap .sideBtn-menu').addClass('active');
        }
    });

    // 1. top 버튼
    $('aside .sideBtn-menu-wrap .sideBtn-menu p:nth-child(1)').off('click').on('click', function(){
        $('html,body').animate({
            scrollTop : 0
        }, 1000);
        $('.sideBtn-menu-wrap .sideBtn-menu').removeClass('active');
    });

    // 2. menu 버튼
    $('aside .sideBtn-menu-wrap .sideBtn-menu p:nth-child(2)').off('click').on('click', function(){
        alert('오늘의 메뉴 라인업 페이지 이동');
        $('.sideBtn-menu-wrap .sideBtn-menu').removeClass('active');
    });

    // 3. ask 버튼
    $('aside .sideBtn-menu-wrap .sideBtn-menu p:nth-child(2)').off('click').on('click', function(){
        alert('문의하기 페이지로 이동')
        $('.sideBtn-menu-wrap .sideBtn-menu').removeClass('active');
    });

    // 4. dark 버튼
    $('aside .sideBtn-menu-wrap .sideBtn-menu p:nth-child(4)').off('click').on('click', function(){
        alert('다크모드 전환');
        $('.sideBtn-menu-wrap .sideBtn-menu').removeClass('active');
    });

  return (
    <aside>
        <div className="sideBtn">
            <div className="imgBox"></div>
            <p>PUIS</p>
        </div>

        <div className="sideBtn-menu-wrap">
            <div className="sideBtn-menu">
                <p>TOP</p>
                <p>MENU</p>
                <p>ASK</p>
                <p>DARK</p>
            </div>
        </div>
    </aside>
  );
}

export default SideBar;
