document.addEventListener("DOMContentLoaded", () => {
  const nativeCheckboxes = document.querySelectorAll(".native-checkbox");

  nativeCheckboxes.forEach((checkbox) => {
    const dataId = checkbox.getAttribute("data-id");
    const customCheckbox = document.querySelector(`.custom-checkbox[data-id="${dataId}"]`);

    const updateAriaChecked = () => {
      const isChecked = checkbox.checked;
      customCheckbox.setAttribute("aria-checked", isChecked.toString());
    };

    updateAriaChecked();

    checkbox.addEventListener("focus", () => {
      if (checkbox.matches(":focus-visible")) {
        customCheckbox.classList.add("focus-visible");
      }
    });

    checkbox.addEventListener("blur", () => {
      customCheckbox.classList.remove("focus-visible");
    });

    checkbox.addEventListener("change", updateAriaChecked);

    customCheckbox.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        checkbox.checked = !checkbox.checked;
        updateAriaChecked();
        checkbox.dispatchEvent(new Event("change"));
      }
    });
  });
});
