# CSS 선택자 

| 유형 | 선택자 | 설명 | 기타
|---|---|---|---
| 전체 선택자| * |페이지의 모든요소를 가리키는 선택자 | 성능저하문제로 권장하지 않음
| 요소명 선택자| E | 요소 이름을 그대로 가져다 쓰는 선택자|
| 아이디 선택자|#아이디명| 아이디명을 가져다 쓰는 선택자 | 남발 금지, 같은 아이디 이름 중복 불가능
| 클래스 선택자|.클래스명| 클래스명을 가져다 쓰는 선택자 | 중복사용이 가능해서 필요한곳에 가져다 쓸수 있다. 모듈화에 좋음
| 그룹핑 선택자 | E, F, #id|선택자들을 쉼표로 구분하여 여러개를 선택해서 사용|
| 하위 선택자 | #id E | 선택자 내부에 존재하는 자식부터 손자까지 가르키는 선택자 |
| 자식 선택자 | #id > E| 부모의 바로자식 == 직계자식을 가리키는 선택자 | 자식만 가능하고 손자는 잡히지 않음
| 인접형제 선택자|E+F|E 바로 다음 형제인 F요소를 선택하는 선택자|
| 일반형제 선택자|E~F|E에서 형제로 있는 모든 F요소를 가르키는 선택자|E요소를 기준으로 
| 종속 선택자|E#id|아이디명을 가지고 있는 E요소를 가르키는 선택자|
| |||
| 속성 선택자|||
|   | E[href]|href속성을 가지고 있는 E요소를 가르키는 선택자|
|  | *[title] | title 속성이 들어간 모든 요소를 가르키는 선택자 |
|  | [id] | 아이디명과 무관하게 모든 id를 가지는 요소를 가르키는 선택자|
|  | [class] | 클래스명과 무관하게 모든 class를 가지는 요소를 가르키는 선택자|
|  | E[alt=“확인사진”]| 속성의 값이 ‘확인사진’인 요소를 가르키는 선택자|
|  | E[src$=“.png”]| 속성의 값이 .png로 끝나는 요소를 가르키는 선택자|
|  | E[href*="www"]| 속성의 값이 www 라는 단어가 있는 요소를 가르키는 선택자 | 단어가 앞,뒤,중간 어디에있든 단어 자체로만 찾아냄
|  | E[href^="www"]| 속성 값이 www 으로 시작하는 요소를 가르키는 선택자|
|  | E[href&#124;="www"]| 속성 값이 하이픈 으로 구분 되고 www 단어가 있는 요소를 가르키는 선택자 |
|  | E[href~="www"]| 속성 값이 공백으로 구분되고 www 단어가 있는 요소를 가르키는 선택자|
|  | E[href="..."][class="some"]| 여러조건을걸수도있다 |
||||
|가상클래스 선택자 |||
|  | E:link | 링크가 걸린 요소를 가르키는 선택자 |
|  | E:visited |링크된 페이지를 갔다가 돌아온 요소를 가르키는 선택자 |
|  | E:hover | 링크된 곳에 마우스가 올려질 경우 보여지는 스타일을 주는 선택자| 사용빈도 높음
|  | E:active | 링크된 곳을 마우스로 누르고 있을 때 보여지는 스타일을 주는 선택자 |
|  | E:focuse | 링크된 곳에 포커스가 생길 경우 보여지는 스타일을 주는 선택자| 사용빈도 높음
|  | E:enabled  | 활성화된 요소를 가르키는 선택자  |   form 컨트롤 선택자
|  | E:disabled | 비활성화된 요소를 가르키는 선택자               |  form 컨트롤 선택자
|  | E:checked  | 라디오나 체크박스 체크된 요소를 가르키는 선택자     |  form 컨트롤 선택자
|  | E:not(조건)| ()괄호안의 조건을 제외한 요소를 선택하는 선택자
|  | E:empty    | 요소 안에 자식,문자,공백을 가지지 않는 요소를 가르키는 선택자 |
|  | E:target   | 선택된 링크로 이동해 보여지는 대상을 선택해 주는 선택자 |Link 앵커를 클릭해서 화면이 이동하면 해당 선택자에 스타일이 적용된다.
|  | E:lang(kr) | lang속성값이 kr인 요소를 가르키는 선택자       |
|  | E:root         | 문서의 루트를 가르키는 선택자   |
|  | E:nth-child(n) |n번째 요소를 가르키는 선택자|
|  | E:nth-child(2n) | 짝수 번 째 요소를 가르키는 선택자|
|  | E:nth-child(2n+1) | 홀수 번 째 요소를 가르키는 선택자|
|  | E:nth-last-child(n)|마지막에서 n번째 요소를 가르키는 선택자|
|  | E:nth-of-type(n) |같은 타입을 가진 형제들 중 n번째 요소를 가르키는 선택자|
|  | E:nth-last-of-type(n) | 같은 타입을 가진 형제들 중 마지막에서 n번째 요소를 가르키는 선택자|
|  | E:first-child | 같은 요소 중 첫번째 요소를 가르키는 선택자|
|  | E:last-child | 같은 요소 중 마지막 요소를 가르키는 선택자|
|  | E:first-of-type | 같은 타입을 가진 형제들 중 첫 번째 요소를 가르키는 선택자|
|  | E:last-of-type | 같은 타입을 가진 형제들 중 마지막 요소를 가르키는 선택자|
|  | E:only-child | 선택요소가 유일한 자식이면 그 요소를 가르키는 선택자 |
|  | E:only-of-type | 같은 타입을 가진 형제들 중 선택요소가 유일하면 선택|
||||
|가상요소 선택자|||
|  | E::before| 선택요소의 자식으로 앞쪽에 가상요소를 배치해서 가르키는 선택자|
|  | E::after| 선택요소의 자식으로 뒤쪽에 가상요소를 배치해서 가르키는 선택자|
|  | E::first-line| 선택 요소의 첫번째줄을 가르키는 선택자|
|  | E::first-letter| 선택요소의 첫번째 글자를 가르키는 선택자| 
|  | E::selection | 사용자가 드래그해서 텍스트블럭을 선택했을때 디자인해줄 요소를 선택 |

[※ W3C, Selectors Level 3 ](https://www.w3.org/TR/selectors/#selectors)

[※ w3schools CSS Selectors](http://www.w3schools.com/cssref/css_selectors.asp)

[※ w3schools Selector Demo](http://www.w3schools.com/cssref/trysel.asp?selector=p:first-of-type)
