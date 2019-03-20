var tableName = 'User',
    formName = 'registerForm';

window.onload = function () {
    $(formName).on('submit', function (e) {
        // dit functie preventeert dat je naar een andere pagina gaat wanneer je op registeer druk.
        e.preventDefault();

        var columns = [];
        var values = [];

        // loop door alle elementen heen die voldoen aan "#form data-input"
        $.each($(formName + " .data-input"), function (index, input) {
            columns.push(input.name)
            values.push(input.value)
        });

        handleRegisterPerson();

        function handleRegisterPerson() {
            var columns = [];
            var values = [];

            $.each($(formName + " .data-input"), function (index, input) {
                columns.push(input.name)
                values.push(input.value)

                var registerPerson = "INSERT INTO " + tableName + " (" + columns.join(", ") + ") VALUES ('" + values.join("', '") + "')"

                console.log(registerPerson);

                databaseManager
                    .query(registerPerson)
                    .done(function (data) {
                        console.log(data);
                    })
                    .fail(function (reason) {
                        alert("Something went wrong. \n Please make sure this account doesn't exist yet.")
                        console.log(reason)
                    });
            });
        }
    })
}
