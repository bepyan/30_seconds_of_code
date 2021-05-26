const TypewriterText = (text) => {
    const $div = document.createElement("div");
    $div.className = `typewriter-effect`
    $div.innerHTML = `
        <div class="text"></div>
    `

    const typeWriter = $div.querySelector('.text');
    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);

    return $div;
}

const Text = TypewriterText('Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.');
document.querySelector('#app').appendChild(Text);