<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

> # JSON이란?

## 개념

JSON은 JavaScript Object Notation의 약자로, 데이터를 저장하고 전송하기 위한 일반적인 형식이다. <br>
속성-값 쌍(attribute–value pairs), 배열 자료형(array data types) 또는 기타 모든 시리얼화 가능한 값(serializable value) 또는 키-값 쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. <br>

## 기본 구조

JSON은 기본적으로 키-값 쌍으로 이루어진 객체 형태를 가지며, 배열, 숫자, 문자열, 불리언 값, null 등 다양한 데이터 유형을 지원한다.

```jsx
{
 "name": "John",
  "age": 30,
  "city": "New York"
}
```

위의 JSON은 이름(name), 나이(age), 도시(city)의 키-값 쌍을 가지고 있다.

> # react에서의 JSON
>
> react에서 JSON 데이터를 다룰 때는 주로 JSON을 API를 통해 받아오거나 전송하는 경우가 많다.
> react는 JavaScript 기반의 라이브러리이므로, JSON 데이터를 JavaScript 객체로 변환하여 다루어야 한다.
> <img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

# JSON이란?

## 개념

> JSON은 JavaScript Object Notation의 약자로, 데이터를 저장하고 전송하기 위한 일반적인 형식이다. <br>
> 속성-값 쌍(attribute–value pairs), 배열 자료형(array data types) 또는 기타 모든 시리얼화 가능한 값(serializable value) 또는 키-값 쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. <br>

## 기본 구조

> JSON은 기본적으로 키-값 쌍으로 이루어진 객체 형태를 가지며, 배열, 숫자, 문자열, 불리언 값, null 등 다양한 데이터 유형을 지원한다.

```jsx
{
 "name": "John",
  "age": 30,
  "city": "New York"
}
```

> 위의 JSON은 이름(name), 나이(age), 도시(city)의 키-값 쌍을 가지고 있다.
>
> # react에서의 JSON
>
> react에서 JSON 데이터를 다룰 때는 주로 JSON을 API를 통해 받아오거나 전송하는 경우가 많다.
> react는 JavaScript 기반의 라이브러리이므로, JSON 데이터를 JavaScript 객체로 변환하여 다루어야 한다.

## JSON 파싱

> JSON.parse()를 사용하여 JSON 문자열을 JavaScript 객체로 변환한다.
> 이를 통해 JSON 데이터를 JavaScript에서 다룰 수 있게 된다.

```jsx
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const data = JSON.parse(jsonString);
console.log(data.name); // 출력: John</pre>
```

> fetch() 또는 axios와 같은 라이브러리로 API를 호출하고 응답 데이터를 받아온 뒤, <br>
> JSON.parse()를 사용하여 응답 데이터를 JavaScript 객체로 변환한다.

```jsx
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // JSON.parse()를 사용하여 data를 JavaScript 객체로 변환
    const parsedData = JSON.parse(data);
    // 변환된 객체를 사용하여 React 컴포넌트의 상태로 저장하거나 화면에 표시
    setState(parsedData);
  });
```

## JSON 직렬화

> JSON.stringify()를 사용하여 JavaScript 객체를 JSON 형식의 문자열로 변환한다. <br>
> 이를 통해 JavaScript 객체를 JSON 데이터로 변환할 수 있다.

```jsx
const data = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(data);
console.log(jsonString); // 출력: {"name":"John","age":30,"city":"New York"}
```

> 로컬 스토리지에 데이터를 저장할 때는 JSON.stringify()를 사용하여 JavaScript 객체를 JSON 문자열로 변환한 뒤 저장한다.

```jsx
const data = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(data);
localStorage.setItem("userData", jsonString);
```

## 정리

> React에서 API와 통신할 때는 주로 fetch() 또는 axios와 같은 HTTP 클라이언트 라이브러리를 사용한다.
> 이러한 라이브러리를 통해 API로부터 데이터를 받아오면, 일반적으로 JSON 형식의 응답 데이터를 다루게 된다.
> 받아온 JSON 응답 데이터는 JSON.parse()를 사용하여 JavaScript 객체로 변환하고, 필요한 데이터를 추출하여 React 컴포넌트에서 사용할 수 있다. <br>
> 또한, React에서는 JSON 데이터를 상태(state)로 관리하거나 프롭스(props)로 전달하여 컴포넌트 간에 데이터를 주고받을 수 있다. <br>
> JSON 데이터를 컴포넌트의 상태로 저장하면 해당 데이터를 화면에 표시하거나 조작할 수 있습니다.
> 이렇게 JSON을 다루는 것은 React 뿐만 아니라 JavaScript 전반적으로 사용되는 기술이므로,
> JavaScript의 JSON 관련 메서드인 JSON.parse()와 JSON.stringify()를 잘 숙지하고 활용하는 것이 중요하다.

<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>

## JSON 파싱

JSON.parse()를 사용하여 JSON 문자열을 JavaScript 객체로 변환한다.
이를 통해 JSON 데이터를 JavaScript에서 다룰 수 있게 된다.

```jsx
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const data = JSON.parse(jsonString);
console.log(data.name); // 출력: John</pre>
```

fetch() 또는 axios와 같은 라이브러리로 API를 호출하고 응답 데이터를 받아온 뒤, <br>
JSON.parse()를 사용하여 응답 데이터를 JavaScript 객체로 변환한다.

```jsx
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // JSON.parse()를 사용하여 data를 JavaScript 객체로 변환
    const parsedData = JSON.parse(data);
    // 변환된 객체를 사용하여 React 컴포넌트의 상태로 저장하거나 화면에 표시
    setState(parsedData);
  });
```

## JSON 직렬화

JSON.stringify()를 사용하여 JavaScript 객체를 JSON 형식의 문자열로 변환한다. <br>
이를 통해 JavaScript 객체를 JSON 데이터로 변환할 수 있다.

```jsx
const data = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(data);
console.log(jsonString); // 출력: {"name":"John","age":30,"city":"New York"}
```

로컬 스토리지에 데이터를 저장할 때는 JSON.stringify()를 사용하여 JavaScript 객체를 JSON 문자열로 변환한 뒤 저장한다.

```jsx
const data = {
  name: "John",
  age: 30,
  city: "New York",
};
const jsonString = JSON.stringify(data);
localStorage.setItem("userData", jsonString);
```

> # 정리
>
> React에서 API와 통신할 때는 주로 fetch() 또는 axios와 같은 HTTP 클라이언트 라이브러리를 사용한다.
> 이러한 라이브러리를 통해 API로부터 데이터를 받아오면, 일반적으로 JSON 형식의 응답 데이터를 다루게 된다.
> 받아온 JSON 응답 데이터는 JSON.parse()를 사용하여 JavaScript 객체로 변환하고, 필요한 데이터를 추출하여 React 컴포넌트에서 사용할 수 있다. <br>
> 또한, React에서는 JSON 데이터를 상태(state)로 관리하거나 프롭스(props)로 전달하여 컴포넌트 간에 데이터를 주고받을 수 있다. <br>
> JSON 데이터를 컴포넌트의 상태로 저장하면 해당 데이터를 화면에 표시하거나 조작할 수 있습니다.
> 이렇게 JSON을 다루는 것은 React 뿐만 아니라 JavaScript 전반적으로 사용되는 기술이므로,
> JavaScript의 JSON 관련 메서드인 JSON.parse()와 JSON.stringify()를 잘 숙지하고 활용하는 것이 중요하다.

<img src="https://user-images.githubusercontent.com/110621233/231062359-1b7d42fd-45a2-4605-8034-c342d05d5a9d.png"></img>
