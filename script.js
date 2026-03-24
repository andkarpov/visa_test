const data = {
  lt: { visaFree: 182, visaRequired: 16 },
  ru: { visaFree: 118, visaRequired: 80 },
  us: { visaFree: 174, visaRequired: 26 }
};

const select = document.getElementById("countrySelect");
const result = document.getElementById("result");

const visaFreeEl = document.getElementById("visaFree");
const visaRequiredEl = document.getElementById("visaRequired");

select.addEventListener("change", () => {
  const country = select.value;

  if (!country || !data[country]) {
    result.classList.add("hidden");
    return;
  }

  const info = data[country];

  visaFreeEl.textContent = info.visaFree;
  visaRequiredEl.textContent = info.visaRequired;

  result.classList.remove("hidden");
});
