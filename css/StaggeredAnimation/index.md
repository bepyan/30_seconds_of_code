[home](https://github.com/bepyan/30_seconds_of_code)

# Staggered Animation

https://www.30secondsofcode.org/css/s/staggered-animation

### π§ ν΅μ¬μ½λ

- `opacity`μ `translateX`μ ν΅ν΄μ μ λλ©μ΄μμ΄ λμλλ€.

  ```css
  .stagger-menu li {
      opacity: 0;
      transform: translateX(100%);
      transition-property: opacity, transform;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.750, -0.015, 0.565, 1.055);
  }
  ```

  `translateX`μ μ΄κΈ° μμΉμ λ°λΌ Staggered μ λλ©μ΄μμ μ λκ° κ²°μ λλ€.    
  `transition-property`λ‘ μ λλ©μ΄μμ΄ μ μ©λ  μμ±μ μ§μ νλ€.

- `transition-delay`μ ν΅ν΄μ λ¦¬μ€νΈκ° μμ°¨μ μΌλ‘ λλλ§ λλ€.
  ```css
  .menu-toggler:checked ~ .stagger-menu li {
    opacity: 1;
    transform: translateX(0);
    transition-delay: calc(0.055s * var(--i));
  }
  ```
  

[home](https://github.com/bepyan/30_seconds_of_code)
