[home](https://github.com/bepyan/30_seconds_of_code)

# Pulse Loader

https://www.30secondsofcode.org/css/s/pulse-loader

### 🧐 핵심코드

- 에니메이션을 동작시키는 keyframes

  ```css
  @keyframes ripple-loader {
    0% {
      top: 32px;
      left: 32px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 64px;
      height: 64px;
      opacity: 0;
    }
  }
  ```
  원의 중심에서 파동이 퍼져야 하기에 `100%`때 `64px`의 절반 위치로.

- `animation-delay`를 통해서 파동 효과를 준다.

  ```css
  .ripple-loader div:nth-child(2) {
    animation-delay: -0.5s;
  }
  ```

  딜레이를 `-` 해주는 이유 -> 양수로 딜레이가 생기면 초기 에니메이션 실행할 때 `0% keyframes`에 적용이 안되어 정지된 점이 생긴다.

- 각 파동은 `absolute`이며 1초동안 `ease-out infinite`
  ```css
  .ripple-loader div {
    position: absolute;
    border: 4px solid #454ade;
    border-radius: 50%;
    animation: ripple-loader 1s ease-out infinite;
  }
  ```

[home](https://github.com/bepyan/30_seconds_of_code)
