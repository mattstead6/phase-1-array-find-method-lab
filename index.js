// code your solution here
 

// function superbowlWin(recordsArray){
//     const foundRecord = recordsArray.find(record => record.result === "W")
//     return foundRecord
// }


// superbowlWin(record)




function superbowlWin(myArray){
    let win =  myArray.find((rec) => rec.result === "W")
    return (
        win
        ? win.year
        : undefined
    );
}