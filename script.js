function calculatePlanetAges() {
  const dob = document.getElementById('dob').value;
  if (!dob) return alert("Please enter your birth date!");

  const birthDate = new Date(dob);
  const today = new Date();
  const ageInYears = (today - birthDate) / (365.25 * 24 * 60 * 60 * 1000);

  const planetYears = {
    mercury: (ageInYears / 0.24).toFixed(1),
    venus: (ageInYears / 0.62).toFixed(1),
    mars: (ageInYears / 1.88).toFixed(1),
    jupiter: (ageInYears / 11.86).toFixed(1)
  };

  for (const planet in planetYears) {
    document.getElementById(planet).textContent = planetYears[planet];
  }

  document.getElementById('planet-ages').classList.remove('hidden');
}