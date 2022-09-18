class MobileNavbar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("hey"));
    } 

    init() {
        if (this.mobileMenu) {
            this.addEventListener();
        }

        return this;
    }
}

const mobileNavbar = new mobileNavbar (
    ".mobile-menu",
    ".ul-nav-bar",
    ".ul-nav-bar li",
);

mobileNavbar.init();