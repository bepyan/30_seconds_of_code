[home](https://github.com/bepyan/30_seconds_of_code)

# Cursor Tracking Button

https://www.30secondsofcode.org/css/s/mouse-cursor-gradient-tracking

### 🧐 핵심코드

- `--x`, `--y` 두개의 css 변수로 커서의 위치를 트래킹한다.
    ```css
    .mouse-cursor-gradient-tracking:before {
        left: var(--x);
        top: var(--y);
        <!-- ... -->
    }
    ```
    `mousemove` 이벤트로 css 변수를 할당한다.   
    `getBoundingClientRect()` 로 버튼의 위치를 가져온다.
    ``` js
    btn.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    });
    ```

- `--size` css 변수를 통해 그라디에이션의 범위를 조절한다.
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

[::before가 궁금하다면?](https://developer.mozilla.org/ko/docs/Web/CSS/::before)   
- `::before`는 선택한 요소의 첫 자식으로 의사 요소(가상 요소)를 하나 생성한다.
- `content`를 통해 장식용 콘텐츠를 추가한다.

[home](https://github.com/bepyan/30_seconds_of_code)