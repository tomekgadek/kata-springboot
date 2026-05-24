class CurrentYearInitializer {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    setCurrentYear() {
        document.getElementById("current-year").textContent = this.currentYear;
    }
}

var currentYear = new CurrentYearInitializer();
currentYear.setCurrentYear();
