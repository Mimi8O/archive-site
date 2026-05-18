# ARchive.

개인 사진 아카이빙 웹사이트 — GitHub Pages 배포용

---

## 폴더 구조

```
archive-site/
├── index.html
├── style.css
├── app.js
├── photos.js       ← 사진 데이터 (여기만 수정)
└── photos/
    ├── fujifilm/   ← Fujifilm X-E5 사진들
    ├── sony/       ← SONY ZV-1 사진들
    └── etc/        ← 기타 사진들
```

---

## 사진 추가하는 법

### 1. 사진 파일 업로드
사진을 카메라별 폴더에 넣어요:
```
photos/fujifilm/my_photo.jpg
photos/sony/another.jpg
```

### 2. photos.js에 데이터 추가
```js
{
  id: 7,                           // 고유 번호 (순서대로 증가)
  cat: "fujifilm",                 // "fujifilm" | "sony" | "etc"
  src: "photos/fujifilm/my_photo.jpg",
  title: "title.",
  date: "0513",                    // MMDD 형식
  camera: "X-E5",
  note: "여기에 글을 써요.\n줄바꿈은 \\n 으로.",
  page: "152/200"                  // 자유롭게 설정
}
```

---

## GitHub Pages 배포

### 처음 설정
1. GitHub에서 새 레포 생성 (예: `archive`)
2. 이 파일들 전부 push
3. 레포 Settings → Pages → Source: `Deploy from branch` → `main` / `/ (root)`
4. 저장하면 `https://[username].github.io/archive/` 로 접속 가능

### 사진 추가할 때마다
```bash
git add photos/ photos.js
git commit -m "add: 0513 chair series"
git push
```
→ 1~2분 후 자동 반영

---

## 용량이 걱정될 때 (GitHub Releases 방법)

레포가 커지면 사진을 GitHub Releases에 올리고,
`photos.js`의 `src`를 Releases URL로 교체하면 돼요:

```js
src: "https://github.com/[username]/archive/releases/download/v1/chair_01.jpg"
```

---

## 카테고리 이름 바꾸기

`index.html`의 nav 부분을 수정:
```html
<button class="nav-tab active" data-cat="fujifilm">Fujifilm X-E5</button>
<button class="nav-tab" data-cat="sony">SONY ZV-1</button>
<button class="nav-tab" data-cat="etc">Etc.</button>
```
`data-cat` 값은 `photos.js`의 `cat` 값과 일치해야 해요.
