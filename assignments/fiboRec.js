function fiboRec(){

    function fiboCheck(num){
        let n1, n2, nextNum;
        n1 = 0; n2 = 1; 
        if(num <= 0){
            console.log("There is no fibo for 0 and less than 0")
        }
        else if(num === 1){
            console.log("1's fibo is 1")
        }else{
        for(let i=0; i<=num; i++){
           nextNum = n1 + n2;
           n1 = n2;
           n2 = nextNum;
        }
        }return nextNum;
    }
    console.log(fiboCheck(6))
}
fiboRec(5)