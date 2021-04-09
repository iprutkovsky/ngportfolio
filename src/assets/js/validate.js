$(".fullname .email-input").on("input", function () {
    let validateName = name => /[A-Za-z]{3,}/.test(name),
        validateEmail = email => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    let name = $(".fullname"),
        email = $(".email-input");

    name.text("");
    email.text("");

    !validateName(name.val()) ? name.css("color", "rgb(238, 53, 53)") : name.css("color", "rgb(51, 51, 51)");
    !validateEmail(email.val()) ? email.css("color", "rgb(238, 53, 53)") : email.css("color", "rgb(51, 51, 51)");
});