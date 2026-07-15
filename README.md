Exit code: 0
Wall time: 2.5 seconds
Output:
# AI 실전 노트

눈삽이 운영하는 개인 AI 블로그입니다. Astro로 정적 생성하며 GitHub Pages에 배포합니다.

## 로컬 실행

```sh
npm install
npm run dev
```

## 검증

```sh
npm run build
```

## 콘텐츠 작성

글은 `src/content/blog`에 Markdown 또는 MDX 파일로 추가합니다.

```yaml
---
title: "글 제목"
description: "글 설명"
publishedAt: 2026-07-15
category: "AI 활용"
tags: ["AI", "업무 활용"]
featured: false
draft: true
readingMinutes: 5
---
```

`draft: true`인 글은 정적 페이지, 목록, RSS에 포함되지 않습니다.

