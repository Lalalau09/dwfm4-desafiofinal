function addFooter (el){
    const footer = document.createElement("div")
    footer.innerHTML = `<div class="footer">
    <div class="footer-logo">
        <img src="./img/logo.png" alt="" class="logo">
    </div>
    <div class="redes-container">
        <div class="footer-inst">
            <a href="https://instagram.com/meeklau" class="inst">Instagram</a>
            <img src="./img/instagram.png" alt="" class="inst-img">
        </div>
        <div class="footer-link">
            <a href="linktr.ee/lic.bissonilaura" class="link">Linkedin</a>
            <img src="./img/linkedin.png" alt="" class="link-img">
        </div>
        <div class="footer-git">
            <a href="https://github.com/Lalalau09" class="git">GitHub</a>
            <img src="./img/github.png" alt="" class="git-img">
        </div>
    </div>
</div>
    `
    el.appendChild(footer)
}

