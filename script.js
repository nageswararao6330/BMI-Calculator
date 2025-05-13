function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weight').value);

  if (height > 0 && weight > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25.9) {
      category = "Normal weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    document.getElementById('result').style.color = category === "Underweight" 
      ? "#ff6347" 
      : category === "Normal weight" 
      ? "#4caf50" 
      : "#ff9800";

    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).`;
  } else {
    document.getElementById('result').style.color = "red";
    document.getElementById('result').innerHTML = "Please enter valid height and weight.";
  }
}