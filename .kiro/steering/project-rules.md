---
inclusion: always
---

# Daily AI Typography — Project Rules

## About This Project
매일 하나씩 AI(Kiro)와 함께 만드는 타이포그래피 아트워크 아카이브.
뉴스 헤드라인·가사·약관 같은 일상 텍스트를 움직이는 타이포그래피로 재해석한다.

- GitHub: `boreescope/daily-ai-typography-` (뒤에 대시 있음, `daily-ai-typography`에서 리다이렉트됨)
- Pages URL: `https://boreescope.github.io/daily-ai-typography-/`
- Git user: "Boree Choi" / `boree33@gmail.com`

## Communication Style
- **모든 답변은 한국어로 작성** (코드 주석·변수명은 영어 그대로)
- 친근한 파트너 톤, 과장 없이 담백하게
- 코드 설명은 간결하게, 필요한 것만

## Concept Proposal Pattern
새 프로젝트를 시작할 때:
1. 먼저 **컨셉 A/B/C 제안**만 주고 사용자 선택을 기다린다
2. 제안은 각 3~5줄 이내로 간결하게
3. 기술 구현 디테일은 제안 단계에서 언급하지 않는다
4. 사용자가 고른 뒤에만 구현 시작

## Feedback Response Pattern
- **"별로야" / "너무 ~해" / "이상해"** → 기능 추가 말고 **줄이고 단순화**
- **"세련되게"** → 은은하게, 폭발·과장 빼기
- **"재미있게"** → 캐릭터·서사·깜짝 요소 추가
- 2번 실패하면 접근 방식 자체를 바꾼다 (증분 패치 금지)

## Folder & File Structure
- 날짜별 폴더: `YYYY-MM-DD/` (예: `2025-04-21/`)
- 각 폴더에 `index.html` 하나 완결형
- 참고 이미지는 `YYYY-MM-DD/ref/`에 저장
- 루트 `index.html`은 아카이브 홈

## Home Page Rules
- 새 작업은 `works` 배열 **최상단**에 추가 (최신이 위)
- 각 항목: `date`, `title`, `desc`, `folder`, `tags` 포함
- 썸네일 iframe은 `?preview=1` 쿼리로 접근

## Daily Page Rules
- 좌측 상단에 **홈 버튼** 필수:
  ```html
  <a class="home-btn" href="../index.html">HOME</a>
  ```
- 홈 버튼 스타일: 배경 톤에 맞춰 0.15~0.35 opacity의 어둡거나 밝은 색
- 호버 시 더 진해지는 transition

## Preview Mode Pattern
메인 썸네일에서 완성 상태를 보여주기 위해:
```js
if (new URLSearchParams(location.search).get('preview') === '1') {
  // 클릭 없이 바로 최종 상태로 세팅
}
```
인터랙티브 작업일수록 이 모드 필수.

## Typography Rules
- 구글 폰트만 사용 (사용자가 명시하는 폰트를 정확히 따를 것)
- 한글: Noto Sans KR / Gowun Dodum / Jua / Gugi / Moirai One 등
- 영문: Archivo Black / Cormorant Garamond / Space Mono 등
- 한글+영문 병기 시 크기·굵기 맞추기

## Technical Preferences
- **SVG 우선** (캔버스보다 확장성·해상도 대응에 강함)
- 메타볼 goo 필터, type-on-path, CSS 트랜지션 패턴 사용 경험 있음
- 애니메이션은 `cubic-bezier(0.45, 0.05, 0.55, 0.95)` (sine ease-in-out) 류의 부드러운 곡선 선호. 탄성 bounce는 유머러스할 때만.

## Git Workflow
- 커밋 메시지: `Day N: 제목 — 핵심 요약`
- 작업 완료 후 사용자가 푸시 요청하면 올린다 (자동 푸시 금지)
- `.gitignore`에 `Kapture*.gif` 포함 (대용량 화면녹화는 GitHub 100MB 제한 초과)
- 100MB 이상 파일은 커밋에서 제외

## Anti-Patterns (피할 것)
- 제안 단계에서 불필요한 기술 설명
- 피드백 없이 기능 덧붙이기
- 같은 구조로 3번 이상 패치 시도
- 영어로 답변
- HOME 버튼 빼먹기
- 새 작업을 메인 페이지 배열 중간/끝에 추가
