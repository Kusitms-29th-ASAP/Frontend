export const signData: string[] = [
  "학교에서 전자서명이 필요한 경우,\n최초 1회 전자서명을 등록하셔야 합니다.",
  "등록된 전자서명은 실제 서명과 동일한\n효력을 갖습니다.",
  "서명은 제출자 확인용으로 사용하며,\n이외의 용도로는 활용되지 않습니다.",
  "기타 자세한 내용은 이용약관 및\n개인정보처리방침에 따라 동의합니다.",
];

export interface Docs {
  id: number;
  content1: string;
  content2: string;
  grade: string;
  class: string;
  number: string;
  name: string;
  reason: string;
  date: string;
  guardian: string;
}

export const docsData: Docs[] = [
  {
    id: 1,
    content1: "병결",
    content2: "질병(독감)",
    grade: "3학년",
    class: "7반",
    number: "2번",
    name: "김동우",
    reason: "감기몸살로 인해 질병결석을 했습니다.",
    date: "5월 17일 (금)",
    guardian: "김규리",
  },
  {
    id: 2,
    content1: "경조사",
    content2: "사촌 결혼",
    grade: "4학년",
    class: "2반",
    number: "7번",
    name: "오민지",
    reason: "감기몸살",
    date: "4월 22일 (금)",
    guardian: "유진주",
  },
];