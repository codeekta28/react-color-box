function colorDecider(array){
    const rand=Math.floor(Math.random()*array.length);
    return array[rand];
}
export{colorDecider}