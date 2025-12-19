function calculateBmi() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if(weight === "" || height === "") {
        alert("Proszę uzupełnić pola formularza!!!");

        return ;
    }

    height /= 100.0;

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("bmi").innerHTML = "Rezultat: " + bmi;
}

//<button onclick="calculateBmi()">oblicz</button>