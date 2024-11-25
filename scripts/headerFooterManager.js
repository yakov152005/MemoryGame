class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p style="display: flex; justify-content: space-around; background-color: aliceblue; padding: 10px;">
                <a href="./game.html">Game</a>
                <a href="./about.html">About</a>
                <a href="./creator.html">Creator</a>
            </p>
        `;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p style="display: flex; justify-content: space-around; background-color: aliceblue; padding: 10px;">©Yakov Ben-Hemo</p>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
