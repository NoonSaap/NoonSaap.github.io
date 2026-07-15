export const SITE = {
  title: 'AI 실전 노트',
  author: '눈삽',
  description: '빠르게 변하는 AI를 이해하고, 실제로 써먹는 방법을 기록합니다.',
  url: 'https://noonsaap.github.io',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'AI 활용': '일과 학습에 바로 적용하는 AI 사용법',
  'AI 코딩': '초보 개발자를 위한 AI 코딩 워크플로',
  '도구 비교': '상황에 맞는 AI 도구를 고르는 기준',
  '개념 노트': '어렵게 느껴지는 AI 개념을 쉽게 정리',
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
