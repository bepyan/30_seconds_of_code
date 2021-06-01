# List with floating section headings

https://www.30secondsofcode.org/css/s/floating-list-titles

### dl, dt, dd 이란?
- dt: 상위, 추상적 개념
- dd: 하위, 구체적 내용   
https://www.notion.so/bepyan/dl-dt-dd-ol-ul-a4258d2e0f064846ad0b4713cd887945


### 핵심 코드

- `overflow-y: auto` 통해 스크롤하게 한다.
    ```css
    
    .floating-stack {
        <!-- ... -->
        height: 40vh;
        overflow-y: auto;
    }
    ```
    `vh`는 전체 현제 화면의 퍼센테이지를 뜻한다.

- `dl`의 `display: grid`로 설정하여 2개의 칼럼을 만들고 `dt` `dd`에 칼럼을 지정해준다.
    ```css
    .floating-stack>dl {
        <!-- ... -->
        display: grid;
        grid-template-columns: 2.5rem 1fr;
    }
    .floating-stack dt {
        <!-- ... -->
        grid-column: 1;
    }
    .floating-stack dd {
        <!-- ... -->
        grid-column: 2;
    }
    ```

- `dt`의 `position: sticky; top: .5rem`로 설정하여 floating 효과를 만든다.
    ```css
    .floating-stack dt {
        position: sticky;
        top: 0.5rem;
        <!-- ... -->
    }
    ```