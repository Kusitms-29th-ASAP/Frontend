export const AllergyCategories = [
  {
    name: "우유 및 계란",
    items: ["우유", "난류"],
  },
  {
    name: "곡류",
    items: ["메밀", "밀"],
  },
  {
    name: "견과류",
    items: ["호두", "땅콩", "대두", "잣"],
  },
  {
    name: "육류",
    items: ["닭고기", "돼지고기", "쇠고기"],
  },
  {
    name: "해산물",
    items: ["고등어", "새우", "오징어", "게", "조개류"],
  },
  {
    name: "과일/채소류 및 기타",
    items: ["복숭아", "토마토", "아황산류"],
  },
];

export enum AllergyEnum {
  "땅콩" = "PEANUT",
  "쇠고기" = "BEEF",
  "난류" = "EGG",
  "밀" = "WHEAT",
  "조개류" = "SHELLFISH",
  "토마토" = "TOMATO",
  "호두" = "WALNUT",
  "메밀" = "BUCKWHEAT",
  "대두" = "SOYBEAN",
  "새우" = "SHRIMP",
  "게" = "CRAB",
  "복숭아" = "PEACH",
  "오징어" = "SQUID",
  "아황산류" = "SULFITES",
  "돼지고기" = "PORK",
  "우유" = "MILK",
  "잣" = "PINE_NUT",
  "고등어" = "MACKEREL",
  "닭고기" = "CHICKEN",
}

export const allergiesData = [
  { Number: 1, Allergy: 'EGG', Description: '난류' },
  { Number: 2, Allergy: 'MILK', Description: '우유' },
  { Number: 3, Allergy: 'BUCKWHEAT', Description: '메밀' },
  { Number: 4, Allergy: 'PEANUT', Description: '땅콩' },
  { Number: 5, Allergy: 'SOYBEAN', Description: '대두' },
  { Number: 6, Allergy: 'WHEAT', Description: '밀' },
  { Number: 7, Allergy: 'MACKEREL', Description: '고등어' },
  { Number: 8, Allergy: 'CRAB', Description: '게' },
  { Number: 9, Allergy: 'SHRIMP', Description: '새우' },
  { Number: 10, Allergy: 'PORK', Description: '돼지고기' },
  { Number: 11, Allergy: 'PEACH', Description: '복숭아' },
  { Number: 12, Allergy: 'TOMATO', Description: '토마토' },
  { Number: 13, Allergy: 'SULFITES', Description: '아황산류' },
  { Number: 14, Allergy: 'WALNUT', Description: '호두' },
  { Number: 15, Allergy: 'CHICKEN', Description: '닭고기' },
  { Number: 16, Allergy: 'BEEF', Description: '쇠고기' },
  { Number: 17, Allergy: 'SQUID', Description: '오징어' },
  { Number: 18, Allergy: 'SHELLFISH', Description: '조개류' },
  { Number: 19, Allergy: 'PINE_NUT', Description: '잣' }
];