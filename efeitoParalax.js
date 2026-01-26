(function bgParallax() {
    var searchDataFrame = document.querySelectorAll("div, section, article, main, header, footer, aside, span, nav");

    window.addEventListener("scroll", function () {
        var distTopBody = window.scrollY || document.documentElement.scrollTop; // substitui scrollTopPosition()

        for (var i = 0; i < searchDataFrame.length; i++) {
            var dataFrame = searchDataFrame[i].getAttribute("data-frame");

            if (dataFrame) {
                if (distTopBody > 0) {
                    searchDataFrame[i].style.backgroundPosition =
                        "0px -" + parseInt(distTopBody / dataFrame) + "px";
                } else {
                    searchDataFrame[i].style.backgroundPosition = "0px " + distTopBody + "px";
                }
            }
        }
    });
})();