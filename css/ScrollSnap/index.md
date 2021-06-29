[home](https://github.com/bepyan/30_seconds_of_code)

# Scroll Snap

https://www.30secondsofcode.org/css/s/horizontal-scroll-snap
https://www.30secondsofcode.org/css/s/vertical-scroll-snap

### 🧐 핵심코드

- `display: grid`와 `grid-auto-flow: column`으로 horizontal 레이아웃을 만든다.

  ```css
  .horizontal-snap {
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    height: calc(180px + 1rem);
    padding: 1rem;
    width: 200px;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
  }
  ```

- `overscroll-behavior-x: contain`  
   [스크롤 체이닝](https://salgum1114.github.io/css/2019-04-30-overscroll-behavior-contain/)
  스크롤이 끝에 도달하게 되면 이 포스팅의 본문까지 스크롤이 시작되게 된다. 이를 방지한다 (x 축만)

- `scroll-snap-type: x mandatory`  
   인덱스에 맞춰 스크롤 되게 된다.
  `x proximity`  
   가깝게에 스크롤 될 때 맞춰줌 (중간에 걸칠 수 있다)  
   [참고](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)

- `scroll-snap-align: center`  
   맞춰진 인덱스를 중간 기준으로  
   `start`, `stop`이 가능하다.
