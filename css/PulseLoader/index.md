[home](https://github.com/bepyan/30_seconds_of_code)

# Pulse Loader

https://www.30secondsofcode.org/css/s/pulse-loader

### π§ ν΅μ¬μ½λ

- μλλ©μ΄μμ λμμν€λ keyframes

  ```css
  @keyframes ripple-loader {
    0% {
      top: 32px;
      left: 32px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 64px;
      height: 64px;
      opacity: 0;
    }
  }
  ```
  μμ μ€μ¬μμ νλμ΄ νΌμ ΈμΌ νκΈ°μ `100%`λ `64px`μ μ λ° μμΉλ‘.

- `animation-delay`λ₯Ό ν΅ν΄μ νλ ν¨κ³Όλ₯Ό μ€λ€.

  ```css
  .ripple-loader div:nth-child(2) {
    animation-delay: -0.5s;
  }
  ```

  λλ μ΄λ₯Ό `-` ν΄μ£Όλ μ΄μ  -> μμλ‘ λλ μ΄κ° μκΈ°λ©΄ μ΄κΈ° μλλ©μ΄μ μ€νν  λ `0% keyframes`μ μ μ©μ΄ μλμ΄ μ μ§λ μ μ΄ μκΈ΄λ€.

- κ° νλμ `absolute`μ΄λ©° 1μ΄λμ `ease-out infinite`
  ```css
  .ripple-loader div {
    position: absolute;
    border: 4px solid #454ade;
    border-radius: 50%;
    animation: ripple-loader 1s ease-out infinite;
  }
  ```

[home](https://github.com/bepyan/30_seconds_of_code)
