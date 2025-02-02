$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
$(document).ready(function(){
    var $search = $("#search");
    var $suggestions = $("#suggestions");

    // Відкриваємо список при фокусі
    $search.on("focus", function() {
        $suggestions.fadeIn(100);
    });

    // Фільтрація списку при введенні тексту
    $search.on("input", function() {
        var value = $(this).val().toLowerCase();
        $("#suggestions li").each(function() {
            $(this).toggle($(this).text().toLowerCase().includes(value));
        });
    });

    // Закриваємо список при кліку поза ним
    $(document).on("click", function(e) {
        if (!$(e.target).closest(".search-container").length) {
            $suggestions.fadeOut(100);
        }
    });

    // Закриваємо список при втраті фокусу (але не при кліку на список)
    $search.on("blur", function() {
        setTimeout(function() {
            $suggestions.fadeOut(100);
        }, 200); // Невелика затримка для обробки кліка на список
    });

});
