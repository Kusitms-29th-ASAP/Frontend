export type LanguageKeys = 'ko' | 'en' | 'zh' | 'ja' | 'vi' | 'pi';

export const categories = [
    { value: "SCHOOL_ANNOUNCEMENT", label: {
        ko: "가정통신문",
        en: "Home Notice",
        zh: "家庭通知书",
        ja: "家庭通信",
        vi: "Thông báo gia đình",
        pi: "Pabatid sa Pamilya",
    }},
    { value: "HOMEWORK", label: {
        ko: "숙제",
        en: "Homework",
        zh: "作業",
        ja: "宿題",
        vi: "Bài tập về nhà",
        pi: "Hanggang-Bukas",
    }},
    { value: "SUPPLY", label: {
        ko: "준비물",
        en: "Materials",
        zh: "准备物品",
        ja: "準備物",
        vi: "Vật dụng chuẩn bị",
        pi: "Takdang-aralin",
    }},
    { value: "ETC", label: {
        ko: "기타",
        en: "ETC",
        zh: "等",
        ja: "等",
        vi: "Vân vân",
        pi: "Atbp",
    }},
    { value: "NONE", label: {
        ko: "없음",
        en: "None",
        zh: "到明天为止",
        ja: "明日までに",
        vi: "Đến-ngày Mai",
        pi: "Hanggang-Bukas",
    }},
  ];

export const dayOfWeekText = (day: string) => {
    switch (day) {
        case "내일":
            return {
                ko: "내일까지",
                en: "By Tomorrow",
                zh: "到明天为止",
                ja: "明日までに",
                vi: "Đến-ngày Mai",
                pi: "Hanggang-Bukas",
            };
        case "화요일":
            return {
                ko: "화요일까지",
                en: "By Tuesday",
                zh: "到星期二为止",
                ja: "火曜日まで",
                vi: "Đến-thứ Ba",
                pi: "Hanggang-Martes",
            };
        case "수요일":
            return {
                ko: "수요일까지",
                en: "By Wednesday",
                zh: "到星期三为止",
                ja: "水曜日まで",
                vi: "Đến-thứ Tư",
                pi: "Hanggang-Miyerkules",
            };
        case "목요일":
            return {
                ko: "목요일까지",
                en: "By Thursday",
                zh: "到星期四为止",
                ja: "木曜日まで!",
                vi: "Đến-thứ Năm",
                pi: "Hanggang-Huwebes",
            };
        case "금요일":
            return {
                ko: "금요일까지",
                en: "By Friday",
                zh: "到星期五为止",
                ja: "金曜日まで",
                vi: "Đến-thứ Sáu",
                pi: "Hanggang-Biyernes",
            };
        case "토요일":
            return {
                ko: "토요일까지",
                en: "By Saturday",
                zh: "到星期六为止",
                ja: "土曜日まで",
                vi: "Đến-thứ Bảy",
                pi: "Hanggang-Sabado",
            };
        case "일요일":
            return {
                ko: "일요일까지",
                en: "By Sunday",
                zh: "到星期天为止",
                ja: "日曜日まで",
                vi: "Đến-chủ Nhật",
                pi: "Hanggang-Linggo",
            };
        default:
            return {
                ko: "월요일까지",
                en: "By Monday",
                zh: "到星期一为止",
                ja: "月曜日まで",
                vi: "Đến-thứ Hai",
                pi: "Hanggang-Lunes",
            };
            
    }
  };

  export const noTodoMessage = {
    ko: "할 일이 없어요!",
    en: "There's nothing to do!",
    zh: "沒事可做！",
    ja: "やることがありません！",
    vi: "Không có việc gì để làm!",
    pi: "Walang magawa!",
  };

  export const addTodoMessage = {
    ko: "할 일 직접 추가하기",
    en: "Directly Add Tasks",
    zh: "直接添加任务",
    ja: "タスクを直接追加する",
    vi: "Thêm công việc trực tiếp",
    pi: "Direktang Magdagdag ng Gawain",
  };
  
  export const whenTodoMessage = {
    ko: "언제까지 할 일인가요?",
    en: "Until when will you be doing it?",
    zh: "要做到什麼時候?",
    ja: "いつまでやることですか?",
    vi: "Việc này sẽ làm đến khi nào?",
    pi: "Hanggang kailan ito gagawin?",
  };
  
  export const submitMessage = {
    ko: "등록하기",
    en: "To add",
    zh: "添加",
    ja: "追加する",
    vi: "Thêm vào",
    pi: "Idagdag",
  };