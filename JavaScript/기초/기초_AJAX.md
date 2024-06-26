<!-- @format -->

<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <h2>AJAX</h2>

      <ul>
          <li>Asynchronous JavaScript And XML (비동기식 JavaScript와 XML)</li>
          <li>화면 전체를 새로고침 하지 않아도 서버로 요청을 보내고, 데이터를 받아 화면의 일부분만 업데이트가 가능하게 해준다.</li>
          <li>이러한 '비동기 통신 웹 개발 기술'을 AJAX라고 하며, 비동기 웹 통신을 위한 라이브러리 중 하나가 Axios이다. </li>
          <h3><li>특징</li></h3>
          <ul>
            <li>페이지 전체를 새로고침(reload)을 하지 않고서도 수행되는 '비동기성'</li>
            <li>서버의 응답에 따라 전체 페이지가 아닌 일부분만을 업데이트 할 수 있다.</li>
          </ul>
      </ul>

    <h2>AJAX 비동기 적용하기</h2>
    <p>이전에 Django를 공부하며 만들었던 프로젝트로 실습 할 예정입니다.</p>
      <ul>
          <li>각각의 템플릿마다 scipt 코드를 작성하기 위해 base.html에 block tag 작성</li>
          <h3><li>Follow(팔로우기능)</li></h3>
          <ul>
            <li>follow_views</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473217-374a1600-044d-4ddb-8dc2-0820094adc68.png" alt="follow_views">
            <li>follow_profile_html_form</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473212-47113549-4806-45f8-b8d1-cfe108048eeb.png" alt="follow_html_form">
            <li>follow_profile_html_script</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473213-30645203-5bab-41b9-9931-ba091961b2d1.png alt="follow_html_하단">
            <img src="https://user-images.githubusercontent.com/110621233/234473214-7c4f4040-4e72-4d1f-b1da-246a886d62db.png" alt="follow_html_하단2">
          </ul>
          <h3><li>Like(좋아요기능)</li></h3>
          <ul>
            <li>좋아요 비동기 적용은 팔로우와 동일한 흐름 + forEach()&querySelectorAll() <br>
                index 페이지 각 게시글에 좋아요 버튼이 있기 때문에</li>
            <li>like views</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473222-6d03d41b-c95d-4194-afaa-089008c1fdc5.PNG" alt="like_view">
            <li>like_index_html_form</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473219-ec4bf4bd-ecd0-4fc4-bb58-b3dbc4320a90.PNG" alt="like_index_form">
            <li>like_index_html_script</li>
            <img src="https://user-images.githubusercontent.com/110621233/234473220-73c97fee-5c6c-4f13-9ab2-6c0ec9b44881.PNG" alt="like_index_script">
          </ul>
      </ul>

    <h2>용어설명</h2>
    <ul>
      <h3><li>data-* attributes</li></h3>
      <ul>
        <li>사용자 지정 데이터 특성을 만들어 임의의 데이터를 HTML과 DOM사이에서 교환 할 수 있는 방법</li>
        <li>data-test-value라는 이름의 특성을 지정했다면, JavaScript에서는 element.dataset.testValue로 접근할 수 있다.</li>
        <a href="https://velog.io/@yunsungyang-omc/HTML-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-data-attribute">data-* attributes yunsungyang-omc</a>
        <img src="https://user-images.githubusercontent.com/110621233/234473209-379fa260-8122-4124-80e7-840c2c439fa6.png" alt="data 예시">
        <h3><li>XHR(XMLHttpRequest)</li></h3>
        <ul>
          <li>AJAX 요청을 생성하는 JavaScript API</li>
          <li>XHR의 메서드로 브라우저와 서버 간 네트워크 요청을 전송할 수 있다.</li>
          <li>Axios는 손쉽게 XHR을 보내고 응답 결과를 Promise객체로 반환해주는 라이브러리이다.</li>
        </ul>
      </ul>
    </ul>

    <img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

</body>
</html>
