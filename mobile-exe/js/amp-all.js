/**
 * -------------------------------------------------------
 *  사용자 정의 함수
 * -------------------------------------------------------
 */

// 클래스 추가 
function addClass(el, class_name) {
  // 순환문에서 사용할때 클래스가 계속 추가되는 현상 방지
  // 클래스에 내가 추가하려는 클래스명이 있는지 확인후 
  var is_showing = el.className.indexOf(class_name) > -1;
  // 있으면 실행말고 나가
  if( is_showing ){ return; }
  // 없으니까 추가돼
  // " " 공백 넣어서 클래스 추가 
  // 왜?  안그럼 기존에 있던 클래스랑 봉백없이 붙어버림 한개의 단어가 되어버림
  // 예) btn on 이 되어야하는데 btnon 이 되어버림
  el.className += " " + class_name;
}

// 클래스 제거
function removeClass(el, class_name) {
  // 정규식표현
  // \s 공백  |  ^ 문자 시작
  // 앞 | 뒤   ==> 문자 첫번째에 공백을!
  // \s 공백 | 선택 $ 문자 끝
  // 앞 | 뒤   ==> 문자 마지막번째에 공백을!
  var ck = new RegExp( "(\\s|^)"  +  class_name  + "(\\s|$)");

  // addClass 코드를 보면 클래스가 추가될 때 공백이 하나씩 생겨서 붙는다.
  // 그래서 trim() 메서드를 사용해서 단어의 앞과 뒤의 공백지움. 
  el.className = el.className.replace( ck , ' ').trim();
}

// ---------------------------------------------------------------------- [  END  ]


/**
 * -------------------------------------------------------
 * 다음 지도 API
 * 사용 가이드 : http://apis.map.daum.net/web/guide/
 * -------------------------------------------------------
 */

(function(global){
  'use strict';

  // 위치값 변수 저장
  var latlng = new daum.maps.LatLng(37.49982, 127.03501);

  /**
   * -------------------------------------
   * 기본 지도 : 이미지 처리
   * -------------------------------------
   */

  //지도를 담을 영역
  var container = document.getElementById('map');
  //지도를 생성할 때 필요한 기본 옵션
  var options = {
    //지도의 중심좌표. => 역삼역 
    center: latlng,
    level: 3 //지도의 레벨(확대, 축소 정도)
  };

  // 지도를 생성 
  var map = new daum.maps.Map(container, options);


  // 마우스 드래그와 모바일 터치를 이용한 지도 이동을 막는다
  map.setDraggable(false);

  // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
  map.setZoomable(false);


  // 마커 이미지의 주소, 마커 이미지의 크기
  var markerImageUrl = '../img/map-marker.png', 
      markerImageSize = new daum.maps.Size(52, 52), 
      markerImageOptions = { 
          // 마커 좌표에 일치시킬 이미지 안의 좌표
          offset : new daum.maps.Point(20, 42)
      };

  // 마커 이미지를 생성
  var markerImage = new daum.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

  // 지도에 마커를 생성하고 표시
  var marker = new daum.maps.Marker({
      position: latlng, // 마커의 좌표
      image : markerImage, // 마커의 이미지
      map: map // 마커를 표시할 지도 객체
  });

//------------------------------------------------------------------

  /**
   * -------------------------------------
   * 지도 보기 버튼
   * -------------------------------------
   */

  // 대상찾기
  var body = document.body;
  var btn_map_view = document.querySelector('.btn_map_view');
  var mapview_wrap = document.querySelector('.mapview_wrap');
  var mapview_close_btn = document.querySelector('.mapview_close_btn');
  var mapContainer = document.getElementById('mapview');

  // 버튼 클릭시 이벤트 실행
  // 지도보기 버튼
  btn_map_view.onclick = function(){

    // 클래스를 붙여 지도 보기 영역 오픈
    addClass(mapview_wrap , 'mapview_open');
    // 바디의 스크롤 제거
    body.style.overflow = 'hidden';

    // 오픈된 영역의 위치는 스크롤된 위치
    var scroll_position = window.pageYOffset;
    mapview_wrap.style.top = scroll_position + 'px' ;

    // 지도를 생성 
    var innerMap = new daum.maps.Map(mapContainer, options);

    // 지도에 확대 축소 컨트롤을 생성한다.
    var zoomControl = new daum.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    innerMap.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    // 마커 이미지를 생성
    var innerMapMarkerImage = new daum.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

    // 지도에 마커를 생성하고 표시
    var innerMapMarker = new daum.maps.Marker({
        position: latlng, // 마커의 좌표
        image : innerMapMarkerImage, // 마커의 이미지
        map: innerMap // 마커를 표시할 지도 객체
    });
    return false;
  };

  // 클로즈 버튼
  mapview_close_btn.onclick = function(){
    // 영역 닫힘
    removeClass(mapview_wrap , 'mapview_open');
    // 바디의 스크롤바 부분은 자동으로..
    body.style.overflow = 'auto';
    return false;
  };

//------------------------------------------------------------------

  /**
   * -------------------------------------
   * 로드뷰 보기 버튼
   * -------------------------------------
   */

  // 대상찾기
  var btn_load_view = document.querySelector('.btn_load_view');
  var roadview_wrap = document.querySelector('.roadview_wrap');
  var roadview_close_btn = document.querySelector('.roadview_close_btn');

  // 버튼 클릭시 이벤트 실행
  // 로드뷰 버튼
  btn_load_view.onclick = function(){

    addClass(roadview_wrap , 'roadview_open');

    var scroll_position = window.pageYOffset;
    roadview_wrap.style.top = scroll_position + 'px' ;

    //로드뷰를 표시할 div
    var roadviewContainer = document.getElementById('roadview'); 

    // 로드뷰 위치
    var rvPosition = latlng;

    //로드뷰 객체를 생성/
    var roadview = new daum.maps.Roadview(roadviewContainer, {
      pan: 68, // 로드뷰 처음 실행시에 바라봐야 할 수평 각
      tilt: 1, // 로드뷰 처음 실행시에 바라봐야 할 수직 각
      zoom: -1 // 로드뷰 줌 초기값
    }); 

    //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체를 생성
    var roadviewClient = new daum.maps.RoadviewClient(); 

    // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다
    roadviewClient.getNearestPanoId(rvPosition, 50, function(panoId) {
      // panoId와 중심좌표를 통해 로드뷰를 실행한다
        roadview.setPanoId(panoId, rvPosition); 
    });

    return false;

  };

  // 클로즈 버튼
  roadview_close_btn.onclick = function(){
    removeClass(roadview_wrap , 'roadview_open');
    return false;
  };

})(this);

// ---------------------------------------------------------------------- [  END  ]


