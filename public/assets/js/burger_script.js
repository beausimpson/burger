$(function () {
    $("#devour-button").on("click", function(event) {
        var id = $(this).data("id");

        // var devourStatus = $(this).data("devour");

        var devourState = {
            devoured: true
        };
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(function () {
            console.log("put works")
            location.reload();

        })
    });
});
