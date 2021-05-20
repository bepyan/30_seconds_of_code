const CheckBox = ({ title }) => {
    const $div = document.createElement("div");
    $div.innerHTML = `
        <input class="checkbox-input" id="${title}" type="checkbox" />
        <label class="checkbox" for="${title}">
            <span>
                <svg width="12px" height="10px">
                    <polyline points="1.5 6 4.5 9 10.5 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
            </span>
            <span>${title}</span>
        </label>
    `
    return $div
}

document.querySelector('#app').appendChild(CheckBox({ title: "apple" }))