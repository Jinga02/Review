<!-- @format -->

<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

# JavaScript

## 정의

- 웹 페이지에 이벤트 발생 시 어떻게 작동하는지 디자인/프로그래밍 등 웹 페이지 동작을 제어.
- 클라이언트 측 웹(브라우저)에서 실행되며, 웹의 동작을 구현하는 객체(object)기반의 스크립트 언어이다.
- 쉽게 말해, HTML은 자동차의 뼈대, CSS는 외관, JavaScript는 자동차의 동력원인 엔진이라고 할 수 있다.

## 특징

- 객체 기반의 스크립트 언어이다.
- 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어이다.
- 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현할 수 있다.

## 실행 환경 구성

- HTML 파일에 포함시키기
- 외부 JavaScript 파일 사용하기
- Web Browser에서 바로 입력하기
- Web Browser로 실행하기
  1. HTML 파일에 직접 JavaScript 코드를 작성 후 웹 브라우저로 파일 열기
     ![HTML파일에 직접 작성](https://user-images.githubusercontent.com/110621233/232657091-38489da5-a62d-465f-86db-aea742744fdb.png)
  2. Chrome의 개발자 도구 - Console 탭에서 결과 확인 가능
     ![HTML파일에 직접 작성 결과](https://user-images.githubusercontent.com/110621233/232657088-45a1b8e2-f0c2-480f-bc70-1233cfe818db.png)
  3. .js 확장자를 가진 파일에 JavaScript를 작성하고, 해당 파일을 HTML에 포함 가능
     ![JavaScript파일작성](https://user-images.githubusercontent.com/110621233/232657096-02400f94-cf63-4c9b-821d-7caacff4b296.png)
  4. 결과 확인
     ![javascript결과확인](https://user-images.githubusercontent.com/110621233/232657094-422cf68c-ad6d-4fc8-8229-ca06439412d1.png)
- 특별하게 웹 브라우저에서 바로 실행할 수 있는 JavaScript문법들을 Vanilla JavaScript라고 부른다.

   <h2>기초문법</h2>
    <ul>
        <h3><li>식별자</li></h3>
        <ul>
            <li>식별자(identifier)는 변수를 구분할 수 있는 변수명을 뜻한다.</li>
            <li>반드시 문자, 달러($) 또는 밑줄(_)로 시작.</li>
            <li>대소문자를 구분하며, 클래스명 외에는 모두 소문자로 시작.</li>
            <li>예약어는 사용이 불가능 하다.  EX) for, if, function...</li>
            <li>카멜 케이스(camelCase)</li>
            <ul>
                <li>변수, 객체, 함수에 사용된다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657136-02748f20-83ac-4a82-9b31-b1ec3bd915e1.png" alt="카멜케이스">
            </ul>
            <li>파스칼 케이스(PascalCase)</li>
            <ul>
                <li>클래스, 생성자에 사용된다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657138-62a6d15f-3864-46cd-9860-49ce98b8f220.png" alt="파스칼 케이스">
            </ul>
            <li>대문자 스네이크 케이스(SNAKE_CASE)</li>
            <ul>
                <li>상수(constants)에 사용된다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657113-7fdd94bf-463a-4d21-8054-8daf26708df7.png" alt="대문자스네이크케이스">
            </ul>
        </ul>
        <h3><li>변수 선언 키워드</li></h3>
        <ul>
            <h4><li>let</li></h4>
            <ul>
                <li>블록 스코프 지역 변수를 선언(추가로 동시에 값을 초기화)</li>
                <li>재할당은 가능하나 재선언은 불가능하다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657098-532e001e-0e25-438d-b17a-b9f106cf44a6.png" alt="let">           
            </ul>
            <h4><li>const</li></h4>
            <ul>
                <li>블록 스코프 읽기 전용 상수를 선언(추가로 동시에 값을 초기화(반드시 초기값 설정))</li>
                <li>재할당과 재선언 모두 불가능하다</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657080-23e59c70-1f47-4e0d-9f5b-9611cd813e4f.png" alt="const">
            </ul>
            <h4><li>var</li></h4>
            <ul>
                <li>변수를 선언(추가로 동시에 값을 초기화)</li>
                <li>재할당과 재선언 모두 가능하다.</li>
                <li>"호이스팅"되는 특성으로 인해 예기치 못한 문제가 발생할 수 있기 떄문에, <br>
                    var대신 const와 let을 사용하는것을 권장한다.</li>
                <li>함수 스코프(function scope)를 가진다.</li>
                <li>변수 선언시 var, const, let 키워드 중 하나를 사용하지 않으면 var로 선언된다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657100-98df9921-690d-451b-8228-22c5c5090ea8.png" alt="var">
            </ul>
        </ul>        
        <h2>데이터 타입</h2>
        <ul>
            <h3><li>원시 타입</li></h3>
            <ol>
                <li>Number - 정수 도는 실수형 숫자를 표현하는 자료형</li>
                <li>String - 문자열을 표현하는 자료형</li>
                <ul>
                    <li>Template Literal</li>
                    <li>내장된 표현식을 허용하는 문자열 작성 방식</li>
                    <li>Backtick(``)을 이용하며, 변수를 문자열 안에 바로 연결 할 수 있다.</li>
                    <li>EX) const age = 10 / const message = '홍길동은 ${age}살 입니다.</li>
                </ul>
                <li>null - 값이 없을을 나타낸다.</li>
                <li>undefined -  값이 할당되지 않은 변수를 나타낸다.</li>
                <li>Boolean - 참과 거짓을 표현하는 자료형</li>
            </ol>
            <h3><li>참조 타입</li></h3>
            <ol>
                <h4><li>Object - 이름과 값을 가진 속성(property)들의 집합으로 이루어진 자료구조</li></h4>
                <ul>
                    <li>객체는 속성(property)들의 집합이며, 중괄호 내부에 key와 value의 쌍으로 표현</li>
                    <li>key</li>
                    <ul>
                        <li>문자열 타입만 가능</li>
                        <li>key 이름에 띄어쓰기 등의 구분자가 있으면 따옴표로 묶어서 표현</li>
                    </ul>
                    <li>value - 모든 타입(함수포함) 가능</li>
                    <li>객체 요소 접근</li>
                    <ul>
                        <li>점., 또는 대괄호[] 가능</li>
                        <li>key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능</li>
                    </ul>
                    <img src="https://user-images.githubusercontent.com/110621233/232657109-93de076a-c94a-4f29-b9c5-42c86ceff9a0.png" alt="객체 예시">
                    <img src="https://user-images.githubusercontent.com/110621233/232657105-82351d9e-ad4f-438a-8849-12e3fafbc507.png" alt="객체 결과">
                </ul>
                <h4><li>Array - 여러 개의 값을 순서대로 저장하는 자료구조</li></h4>
                <ul>
                    <li>키와 속성들을 담고 있는 참조 타입의 객체</li>
                    <li>순서를 보장하는 특징이 있다.</li>
                    <li>주로 대괄호[]를 이용하여 생성하고, 0을 포함한 양의 정수 인덱스로 특정 값에 접근이 가능하다.</li>
                    <img src="https://user-images.githubusercontent.com/110621233/232657122-cc37ff9d-17e7-4ccb-a686-f81315b4fab1.png" alt="배열 예시">
                    <img src="https://user-images.githubusercontent.com/110621233/232657120-f657cb20-567b-4b69-984a-4843325ae571.png" alt="배열 결과">
                </ul>
                <h4><li>function - function 키워드를 통해 생성하며, 호출 시 실행 될 코드를 정의</li></h4>
                <ul>
                    <li>함수 선언식(function declaration)</li>
                    <img src="https://user-images.githubusercontent.com/110621233/232657073-2e1cda9a-67d2-4ed8-8ab6-fb1524957ea4.png" alt="함수선언식">
                    <li>함수 표현식(function expression)</li>
                    <ul>
                        <li>표현식 내에서 함수를 정의하는 방식</li>
                        <li>함수 표현식은 함수의 이름을 생략한 익명 함수로 정의가 가능하다.</li>
                    </ul>
                    <img src="https://user-images.githubusercontent.com/110621233/232657077-465465d5-1e7c-45d6-93fe-4de5d97def8e.png" alt="함수 표현식">
                </ul>
            </ol>
        </ul>        
        <h2>연산자</h2>
        <ul>
            <h3><li>할당 연산자</li></h3>
            <ul>
                <li>오른쪽에 있는 피연산자의 평가 결과를 왼쪽 피연산자에 할당하는 연산자</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657140-53041b14-3c41-457b-a6c5-e17cb998a98c.png" alt="할당 연산자">
            </ul>
            <h3><li>비교 연산자</li></h3>
            <ul>
                <li>피연산자들(숫자, 문자 Boolean등)을 비교하고 결과값을 boolean으로 반환하는 연산자</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657124-b4300efa-2e69-4dbf-809b-df842ef212ff.png" alt="비교 연산자">
            </ul>
            <h3><li>동등 연산자(==)</li></h3>
            <ul>
                <li>두 피연산자가 <b>같은 값</b>으로 평가되는지 비교 후 boolean 값을 반환한다. </li>
                <li>비교할 때 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.</li>
                <li>예상치 못한 결과가 발생할 수 있으므로 특별한 경우를 제외하고 사용하지 않는다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657115-1bf814f0-8d5b-4482-a0d7-0bf2578578da.png" alt="동등연산자">
            </ul>
            <h3><li>일치 연산자(===)</li></h3>
            <ul>
                <li>두 피연산자의 값과 타입이 모두 같은 경우 true를 반환한다.</li>
                <li>같은 객체를 가리키거나, 같은 타입이면서 같은 값인지를 비교한다.</li>
                <li>동등 연산자보다 좀 더 엄격한 비교가 이루어지며, 암묵적 타입 변환이 일어나지 않는다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657134-0cc49069-28b7-4328-b8ef-81d79ba9190e.png" alt="일치 연산자">
            </ul>            
            <h3><li>논리 연산자</li></h3>
            <ul>
                <li>세 가지 논리 연산자로 구성된다</li>
                <li>and 연산은 %%, or 연산은 ||, not 연산은 !</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657112-d9b63779-272b-4037-86e6-5c9ec8e2e6e7.png" alt="논리 연산자">
            </ul>
            <h3><li>삼항 연산자</li></h3>
            <ul>
                <li>3개의 피연산자를 사용하여 조건에 따라 값을 반환하는 연산자</li>
                <li>가장 앞의 조건식이 참이면 :(콜론) 앞의 값이 반환되며, <br>
                    그 반대일 경우 : 뒤의 값이 반환되는 연산자이다.</li>
                <li> 삼항 연산자의 결과 값이기 때문에 변수에 할당이 가능하다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657128-17f60dc5-ad56-4f43-9ef0-e80e40c4e5e9.png" alt="삼항 연산자">
            </ul>
            <h3><li>스프레드 연산자</li></h3>
            <ul>
                <li>배열이나 객체를 전개하여 각 요소를 개별적인 값으로 분리하는 연산자</li>
                <li>주로 함수 호출 시 매개변수로 배열이나 객체를 전달할 대 사용</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657132-4906bdb7-4945-4fdc-9f6d-7b0170f62871.png" alt="스프레드 연산자">
            </ul>
        </ul>
      
   >  <h2>조건문</h2>
        <ul>
            <h3><li>if statement</li></h3>
            <ul>
                <li>if, else if, else</li>
                <li>조건은 소괄호(condition)안에 작성</li>
                <li>실행 할 코드는 중괄호 {}안에 작성</li>
                <li>블록 스코프 생성</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657092-d4b0fd23-8cfa-4173-98ad-9809b430d5b9.png" alt="if 조건문">
            </ul>
        </ul>
        <h2>반복문</h2>
        <ul>
            <h3><li>while</li></h3>
            <ul>
                <li>조건문이 참이기만 하면 문장을 계속해서 수행한다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657102-af37bec3-ff97-4255-933d-a2b7b2e53fb6.png" alt="반복문 while ">
            </ul>
            <h3><li>for</li></h3>
            <ul>
                <li>특정한 조건이 거짓으로 판별될 때 까지 반복</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657086-2f365d1f-7f3c-40b4-871b-4e26968ff5e1.png" alt="반복분 for">
            </ul>
            <h3><li>for...in</li></h3>
            <ul>
                <li>객체(objecs)의 속성을 순회할 때 사용한다.</li>
                <li>속성 이름을 통해 반복한다.</li>
                <li>배열도 순회 가능하지만 인덱스 순으로 순회한다는 보장이 없으므로 권장하지는 않는다.</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657081-0f924122-3297-4e4b-bac0-b4b705a2e33d.png" alt="반복분 for...in">
            </ul>
            <h3><li>for...of</li></h3>
            <ul>
                <li>반복 가능한 객체를 순회할 떄 사용한다.</li>
                <li>속성 값을 통해 반복한다.</li>
                <li>반복 가능한 객체의 종류 : Array, Set, String</li>
                <img src="https://user-images.githubusercontent.com/110621233/232657083-385d1e66-13be-4263-b02f-31e2ea3ec868.png" alt="for...of">
            </ul>
        </ul>
    </ul>

  <p><br>
  </p>

  > <h3>참고</h3>
  > JavaScript <a href="http://www.tcpschool.com/javascript/intro">TCPschool</a> <br>
  > 호이스팅이란? <a href="https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/">HANAMON</a>
  > <br>
  > Javascript문법연습 <a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1">w3schools</a>
  > <br>
  > JavaScript알고리즘연습<a href="https://paullab.co.kr/codefestival.html">paullab</a>

  <img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

</body>
</html>
