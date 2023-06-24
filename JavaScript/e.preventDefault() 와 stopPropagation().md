## e.preventDefault()

e.preventDefault() 메서드는 이벤트의 기본 동작을 취소한다.<br>
예를 들어, `<a>` 태그는 클릭 시 연결된 URL로 이동하는 기본 동작이 있다. <br>
만약 이 기본 동작을 취소하고 싶다면, e.preventDefault()를 사용할 수 있다.

### 사용 예시1

```Javascript
document.querySelector("a").addEventListener("click", function(e) {
  e.preventDefault(); // 링크 클릭 시 페이지 이동을 막음.
  console.log("Link was clicked!");
});
```

### 사용 예시2

```javascript
document.querySelector("#myForm").addEventListener("submit", function (e) {
  // 기본 동작 취소 (폼 제출 시 페이지 새로고침 막기)
  e.preventDefault();
  console.log("Form was submitted!");
});

document.querySelector("#outside").addEventListener("click", function () {
  console.log("Outside was clicked!");
});
```

위의 예제에서 `<a>` 태그를 클릭해도 페이지 이동이 일어나지 않는다.<br>
대신 콘솔에 "Link was clicked!" 메시지가 출력된다.

## e.stopPropagation()

e.stopPropagation() 메서드는 이벤트의 버블링을 중단시킨다.<br>
이벤트 버블링은 DOM 요소에서 이벤트가 발생했을 때, 그 이벤트가 상위의 DOM 요소들로 전파되는 현상을 말한다.<br>
e.stopPropagation()은 이런 전파를 막아, 이벤트가 부모 요소로 전파되지 않도록 한다.

### 사용 예시

```javascript
document.querySelector("#child").addEventListener("click", function (e) {
  e.stopPropagation(); // 이벤트 버블링을 중단함.
  console.log("Child was clicked!");
});

document.querySelector("#parent").addEventListener("click", function () {
  console.log("Parent was clicked!");
});
```

HTML 구조가 아래와 같다고 가정할 때,<br>

```javascript
<div id="parent">
  <div id="child"></div>
</div>
```

위의 예제에서 #child 요소를 클릭하면 콘솔에는 "Child was clicked!"만 출력된다.<br>
이벤트 버블링이 중단되었기 때문에, #parent 요소의 클릭 이벤트 핸들러는 실행되지 않는다.

## 둘의 차이점

e.preventDefault()는 이벤트의 기본 동작을 취소한다.<br>
예를 들어, 폼 제출, 링크 이동 등과 같은 기본 동작을 막는다.<br>
e.stopPropagation()은 이벤트가 상위 요소로 전파되는 것을 막는다.<br>
즉, 이벤트 버블링을 중단시킵니다.<br>
두 메서드는 서로 다른 목적으로 사용되며, 때로는 같이 사용되기도 한다.<br>
어떤 상황에 어떤 메서드를 사용할지는 해당 상황의 요구사항에 달려있다.
