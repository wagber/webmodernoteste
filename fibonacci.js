function Fibo(valor){
    let n1 = 0;
    let n2 = 1;
    let n3 = 1;

    for(let i = 0; i < valor; i++){
        
        n1 = n2 + n3
        n2 = n3
        n3 = n1
        console.log(n3)
    }
    
}
Fibo(10)