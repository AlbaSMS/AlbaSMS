document.addEventListener("DOMContentLoaded", () => {
  // PART 1
  const appNav = document.getElementById("nav-appetizer");
  appNav.addEventListener("click", function (event) {
    event.preventDefault();
    buildAppetizersTab();
  });

  function buildAppetizersTab() {
    removeExistingSection();
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.id = "appetizers-section";
    const heading = document.createElement("h2");
    heading.textContent = "Appetizers";
    section.appendChild(heading);
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.gap = "1em";
    const appetizers = ["Spring Rolls", "Garlic Bread", "Bruschetta", "Stuffed Mushrooms"];
    appetizers.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.textContent = item;
      itemDiv.style.padding = "1em";
      itemDiv.style.backgroundColor = "rgb(253, 236, 250)";
      itemDiv.style.border = "1px solid rgba(0, 0, 0, 0.3)";
      itemDiv.style.borderRadius = "5px";
      container.appendChild(itemDiv);
    });

    section.appendChild(container);
    main.appendChild(section);
    section.scrollIntoView({ behavior: "smooth" });
  }

  // PART 2
  const orderNav = document.getElementById("nav-order");
  orderNav.addEventListener("click", function (event) {
    event.preventDefault();
    buildOrderTab();
  });

  function buildOrderTab() {
    removeExistingSection();
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.id = "order-section";
    const heading = document.createElement("h2");
    heading.textContent = "Order Online";
    section.appendChild(heading);
    const form = document.createElement("form");
    form.action = "https://formspree.io/f/xzzjzbdk";
    form.method = "POST";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.htmlFor = "order-name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "order-name";
    nameInput.name = "name";
    nameInput.required = true;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "order-email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "order-email";
    emailInput.name = "email";
    emailInput.required = true;
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    const orderLabel = document.createElement("label");
    orderLabel.textContent = "Order:";
    orderLabel.htmlFor = "order-text";
    const orderTextarea = document.createElement("textarea");
    orderTextarea.id = "order-text";
    orderTextarea.name = "order";
    orderTextarea.required = true;
    form.appendChild(orderLabel);
    form.appendChild(orderTextarea);
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit Order";
    form.appendChild(submitBtn);
    section.appendChild(form);
    main.appendChild(section);
    section.scrollIntoView({ behavior: "smooth" });
  }

  // PART 3
  const foodNav = document.getElementById("nav-food");
  foodNav.addEventListener("click", function (event) {
    event.preventDefault();
    buildFoodGalleryTab();
  });

  function buildFoodGalleryTab() {
    removeExistingSection();
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.id = "food-section";
    const heading = document.createElement("h2");
    heading.textContent = "Food Pictures Gallery";
    section.appendChild(heading);
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "gallery";
    const imageData = [
      { src: "https://loremflickr.com/300/300/meals?lock=1", alt: "Food 1" },
      { src: "https://loremflickr.com/300/300/meals?lock=2", alt: "Food 2" },
      { src: "https://loremflickr.com/300/300/meals?lock=3", alt: "Food 3" },
      { src: "https://loremflickr.com/300/300/meals?lock=4", alt: "Food 4" },
      { src: "https://loremflickr.com/300/300/meals?lock=5", alt: "Food 5" },
    ];

    imageData.forEach(img => {
      const a = document.createElement("a");
      a.href = img.src;
      const image = document.createElement("img");
      image.src = img.src;
      image.alt = img.alt;
      a.appendChild(image);
      galleryDiv.appendChild(a);
    });

    section.appendChild(galleryDiv);
    main.appendChild(section);

    section.scrollIntoView({ behavior: "smooth" });
  }

  function removeExistingSection() {
    const oldSections = document.querySelectorAll("#appetizers-section, #order-section, #food-section");
    oldSections.forEach(section => section.remove());
  }
});
