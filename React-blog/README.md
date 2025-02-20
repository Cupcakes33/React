## React Blog

**목적:**
- React CPR
- React 복습하면서 간단하게 Firebase 사용해보기

<br>

**만들 거:**
- 간단한 CRUD 블로그
- 텍스트 기반 메모장(위지윅 에디터를 사용할수도?) or 이미지 갤러리 생각 중

<br>

**DB로 Firebase를 사용하는 이유:**
- 목적 자체가 React CPR 이기도 하고 되게 간단하게 만들거라서.

<br>

**기술스택**:
- **React**
- **TypeScript**
- **Vite**
- **Firebase**
    - Firebase Authentication
    - Firestore
- 빌드는 Vercel 을 생각하고 있는데 Firebase 배포를 해볼수도 있음.

<br>

**구조:**

```
src/
├── components/
├── context/
├── hooks/
├── pages/
├── utils/
├── App.tsx
└── index.tsx
```

**이유**:
- 정말 말 그대로 CPR 이기 때문에 디렉토리 설계나 아키텍쳐에 많은 시간을 투자하고 싶지 않음
- 빠르게 MVP 를 만드는게 목적인 경우에 사용할 수 있는 React의 가장 기본적인 디렉토리

<br>

**각 폴더 설명:**
- **components:** 재사용 가능한 UI 요소 (버튼, 입력 필드, 카드)
- **context:** 전역 상태 관리 (다크 모드, 테마, 인증)
- **hooks:** 커스텀 훅이나 API 접근
- **pages:** 라우트별 페이지 컴포넌트
- **utils:** 유틸리티 함수 (날짜 포맷팅, 데이터 검증)

<br>

**예상 소요 시간: 2일**<br>
**그렇게 생각한 이유**:

- 강의를 보면서 조금씩 기억을 되짚는 느낌으로 하는 프로젝트기 때문에 급하게 할 생각이 없음.
- 조금 더 추가할 기능이나 리팩토링 할 수 있는 부분을 생각해보는 시간도 고려함.