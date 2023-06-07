function getPos(e) {
    if (!e.target.classList.contains("card")) {
        return;
    }

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor = `X: ${x}   Y:  ${y}`;
    document.getElementById("debug").innerHTML = cursor;

    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 120px)) no-repeat border-box border-box rgba(255, 255, 255, 0.1)`;
}

function stopTracking(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    document.getElementById("debug").innerHTML = "-";
    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 0)) no-repeat border-box border-box rgba(255, 255, 255, 0.1)`;
}
