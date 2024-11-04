const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm_password = document
    .getElementById("confirm_password")
    .value.trim();
  const errors = [];

  //validation
  if (username.length == 0) {
    Toastify({
      text: "Username can't be blank",
      duration: 1000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#DF1C24",
      },
    }).showToast();
    return;
  }

  //validation
  if (email.length == 0) {
    Toastify({
      text: "Email can't be blank",
      duration: 1000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#DF1C24",
      },
    }).showToast();
    return;
  }

  //validation
  if (password.length == 0) {
    Toastify({
      text: "Password can't be blank",
      duration: 1000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#DF1C24",
      },
    }).showToast();
    return;
  }

  //validation
  if (password !== confirm_password) {
    Toastify({
      text: "Passwords must match",
      duration: 1000,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#DF1C24",
      },
    }).showToast();
    return;
  }

  //axios

  axios
    .post(
      "http://localhost/auth_with_mysql/server/data.php",
      {
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
      // validation
      if (response.data.status === "success") {
        Toastify({
          text: "Success! 😊",
          duration: 1000,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
        }).showToast();
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
      } else {
        Toastify({
          text: "Something went wrong",
          duration: 1000,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
        }).showToast();
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  // if(username === '')
  //     errors.push("Username can't be blank");
  // if(email === '')
  //     errors.push("Email can't be blank");
  // if(password === '')
  //     errors.push("Password can't be blank");
  // if(password !== con_Password)
  //     errors.push("Passwords must match");

  // if(errors.length > 0)
  // {
  //     for(let i = 0; i < errors.length; i++)
  //     {
  //         Toastify({
  //             text: errors[i],
  //             duration: 1000,
  //             gravity: "top",
  //             position: "center",
  //             style: {
  //                 background: "#DF1C24"
  //             }
  //         }).showToast();
  //     return;
  //     }
  // }
  // else
  // {
  //     Toastify({
  //         text:"Success! 😊",
  //         duration: 1000,
  //         gravity: "top",
  //         position: "center",
  //         style: {
  //             background: "#4bab4e"
  //         }
  //     }).showToast();
  //     return;
  // }
});
