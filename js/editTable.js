function editTable(shapesArray) {

    // Clear the table between generation and sorting calls by removind the current row, and creating a new one.
    let shapesTable = document.getElementById("shapesTable");
    let currentShapesRow = document.getElementById("shapesRow");
    currentShapesRow.remove();
    var newShapesRow = shapesTable.insertRow(0);
    newShapesRow.id = 'shapesRow';


    // Adds a shape div for every shape object in array.
    for (shape in shapesArray) {
        var shapeData = document.createElement("TD");
        const shapeDiv = document.createElement("div");

        shapeDiv.style.width = shapesArray[shape].area + 'px'
        shapeDiv.style.height = shapesArray[shape].area + 'px'

        switch (shapesArray[shape].shape) {
            case "Circle":
                shapeDiv.setAttribute('class', "circle")
                shapeDiv.style.width = shapesArray[shape].diameter + 'px'
                shapeDiv.style.height = shapesArray[shape].diameter + 'px'
                shapeData.appendChild(shapeDiv);
                document.getElementById("shapesRow").appendChild(shapeData);
                break;
            case "Square":
                shapeDiv.setAttribute('class', "square")
                shapeDiv.style.width = shapesArray[shape].width + 'px'
                shapeDiv.style.height = shapesArray[shape].width + 'px'
                shapeData.appendChild(shapeDiv);
                document.getElementById("shapesRow").appendChild(shapeData);
                break;

            default:
                break;

        }

    }

}
