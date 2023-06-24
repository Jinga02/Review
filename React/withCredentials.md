## withCredentials

withCredentials 옵션은 단어의 의미에서 알 수 있듯이, 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목이다.
<br>
React 애플리케이션에서 withCredentials를 사용하는 주된 목적은, 다른 도메인에 있는 백엔드 서버와 통신할 때 쿠키와 인증 정보를 함께 전송하는 것이다. 이를 통해 사용자 세션을 유지하고 보안이 필요한 요청을 처리할 수 있다.
<br>
React 자체에는 withCredentials라는 기능이 내장되어 있지 않다. 하지만 React에서 API를 호출할 때 axios나 fetch와 같은 라이브러리를 사용하는데, 이러한 라이브러리를 통해 withCredentials 옵션을 설정할 수 있다.

## 언제 사용하는가

1. 세션 기반 인증: 일반적으로 쿠키를 사용하여 사용자 세션을 관리하는 경우, 클라이언트와 서버 간에 쿠키를 주고받아야 한다. 이 때, withCredentials를 사용하여 쿠키를 전송하면 사용자의 로그인 상태를 유지할 수 있다.

2. 크로스 도메인 요청: 클라이언트와 서버가 다른 도메인에 위치하는 경우 (CORS 상황), 쿠키와 인증 정보를 함께 전송해야 하는 경우에 withCredentials를 사용한다. 이를 통해 다른 도메인의 서버와 안전하게 통신할 수 있다.

3. 보안 요청: 특정 API 요청이 인증이 필요한 경우, 쿠키에 저장된 토큰 또는 세션 정보를 사용하여 인증을 수행할 수 있다. 이 때 withCredentials를 사용하여 요청에 쿠키를 포함시킬 수 있다.

4. 사용자 개인화: 사용자별로 개인화된 콘텐츠를 제공하는 웹 사이트의 경우, 서버에서 사용자를 식별할 수 있도록 쿠키를 전송할 필요가 있다. 이 때 withCredentials를 사용하여 사용자 정보를 포함한 쿠키를 전송할 수 있다.

withCredentials를 사용할 때는 서버 설정도 중요하다. 서버 측에서 적절한 CORS 정책을 설정하고 쿠키를 전송하는 경우에만 적절한 응답 헤더를 설정해야한다. 또한, 쿠키와 인증 정보를 포함하여 전송하는 것은 보안 측면에서 민감할 수 있으므로, HTTPS와 같은 안전한 채널을 사용하는 것이 좋다.

## Axios 사용 예시

React에서 axios 라이브러리를 사용하여 withCredentials를 설정하는 방법은 다음과 같다.

```jsx
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://example.com/api/data", {
      withCredentials: true, // 이 옵션을 설정하여 쿠키와 인증 정보를 함께 보냄
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const MyComponent = () => {
  React.useEffect(() => {
    fetchData();
  }, []);

  return <div>{/* 컴포넌트 렌더링 내용 */}</div>;
};

export default MyComponent;
```

## Fetch 사용 예시

fetch 함수를 사용하여 withCredentials와 유사한 기능을 수행하는 방법은 credentials 옵션을 사용하는 것이다.

````jsx
const fetchData = async () => {
  try {
    const response = await fetch("https://example.com/api/data", {
      credentials: "include", // 쿠키와 인증 정보를 함께 보냄
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const MyComponent = () => {
  React.useEffect(() => {
    fetchData();
  }, []);
## withCredentials

>withCredentials 옵션은 단어의 의미에서 알 수 있듯이, 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목이다.
<br>
React 애플리케이션에서 withCredentials를 사용하는 주된 목적은, 다른 도메인에 있는 백엔드 서버와 통신할 때 쿠키와 인증 정보를 함께 전송하는 것이다. 이를 통해 사용자 세션을 유지하고 보안이 필요한 요청을 처리할 수 있다.
<br>
React 자체에는 withCredentials라는 기능이 내장되어 있지 않다. 하지만 React에서 API를 호출할 때 axios나 fetch와 같은 라이브러리를 사용하는데, 이러한 라이브러리를 통해 withCredentials 옵션을 설정할 수 있다.

## 언제 사용하는가

### 1. 세션 기반 인증
>일반적으로 쿠키를 사용하여 사용자 세션을 관리하는 경우, 클라이언트와 서버 간에 쿠키를 주고받아야 한다. 이 때, withCredentials를 사용하여 쿠키를 전송하면 사용자의 로그인 상태를 유지할 수 있다.

### 2. 크로스 도메인 요청
>클라이언트와 서버가 다른 도메인에 위치하는 경우 (CORS 상황), 쿠키와 인증 정보를 함께 전송해야 하는 경우에 withCredentials를 사용한다. 이를 통해 다른 도메인의 서버와 안전하게 통신할 수 있다.

### 3. 보안 요청
>특정 API 요청이 인증이 필요한 경우, 쿠키에 저장된 토큰 또는 세션 정보를 사용하여 인증을 수행할 수 있다. 이 때 withCredentials를 사용하여 요청에 쿠키를 포함시킬 수 있다.

### 4. 사용자 개인화
>사용자별로 개인화된 콘텐츠를 제공하는 웹 사이트의 경우, 서버에서 사용자를 식별할 수 있도록 쿠키를 전송할 필요가 있다. 이 때 withCredentials를 사용하여 사용자 정보를 포함한 쿠키를 전송할 수 있다.

>withCredentials를 사용할 때는 서버 설정도 중요하다. 서버 측에서 적절한 CORS 정책을 설정하고 쿠키를 전송하는 경우에만 적절한 응답 헤더를 설정해야한다. 또한, 쿠키와 인증 정보를 포함하여 전송하는 것은 보안 측면에서 민감할 수 있으므로, HTTPS와 같은 안전한 채널을 사용하는 것이 좋다.

## Axios 사용 예시

>React에서 axios 라이브러리를 사용하여 withCredentials를 설정하는 방법은 다음과 같다.
>
```jsx
import axios from "axios";
>
const fetchData = async () => {
  try {
    const response = await axios.get("https://example.com/api/data", {
      withCredentials: true, // 이 옵션을 설정하여 쿠키와 인증 정보를 함께 보냄
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
>
const MyComponent = () => {
  React.useEffect(() => {
    fetchData();
  }, []);
>
  return <div>{/* 컴포넌트 렌더링 내용 */}</div>;
};
>
export default MyComponent;
````

>

## Fetch 사용 예시

> fetch 함수를 사용하여 withCredentials와 유사한 기능을 수행하는 방법은 credentials 옵션을 사용하는 것이다.

```jsx
const fetchData = async () => {
  try {
    const response = await fetch("https://example.com/api/data", {
      credentials: "include", // 쿠키와 인증 정보를 함께 보냄
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
>
const MyComponent = () => {
  React.useEffect(() => {
    fetchData();
  }, []);
>
  return <div>{/* 컴포넌트 렌더링 내용 */}</div>;
};
>
export default MyComponent;
```

> withCredentials 또는 credentials 옵션을 사용할 때는 서버 측에서 적절한 CORS 설정을 해야하며, 보안에 주의해야 한다는 점을 기억해야 한다.

## 참고

> junglast님(https://junglast.com/blog/http-ajax-withcredential)

return <div>{/_ 컴포넌트 렌더링 내용 _/}</div>;
};

export default MyComponent;

```

withCredentials 또는 credentials 옵션을 사용할 때는 서버 측에서 적절한 CORS 설정을 해야하며, 보안에 주의해야 한다는 점을 기억해야 한다.

## 참고

junglast님(https://junglast.com/blog/http-ajax-withcredential)
```
