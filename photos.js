// ─────────────────────────────────────────────
//  photos.js  —  사진 데이터를 여기에 추가하세요
//
//  각 항목 구조:
//  {
//    id:     고유 번호 (순서대로)
//    cat:    카테고리 — "fujifilm" | "sony" | "etc"
//    src:    대표 이미지 경로 (메인 갤러리에 표시)
//    images: 상세 슬라이더에 표시할 이미지 배열
//            첫 번째가 대표 사진, 이후 추가 사진들
//    title:  사진 제목
//    date:   날짜 (MMDD 형식 권장)
//    camera: 카메라 이름
//    note:   상세 페이지 글 (최대 200자, 줄바꿈: \n)
//  }
// ─────────────────────────────────────────────

const PHOTOS = [
  {
    id: 1,
    cat: "fujifilm",
    src: "photos/fujifilm/chair_01.jpg",
    images: [
      "photos/fujifilm/chair_01.jpg",
      "photos/fujifilm/chair_02.jpg",
      "photos/fujifilm/chair_03.jpg"
    ],
    title: "chair.",
    date: "0513",
    camera: "X-E5",
    note: "기차를 타고 당도할 수 있는 가장 깊고 짙은 바다에선,\n어둠을 입고도 잠들지 못하는 내(네)가 편히 어둠을 맞이하고\n비를 맞고 있어도 파도 소리에 묻혀 내(네)가 눈치 채지 않을 수 있을까.\n\n짙은 바다의 파도는 유달리 희다."
  },
  {
    id: 2,
    cat: "sony",
    src: "photos/sony/light_01.jpg",
    images: [
      "photos/sony/light_01.jpg",
      "photos/sony/light_02.jpg"
    ],
    title: "light.",
    date: "0601",
    camera: "ZV-1",
    note: "조명 아래 모든 것은 조금씩 다른 색이 된다.\n\n같은 공간인데\n어제와 오늘이 다른 이유."
  },
  {
    id: 3,
    cat: "etc",
    src: "photos/etc/window_01.jpg",
    images: [
      "photos/etc/window_01.jpg"
    ],
    title: "window.",
    date: "0420",
    camera: "iPhone",
    note: "창문 너머의 것들은\n언제나 조금 더 좋아 보인다.\n\n그래서 자꾸 밖을 본다."
  }
];
