[home](https://github.com/bepyan/30_seconds_of_code)

# Bouncing loader
https://www.30secondsofcode.org/css/s/image-mosaic

### 🧐 핵심코드
- `display: grid` [참고](https://studiomeal.com/archives/533)

- 크게 해주고 싶은 사진을 해당 class 적용시키면 된다.   
    ```css
    @media screen and (min-width: 600px) {
        .card-tall {
            grid-row: span 2 / auto;
        }
        .card-wide {
            grid-column: span 2 / auto;
        }
    }
    ```
    `grid-row` 몇 칸의 셀의 사용할지 (각 칸에 2/auto 만큼)

### 🗡[자세한 코드](https://github.com/bepyan/30_seconds_of_code/css/ResponsiveImageLayout/index.css)


<br>

[home](https://github.com/bepyan/30_seconds_of_code)
