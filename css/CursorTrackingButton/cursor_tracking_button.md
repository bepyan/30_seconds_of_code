[home](https://github.com/bepyan/30_seconds_of_code)

# Cursor Tracking Button

https://www.30secondsofcode.org/css/s/mouse-cursor-gradient-tracking

### ๐ง ํต์ฌ์ฝ๋

- `--x`, `--y` ๋๊ฐ์ css ๋ณ์๋ก ์ปค์์ ์์น๋ฅผ ํธ๋ํนํ๋ค.
    ```css
    .mouse-cursor-gradient-tracking:before {
        left: var(--x);
        top: var(--y);
        <!-- ... -->
    }
    ```
    `mousemove` ์ด๋ฒคํธ๋ก css ๋ณ์๋ฅผ ํ ๋นํ๋ค.   
    `getBoundingClientRect()` ๋ก ๋ฒํผ์ ์์น๋ฅผ ๊ฐ์ ธ์จ๋ค.
    ``` js
    btn.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    });
    ```

- `--size` css ๋ณ์๋ฅผ ํตํด ๊ทธ๋ผ๋์์ด์์ ๋ฒ์๋ฅผ ์กฐ์ ํ๋ค.
    ```css
    .mouse-cursor-gradient-tracking:before {
        <!-- ... -->
        --size: 0;
        width: var(--size);
        height: var(--size);
    }
    .mouse-cursor-gradient-tracking:hover:before {
        --size: 200px;
    }
    ```

- 
    ```css
    .mouse-cursor-gradient-tracking:before {
        <!-- ... -->
        background: radial-gradient(circle closest-side, pink, transparent);
    }
    ```

<br>

[::before๊ฐ ๊ถ๊ธํ๋ค๋ฉด?](https://developer.mozilla.org/ko/docs/Web/CSS/::before)   
- `::before`๋ ์ ํํ ์์์ ์ฒซ ์์์ผ๋ก ์์ฌ ์์(๊ฐ์ ์์)๋ฅผ ํ๋ ์์ฑํ๋ค.
- `content`๋ฅผ ํตํด ์ฅ์์ฉ ์ฝํ์ธ ๋ฅผ ์ถ๊ฐํ๋ค.

[home](https://github.com/bepyan/30_seconds_of_code)