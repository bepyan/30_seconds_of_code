[home](https://github.com/bepyan/30_seconds_of_code)

# Custom checkbox

https://www.30secondsofcode.org/css/s/custom-checkbox
> CSS, Visual, Animation

### 🧐 핵심 코드

- 디폴트 `<input>` UI는 숨긴다. `<label>`로 체크박스 전체 UI를 보여준다.

    ```html
    <input class="checkbox-input" id="apples" type="checkbox" />
    <label class="checkbox" for="apples">
        <span>
            <svg width="12px" height="10px">
                <use xlink:href="#check"></use>
            </svg>
        </span>
        <span>Apples</span>
    </label>
    ```
    ```css
    .checkbox-input {
        position: absolute;
        visibility: hidden
    }
    ```
    ```css
    .checkbox {
        user-select: none;
        cursor: pointer;
        padding: 6px 8px;
        border-radius: 6px;
        overflow: hidden;
        transition: all .3s ease;
        display: flex
    }
    ```

- `<svg>`를 통해 check `<symbol>`을 만들고 채크박스의 `<use>`를 통해 재활용한다.
    ```html
    <svg class="checkbox-symbol">
        <symbol id="check" viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            </polyline>
        </symbol>
    </svg>
    ```


- `stroke-dashoffset`를 통해 체크 그리기 에니메이션
    ```css
    .checkbox span:first-child svg {
        <!-- ... -->
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all .3s ease;
        transform: translate3d(0, 0, 0)
    }
    .checkbox-input:checked+.checkbox span:first-child svg {
        stroke-dashoffset: 0
    }
    ```
    `transform: scale(0.9)`통해 체크 줌인 에니메이션
    ```css
    .checkbox-input:checked+.checkbox span:first-child {
        background: #07f;
        border-color: #07f;
        animation: zoom-in-out 0.3s ease;
    }
    @keyframes zoom-in-out {
        50% {
            transform: scale(.9)
        }
    }
    ```
    `transition: all .3s ease`통해 hover, click 에니메이션
    ```css
    .checkbox {
        <!-- ... -->
        transition: all .3s ease;
    }
    .checkbox:hover {
        background: rgba(0, 119, 255, .06)
    }

    .checkbox span:first-child {
        <!-- ... -->
        transition: all .3s ease
    }
    ```

[home](https://github.com/bepyan/30_seconds_of_code)