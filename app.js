const yargs = require("yargs")
//const { type } = require("os")
//const fs = require("fs")
const functions = require("./functions")
//add Person
    yargs.command({
       command : "add" ,
       describe : " to add an item",
       builder : {
         fname : {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         lname : {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }
       },
       handler :(Person)=> { 
         functions.addPerson(Person.id , Person.fname , Person.lname , Person.city , Person.age)
       }
   })
   //delete
   yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler : (Person)=> {
       // console.log("you have already deleted an item")
       functions.deletedDATA(Person.id)
    }
 })
 //read
 yargs.command ({
    command : "read",
    describe : "to read an item",
    builder : {
       id : {
          describe : "this is id desc in read command ",
          demandOption : true,
          type: "string"
       }
    },
    handler: (Person) => {
       functions.readDATA(Person.id)
    }

 })
//list
 yargs.command ({
    command : "list",
    describe : "to list data",
    handler : () =>{
       functions.listDATA()
    }
 })
 yargs.parse()