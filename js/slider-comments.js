const data = [
    {
      img: "./images/comment1.png",
      text: "رضا علیپور یک طراح گرافیک و کاشف نوآوری است که به خاطر رویکردش به طراحی رابط  کاربری و تجربه کاربری (UI/UX) شناخته شده است. وی سابقه کار با شرکت‌های  بزرگ تکنولوژی را دارد و در توسعه اپلیکیشن‌ها و وب‌سایت‌های کاربرپسند نقش کلیدی ایفا کرده است. ",
    },
    {
      img: "./images/comment2.png",
      text: "رضا علیپور یک طراح گرافیک و کاشف نوآوری است که به خاطر رویکردش به طراحی رابط  کاربری و تجربه کاربری (UI/UX) شناخته شده است. وی سابقه کار با شرکت‌های  بزرگ تکنولوژی را دارد و در توسعه اپلیکیشن‌ها و وب‌سایت‌های کاربرپسند نقش کلیدی ایفا کرده است. ",
    },
    {
      img: "./images/comment3.png",
      text: "رضا علیپور یک طراح گرافیک و کاشف نوآوری است که به خاطر رویکردش به طراحی رابط  کاربری و تجربه کاربری (UI/UX) شناخته شده است. وی سابقه کار با شرکت‌های  بزرگ تکنولوژی را دارد و در توسعه اپلیکیشن‌ها و وب‌سایت‌های کاربرپسند نقش کلیدی ایفا کرده است. ",
    },
  ];

  let current = 0;
  let isAnimating = false;
  let currentImg = 0;

  function updateSlider() {
    if (isAnimating) return;
    isAnimating = true;

    const prev = (current - 1 + data.length) % data.length;
    const next = (current + 1) % data.length;

    document.getElementById("prev-img").querySelector("img").src =
      data[prev].img;
    document.getElementById("next-img").querySelector("img").src =
      data[next].img;

    const img1 = document.getElementById("center-img-1");
    const img2 = document.getElementById("center-img-2");

    const activeImg = currentImg % 2 === 0 ? img1 : img2;
    const inactiveImg = currentImg % 2 === 0 ? img2 : img1;

    activeImg.classList.remove("active");
    activeImg.style.transform = `translateX(-100%)`;
    activeImg.style.opacity = 0;

    inactiveImg.querySelector("img").src = data[current].img;
    inactiveImg.classList.add("active");
    inactiveImg.style.transform = "translateX(0)";
    inactiveImg.style.opacity = 1;

    currentImg++;

    const description = document.getElementById("description");
    description.classList.remove("show");

    setTimeout(() => {
      description.innerText = data[current].text;
      description.classList.add("show");
      isAnimating = false;
    }, 300);
  }

  function nextSlide() {
    current = (current + 1) % data.length;
    updateSlider();
  }

  function prevSlide() {
    current = (current - 1 + data.length) % data.length;
    updateSlider();
  }

  // Initial load
  window.onload = () => {
    document.getElementById("center-img-1").querySelector("img").src =
      data[current].img;
    document.getElementById("center-img-1").classList.add("active");
    document.getElementById("description").innerText = data[current].text;
    document.getElementById("description").classList.add("show");

    document.getElementById("prev-img").querySelector("img").src =
      data[(current - 1 + data.length) % data.length].img;
    document.getElementById("next-img").querySelector("img").src =
      data[(current + 1) % data.length].img;
  };

  // Auto slide
  setInterval(nextSlide, 4000);