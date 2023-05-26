function itemFind(arr,target){
    let found = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            found = true;
            break;
        }
        if(found){
            return console.log("Target found")
        }else{
            return console.log("Target not found")
        }
    }
}
itemFind([1,2,3,4,5], 3)