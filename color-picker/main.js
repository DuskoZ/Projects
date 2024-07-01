var colorNames = {
    "#000000": "Black",
    "#ffffff": "White",
    // Add more color mappings as needed
};

function generateGradient() {
    var color1 = "#" + Math.random().toString(16).substr(2, 6);
    var color2 = "#" + Math.random().toString(16).substr(2, 6);

    $(".color").each(function (index) {
        var gradientColor = interpolateColor(color1, color2, index / 3); // 3 is the number of color blocks

        $(this).css("background-color", gradientColor);
        $(this).children(".color-hex").text(gradientColor);
        $(this)
            .children(".color-name")
            .text(colorNames[gradientColor.toUpperCase()] || "Unknown");
    });
}
