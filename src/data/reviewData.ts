interface ReviewData {
  id: number;
  category: number;
  image: string;
  title: string;
  tag1: string;
  tag2: string;
  date?: string;
  author?: string;
}

export const ReviewData: ReviewData[] = [
  // 국어
  {
    id: 1,
    category: 1,
    image: "/assets/study/review/korean1.svg",
    title: "3단원. 높임표현 연습에는 역할극!",
    tag1: "역할극",
    tag2: "문제해결력증진",
    date: "2024년 5월 10일",
    author: "김동우",
  },
  {
    id: 2,
    category: 1,
    image: "/assets/study/review/korean2.svg",
    title: "4단원. 마음 담아 선생님께 편지쓰기",
    tag1: "편지쓰기",
    tag2: "맞춤법연습",
    date: "2024년 4월 17일",
    author: "김동우",
  },

  // 수학
  {
    id: 3,
    category: 2,
    image: "/assets/study/review/math1.svg",
    title:
      "5단원. 마의 구간 ‘길이와 시간’ 여름방학 계획표 만들기로 시간 마스터하기",
    tag1: "실생활연습",
    tag2: "탐구생활",
    date: "2024년 4월 17일",
    author: "김동우",
  },

  // 사회
  {
    id: 4,
    category: 3,
    image: "/assets/study/review/society1.svg",
    title: "2단원. 우리 고장 문화유산 달력 만들기",
    tag1: "만들기",
    tag2: "사회탐구",
    date: "2024년 4월 17일",
    author: "김동우",
  },

  // 과학
  {
    id: 5,
    category: 4,
    image: "/assets/study/review/math1.svg",
    title: "3. 서로 다른 물질을 섞었을 때 나타나는 성질 변화 관찰하기",
    tag1: "탱탱구슬만들기",
    tag2: "과학적사고력",
    date: "2024년 4월 17일",
    author: "김동우",
  },

  // 영어
  {
    id: 6,
    category: 5,
    image: "/assets/study/review/english1.svg",
    title: "7단원: 팝송 숏폼 촬영을 통한 be 동사, 날씨 표현 학습",
    tag1: "영상촬영",
    tag2: "팝송",
    date: "2024년 4월 17일",
    author: "김동우",
  },
];
