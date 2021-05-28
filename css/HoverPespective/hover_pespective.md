# Perspective transform on hover
https://www.30secondsofcode.org/css/s/hover-pespective

perspective: 원근법
### 핵심코드
- `transform`의 `perspective()`과 `rotateY()`를 사용한다.

    ```css
    .perspective-left {
        transform: perspective(1500px) rotateY(15deg);
        transition: transform 1s ease 0s;
    }
    ```
    
    - hover에서 돌아올 때 에니메이션이 생기도록 해준다.
    
    ```css
    .perspective-left:hover {
        transform: perspective(3000px) rotateY(5deg);
    }
    ```
- hover될 때 `transform` 에니메이션이 되도록
    ```

    ```