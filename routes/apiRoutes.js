//Dependencies
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let db = require("../db/db.json");

//Routing
module.exports = (app) => {

    //get saved notes
    app.get("/api/notes", function (req,res){
        res.json(db);
    });

    //post new notes
    app.post("/api/notes", function (req,res){
        const myNote = req.body;
        myNote.id = uuidv4(myNote.id);
        db.push(myNote);
        //post the notes to db.json and then json.stringify
        fs.writeFile("db/db.json", JSON.stringify(db), (err)=>{
            if (err) throw err;
        });
        
        res.json(true);
    });
  
    //delete notes
    app.delete("/api/notes/:id", function (req,res){
        const myNoteId = req.params.id;
        db = db.filter((notes, index)=>{
            return myNoteId !== notes.id;
        });

        fs.writeFile("db/db.json", JSON.stringify(db), (err)=>{
            if (err) throw err;
        });

        res.json(true);
    });
};