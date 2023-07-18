# Redux

## Redux란?

> Redux는 JavaScript 애플리케이션의 상태 관리를 위한 예측 가능하고 일관성 있는 중앙 상태 컨테이너이다. 애플리케이션의 상태를 하나의 스토어에 저장하고, 상태 변경을 위한 액션을 디스패치하여 리듀서를 통해 상태를 업데이트한다. 이를 통해 애플리케이션의 상태 변화를 예측 가능하게 만들고, 컴포넌트 간의 상태 공유와 데이터 흐름을 간편하게 처리할 수 있다.

## React에서 Redux를 사용하는 주요 이유

### 1. 상태 관리

> Redux는 중앙 상태 관리 패턴을 제공하여 애플리케이션의 상태를 효율적으로 관리할 수 있다. React는 단방향 데이터 흐름을 가지고 있지만, Redux를 통해 상태를 중앙에서 관리하고 컴포넌트 간의 상태 공유와 데이터 흐름을 좀 더 편리하게 처리할 수 있다.

### 2. 복잡한 애플리케이션 관리

> Redux는 큰 규모의 애플리케이션에서도 일관된 상태 관리를 제공한다. 상태의 변경 로직이 중앙에서 관리되기 때문에 여러 컴포넌트 간의 데이터 동기화 문제를 해결하고, 상태의 변화를 예측 가능하게 만들어 복잡성을 감소시킨다.

### 3. 시간 여행 및 디버깅

> Redux는 액션과 상태의 변경 이력을 저장하고 추적할 수 있어서 시간 여행(debugging)을 지원한다. 이를 통해 애플리케이션의 이전 상태로 돌아가거나 특정 시점의 상태를 확인하여 버그를 해결하는 데 도움을 준다.

## Redux 장점

### 1. 예측 가능한 상태 관리

> 단방향 데이터 흐름과 상태 변경 로직의 일관성을 통해 상태 관리를 예측 가능하게 만든다.
> 중앙 상태 저장소 중앙의 스토어를 통해 애플리케이션의 전체 상태를 관리하고 공유할 수 있다.

### 2. 컴포넌트 분리와 재사용성

> Redux는 상태 로직과 컴포넌트를 분리시켜 재사용성을 높인다.

### 3. 개발자 도구와 시간 여행

> Redux는 개발자 도구와 시간 여행(debugging) 기능을 제공하여 애플리케이션 개발과 디버깅을 편리하게 도와준다.

## Redux 주요 개념

### 1. 액션 (Actions)

> 상태 변경을 나타내는 객체로, 타입과 필요한 데이터를 포함한다. 예를 들어, 로그인 액션은 타입이 "LOGIN"이고 사용자 정보를 포함할 수 있다.

### 2. 리듀서 (Reducers)

> 액션에 따라 상태를 변경하는 순수한 함수이다. 이전 상태와 액션을 받아 새로운 상태를 반환한다. 예를 들어, 로그인 액션이 들어오면 이전 상태에서 로그인 상태를 변경하는 리듀서 함수가 호출된다.

### 3. 스토어 (Store)

> 애플리케이션의 상태를 저장하는 객체이다. 스토어는 액션과 리듀서를 연결하고 상태를 변경한다. 스토어를 생성할 때는 createStore 함수를 사용하며, 스토어에는 현재 상태와 상태 변경을 위한 메서드가 포함된다.

### 4. 디스패치 (Dispatch)

> 액션을 스토어에 전달하는 메서드이다. 디스패치를 통해 액션을 발생시키면 스토어에서 해당 액션을 리듀서에 전달하여 상태를 업데이트한다.

## Redux 사용방법

### 1. 액션 정의

> 액션은 상태 변경을 나타내는 객체이다. 일반적으로 타입과 필요한 데이터를 포함한다.

### 2. 리듀서 구현

> 리듀서는 액션에 따라 상태를 변경하는 순수한 함수이다. 이전 상태와 액션을 받아 새로운 상태를 반환한다.

### 3. 스토어 생성

> createStore 함수를 사용하여 스토어를 생성하고, 리듀서를 등록한다.

### 4. 컴포넌트와 연결

> react-redux 라이브러리를 사용하여 컴포넌트와 스토어를 연결한다. connect 함수를 사용하여 컴포넌트에 상태와 액션 디스패치를 전달한다.

## 간단한 예시 코드

```javascript
// actions.js
export const increment = () => ({
  type: "INCREMENT",
});

// reducers.js
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// store.js
import { createStore } from "redux";
import { counterReducer } from "./reducers";

const store = createStore(counterReducer);

export default store;
```

> 위의 코드에서 actions.js에서는 increment 액션을 정의하고, reducers.js에서는 counterReducer를 구현한다. store.js에서는 createStore 함수를 사용하여 스토어를 생성하고, 리듀서를 등록한다.
>
> 컴포넌트에서 스토어와 연결하기 위해 react-redux 라이브러리의 connect 함수를 사용할 수 있다. 이를 통해 컴포넌트에 상태와 액션 디스패치를 전달하여 상태를 읽고 변경할 수 있다.

```javascript
// CounterComponent.js
import React from "react";
import { connect } from "react-redux";
import { increment } from "./actions";

const CounterComponent = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
```

> 위의 예시 코드에서 CounterComponent는 Redux 스토어와 연결되어 상태를 읽고 increment 액션을 디스패치할 수 있다. mapStateToProps 함수를 사용하여 상태를 컴포넌트의 속성에 매핑하고, mapDispatchToProps 객체를 사용하여 액션 디스패치 함수를 컴포넌트의 속성에 매핑한다. 이렇게 하면 컴포넌트에서 count와 increment를 사용할 수 있다.

이와 같이 Redux를 사용하면 애플리케이션의 상태 관리를 효과적으로 할 수 있으며, 컴포넌트 간의 데이터 흐름을 관리하는 데 도움을 준다.
