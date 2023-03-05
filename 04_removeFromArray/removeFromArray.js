const removeFromArray = function(arr, ...args) {
    
    //old solution: no function arguments needed
    // let arr=arguments[0];
    // for(let i=1;i<arguments.length;i++)
    // {
    //     let arg=arguments[i];
    //     for(let j=0;j<arr.length;j++)
    //     {
    //         if(arr[j]===arg)
    //             arr.splice(j,1);
    //     }
    // }
    // return arr;

    let result=[];
    arr.forEach(element => {
        if(!args.includes(element))
            result.push(element);
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
