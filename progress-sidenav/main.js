// === Variables ===

const elementsToObserve = document.querySelectorAll("section[id]"),
    visibleClass = "visible",
    nav = document.querySelector("nav"),
    navPath = nav.querySelector("svg path"),
    navListItems = [...nav.querySelectorAll("li")],
    navItems = navListItems
        .map((listItem) => {
            const anchor = listItem.querySelector("a"),
                targetID = anchor && anchor.getAttribute("href").slice(1),
                target = document.getElementById(targetID);

            return { listItem, anchor, target };
        })
        .filter((item) => item.target);

// === Functions ===

function drawPath() {
    let path = [],
        pathIndent;

    navItems.forEach((item, i) => {
        const x = item.anchor.offsetLeft - 5,
            y = item.anchor.offsetTop,
            height = item.anchor.offsetHeight;

        if (i === 0) {
            path.push("M", x, y, "L", x, y + height);
            item.pathStart = 0;
        } else {
            if (pathIndent !== x) path.push("L", pathIndent, y);

            path.push("L", x, y);

            navPath.setAttribute("d", path.join(" "));
            item.pathStart = navPath.getTotalLength() || 0;
            path.push("L", x, y + height);
        }

        pathIndent = x;
        navPath.setAttribute("d", path.join(" "));
        item.pathEnd = navPath.getTotalLength();
    });
}
