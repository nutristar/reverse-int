module.exports = function reverse (n) {
    let nn=Math.abs(n)
    nn=String(nn);
    let new_list=[];
    for (let j=nn.length-1; j>=0; j--){
        new_list.push(nn[j])

    };
    return new_list.join("");
  
}


// reverse(123); // 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059
