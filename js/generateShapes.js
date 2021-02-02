function generateShapes() {

    let circlesArray = []
    let squaresArray = []
    let shapesArray = []

    for(let i = 0; i < 50; i++){
        circlesArray.push(new Circle("Circle", Math.floor(Math.random() * 100) + 1))
        squaresArray.push(new Square("Square", Math.floor(Math.random() * 100) + 1))
    }

    //  Circle objects will be at indicies 0 - 49, Square objects at indicies 50 - 99.
    shapesArray = circlesArray.concat(squaresArray)
    editTable(shapesArray)

    console.log(circlesArray[5].toString())
    
    return shapesArray
}
