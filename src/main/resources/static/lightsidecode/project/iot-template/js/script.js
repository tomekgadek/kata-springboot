/**
 * Przykładowe dane pokoju gościnnego, które użytkownik może wprowadzić i mapować z zewnętrznego API.
 * @typedef {Object} GuestRoomData
 * @property {number} timestamp - Znacznik czasu reprezentujący datę i godzinę danych.
 * @property {string} light - Status światła, może być "ON" lub "OFF".
 * @property {string} temperatures - JSON-owy string zawierający tablicę odczytów temperatur.
 * @property {string} humidities - JSON-owy string zawierający tablicę odczytów wilgotności.
 * @property {number} temperature - Aktualna temperatura w pokoju.
 * @property {number} humidity - Aktualna wilgotność w pokoju.
 */
const guestRoomData = {
    timestamp: 1730650968,
    light: "ON",
    temperatures: "[25, 30, 28, 29, 20, 30, 32, 33, 29, 10]",
    humidities: "[25, 30, 28, 29, 20, 30, 32, 33, 29, 10]",
    temperature: 26,
    humidity: 30
};

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener('click', logout);

const lightStatus = document.getElementById("light-status");
lightStatus.addEventListener('click', changeLightStatus);

/**
 * Inicjalizuje aplikację, aktualizując interfejs użytkownika danymi pokoju gościnnego i opcjonalnie przeładowując wykresy.
 * @param {boolean} chartReload - Czy przeładować wykresy temperatury i wilgotności.
 */
function init(chartReload) {
    document.getElementById("temperature").innerHTML = guestRoomData.temperature;
    document.getElementById("humidity").innerHTML = guestRoomData.humidity;
    document.getElementById("light").innerHTML = guestRoomData.light === "ON" ? "włączone" : "wyłączone";
    document.getElementById("timestamp").innerHTML = formatTimestamp(guestRoomData.timestamp);

    var element = document.getElementById("light-status");
    var bulb = document.getElementById("bulb");

    if (guestRoomData.light === "ON") {
        element.classList.add("on");
        bulb.classList.add("bulb-on");

    } else {
        element.classList.remove("on");
        bulb.classList.remove("bulb-on");
    }

    let labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let valuesT = guestRoomData.temperatures;
    let valuesH = guestRoomData.humidities;

    if(chartReload) {
        generateLineChart(labels, JSON.parse(valuesT), "temperatureChart", "Temperatura - raport", "blue");
        generateLineChart(labels, JSON.parse(valuesH), "humidityChart", "Wilgotność - raport", "red");    
    }
}

init(true);

/**
 * Przełącza status światła między "ON" i "OFF" oraz aktualizuje interfejs użytkownika.
 */
function changeLightStatus() {
    console.log("work...");
    var lightStatus = document.getElementById("light-status").classList.contains('on');

    console.log("lightStatus: ", lightStatus);

    guestRoomData.light = lightStatus ? "OFF" : "ON";

    init(false);
}

/**
 * Przekierowuje użytkownika na stronę logowania.
 */
function logout() {
    window.location.href = "index.html";
}

/**
 * Formatuje znacznik czasu na czytelny dla człowieka ciąg daty i godziny.
 * @param {number} timestamp - Znacznik czasu do sformatowania.
 * @returns {string} Sformatowany ciąg daty i godziny w formacie "DD/MM/YYYY HH:mm:ss".
 */
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
}

/**
 * Generuje wykres liniowy na podstawie dostarczonych danych.
 * @param {Array<number>} labels - Etykiety dla osi X wykresu.
 * @param {Array<number>} values - Punkty danych dla wykresu.
 * @param {string} chartName - ID elementu canvas, w którym zostanie wyrenderowany wykres.
 * @param {string} title - Tytuł wykresu.
 * @param {string} color - Kolor linii wykresu.
 */
function generateLineChart(labels, values, chartName, title, color) {
    let chart = Chart.getChart(chartName);

    if (chart) {
        // Jeśli wykres już istnieje, usuń go
        chart.destroy();
    }

    const data = {
        labels: labels,
        datasets: [{
            label: title,
            fill: true,
            borderColor: color,
            data: values,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    new Chart(document.getElementById(chartName), config);
}
