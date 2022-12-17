class servicesPatterns {
  constructor() {
    this.services = document.querySelectorAll(".services");
    this.event();
  }

  event() {
    this.services.forEach((item) => {
      item.addEventListener("click", (e) => this.light(e));
    });
  }

  light(e) {
    let tar = e.target;
    let key = document.querySelectorAll(`[data-link]`);
    key.forEach((item) => {
      item.classList.remove("text-gradientFrom");
      if (tar.dataset.link == item.dataset.link) {
        item.classList.add("text-gradientFrom");
        item.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

export default servicesPatterns;
