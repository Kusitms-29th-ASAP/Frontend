export const todoHomeData = [
    {
        type: "4월 19일 (금) 까지",
        text: "방과후 가정통신문 회신",
        time: " 회신 필요",
    },
    {
        type: "4월 22일 (월)까지",
        text: "방과후학교 프로그램 신청서",
        time: "제출 완료",
    },
    {
        type: "4월 22일 (월)까지",
        text: "방과후학교 프로그램 신청서",
        time: "제출 완료",
    },
];

export interface SummaryCardProps {
    isNew: boolean;
    category: string;
    title: string;
    date: string;
    look: number;
    keyword: string[];
    sentence: string[];
    summaryId: number;
  }

export const summaryData:SummaryCardProps[] = [
    {
        isNew: true,
        category: "급식",
        title: "학교급식 관련 식품 알레르기 조사",
        date: "2024년 4월 17일",
        look: 37,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵"
        ],
        summaryId: 1,
    },
    {
        isNew: true,
        category: "보건",
        title: "이건 가통 제목이구여 제목 두줄이면 이렇게 됩니당 우하하",
        date: "2024년 4월 17일",
        look: 14,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "다들짱다들짱다들짱다들짱다들짱다들짱",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵"
        ],
        summaryId: 2,
    },
    {
        isNew: true,
        category: "교내외 프로그램",
        title: "이건 가통 제목이구여 제목 두줄이면 이렇게 됩니당 우하하",
        date: "2024년 4월 17일",
        look: 23,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "다들짱다들짱다들짱다들짱다들짱다들짱"
        ],
        summaryId: 3,
    },
]

export const summaryEduData:SummaryCardProps[] = [
    {
        isNew: true,
        category: "급식",
        title: "교육청 학교급식 관련 식품 알레르기 조사",
        date: "2024년 4월 17일",
        look: 38,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵"
        ],
        summaryId: 11,
    },
    {
        isNew: true,
        category: "보건",
        title: "교육청 이건 가통 제목이구여 제목 두줄이면 이렇게 됩니당 우하하",
        date: "2024년 4월 15일",
        look: 204,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "다들짱다들짱다들짱다들짱다들짱다들짱",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵"
        ],
        summaryId: 12,
    },
    {
        isNew: true,
        category: "교육청 교내외 프로그램",
        title: "이건 가통 제목이구여 제목 두줄이면 이렇게 됩니당 우하하",
        date: "2024년 4월 14일",
        look: 100,
        keyword: [
            "식품알레르기",
            "조사"
        ],
        sentence: [
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵이러쿵저러쿵",
            "다들짱다들짱다들짱다들짱다들짱다들짱"
        ],
        summaryId: 13,
    },
]