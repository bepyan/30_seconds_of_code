[home](https://github.com/bepyan/30_seconds_of_code)

# Menu on image hover
https://www.30secondsofcode.org/css/s/image-hover-menu

### 핵심 코드
- `<figure>`에 `img`와 `menu`를 포함시켜 하나의 컴포넌트를 만든다.
    https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure
    ```html
    <figure class="hover-menu">
        <img src="https://picsum.photos/id/1060/800/480.jpg"/>
        <div>
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
        </div>
    </figure>
    ```

- `opacity`, `right` 속성을 통해 애니메이션 구현

    ```css
    .hover-menu img {
        <!-- ... -->
        right: 0;
        opacity: 1;
        transition: 0.3s ease-in-out;
    }
    .hover-menu:hover img {
        opacity: 0.5;
        right: -120px;
    }
    ```
    
    ```css
    .hover-menu div {
        <!-- ... -->
        left: -120px;
        transition: 0.3s ease-in-out;
    }
    .hover-menu:hover div {
        left: 0;
        opacity: 1;
    }
    ```


[home](https://github.com/bepyan/30_seconds_of_code)