/**
 * Created by 83387 on 2015/7/28.
 */
$().ready(function () {
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
    });
});