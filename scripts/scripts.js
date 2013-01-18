$(document).ready(function () {
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $("form").submit(function () {
        $.getJSON(url,
         {
             tags: $("input").val(),
             tagmode: "any",
             format: "json"
         },
         function (data) {
             $("#imgtbl").html("<tr>");
             $.each(data.items, function (i, item) {
                 $("#imgtbl").last("tr").append("<th><img class='hid' src='" + item.media.m + "'/></th>");

                 if (i == $('select').val()-1) return false;
             });
             $("#imgtbl").append("</tr>");
         });

        return false;
    });

    $('#showbtn').toggleSlide('hid'); // eine kleine plugine
});