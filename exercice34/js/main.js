$(".btn").click(function () {
    var value = $("input").val();
    var lien = "https://restcountries.eu/rest/v2/name/"+ value
    $.ajax({
        url: lien,
        success: function (data, statuts, response) {
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
})