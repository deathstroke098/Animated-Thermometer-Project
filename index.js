// {/* <span id="temperature" class="fa"></span> */}  '&#xf2cb

const tempLoad = () => {
    let temp = document.getElementById('temperature');
    temp.innerHTML = "&#xf2cb";

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "green"
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "blue"
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "yellow"
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red"
    }, 4000);

    clearInterval
}

tempLoad()

setInterval(tempLoad , 5000);













