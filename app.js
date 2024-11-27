//Math object
const resultEl = document.getElementById("result");

function calculation(distance, angle){

    const height = parseFloat(distance*Math.tan(angle*Math.PI/180));
    const heightRound = height.toFixed(2);
    return heightRound; 
}

height = calculation(20,45);

resultEl.innerText = `The height of the building is = ${height} meter`;




