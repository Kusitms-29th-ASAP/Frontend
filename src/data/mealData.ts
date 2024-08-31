export const cautionMessage = {
    ko: "주의!",
    en: "Caution!",
    zh: "注意!",
    ja: "注意!",
    vi: "Chú ý!",
    pi: "Ingat!",
  };

  export const noDataMessage = {
    ko: "급식 정보가 없어요 :(",
    en: "I don't have any information about school meals :(",
    zh: "伙食信息不存在 :(",
    ja: "給食情報がありません :(",
    vi: "Không có thông tin về bữa ăn :(",
    pi: "Walang impormasyon sa pagkain :(",
  };

  export const monthText = (month:string, language:string) => {
    switch(language) {
        case "ko":
            return `${month}월 급식표`;
        case "en":
            return `September`;
        case "zh":
            return `${month}月`;
        case "ja":
            return `${month}月`;
        case "vi":
            return `Tháng ${month}`;
        case "pi":
            return `Setyembre`;
        default:
            return null;
    }
  };

  export const weekText = (month: string, week:number, language:string) => {
    switch(language) {
        case "ko":
            return `${month}월 ${week}주차`;
        case "en":
            return `Week ${week} of Sep`;
        case "zh":
            return `${month}月第${week}周`;
        case "ja":
            return `${month}月第${week}週`;
        case "vi":
            return `Tuần ${week} tháng ${month}`;
        case "pi":
            return `Linggo ${week} Set`;
        default:
            return null;
    }
  };

  export const dayText = {
    ko: "일",
    en: "Day",
    zh: "日",
    ja: "日",
    vi: "Ngày",
    pi: "Araw",
  };