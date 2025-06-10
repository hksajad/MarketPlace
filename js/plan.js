// #1
document.addEventListener("DOMContentLoaded", function () {
  const range = document.getElementById("steps-range");
  const popup = document.getElementById("range-popup");
  const CountSpan = document.getElementById("range-count");
  const labelValues = [10, 120, 220, 500];
  const min = parseFloat(range.min);
  const max = parseFloat(range.max);

  // Labels create
  const labelContainer = document.createElement("div");
  labelContainer.className = "range-labels-2";
  labelValues.forEach((val) => {
    const label = document.createElement("span");
    label.className = "range-label";
    label.dataset.value = val;
    label.textContent = val;
    labelContainer.appendChild(label);
  });
  document.querySelector(".range-wrapper").appendChild(labelContainer);

  // Dots create
  const labels = document.querySelectorAll(".range-label");

  const dotContainer = document.createElement("div");
  dotContainer.className = "range-dots-container";
  labelValues.forEach((val) => {
    const dot = document.createElement("span");
    dot.className = "range-dots";
    dot.dataset.value = val;
    dotContainer.appendChild(dot);
  });
  document.querySelector(".range-wrapper").appendChild(dotContainer);

  // Dots create
  const dots = document.querySelectorAll(".range-dots");

  function updateUI() {
    const value = parseFloat(range.value);
    const percent = (value - min) / (max - min);
    const rangeWidth = range.offsetWidth;

    // موقعیت popup به صورت RTL
    const popupOffset = (1 - percent) * rangeWidth;
    popup.style.left = `${popupOffset}px`;
    popup.textContent = `${value} دانلود`;
    CountSpan.textContent = `${value}` + " " + "دانلود روزانه";

    // پر کردن نوار از راست به چپ
    const fillColor = "rgba(255, 137, 9, 1)";
    const emptyColor = "#EDEDED";
    range.style.background = `linear-gradient(to left, ${fillColor} 0%, ${fillColor} ${
      percent * 100
    }%, ${emptyColor} ${percent * 100}%, ${emptyColor} 100%)`;

    // موقعیت‌دهی
    labels.forEach((label) => {
      const labelValue = parseFloat(label.dataset.value);
      const labelPercent = (labelValue - min) / (max - min);
      const labelOffset = (1 - labelPercent) * rangeWidth;
      label.style.left = `${labelOffset}px`;
    });

    dots.forEach((dot) => {
      const dotValue = parseFloat(dot.dataset.value);
      const dotPercent = (dotValue - min) / (max - min);
      const dotOffset = (1 - dotPercent) * rangeWidth;
      dot.style.left = `${dotOffset}px`;
    });
  }

  // افزودن رویدادها
  range.addEventListener("input", updateUI);
  window.addEventListener("load", updateUI);
  window.addEventListener("resize", updateUI);
});
// #2

document.addEventListener("DOMContentLoaded", function () {
  const range = document.getElementById("steps-range-2");
  const popup = document.getElementById("range-2-popup");
  const timeSpan = document.getElementById("range-time");
  const labelValues = [1, 5, 8, 11];
  const min = parseFloat(range.min);
  const max = parseFloat(range.max);
  console.log(min);

  // Labels create
  const labelContainer = document.createElement("div");
  labelContainer.className = "range-labels-2";
  labelValues.forEach((val) => {
    const label = document.createElement("span");
    label.className = "range-label-2";
    label.dataset.value = val;
    label.textContent = val;
    labelContainer.appendChild(label);
  });
  document.querySelector(".range-wrapper-2").appendChild(labelContainer);

  // Dots create
  const labels = document.querySelectorAll(".range-label-2");

  const dotContainer = document.createElement("div");
  dotContainer.className = "range-dots-container-2";
  labelValues.forEach((val) => {
    const dot = document.createElement("span");
    dot.className = "range-dots-2";
    dot.dataset.value = val;
    dotContainer.appendChild(dot);
  });
  document.querySelector(".range-wrapper-2").appendChild(dotContainer);

  // Dots create
  const dots = document.querySelectorAll(".range-dots-2");

  function updateUI() {
    const value = parseFloat(range.value);
    const percent = (value - min) / (max - min);
    const rangeWidth = range.offsetWidth;

    // موقعیت popup به صورت RTL
    const popupOffset = (1 - percent) * rangeWidth;
    popup.style.left = `${popupOffset}px`;
    popup.textContent = `${value} طرح`;
    timeSpan.textContent = `${value} ` + " " + "طرح اختصاصی ماهانه";

    // پر کردن نوار از راست به چپ
    const fillColor = "rgba(255, 137, 9, 1)";
    const emptyColor = "#EDEDED";
    range.style.background = `linear-gradient(to left, ${fillColor} 0%, ${fillColor} ${
      percent * 100
    }%, ${emptyColor} ${percent * 100}%, ${emptyColor} 100%)`;

    // موقعیت‌دهی
    labels.forEach((label) => {
      const labelValue = parseFloat(label.dataset.value);
      const labelPercent = (labelValue - min) / (max - min);
      const labelOffset = (1 - labelPercent) * rangeWidth;
      label.style.left = `${labelOffset}px`;
    });

    dots.forEach((dot) => {
      const dotValue = parseFloat(dot.dataset.value);
      const dotPercent = (dotValue - min) / (max - min);
      const dotOffset = (1 - dotPercent) * rangeWidth;
      dot.style.left = `${dotOffset}px`;
    });
  }

  range.addEventListener("input", updateUI);
  window.addEventListener("load", updateUI);
  window.addEventListener("resize", updateUI);
});
