$(document).ready(function () {
    $(".catalog-tabs__nav-item").on("click", function (e) {
        e.preventDefault();

        let navId = $(this).attr("data-id");

        $(".catalog-tabs__nav-item").removeClass(
            "catalog-tabs__nav-item--active"
        );

        $(this).addClass("catalog-tabs__nav-item--active");

        $(".catalog-tabs__group").addClass("catalog-tabs__group--hidden");
        $(".catalog-tabs__group").each(function () {
            let tabId = $(this).attr("data-id");

            if (tabId == navId) {
                $(this).removeClass("catalog-tabs__group--hidden");
            }
        });
    });

    //форма
    $(".catalog-form__file-button, .change-file").on("click", function (e) {
        e.preventDefault();
        $(".catalog-form__file-input").click();
    });

    $(".catalog-form__file-input").change(function () {
        var filename = $(this).val().split("\\").pop();

        $(this).closest(".catalog-form").addClass("catalog-form--change");
        $(".catalog-form__files-select span").text(filename);
    });

    $(".remove-file").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".catalog-form").removeClass("catalog-form--change");
    });

    $(".catalog-form__submit").on("click", function (e) {
        e.preventDefault();
    });

    $(".catalog-form__submit").on("click", function (e) {
        e.preventDefault();
        $(".modal--thanks").removeClass("modal--hidden");
        $(".modal--thanks").arcticmodal({
            afterClose: function (data, el) {
                $(".modal--thanks").addClass("modal--hidden");
            },
        });
    });
});
