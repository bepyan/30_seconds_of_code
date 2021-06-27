[home](https://github.com/bepyan/30_seconds_of_code)

# Staggered Animation

https://www.30secondsofcode.org/css/s/staggered-animation

### 🧐 핵심코드

- `opacity`와 `translateX`을 통해서 애니메이션이 동작된다.

  ```css
  .stagger-menu li {
      opacity: 0;
      transform: translateX(100%);
      transition-property: opacity, transform;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.750, -0.015, 0.565, 1.055);
  }
  ```

  `translateX`의 초기 수치에 따라 Staggered 애니메이션의 정도가 결정된다.    
  `transition-property`로 애니메이션이 적용될 속성을 지정한다.

- `transition-delay`을 통해서 리스트가 순차적으로 랜더링 된다.
  ```css
  .menu-toggler:checked ~ .stagger-menu li {
    opacity: 1;
    transform: translateX(0);
    transition-delay: calc(0.055s * var(--i));
  }
  ```
  

[home](https://github.com/bepyan/30_seconds_of_code)
