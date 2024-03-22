## 핫 리로딩 / Hot Reloading 이란?

> 애플리케이션 개발 시 코드 변경사항을 저장한 후 애플리케이션을 새로고침 없이 실시간으로 반영하는 기능을 뜻한다. 이를 통해 개발자는 개발 중에도 애플리케이션 상태를 유지하면서 UI 변경사항을 빠르게 확인 할 수 있다.

## React에서의 사용 방법

> React에서 핫 리로딩을 사용하려면 일반적으로 'create-react-app'이나 다른 빌드 도구와 함께 'react-hot-loader'라이브러리를 사용한다.

### create-react-app

'create-react-app'으로 생성된 프로젝트는 기본적으로 핫 리로딩을 지원한다. 즉, 추가 설정 없이도 코드를 변경하면 브라우저에 즉시 반영된다.

### Custom Setup with Webpack

만약 Custom Webpack 설정을 사용하는 경우, 'react-hot-loader'를 설치하고 설정해야 한다.

1. 'react-hot-loader'설치 <br>
   npm install --save-dev react-hot-loader
2. Webpack 설정에서 react-hot-loader를 추가<br>

```jsx
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"],
      },
    ],
  },
  // ...
};
```

3. React 애플리케이션의 entry point에 react-hot-loader/patch를 추가

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};
render(App);
// Hot reloading
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
```

이와 같이 설정하면 react 애플리케이션에서 핫 리로딩이 활성화되고, 코드 변경사항을 저장할 때 브라우저가 자동으로 업데이트 된다. 단, 애플리케이션 상태는 유지되지 않으며, UI만 새로고침 없이 업데이트 된다.
