[home](https://github.com/bepyan/30_seconds_of_code)

# Bouncing loader
https://www.30secondsofcode.org/css/s/bouncing-loader

### 🧐 핵심코드
- `@keyframes`를 통해 도트가 최상단에 도착했을 때의 상태를 설정한다.
    ```css
    @keyframes bouncing-loader {
        to {
            opacity: 0.1;
            transform: translate3d(0, -16px, 0);
        }
    }
    ```
    에니메이션을 무한 반복하고 `alternate`로 해당 keyframes로 왕복시킨다.   
    (올라 갔다가 내려오기)
    ```css
    .bouncing-loader>div {
        //...
        animation: bouncing-loader 0.6s infinite alternate;
    }
    ```

- 전체 0.6초의 에니메이션을 3분할 해서 0.2초씩 딜레이를 준다
    ```css
    .bouncing-loader > div:nth-child(2) {
        animation-delay: 0.2s;
    }
    .bouncing-loader > div:nth-child(3) {
        animation-delay: 0.4s;
    }
    ```


[home](https://github.com/bepyan/30_seconds_of_code)