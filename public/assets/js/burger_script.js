
$(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: id
    }).then(function () {
        console.log("put works")
        location.reload();

    })
});
