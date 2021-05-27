// https://www.30secondsofcode.org/blog/s/javascript-enum
// JS에서는 enum이 없지만 쉽게 만들 수 있다.
// TS에서는 type 자체로 enum으로 만들 수 있다.

// 방법 1. Object.freeze()
/*
    객체를 동결시켜 더 이상 변경될 수 없게 된다.
    속성은 물론 프로토타입도 변경할 수 없다.
*/
const daysEnum = Object.freeze({
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6
});
console.log(...Object.keys(daysEnum))
// 키를 하나하나 지정해줘하니 불편...


// 방법 2. class
/*
    this로 클래스 내부 변수 접근하고 생성할 수 있다.

    yield 키워드는 제너레이터 함수를 중지하거나 반환한다.
    제너레이터 함수가 정의되면 iterator로 만들어 사용할 수 있다.
*/
class Enum {
    constructor(...keys) {
        keys.forEach((key, i) => this[key] = i);
        Object.freeze(this);
    }

    // ...연산자에 대한 함수
    *[Symbol.iterator]() {
        for (let key of Object.keys(this)) yield key;
    }
}

const daysClassEnum = new Enum(
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
);
console.log(...daysClassEnum)