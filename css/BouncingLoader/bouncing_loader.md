[home](https://github.com/bepyan/30_seconds_of_code)

# Bouncing loader
https://www.30secondsofcode.org/css/s/bouncing-loader

### ๐ง ํต์ฌ์ฝ๋
- `@keyframes`๋ฅผ ํตํด ๋ํธ๊ฐ ์ต์๋จ์ ๋์ฐฉํ์ ๋์ ์ํ๋ฅผ ์ค์ ํ๋ค.
    ```css
    @keyframes bouncing-loader {
        to {
            opacity: 0.1;
            transform: translate3d(0, -16px, 0);
        }
    }
    ```
    ์๋๋ฉ์ด์์ ๋ฌดํ ๋ฐ๋ณตํ๊ณ  `alternate`๋ก ํด๋น keyframes๋ก ์๋ณต์ํจ๋ค.   
    (์ฌ๋ผ ๊ฐ๋ค๊ฐ ๋ด๋ ค์ค๊ธฐ)
    ```css
    .bouncing-loader>div {
        //...
        animation: bouncing-loader 0.6s infinite alternate;
    }
    ```

- ์ ์ฒด 0.6์ด์ ์๋๋ฉ์ด์์ 3๋ถํ  ํด์ 0.2์ด์ฉ ๋๋ ์ด๋ฅผ ์ค๋ค
    ```css
    .bouncing-loader > div:nth-child(2) {
        animation-delay: 0.2s;
    }
    .bouncing-loader > div:nth-child(3) {
        animation-delay: 0.4s;
    }
    ```


[home](https://github.com/bepyan/30_seconds_of_code)