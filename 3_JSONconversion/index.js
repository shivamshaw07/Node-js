const data = {
    name : "Shivam",
    age : 19,
    dep : "CSE" 
}

console.log(data)
console.log(JSON.stringify(data))
const biodata = JSON.stringify(data)
console.log(biodata)
const biodata2 = JSON.parse(biodata)
console.log(biodata2)