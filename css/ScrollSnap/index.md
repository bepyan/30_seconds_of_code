[home](https://github.com/bepyan/30_seconds_of_code)

# Scroll Snap

https://www.30secondsofcode.org/css/s/horizontal-scroll-snap
https://www.30secondsofcode.org/css/s/vertical-scroll-snap

### ๐ง ํต์ฌ์ฝ๋

- `display: grid`์ `grid-auto-flow: column`์ผ๋ก horizontal ๋ ์ด์์์ ๋ง๋ ๋ค.

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
   [์คํฌ๋กค ์ฒด์ด๋](https://salgum1114.github.io/css/2019-04-30-overscroll-behavior-contain/)
  ์คํฌ๋กค์ด ๋์ ๋๋ฌํ๊ฒ ๋๋ฉด ์ด ํฌ์คํ์ ๋ณธ๋ฌธ๊น์ง ์คํฌ๋กค์ด ์์๋๊ฒ ๋๋ค. ์ด๋ฅผ ๋ฐฉ์งํ๋ค (x ์ถ๋ง)

- `scroll-snap-type: x mandatory`  
   ์ธ๋ฑ์ค์ ๋ง์ถฐ ์คํฌ๋กค ๋๊ฒ ๋๋ค.
  `x proximity`  
   ๊ฐ๊น๊ฒ์ ์คํฌ๋กค ๋  ๋ ๋ง์ถฐ์ค (์ค๊ฐ์ ๊ฑธ์น  ์ ์๋ค)  
   [์ฐธ๊ณ ](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)

- `scroll-snap-align: center`  
   ๋ง์ถฐ์ง ์ธ๋ฑ์ค๋ฅผ ์ค๊ฐ ๊ธฐ์ค์ผ๋ก  
   `start`, `stop`์ด ๊ฐ๋ฅํ๋ค.
