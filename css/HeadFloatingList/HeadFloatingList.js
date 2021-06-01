

const HeadFloatingList = (props) => {
    const $div = document.createElement("div")
    $div.className = `floating-stack`
    $div.innerHTML = `
        <dl>
            ${props.map(v => `
                <dt>${v.title}</dt>
                ${v.list.map(text => `
                    <dd>${text}</dd>
                `).join(``)}   
            `).join(``)}
        </dl>
    `
    return $div;
}

document.querySelector("#app").appendChild(HeadFloatingList([
    { title: "A", list: ["AA", "AVB"] },
    { title: "ㅎ", list: ["ㅎㅎ", "ㅎㅇB"] },
    { title: "G", list: ["AA", "AVB"] },
    { title: "Z", list: [...Array(100)].map((_,idx) => idx) },

]))