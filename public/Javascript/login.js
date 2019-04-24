// $("#signup").click(function () {
//     $("#first").fadeOut("fast", function () {
//         $("#second").fadeIn("fast");
//     });
// });
// $("#signin").click(function () {
//     $("#second").fadeOut("fast", function () {
//         $("#first").fadeIn("fast");
//     });
// });
// $(function () {
//     $("form[name='login']").validate({
//         rules: {
//             email: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//             }
//         },
//         messages: {
//             email: "Please enter a valid email address",
//             password: {
//                 required: "Please enter password",
//             }
//         },
//         submitHandler: function (form) {
//             form.submit();
//         }
//     });
// });
//
// $(function () {
//     $("form[name='registration']").validate({
//         rules: {
//             firstname: "required",
//             lastname: "required",
//             email: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//                 minlength: 5
//             }
//         },
//         messages: {
//             firstname: "Please enter your firstname",
//             lastname: "Please enter your lastname",
//             password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long"
//             },
//             email: "Please enter a valid email address"
//         },
//         submitHandler: function (form) {
//             form.submit();
//         }
//     });
// });

// //Deze functie zorgt ervoor dat een gebruiker kan inloggen met zijn/haar email en wachtwoord.
// window.onload = () => {
//     document.querySelector("#loginForm").onsubmit = (event) => {
//         event.preventDefault();
//         //Pakt de gegevens die worden ingevoerd. Verstuurd deze naar de database.
//         // Wanneer de gegevens machten in de database, wordt de gebruiker ingelogd.
//         let username = document.querySelector("#username").value;
//         let password = document.querySelector("#password").value;
//         let query = `select * from person where password = '${password}' and username = '${username}';`;
//         console.log(query);
//         con.query(query)
//             .done((data) => {
//                 //Wanneer de gegevens bestaat wordt de gebruiker naar zijn eigen pagina verstuurd.
//                 if (data.length === 1) {
//                     session.clear();
//                     session.set("user", data[0]);
//                     window.location = "https://www.google.com";
//                 }
//                 // Als de gebruiker niet bestaat of fout invuld, krijgt hij een melding te zien.
//                 if (data.length === 0){
//                     alert("Wachtwoord en/of gegevens komen niet overeen.")
//                 }
//             })
//             .catch((reason) => {
//             })
//     }
// };