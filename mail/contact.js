$(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        var $submitButton = $("#sendMessageButton");
        $submitButton.prop("disabled", false); // Disable the submit button during AJAX request

        var formData = $(this).serialize(); // Serialize form data

        $.ajax({
            url: "contact.php",
            type: "POST",
            data: formData,
            success: function () {
                // Success message handling
                $('#success').html("<div class='alert alert-success'>Your message has been sent.</div>");
                $('#contactForm').trigger("reset");
            },
            error: function () {
                // Error message handling
                $('#success').html("<div class='alert alert-danger'>Sorry, it seems that our mail server is not responding. Please try again later!</div>");
            },
            complete: function () {
                // Re-enable submit button after AJAX request completes
                setTimeout(function () {
                    $submitButton.prop("disabled", false);
                }, 1000);
            }
        });
    });

    $("a[data-toggle='tab']").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    // Clear success message on focus
    $('#name, #email, #subject, #message').focus(function () {
        $('#success').html('');
    });
});
