
/**
 * appendChild(부모노드, 자식노드)
 * 부모노드의 마지막 자식노드로 삽입한다.
 * 원래 기본 작성 법 : parent_node.appendChild(child_node);
 * => 대체 appendChild(parent_node, child_node) 
 * ---------------------------------------------
 * @작성자    sseom
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
// function appendChild(parent_node, child_node) {
//   parent_node.appendChild(child_node);
// }


/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */
 //언디파인드의경우는 값을 돌려주지않는것들????
 // 얘는 조작만 값을 반환할필요도 없고 걍 조작만 필요했을뿐이고일만시키면돼   셋팅만...   가공만하고
function insertAfter(target_node, insert_node) {
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  //만약 타겟노드 다음요소가 있다면 // 타켁.부모요소의 안으로 //타겟노드 다음요소의 전 영역에 데이터삽입하다. //=> 타켁요소 뒤가 됨
  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  //그게 아니면 타켓.부모의 마지막 자식으로 데이터를 삽입
  else { parent_node.appendChild(insert_node); }
}


/**
 * queryAll(selector, context)
 * 특정 콘텐트의 선택자를 잡는다 (콘텐트 부모 안으로 자손들)
 * ---------------------------------------------
 * @작성자    sseom
 * @버전     0.0.1
 * @param  {}  selector  선택자
 * @param  {}  context  특정콘텐트대상 //==> 도큐멘트가 아닌 특정맥락 특정 지점
 * @return {context.querySelectorAll(selector);}
 */
function queryAll(selector, context){
  // 사용자가 올바른 데이터값을 전달했는지에 대한 유효성 검사 (데이터는 스트링이어야함)
  // 문자 데이터인지 확인
  if (typeof selector !== 'string'){ throw new Error('첫번째 전달인자는 문자 유형아어야 합니다.');}
  // if ( typeof selector !== 'string' ) { console.error('전달인자는 문자열만 가능합니다.'); }
  // console.info('오류 발생 후 코드가 실행되는가?==> ok ');
  // console.error('오류메세지'); 는 에러가 나도 아래코드를 읽어내린다.
  // throw new Error('오류메세지'); 는 에러가 나면 코드를 중지 시켜버림(읽지 않음) 

  // 특정 콘텐츠대상값이 없다면 //사용자가 전달하지 않았다면 
  // 콘텍스트는 도큐멘트가 되어라 
  if (!context){ context = document; }
  //얘네는 리턴값을 가지고 ????? 네이티브에서 가지고와야하니까....
  return context.querySelectorAll(selector);
}
function query(selector, context){
  return queryAll(selector, context)[0];
}
//쿼리 아이템 인덱스
function queryitem(selector, index, context){
  if(!index){ index = 0; };
  return queryAll(selector, context)[index];
}

// 제길 ???????????????????????????????????????????????????
// function $q(selector, hook, context){
//   if( !hook ){
//     return query(selector, context);
//   }else{
//     return queryAll(selector, context);
//   }
// }


function $q(selector, hook, context){
  var method;
  if(hook === 1){
    method = 'query';
  }else{
    method = 'queryAll';
  }
  return window[method](selector, context);
}


//문서 객체를 제거하는 헐퍼함수
function remove(node){
  node.parentNode.removeChild(node);
}


// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼
// 요소노드를 생성한 다음 내부에 텍스트 노드를 자식노드로 삽입

function createNode(el_name,text){
  var el_node = document.createElement(el_name);
  // 텍스트가 언디파인드가 아니면  그리고 // 스트링
  // 텍스트가 있다면 그리고 문자열이 스트링이면
  if(typeof text !== 'undefind' && typeof text === 'string'){
  var text_node = document.createTextNode(text);
  el_node.appendChild(text_node);
  }
  return el_node;
}

// ------------------------------------------------
// 웹 브라우저에서 계산된 CSS 스타일 값 가져오는 방법
// ------------------------------------------------
// 비 표준 MS IE 방식 (IE 8-)
// 대상.currentStyle.스타일속성
// ------------------------------------------------
// 표준 W3C 방식 (IE 9+)
// window.getComputedStyle(대상,가상요소).스타일속성
// ------------------------------------------------
function getStyle(el, property, pseudo) {
  var value, el_style;
  // 유효성 검사
  if ( el.nodeType !== 1 ) {
    console.error('첫번째 인자 el은 요소노드여야 합니다.');
  }
  if ( typeof property !== 'string' ) {
    console.error('두번째 인자 property는 문자열이야 합니다.');
  }
  if ( pseudo && typeof pseudo !== 'string' ) {
    console.error('세번째 인자 pseudo는 문자열이야 합니다.');
  }

  // CSS 속성 이름이 카멜케이스화
  property = camelCase(property);

  if ( window.getComputedStyle ) {
    el_style = window.getComputedStyle(el,pseudo);
    if (pseudo && el_style.content === '') {
      return null;
    }
    value = el_style[property];
  } else {
    value = el.currentStyle[property];
  }
  return value;
}

function setStyle(elNode, property, value) {
  if ( isntElNode(elNode) ) {
    errorMsg('요소노드가 전달되어야 합니다.');
  }
  if (isType(property) !== 'string') {
    errorMsg('두번째 전달인자는 문자열이어야 합니다.');
  }
  elNode.style[property] = value;
}

function css(elNode, prop, value) {
  if ( !value ) {
    return getStyle(elNode, prop);
  } else {
    setStyle(elNode, prop, value);
  }
}

function camelCase(text) {
   return text.replace(/(\s|-|_)./g, function($1){ return $1.replace(/(\s|-|_)/g,'').toUpperCase(); } );
}


/**
 * ----------------------------------------------------------------
 * 데이터 타입관련 헬퍼 함수들
 * ---------------------------------------------------------------- */
// 자바스크립트의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수 ==> 데이터타입이 뭐니?
function isType(data) {
   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

// 데이터 간 동등한지 유무 파악 헬퍼 함수
// '1' 이면 1 // 가 와 가  ==> 트루 
// 1 이랑 2 // 가 와 나 ==> 펄스
function equal(data1, data2) {
   return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 파악 헬퍼 함수
function strictEqual(data1, data2) {
   return data1 === data2;
}


// 전달받은 인자 타입 유효성검사 겸 에러 메세지 출력 헬퍼 함수
// 내가 원하는 타입으로 값을 입력받을수 있도록 오류메세지 
// 예를 들어 난 문자열 인자가 필요해!! 
// 유효성검사를 해야해  
// 그러면 매번 이프문 사용하고 조건으로 타입오브써서 스트링이 맞는지 확인해서 실행문 출력이 아니라
// if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
// throwError(3,'number')  ==> 언디파인트 출력
// throwError('3','number')  ==> 에러 출력
// 데이터와, 데이터타입 비교 해서 같지 않은 경우는 에러메세지 출력
function throwError(type1, type2, err_msg) {
  err_msg = err_msg || '기본 오류 메시지';
  if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
}


// 이데이터가 타입이 이거 맞니?
// validDate( 1, 'number')
function validDate(data, type) {
  // 전달된 타입인자가 문자열이 아닌경우 에러메세지
  throwError(type, 'string'); // 오류 발생 시 멈추고 화면에 오류 메시지 출력
  return strictEqual( isType(data), type );
}


/**
 * ----------------------------------------------------------------
 * 8월 16일자 헬퍼 추가 
 * ---------------------------------------------------------------- */

function errorMsg(message) {
  if ( isType(message) !== 'string' ) {
    // 함수 자신을 다시 호출: 재귀함수
    errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
  }
  throw new Error(message);
}

// 뭐니? 라고 묻는 함수는 is로 시작
// 요소노드니? 참거짓으로 값을 반화
function isElNode(node){
  return node.nodeType === 1;
}
function isntElNode(node){
  return node.nodeType !== 1;
}


// 내기준으로 이전 요소노드 찾기
function prevEl(node) {
  // 검증: 유효성 검사
  // 만약 노드의 타입이 1이 아니라면 실행 ==> 요소노드가 아니라면
  if ( isntElNode(node) ) { errorMsg('전달된 인자는 요소노드여야 합니다.'); }

  //구형 ie 9+ 신형웹브라우져
  if(node.previousElementSibling){
    return node.previousElementSibling;
  }else{//구형 ie6~8
    // node.previousSibling; // 요소노드, 텍스트노드, 주석노드 ???
    // 노드의 다음 형제  // 노드 그리고 노드의 타입이 1이 아니면 ==> 요소노드가 아니면 
    do { node = node.previousSibling; }
    while(node && isntElNode(node));
    //와일문이 거짓이여서 ==> 요소노드가 찾아지게 되면 그 요소를 반환
    return node;
  }
}

//내기준으로 다음요소찾기
function nextEl(node){
  if ( isntElNode(node) ) { errorMsg('전달된 인자는 요소노드여야 합니다.'); }
  if(node.nextElementSibling){
    return node.nextElementSibling;
  }else{
    do { node = node.nextSibling; }
    while(node && isntElNode(node));
    return node;
  }
}



function _firstEl(node){
  //만약 전달받은 노드가 요소노드가 아니라면 에러메세지 
  if (isntElNode(node)){ erroeMsg('요소노드를 전달하여야합니다.'); }
  //만약 노드의 첫번째요소자식이 있다면 //반환해라 //최신버전 요소찾기 매서드 돔
  if(node.firstElementChild){
  //반환 노드의 첫번째 자식을
  return node.firstElementChild;

  } else {//구형이라면  IE 6-8
  // node 찾고자 하는 자식 노드의 부모이다.
  // 제일 먼저 부모 노드인 node의 첫번째 자식 노드를 찾는다.
    node = node.firstChild;
    // 노드가 있고, 요소노드가 아리라면 ==> 텍스트노드가 잡힌다면
    // 참이면  다음노드를 반환  ==> 텍스트노르면 다음형제노드를 반환  
    // 거짓이면 노드를 반환 ==> 요소노드라면  지금 그 노드를 반환
    
    // 만약 찾은 자식 노드가 요소 노드가 아니라면 다음 형제 노드를 찾는다.
    // 다음 형제 노드가 요소 노드라면 반환하고, 아니라면 다시 다음 형제 노드를 요소노드인지 확인한다.
    // console.log(node && isntElNode(node));
    // return;
    return ( node && isntElNode(node) ) ? nextEl(node) : node;
  }


  // 함수는 명시적으로 어떤 값도 반환하지 않을 경우 undefined를 반환한다.
  // return undefined;
}


// 마지막 자식요소 노드를 찾는 헬퍼 함수
function _lastEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.lastElementChild ) {
    return node.lastElementChild;
  } else {
    node = node.lastChild;
    return ( node && isntElNode(node) ) ? prevEl(node) : node;
  }
}

// 목적에 도달하는 쉬운 헬퍼 함수
// 첫번째 자식 요소 찾는
function firstEl(node){
  return node.children[0];
}
// 마지막 자식요소 찾는 
function lastEl(node){
  var child = node.children;
  return child[child.length - 1];
}

// ------------------------------------------------
// 요소노드의 이름이 동일한지 체크하는 헬퍼 함수
function isElName(node, name) {
  if ( isntElNode(node) ) { errorMsg('첫번째 인자로 요소노드가 전달되어야 합니다.') }
  if ( isType(name) !== 'string' ) { errorMsg('두번째 인자로 텍스트 데이터 유형이 전달되어야 합니다.') }
  return (node.localName || node.nodeName.toLowerCase()) === name;
}

// ------------------------------------------------
// 텍스트노드의 유형인지 체크하는 함수
function isTextNode(node) {
  return node.nodeType === 3;
}
// ------------------------------------------------
// 텍스트노드의 유형이 아닌지 체크하는 함수
function isntTextNode(node) {
  // return !isTextNode(node);
  return node.nodeType !== 3;
}

// ------------------------------------------------
// 단위 제거/가져오기/소유하고 있는지 확인
function getUnit(value){
  var i=0,l=getUnit.units.length,unit;
  var reg;
  for ( ; i<l; i++ ) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1 ) {
      //-1값이 없고 -1보다 크면 값이 있는거임! 왜?
      // 인덱스오브는 값이 있다면 0부터 셈
      // 값은 내가 찾고자 하는 단어의 인덱스번호 를 반환한다
      // 35rem 일때 r을 2를 반환 
      // break;
      // 참이면 유니트를 반환하고 끝내랏
      return unit;
    }
  }
  return null;
}
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');

//단위제거 ==> 단위제거후 숫자값을 얻고싶을때
function removeUnit(value) {
  // 전달인자의 단위를 값을 함수명.속성에 할당
  removeUnit.unit = getUnit(value);
  //값을 반환 => 전달인자값 10진수로 
  return parseFloat(value, 10);
}
// 단위를 할당한 함수명.속성에 널값을 할당
removeUnit.unit = null;

//내가px rem em % vw vh vmin vmax 이 단위가 있니? 확인
function hasUnit(value) {
  return !!getUnit(value);
}

/**
 * ----------------------------------------------------------------
 * 8/18 일 
 * ---------------------------------------------------------------- */

// 함수를 작성하는 이유
// 재사용할 것 같은 코드들....
// 매번 짜는 것은 비 효율적이다 보니
// 능률적으로 코드를 처리하기 위해 코드 묶음을
// 재사용/확장할 수 있도록 처리.
// 유사 배열을 배열화
function makeArray(data) {
  // 전달된 객체는 배열 또는 유사 배열인가?
  var check_data = isType(data), result_arr = [], len = data.length;
  // 실제 배열
  if (check_data === 'array') {
    return data;
  }
  // 유사 배열
  if ( len && check_data !== 'string' ) {
    while( len-- ) {
      result_arr.push( data[len] );
    }
  }
  return result_arr.reverse();
}

// function convertArray( data ){
//     if ( Array.from ) {
//         return Array.from( data );
//     } else {
//         return Array.prototype.slice.call(data);
//     }
// }

// 1. 정식으로 클로저를 사용하는 방법으로 문제 해결 방법
function convertArray_wrapper() {
  // 내부에서 클로저 함수를 반환
  var closureFn;
  if ( Array.from ) {
    // Array.from이 지원되는가?
    closureFn = function(data) {
      return Array.from(data);
    };
  } else {
    // 지원되지 않는가?
    closureFn = function(data) {
      return Array.prototype.slice.call(data);
    }
  }
  return closureFn;
}

var convertArray = convertArray_wrapper();

// 2. 약식(IIFE 패턴)을 사용하여 클로저 처리하는 문제 해결 방법
var convertArray = (function(){
  if (Array.from) {
    return function(data) {
      return Array.from(data);
    }
  } else {
    return function(data) {
      return Array.prototype.slice.call(data);
    }
  }


})();

