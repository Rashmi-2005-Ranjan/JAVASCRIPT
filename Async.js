/*
function hello(){
    console.log("Hello");
}

setTimeout(hello,2000)
*/

/*
console.log("One")
console.log("Two")
setTimeout(()=>{
    console.log("Hello");
},4000)
console.log("Three")
console.log("Four")
*/

function getData(dataId , getNextData){
    setTimeout(()=>{
        console.log("Data",dataId)
        if(getNextData){
            getNextData();
        }
    },2000)
}

//Call Back Hell

getData(1,()=>{
    console.log("Getting Data2......")
    getData(2,()=>{
        console.log("Getting Data3......")
        getData(3,()=>{
            console.log("Getting Data4......")
            getData(4,()=>{
                console.log("All Data Retrived Successfully")
            })
        })
    })
})