# This

## This란?

This는 자기참조변수로 현재 실행 중인 함수나 메소드가 속한 객체를 가리키는 특수한 키워드이다.
이러한 this는 JavaScript엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다. 함수 내부에서 arguments 객체를 변수처럼 사용할 수 있는 것처럼 this도 지역변수처럼 사용할 수 있다.
단, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

## This는 언제 결정 되는가

JavaScript에서 this의 값은 함수가 호출될 때 동적으로 결정된다. 즉 this의 값은 함수를 어떻게 호출했느냐에 따라 달라진다.

### 1. 일반 함수 호출

일반 함수 내에서의 this는 전역 객체(window 또는 global)를 가리킨다. 단, strict mode에서는 undefined가 된다.

```js
function myFunction() {
  console.log(this); // 전역 객체(window 또는 global)
}
myFunction();
```

### 2. 메소드 호출

객체의 메소드로 함수가 호출될 때, this는 그 객체를 가리킨다.

```js
const myObj = {
  myMethod: function () {
    console.log(this); // myObj
  },
};
myObject.myMethod();
```

### 3. New 키워드의 생성자 함수 호출

생성자 함수로 객체를 생성할 때, this는 새로 생성된 객체를 가리킨다.

```js
function myClass() {
  console.log(this);
}

const myInstance = New MyClass();
```

### 4. Function.prototype.call 또는 Function.prototype.apply 사용

call 또는 apply 메서드를 사용하여 함수를 호출할 때, 첫 번째 인자로 전달된 값이 this를 대체한다.

```js
function myFunction() {
  console.log(this);
}

const customObject = { custom: "object" };

myFunction.call(customObject); // customObject
```

### 5. 화살표 함수

화살표 함수 내에서의 this는 함수가 생성될 때 상위 스코프의 this를 유지한다.

```js
const myArrowFunction = () => {
  console.log(this); // 상위 스코프의 this
};

myArrowFunction();
```
