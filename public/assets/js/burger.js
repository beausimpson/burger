$(function () {
    $("#devour-button").on("click", function(event) {
        var id = $(this).data("id");

        var devourStatus = $(this).data("devour");

        var devourState = {
            devoured: devourStatus
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(function () {
            console.log("click works")
            location.reload();

        })
    });
});
