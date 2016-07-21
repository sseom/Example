#HTML/CSS 코딩 스타일 가이드라인
1차 작성일 2016.07.21
계속 보완예정 작업을 많이 하다보면 점차적으로 내 규칙이 생기것지??!!...그래,,,언젠간,,

##HTML

###문서타입 선언
- 문서 유형 정의(DTD, Document Type Definition)
- 문서 최상단에 입력하여 웹 브라우저에게 현재 문서가 웹 표준 문서임을 알린다. (표준 모드로 동작)

- HTML5 사용
- DOCTYPE 대문자로 작성
`<!DOCTYPE html>`


###문서구조
- 기본 구조는 아래와 같이 작성

```
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title> 문서 제목 </title>
  </head>
  <body> 문서내용 </body>
</html>
```

- lang 속성 작성
    - 사용될 주 언어 명시를 통해 문서의 주요 언어가 무엇인지 명시할 수 있다. 또한 음성엔진도 이를 인식해서 읽는다.
    - ko-KR : 대한민국의 한국어  // 남한 과 북한 언어의 구분으로  KR을 붙여줘야한다.

- 비표준 ie호완성 보기 모드
    - `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
    - 사용자가 가지고 있는 브라우져에서 나타낼수 있는 최상위버전으로 문서를 랜더링 하도록 작성.
    - 버전을 명시하기 보단 Edge로 최상위버전을 입력하는 것을 권장

- 언어 준수사항
    - `<meta charset="UTF-8">`
    - 텍스트 언어 인코딩을 UTF-8로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, 깨지는 한글 문제를 해결한다.

- 타이틀
    - `<title>웹 문서의 제목</title>`
    - 타이틀은 현재페이지가 무슨 페이지인지를 알려줘야 한다.
    - 타이틀은 각 페이지마다 다르게 작성하는것이 좋다
        - 메인페이지는 프로젝트 명을 작성한다.
        >예 : 메인은 네이버 서브는  웹툰 | 네이버   ,  쇼핑 | 네이버  이런식으로 작성 권장

###문서 작성 방법
- 블록 태그는 항상 `< >`닫아야한다.
- 언블록(빈 요소) 태그도 `< />` 닫아야하지만 html5에선 안닫아도 무관 예) img / input 등
- HTML문서에서 특수문자를 사용하게 되면 entity로 변환된 코드를 작성해야 오류가 안남. 
- 들여쓰기 공백 2칸으로(==1탭) 지정한다.

----

##CSS
- style은 link 사용해서 외부링크로 연결한다.
    - 외부파일로 작성시 최상단에 @charset "utf-8"  표기한다.
- @import 방식은 사용하지 않는다.
- CSS 스타일 속성간 개행하지 한다. 단, 적용 속성이 한개 일때는 한줄로 작성.
- CSS 선언의 속성:값 을 주고 세미콜론을 붙인다.
- CSS 주석 기호( /*  */ )와 내용 사이에는 반드시 공백 한 칸이 있어야 한다

```
@charset "utf-8";
/* style.css */

.style{
    float: left;
    width: 100px;
    height: 100px;
}
.style_inline{ display: inline; }

```


####스타일 속성 선언 순서
- 레이아웃 관련 속성
    1   display
    2   overflow
    3   float
    4   position
    5   z-index

- 박스 모델 크기 관련 속성
    6   width & height
    7   margin & padding
    8   border

- 꾸밈이나 기타 속성
    9   font
    10  background
    11  etc(기타)

----

###네이밍

####파일 및 폴더 네이밍
- 파일명이 영문, 언더바, 뒤에숫자 ok
- 파일명이 한글, 하이픈, 특수문자, 앞에숫자 no

####id, class 네이밍
- 소문자 사용
- 이름 연결엔 언더바 사용
- 숫자는 두자리수 01부터 시작
- id 사용시엔 문서구조의 큰 부분 wrapping 정도로만 사용.

####축약단어

|축약 단어 | 의미 |
|---|---|
|btn | button  |
|num | number  |
|gnb | global navigation bar  |

----

###파일구조

1. 프로젝트명 폴더 
    - index.html
    - sub 폴더
        - sub_서비스명 폴더
            - sub_서비스명_01.html 
        - sub_서비스명 폴더
            - sub_서비스명_01.html
            - sub_서비스명_02.html
    - css 폴더
        - common 폴더 : 공통으로 모든 페이지에 적용할수 있는 스타일을 담는다.
        - reset 폴더 : 요소들이 기본을 가지고 있는 특성들을 초기화 하는 스타일을 담는다. 
        - grid_system 폴더 : 작업자의 편의를 위해 그리드 스타일을 담는다. 서버엔 업로드하지 않음
    - js 폴더
        - common 폴더 : 공통으로 모든 페이지에 적용할수 있는 자바스크립트 코드를 담는다.
    - images 폴더
        - common 폴더 : 공통으로 모든 페이지에 적용할수 있는 이미지를 담는다.
        - content 폴더 
            - main 폴더
            - sub 폴더


----

###문법유효성검사
[HTML 검사](http://validator.w3.org)
[CSS 검사](https://jigsaw.w3.org/css-validator/)
- 웹표준에 준수하기 위해 문법상 오류가 없는지 확인
- 모든 작업 완성 후에 마크업 / CSS 검사
- url 이나 작업한 파일로 검사하고 수정 할 것! 또는 개발자도구 확장프로그램 설치해서 확인

[한국어 지원 마크업 검사](http://validator.kldp.org/)
[한국어 지원 css 검사](http://css-validator.kldp.org/)
