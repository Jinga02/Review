<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>
> <!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <h2>DOM(문서 객체 모델/Document Object Model)이란</h2>
      <ul>
          <li>Browser API의 한 종류인 DOM은 문서의 구조화된 표현을 제공하며, 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공한다.
          <li>문서 구조, 스타일, 내용 등을 쉽게 변경할 수 있게 도와준다.</li>
          <li>HTML콘텐츠를 추가, 제거, 변경하고, 동적으로 페이지에 스타일을 추가하는 등의 기능을 수행한다.</li>
          <li>HTML문서를 구조화하여 각 요소를 객체(object)로 취급한다.</li>
          <li>DOM은 문서를 논리 트리로 표현하며, DOM메서드를 사용하면 프로그래밍적으로 트리에 접근할 수 있고 이를 통해 문서의 구조, 스타일, 컨텐츠를 변경할 수 있다.</li>
          <li>DOM은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다.</li>
      </ul>
  
>    <h2>DOM의 기본 구조</h2>
      <ul>
          <h3><li>DOM Tree</li></h3>
          <ul>
            <li>DOM에서 모든 것은 Node이다. 즉, HTML 요소, 속성, 텍스트 모든 것이 Node이다.</li>
            <li>각 노드는 부모, 자식 관계를 형성하고 이에 따라 상속 개념도 동일하게 적용된다.</li>           
            <img style="height: 300px; width: 350px;" src="https://user-images.githubusercontent.com/110621233/233234126-5d1843db-028f-4e8e-a85e-6c138d73c46b.png" alt="DOM Tree">
          </ul>
          <h3><li>Node</li></h3>
          <ul>
            <li>DOM의 구성 요소 중 하나이며, HTML 문서의 모든 요소를 나타낸다.</li>
            <ul>
                <li>Document Node === HTML 문서 전체를 나타내는 코드</li>
                <li>Element Node === HTML 요소를 나타내는 노드 EX) p태그</li>                
                <li>Text Node === HTML 텍스트, Element Node내의 텍스트 컨텐츠를 나타낸다.</li>
                <li>Attribute Note === HTML 요소의 속성읠 나타내는 노드이다.</li>
            </ul>
          </ul>
          <h3><li>window object</li></h3>
          <ul>
            <li>DOM을 표현하는 창이며, 가장 최상위 객체이다.(작성 시 생략 가능)</li>
            <li>탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 window 객체로 나타낸다.</li>
            <li>window 메서드 예시</li>
            <ul>
                <li>window.open() - 새 탭 열기</li>
                <li>window.alert() - 경고 대화 상자 표시</li>
                <li>window.print() - 인쇄 대화 상자 표시</li>
            </ul>
          </ul>
          <h3><li>document object</li></h3>
          <ul>
            <li>브라우저가 불러온 웹 페이지이다.</li>
            <li>페이지 컨텐츠의 진입점 역할을 하고,body태그 등과 같은 수많은 다른 요소들을 포함하고 있다.</li>
            <li>document의 속성 예시</li>
            <ul>
                <li>HTML의 title값 - 현재 문서의 제목</li>
                <li>document는 window의 속성이다.</li>
            </ul>
          </ul>
          <h3><li>Node 와 Element</li></h3>
          <ul>
            <li>예시 코드의 모든 것은 Node이다.</li>
            <li>headt와 body는 HTML요소로 Element이다.</li>
            <li>title, p는 Text Node이면서 Element이다.</li>
            <li>id = unique는 DOM에서는 Attr Node이고, HTML요소인 p의 속성이므로 Element가 아니다.</li>
            <img src="https://user-images.githubusercontent.com/110621233/233234130-f7c251ce-bc03-47c0-968e-20528f97a62e.PNG" alt="Node와Element">
          </ul>
      </ul>

   ><h2>DOM의 조작</h2>
      <ul>
          <h3><li>선택 (Select)</li></h3>
          <ul>
            <li>document.querySelector(selector)</li>
            <ul>
                <li>제공한 선택자와 일치하는 element 한 개를 선택한다.</li>
                <li>제공한 CSS selector를 만족하는 첫 번째 element 객체를 반환하고, 값이 없다면 null을 반환한다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/233234134-37842435-8867-4d60-a157-39936761f164.PNG" alt="querySelector예시">
            </ul>
            <li>document.querySelectorAll(selector)</li>
            <ul>
                <li>제공한 선택자와 일치하는 여러 element를 선택한다.</li>
                <li>매칭 할 하나 이상의 셀렉터를 포함하는 유효한 CSS selector를 인자(문자열)로 받는다.</li>
                <li>제공한 CSS selector를 만족하는 NodeList를 반환한다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/233234133-3aa41d3b-7871-4e28-b02f-e9e6612d715a.PNG" alt="querySelectorAll예시">
            </ul>
          </ul>
          <h3><li>조작 (Manipulation) - 생성, 추가, 삭제 등</li></h3>
          <ul>
            <li>document.createElement(tagName) - 생성</li>
            <ul>
                <li>작성한 tagName의 HTML요소를 생성하여 반환한다.</li>
            </ul>
            <li>HTML.innerText - 입력</li>
              <ul>
                <li>Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)를 표현한다.</li>
                <li>사람이 읽을 수 있는 요소만 남긴다.</li>
                <li>줄 바꿈을 인식하고 숨겨진 내용을 무시하는 등 최종적으로 스타일링이 적용된 모습으로 표현된다.</li>
              </ul>
            <li>Node.appendChild() - 추가</li>
            <ul>
              <li>한 Node를 특정 부모 Node의 자식 NodeList 중 마지막 자식으로 삽입한다.</li>
              <li>한번에 오직 하나의 Node만 추가 할 수 있으며, 추가된 Node객체를 반환한다.</li>
            </ul>
            <li>Node.removeChild() - 삭제</li>
            <ul>
              <li>DOM에서 자식 Node를 제거하고, 제거된 Node를 반환한다.</li>
            </ul>
            <img src="https://user-images.githubusercontent.com/110621233/233234135-d6f1a02c-8ba8-441e-8002-6ec5292b4f3a.png" alt="생성, 입력, 삭제 예시">
            <img src="https://user-images.githubusercontent.com/110621233/233234138-53c5e1d0-aa35-4dfe-90b1-d9fe3b3d8c48.png" alt="생성, 입력, 삭제 예시2">
          </ul>
          <h3><li>속성 조회 및 설정</li></h3>
          <ul>
            <li>Element.getAttribute(attributeName)</li>
            <ul>
              <li>해당 요소의 지정된 값(문자열)을 반환한다.</li>
              <li>인자(attributeName)는 값을 얻고자 하는 속성의 이름이다.</li>
            </ul>
            <li>Element.setAttribute(name, value)</li>
            <ul>
              <li>지정된 요소의 값을 설정한다.</li>
              <li>속성이 이미 존재하면 값을 갱신하고, 존재하지 않으면 지정된 이름과 값으로 새 속성을 추가한다.</li>
            </ul>
            <li>Element.classList, Element.style</li>
            <ul>
              <li>기존 속성은 유지한 채로, 새로운 값을 추가해준다.</li>
              <li>직접적으로 해당 요소의 각 속성들을 제어 할 수 있다.</li>
            </ul>
            <img src="https://user-images.githubusercontent.com/110621233/233234139-0cc3d671-58c0-48c8-af97-f3ba28b598cf.png" alt="속성 조회 및 설정 예시1">
            <img src="https://user-images.githubusercontent.com/110621233/233234143-159cf005-d0db-4a89-8cba-b6543c703c77.png" alt="속성 조회 및 설정 예시2">
            <img src="https://user-images.githubusercontent.com/110621233/233234145-17e2360b-2c20-4ff4-8583-bd3939fb4418.png" alt="속성 조회 및 설정 예시3">
          </ul>
          <h3><li>classList</li></h3>
          <ul>
            <li>DOM요소의 클래스를 조작하는 메서드를 제공한다.</li>
            <li>DOM요소의 클래스를 추가, 제거, 토글 할 수 있다.</li>
            <li>classList의 메서드</li>
            <ul>
              <li>add(className): DOM 요소의 클래스 목록에 className을 추가</li>
              <li>remove(className): DOM 요소의 클래스 목록에서 className을 제거한다.</li>
              <li>toggle(className): DOM 요소의 클래스 목록에서 className을 토글한다. 즉, 클래스 목록에 className이 없으면 추가하고, 있으면 제거한다.</li>
              <li>contains(className): DOM 요소의 클래스 목록에 className이 있는지 확인한다. className이 있다면 true를 반환하고, 없다면 false를 반환한다.</li>
              <img src="https://user-images.githubusercontent.com/110621233/233244974-bb2afb62-2b10-40bc-afcb-c251ab893fa9.png" alt="classList">
            </ul>
          </ul>
          <h3><li>style</li></h3>
          <ul>
            <li> DOM 요소의 인라인 스타일을 조작하는 메서드를 제공한다.</li>
            <li>style 속성을 사용하면 JavaScript 코드에서 HTML 요소의 스타일 속성을 직접 수정할 수 있다.</li>
            <img src="https://user-images.githubusercontent.com/110621233/233248081-914f0d9c-cbc9-4f14-a47f-4731a8ceff40.png" alt="style">
          </ul>
      </ul>


>    <h3>참고</h3>
  <h3>DOM이란? <a href="https://m.blog.naver.com/magnking/220972680805">쉽게 읽는 프로그래밍</a></h3>
 
  <img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

</body>
</html>