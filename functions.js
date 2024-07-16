const fs = require("fs")
/////////////////////////////////////////////////////////////////////
//helper functions
 
const savealldata = (allData) => {
    const saveallDataJson  = JSON.stringify(allData)
    fs.writeFileSync("data10.json" , saveallDataJson)
 }

 const loadInfo = () => {
   try { 
       const dataJson = fs.readFileSync("data10.json").toString()
       return  JSON.parse(dataJson)
   }
   catch {
       return []
   }
    
 }
//to add:
  const addPerson = (id , fname , lname , city , age) => {
       const allData = loadInfo()
       const duplicatedData = allData.filter((obj) =>{
         return obj.id===id
       })
       if(duplicatedData.length==0){
       allData.push({
         id : id,
         fname : fname,
         lname : lname, 
         city : city,
         age : age
       })
      savealldata(allData)
  }
  else{
    console.log("ERROR DUPLICATE DATA")
  }
  }
/////////////////////////////////////////////////////////////////////

//delete:
 const deletedDATA = (id)=>{
  const allData= loadInfo()
  const datatokeep = allData.filter((obj) => {
    return obj.id !== id
  })
 // console.log(datatokeep)
  //console.log("you have successfully deleted an item")
  savealldata(datatokeep)
 }

 
//////////////////////////////////////////////////////////

//to read:
const readDATA = (id) => {
  const allData = loadInfo()
  const itemNeeded= allData.find((obj)=>{
  return obj.id==id
 
  })
 // console.log("itemNeeded")
 if(itemNeeded){
  console.log(itemNeeded)
 }
 else{
  console.log("item not found")
 }
}

////////////////////////////

//list
const listDATA = ()=> {
  const allData = loadInfo()
  allData.forEach((obj) => {
    console.log(obj.fname, obj.city)

  });
}
  

 ////////////////////////////////////////////////////////////

 module.exports = {
    addPerson,
    deletedDATA,
    readDATA,
    listDATA
}
