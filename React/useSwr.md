## useSWR이란?

> useSWR은 Stale While Revalidate의 약자로, 데이터를 가져오는 방법 중 하나이다. 이 방법은 캐시(Stale)된 데이터를 우선적으로 사용하면서 fetch 요청(재검증)을 하고, 백그라운드에서 서버로부터 새 데이터를 가져오는 방식을 사용한다. 이렇게 하면 빠른 반응성과 최신 데이터를 동시에 제공할 수 있다.
> useSWR는 Vercel이 만든 React 훅으로, 이 훅을 사용하면 간단하게 데이터를 가져오고 캐시를 사용할 수 있다.

## 주요 기능

> 1. 로컬 캐싱: 이전에 가져온 데이터를 캐시하여 빠르게 로딩할 수 있다.
> 2. 리트라이: 데이터 가져오기를 실패한 경우 자동으로 재시도한다.
> 3. 디바운스 및 도들링: 빈번한 요청을 피하기 위해 요청 간격을 조절한다.
> 4. 포커스 및 네트워크 재연결 감지: 사용자가 창을 다시 포커싱하거나 네트워크 연결이 복원되면 데이터를 새로고침한다.
> 5. 서버사이드 렌더링 지원: SSR(Server Side Rendering)을 지원하여 SEO 친화적인 애플리케이션을 만들 수 있다.

## 사용 예시

> 1.  먼저, 프로젝트에 swr 라이브러리를 추가해야한다.

```jsx
npm install swr
```

> 2.  다음은 useSWR 훅을 사용하는 간단한 예시이다.

```jsx
import useSWR from "swr";
>
function Profile() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/user", fetcher);
>
  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;
>
  // data is available, render the component
  return <div>Hello, {data.name}!</div>;
}
```

위 예시에서 useSWR는 /api/user 엔드포인트에서 데이터를 가져오고, 이를 data 변수에 저장한다. 만약 요청이 실패하면 error 변수가 설정된다. fetcher 함수는 요청을 어떻게 처리할지 정의하는데, 여기서는 기본적인 fetch를 사용했다.

> 이러한 방식으로 useSWR 훅은 데이터를 가져오고 캐싱하는 데 유용하며, UI가 최신 상태를 유지하는 데 도움을 준다.

## mutate와 revalidat

> mutate와 revalidate는 useSWR과 함께 사용되는 함수들로, 데이터의 갱신과 캐시 컨트롤에 사용된다.

### mutate

> mutate는 주로 캐시된 데이터를 임시로 업데이트하는 데 사용된다.
> mutate를 사용하여 로컬 캐시를 즉시 업데이트할 수 있다. 이렇게 하면 사용자에게 빠른 응답을 제공하는데 도움이 된다. 이를 [Optimistic UI](https://www.apollographql.com/docs/react/v2/performance/optimistic-ui/) 업데이트라고도 한다.
> mutate의 세 번째 매개변수를 true로 설정하면(기본값), 캐시 업데이트 후 데이터를 서버에서 다시 가져온다. 만약 이를 false로 설정하면, 캐시만 업데이트되고 서버에는 요청이 가지 않는다.

### revalidate:

> revalidate는 주어진 키에 대한 캐시를 갱신하고 데이터를 서버에서 다시 가져오는 것을 강제합니다.
> 이 함수는 일반적으로 서버와 동기화해야 하는 상태 변경 후에 호출된다.
> 즉, mutate는 캐시를 직접 조작하는데 사용되고, 필요한 경우 서버로부터 데이터를 다시 가져올 수 있다. 반면, revalidate는 명시적으로 서버로부터 데이터를 새로고침하는데 사용된다.

> 예를 들어, 할 일 목록에 새로운 항목을 추가하는 경우 mutate를 사용하여 UI를 즉시 업데이트한 후, 서버에 변경 사항을 전송하고 revalidate를 사용하여 서버에서 최신 데이터를 가져와 캐시를 갱신할 수 있다.

## 참고

> [SWR Github 공식문서](https://github.com/vercel/swr)<br>
> [SWR 기본 개념](https://swr.vercel.app/ko)<br>
> [SWR 상세 설명](https://steadily-worked.tistory.com/563)
