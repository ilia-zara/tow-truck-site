/* eslint-disable no-console */

function sendForm() {
  const form = document.getElementById("form-call");

  function formAddError(input) {
    input.classList.add("error");
  }

  function formRemoveError(input) {
    input.classList.remove("error");
  }

  function formValidate(form) {
    let error = 0;
    const formRequired = document.querySelectorAll(".required");

    formRequired.forEach((elem) => {
      formRemoveError(elem);
      if (elem.value === "") {
        formAddError(elem);
        error += 1;
      }
    });
    return error;
  }

  async function formSend(e) {
    e.preventDefault();

    const error = formValidate(form);
    const formData = new FormData(form);

    if (error === 0) {
      form.classList.add("loading");
      const response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove("loading");
      } else {
        alert("Ошибка отправки");
        form.classList.remove("loading");
        form.reset();
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  form.addEventListener("submit", formSend);
}

export default sendForm;
