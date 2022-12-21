class servicesPatterns {
  constructor() {
    this.services = document.querySelectorAll("[data-services]");
    this.event();
  }

  event() {
    this.services.forEach((item) => {
      item.addEventListener("click", (e) => this.light(e));
    });
  }

  light(e) {
    let tar = e.target;
    let key = document.querySelectorAll(`#services[data-link]`);
    key.forEach((item) => {
      item.classList.remove(
        "bg-clip-text",
        "text-transparent",
        "bg-gradient-to-r",
        "from-gradientTo",
        "to-gradientFrom"
      );
      if (tar.dataset.link == item.dataset.link) {
        item.classList.add(
          "bg-clip-text",
          "text-transparent",
          "bg-gradient-to-r",
          "from-gradientTo",
          "to-gradientFrom"
        );
        item.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

export default servicesPatterns;
