const RatatingCard = ({ FrontDiv, BackDiv }) => {
    const $div = document.createElement("div")
    $div.className = `card`
    $div.innerHTML = `
        <div class="card-side front"></div>
        <div class="card-side back"></div>
    `
    $div.querySelector(".front").appendChild(FrontDiv())
    $div.querySelector(".back").appendChild(BackDiv())

    return $div
}

document.querySelector("#app").appendChild(RatatingCard({
    FrontDiv: () => {
        const $rt = document.createElement("div")
        $rt.innerHTML = `my front`
        return $rt;
    },
    BackDiv: () => {
        const $rt = document.createElement("div")
        $rt.innerHTML = `my back`
        return $rt;
    }
}))