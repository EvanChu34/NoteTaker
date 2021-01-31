
const fs = require("fs");
const db = require("./db/db.json");

module.exports = function(app){
    
    function writeToDB(notes){
        notes = JSON.stringify(notes);
        console.log(notes);

        fs.writeFileSync("./db/db.json", notes, function(err){
            if(err){
                return console.log(err);
            }
        });
    }
    
    app.post("/api/notes", function(req,res){
        if()


    })





}