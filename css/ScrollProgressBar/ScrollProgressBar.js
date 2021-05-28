export const ScrollProgressBar = () => {
    const $div = document.createElement("div");
    $div.className = `scroll-progress`
    
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(document.documentElement.scrollHeight,document.documentElement.clientHeight)


    window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        $div.style.width = `${(scrollTop / height) * 100}%`;
    });

    return $div
}

document.querySelector("#app").appendChild(ScrollProgressBar());
