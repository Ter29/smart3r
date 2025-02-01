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
    $(document).ready(function(){
        $(".newTextButton").click(function() {
            let textBox = $(".newText .textBox");
    
            if (textBox.is(":visible")) {
                // Якщо блок уже відображається, ховаємо його
                textBox.fadeOut(300, function() {
                    $(this).remove();
                });
            } else {
                // Якщо блоку немає, додаємо його та показуємо
                if (textBox.length === 0) {
                    $(".newText").html(`
                        <div class='textBox' style='display: none;'>
                            <div class="chart-container">
                                <canvas id="chart1"></canvas>
                                <lavel>HTML</label>
                                <input type="number" id="percent1" min="0" max="100" value="50">
                            </div>
                            <div class="chart-container">
                                <canvas id="chart2"></canvas>
                                <lavel>CSS</label>
                                <input type="number" id="percent2" min="0" max="100" value="70">
                            </div>
                            <div class="chart-container">
                                <canvas id="chart3"></canvas>
                                <label>JS</label>
                                <input type="number" id="percent3" min="0" max="100" value="30">
                            </div>
                            <button class="funnyButton">^_^</button>

                        </div>
                    `);
    
                    $(".textBox").fadeIn(300);
                    
                    // Ініціалізація діаграм
                    initCharts();
                }
            }
        });
    
        function initCharts() {
            let ctx1 = document.getElementById('chart1').getContext('2d');
            let ctx2 = document.getElementById('chart2').getContext('2d');
            let ctx3 = document.getElementById('chart3').getContext('2d');
    
            let chart1 = createChart(ctx1, 70);
            let chart2 = createChart(ctx2, 70);
            let chart3 = createChart(ctx3, 40);
    
            // Оновлення при введенні нового значення
            $("#percent1").on("input", function() {
                updateChart(chart1, $(this).val());
            });
            $("#percent2").on("input", function() {
                updateChart(chart2, $(this).val());
            });
            $("#percent3").on("input", function() {
                updateChart(chart3, $(this).val());
            });
        }
    
        function createChart(ctx, percent) {
            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ["Fulled", "Empty"],
                    datasets: [{
                        data: [percent, 100 - percent],
                        backgroundColor: ["#000000", "#ecf0f1"]
                    }]
                },
                options: {
                    cutout: "70%", // Робить діаграму кільцевою
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    
        function updateChart(chart, percent) {
            chart.data.datasets[0].data = [percent, 100 - percent];
            chart.update();
        }
    });
    $(document).on("click", ".funnyButton", function() {
        alert("Just some interactive on site");
    });
    
});

