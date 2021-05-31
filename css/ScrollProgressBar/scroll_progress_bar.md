[home](https://github.com/bepyan/30_seconds_of_code)

# Scroll Progress Bar
https://www.30secondsofcode.org/css/s/scroll-progress-bar

### 핵심코드
- `position`과 `z-index`로 상단에 고정시킨다.

    ```css
    position: fixed;
    top: 0;
    height: 4px;
    background: #7983ff;
    z-index: 10000;

    width: 0%;
    ```

-  `scroll event`를 통해서 현재 높이를 가져온다.
    
    ```js
    // 전체 높이
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // 현재 높이
    window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // style의 `width`를 조절하여 progress를 나타낸다.
        scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
    });
    ```

    - `document.documentElement` 읽기 전용 속성은 문서의 루트 요소를 나타내는 Element를 반환 (ex html)


<br>

TMI [더 상세한 공부](https://www.notion.so/bepyan/Scroll-0ff166aecf9b4d458e771c62a099dc6b)

- 브라우저 스크롤바 없애기

    ```css
    .body {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    .body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    ```

[home](https://github.com/bepyan/30_seconds_of_code)