function SendAlert() {
    //This is a test function
    alert("Sup you faka")
}

function ToggleDark() {
    // Called to toggle .dark-mode on body element 
    // Used in aiaccess.html
    document.body.classList.toggle("dark-mode");
}

function draw() {
    const plot = document.getElementById("canvas");
    const ctx = plot.getContext("2d");
    ctx.fillStyle = "#F67280";
    ctx.fillRect(50, 50, 50, 50); 
}