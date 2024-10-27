function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element != null) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
