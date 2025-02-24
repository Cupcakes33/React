# 작업일지

## 2/24
- 디렉토리 구조 잡기
- 라우터 설정

생각보다 내가 구조적인 부분에 너무 과도하게 고민을 한다는 생각이 들었음<br>
처음에는 분명히 간단하고 빠르게 만들거라고 생각했었던 것 같은데 <br>

디렉토링은 기본 골자는 섹션을 나눈다는 느낌. <br>
Home, Posts, Profile, Common 으로 나누고 page 컴포넌트를 그룹핑해서 관리한다. <br>
그리고 router 에서 <br>

```jsx
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePageComponents as Home } from "../pages/Home";
import { PostsPageComponents as Posts } from "../pages/Posts";
import { ProfilePageComponents as Profile } from "../pages/Profile";
import { CommonPageComponents as Common } from "../pages/Common";

const LoadingFallback = () => <div>Loading...</div>;

export default function DefaultRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home.Main />} />
        <Route path="/posts" element={<Posts.Main />}>
          <Route path="new" element={<Posts.New />} />
          <Route path=":id" element={<Posts.Detail />} />
          <Route path=":id/edit" element={<Posts.Edit />} />
        </Route>
        <Route path="/profile" element={<Profile.Main />} />
        <Route path="*" element={<Common.NotFound />} />
      </Routes>
    </Suspense>
  );
}

```

이런식으로 관리. <br>
장점이라고 한다면 이렇게 관리하면 어떤 그룹에 어떤 페이지가 사용되고, 어떤 명확한 역할을 수행하는지 관리하기가 쉽다. <br>
Lazy Loading 같은 경우에는 사실 번들 크기가 큰 페이지라거나, 사용 빈도가 낮은 페이지에 적용하는 것이 좋다. <br>
위의 프로젝트에서는 사실 요즘도 많이 쓰나? 해서 사용해봤는데 리펙토링 하면서 덜어낼듯. <br>

사실 위 구조의 단점이라고 한다면 보일러 플레이트가 강요된다는 건데, <br>
이런 작은 프로젝트에서는 굳이 저렇게 나눠놓을 필요가 딱히 없다. <br>
그리고, 복잡성이 증가해서 페이지의 역할을 더 명확하게 하고싶다면 <br>
Feature-Sliced Design (FSD) + DDD 기반의 구조가 조금 더 효과적일 것 같다.

```markdown
features/
└── Auth/
    ├── components/       // UI 컴포넌트
    ├── hooks/            // 커스텀 React Hooks
    ├── api/              // API 호출 함수
    ├── lib/              // 유틸리티 함수
    ├── types/            // 타입 정의
    ├── Auth.tsx          // 기능의 메인 컴포넌트
    └── index.ts          // 내보내기 파일
```

이런식으로.