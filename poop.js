const boxes = [0,1,2,3,4,5]
const logFirstTwoBoxes = (boxes) => {
    console.log(boxes[0])
    console.log(boxes[1])
}

logFirstTwoBoxes(boxes)

// something like O(4 + 3n)
// can just be simplified into O(n)
// O(n) your adding a loop for every Element