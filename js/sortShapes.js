function sortShapes(shapesArray) {
    let sortedShapesArray = quickSort(shapesArray)
    editTable(sortedShapesArray);

    // Old school way of changing button to succusful state :)
    document.getElementById("sortButton").classList.remove('btn-primary');
    document.getElementById("sortButton").classList.add('btn-success');
    document.getElementById("sortButton").innerHTML = "Sorted!"
}
