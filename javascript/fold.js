document.addEventListener("DOMContentLoaded", () => {
  const merchantSection = document.querySelector(".merchant-section");
  const toggle = merchantSection.querySelector(".merchant-toggle");

  toggle.addEventListener("click", () => {
    merchantSection.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wandererSection = document.querySelector(".wanderer-section");
  const toggle = wandererSection.querySelector(".wanderer-toggle");

  toggle.addEventListener("click", () => {
    wandererSection.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const questnpcSection = document.querySelector(".questnpc-section");
  const toggle = questnpcSection.querySelector(".questnpc-toggle");

  toggle.addEventListener("click", () => {
    questnpcSection.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const miscellaneousSection = document.querySelector(".miscellaneous-section");
  const toggle = miscellaneousSection.querySelector(".miscellaneous-toggle");

  toggle.addEventListener("click", () => {
    miscellaneousSection.classList.toggle("active");
  });
});
