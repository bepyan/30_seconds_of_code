# Rotating Card
https://www.30secondsofcode.org/css/s/rotating-card

### 핵심 코드
```html
<div class="card">
  <div class="card-side front">
    <div>Front Side</div>
  </div>
  <div class="card-side back">
    <div>Back Side</div>
  </div>
</div>
```

- 뒷면 카드를 숨긴다.    
    위치를 겹치고 뒷면을 180도 회전 되어 있게 한다.
    ```css
    .card-side {
        <!-- ... -->
        backface-visibility: hidden;
        position: absolute;
    }
    .card-side.back {
        transform: rotateY(-180deg);
    }
    ```

- hover 할 때 애니메이션을 준다.
    ```css
        .card:hover .card-side.front {
            transform: rotateY(180deg);
        }
        .card:hover .card-side.back {
            transform: rotateY(0deg);
        }
    ```

- `perspective` 속성을 통해 3D 회전 효과를 준다.   
    간단하게 z축이라고 생각하면 될거 같다.
    ```css
    .card {
        perspective: 150rem;
        <!-- ... -->
    }
    ```
