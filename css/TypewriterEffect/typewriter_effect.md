# TypewriterEffect
https://www.30secondsofcode.org/css/s/typewriter-effect   
글에게 타이핑 에니메이션을 부여한다.

### Animations
- typing to animate the characters
- blink to animate the caret(커서)

### 핵심코드
- 컨테이너 끝에 커서 에니메이션
    ```css
    .typewriter-effect:after {
        content: " |";
        animation: blink 1s infinite;
        animation-timing-function: step-end;
    }
    ```
    - `animation-timing-function: step-end` Describes how the animation will progress over one cycle of its duration. 끝나자마자 바로

- 자바스크립트를 사용하여 글을 입력하고 `--characters`를 통해 글씨 길이 정보를 css에게 넘겨준다.
    ```js
    const typeWriter = document.getElementById('typewriter-text');
    typeWriter.innerHTML = "Lorem ipsum dolor sit amet.";
    typeWriter.style.setProperty('--characters', text.length);
    ```

    ```css
    .typewriter-effect > .text{
        <!-- ... -->
        animation: typing 3s steps(var(--characters)) infinite;
    }
    ```
    - `steps` 단계별로 에니메이션 적용, 사용하지 않으면 `ease`한 움지김(멋있는 슬라이드?)이다.

- keyframes
    ```css
    @keyframes typing {
        75%,
        100% {
            max-width: calc(var(--characters) * 1ch);
        }
    }

    @keyframes blink {
        0%,
        75%,
        100% {
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
    }
    ```
    - `calc` CSS3에서 계산 처리를 위해 사용. 
    