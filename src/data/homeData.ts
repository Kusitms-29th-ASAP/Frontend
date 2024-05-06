export interface Todo {
    type: string;
    text: string;
    time: string;
    direct: boolean;
}

export const todoData: Todo[] = [
    {
        type: "가정통신문",
        text: "방과후학교 가정통신물 회신",
        time: "내일까지",
        direct: false,
    },
    {
        type: "준비물",
        text: "미술활동 물통 준비",
        time: "내일까지",
        direct: false,
    },
    {
        type: "준비물",
        text: "미술활동 물통 준비",
        time: "월요일까지",
        direct: false,
    },
    {
        type: "준비물",
        text: "[직접추가]",
        time: "월요일까지",
        direct: true,
    },
    {
        type: "준비물",
        text: "[직접추가]",
        time: "월요일까지",
        direct: true,
    },
];

export const notificationData: string[] = [
    "미술활동 물통 준비 - 금요일까지",
    "방과후학교 가정통신문 회신",
    "수학 복습",
    "주말 일기 작성"

];

export const timeData: string[] = [
    "과학", "수학", "자율", "음악"
]

export const mealData:string[] = [
    "흑미밥", "콩나물무국", "쇠고기 버섯 불고기", "달래오이무침", "배추김치", "짜먹는 요구르트"
]

export interface mealTable {
    date: number;
    menu: string[];
};

export const mealTableData: mealTable[] = [
    {
        date: 1,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 2,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 3,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 4,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 5,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 8,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
    {
        date: 9,
        menu: [
            "쇠고기 장국",
            "새송이 부추",
            "무침",
            "무농약 감귤",
            "주스",
            "핫도그 샌드위치",
            "배추김치",
        ]
    },
];