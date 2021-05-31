[home](https://github.com/bepyan/30_seconds_of_code)

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
    
    hover에서 돌아올 때 에니메이션이 생기도록 해준다.
    
    ```css
    .perspective-left:hover {
        transform: perspective(3000px) rotateY(5deg);
    }
    ```
    
    `rotate-right`로 반대 방향 회전시켜줘도 된다.
       
 
- Image Card 만들기

    레이아웃 관련
    ```css
    display: inline-block;
    box-sizing: border-box;
    margin: 1rem;
    padding: 8px;
    ```

    이미지 
    ```css
    width: 240px;
    height: 320px;
    border-radius: 1rem;

    background-image: url("https://picsum.photos/id/1049/240/320");
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    ```

[home](https://github.com/bepyan/30_seconds_of_code)