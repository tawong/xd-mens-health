$(function () {
    $("a.dropdown").click(function () {
        var filter = $(this).data("filter");

        $("div.hidden").each(function () {
            var type = $(this).data("parent");
            if (type == filter) {
                $(this).toggleClass("active");
            }
        });
    });

    $(document).on('click', '.report-head', function () {
        $(this).next().slideToggle();

    });

});
