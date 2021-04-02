var x = 0;
$(".mb-3").keyup(function () {
    x++;

    if (x <= 5) {
        $(".mb-3").addClass("is-valid")
    }else{
        $(".mb-3").addClass("is-invalid")

    }
})