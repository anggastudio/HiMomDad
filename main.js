document.getElementById("btn-no").addEventListener("click",function() {
    alert("Wrong answer! Please try again!");
});

document.getElementById("btn-yes").addEventListener("click",function() {
    document.getElementById("btn-yes").style.display = "none";
    document.getElementById("btn-no").style.display = "none";
    document.getElementById("thanks-layout").style.display = "block";
});