## Webpack DevServer Proxy

> Webpack DevServer Proxy은 Webpack의 DevServer에서 제공하는 기능으로, API 요청과 같은 HTTP 요청을 다른 도메인이나 포트로 전달하는 역할을 한다. 이 기능은 주로 개발 환경에서 CORS(Cross-Origin Resource Sharing) 문제를 해결하거나, 특정 엔드포인트에 대해 다른 엔드포인트로 요청을 리디렉션하는 데 사용된다.<br>

## React에서의 사용 방법

### create-react-app을 사용하는 경우

> 1. 프로젝트의 루트 디렉토리에 'setupProxy.js' 파일 생성
> 2. http-proxy-middleware를 사용하여 프록시 설정을 정의(이 모듈은 create-react-app v2.0 이상에서 자동으로 설치된다.)
> 3. setupProxy.js 파일에 프록시 설정을 추가.

```jsx
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api", // API 요청을 감지하는 URL 패턴
    createProxyMiddleware({
      target: "http://localhost:5000", // 프록시할 대상 서버 (예: 백엔드 서버)
      changeOrigin: true,
    }),
  );
};
```

위 예제는 /api로 시작하는 모든 요청을 http://localhost:5000에 있는 서버로 프록시한다.
<br>

### 직접 Webpack을 사용하는 경우:

> 1.  webpack.config.js 파일을 열고 devServer 속성에 프록시 설정을 추가.

```jsx
module.exports = {
  // ... 기타 Webpack 설정 ...
  devServer: {
    // ... 기타 DevServer 설정 ...
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
};
```

위 예제도 /api로 시작하는 모든 요청을 http://localhost:5000에 있는 서버로 프록시한다.

## 주의 사항

> Webpack DevServer Proxy는 개발 환경에서만 사용되며, 프로덕션 빌드에는 영향을 미치지 않는다. 프로덕션 환경에서는 별도의 프록시 서버나 리버스 프록시 설정이 필요할 수 있다.

## 참고

> CORS 와 Webpack DevServer Proxy
> (https://react.vlpt.us/redux-middleware/09-cors-and-proxy.html)
