const defaultProps = {
    img: String,
    width: String,
    height: String,
    rotateRight: Boolean,
}

const PespectiveImgCard = (props = defaultProps) => {
    const $div = document.createElement("div");
    $div.className = `image-card perspective-${props.rotateRight ? "right" : "left"}`;

    $div.style.width = props.width;
    $div.style.height = props.height;
    $div.style.backgroundImage = `url(${props.img}`;
    return $div;
}

const DefaultImgCard = PespectiveImgCard();
const ImgCard = PespectiveImgCard({ right: true, width: 300, height: 400, img: 'https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126.jpg?w=636&h=424' });

const $app = document.querySelector("#app");
$app.appendChild(DefaultImgCard)
$app.appendChild(ImgCard)