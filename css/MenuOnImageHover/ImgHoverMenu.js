
const ImgHoverMenu = ({ img, rootList }) => {
    const $root = document.createElement("figure")
    $root.className = "hover-menu"
    $root.innerHTML = `
        <img src=${img}/>
        <div>
            ${rootList.map(v => `
                <a href="${v.href}">${v.name}</a>
            `).join(``)}
        </div>
    `
    return $root
}

document.querySelector("#app").appendChild(ImgHoverMenu({
    img: "http://asq.kr/ZsKrY",
    rootList: [
        { name: "Home", href: "#" },
        { name: "Game", href: "#" },
        { name: "Rank", href: "#" },
    ]
}))