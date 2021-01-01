const array1 =[1,2,3,4,5]

const array2=array1.map((el, index)=>{
    // console.log(`Elements ${index}=`, el)
    const value=el*10
    return value
})

console.log("array2=", array2)