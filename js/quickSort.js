function quickSort(shapesArray) {
    quickSortHelper(shapesArray, 0, shapesArray.length - 1);
    for (shape in shapesArray) {
        console.log(shapesArray[shape].area)
    }
    return shapesArray.reverse(); // Quicksort was implemented in ASCENDING order, so this is a quick fix to have it be in DESCENDING order. Oopsies!
}

function quickSortHelper(shapesArray, startIndex, endIndex) {
    if (startIndex >= endIndex) return;

    let pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;

    while (rightIndex >= leftIndex) {
        if (shapesArray[leftIndex].area > shapesArray[pivotIndex].area && shapesArray[rightIndex].area < shapesArray[pivotIndex].area) {
            swap(leftIndex, rightIndex, shapesArray)
        }

        if (shapesArray[leftIndex].area <= shapesArray[pivotIndex].area) {
            leftIndex++
        }

        if (shapesArray[rightIndex].area >= shapesArray[pivotIndex].area) {
            rightIndex--;
        }
    }

    swap(pivotIndex, rightIndex, shapesArray);

    let leftSubArrayIsSmaller = rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
    if (leftSubArrayIsSmaller) {
        quickSortHelper(shapesArray, startIndex, rightIndex - 1);
        quickSortHelper(shapesArray, rightIndex + 1, endIndex);
    } else {
        quickSortHelper(shapesArray, rightIndex + 1, endIndex)
        quickSortHelper(shapesArray, startIndex, rightIndex - 1)
    }
}

function swap(i, j, shapesArray) {
    let tempArray = shapesArray[j];
    shapesArray[j] = shapesArray[i];
    shapesArray[i] = tempArray;
}
