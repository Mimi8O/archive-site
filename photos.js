// ─────────────────────────────────────────────
//  photos.js  —  사진 데이터를 여기에 추가하세요
//
//  각 항목 구조:
//  {
//    id:     고유 번호 (순서대로),
//    cat:    카테고리 — "fujifilm" | "sony" | "etc"
//    src:    이미지 경로 또는 GitHub Releases URL
//    title:  사진 제목
//    date:   날짜 (MMDD 형식 권장)
//    camera: 카메라 이름
//    note:   상세 페이지에 표시할 글 (줄바꿈: \n)
//    page:   노트 페이지 표시 (예: "149/200")
//  }
// ─────────────────────────────────────────────

const PHOTOS = [
  {
    id: 1,
    cat: "fujifilm",
    src: "photos/fujifilm/chair_01.jpg",
    title: "chair.",
    date: "0513",
    camera: "X-E5",
    note: "기차를 타고 당도할 수 있는 가장 깊고 짙은 바다에선,\n어둠을 입고도 잠들지 못하는 내(네)가 편히 어둠을 맞이하고\n비를 맞고 있어도 파도 소리에 묻혀 내(네)가 눈치 채지 않을 수 있을까.\n\n짙은 바다의 파도는 유달리 희다.\n\n바다를 헤구려는 마음조차 들지 않는 곳.\n거센 바람이 부는 바다 앞에서는 귀가 떨어져 나갈 듯 붉어져도\n그냥 파도에 몸을 던지고 싶을거야.",
    page: "149/200"
  },
  {
    id: 2,
    cat: "fujifilm",
    src: "photos/fujifilm/chair_02.jpg",
    title: "chair.",
    date: "0513",
    camera: "X-E5",
    note: "빛이 닿지 않는 자리에도\n어딘가 따뜻한 온도가 남아있을 것 같은 밤.\n\n소리 없이 쌓이는 것들이 있다.",
    page: "150/200"
  },
  {
    id: 3,
    cat: "fujifilm",
    src: "photos/fujifilm/chair_03.jpg",
    title: "chair.",
    date: "0513",
    camera: "X-E5",
    note: "누군가 앉았다 간 자리의 온도.\n그게 남아있는 것 같아서,\n오래 서 있었다.",
    page: "151/200"
  },
  {
    id: 4,
    cat: "sony",
    src: "photos/sony/light_01.jpg",
    title: "light.",
    date: "0601",
    camera: "ZV-1",
    note: "조명 아래 모든 것은 조금씩 다른 색이 된다.\n\n같은 공간인데\n어제와 오늘이 다른 이유.",
    page: "001/100"
  },
  {
    id: 5,
    cat: "sony",
    src: "photos/sony/light_02.jpg",
    title: "light.",
    date: "0601",
    camera: "ZV-1",
    note: "빛은 항상 어딘가에서 오고\n어딘가로 사라진다.\n\n그 사이 어딘가에 내가 있다.",
    page: "002/100"
  },
  {
    id: 6,
    cat: "etc",
    src: "photos/etc/window_01.jpg",
    title: "window.",
    date: "0420",
    camera: "iPhone",
    note: "창문 너머의 것들은\n언제나 조금 더 좋아 보인다.\n\n그래서 자꾸 밖을 본다.",
    page: "001/50"
  }
];
