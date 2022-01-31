//Dependencies
const fs = require('fs');
//uuid is used to create random id
const { v4: uuidv4 } = require('uuid');

// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on notes

let db = require("../db/db.json");

//Routing
module.exports = (app) => {
     // API GET Requests
    //get saved notes
    app.get("/api/notes", function (req,res){
        res.json(db);
    });
    // API POST Requests
    //post new notes
    app.post("/api/notes", function (req,res){
        const newNote = req.body;
        newNote.id = uuidv4(newNote.id);
        db.push(newNote);
        //post the notes to db.json and then json.stringify
        fs.writeFile("db/db.json", JSON.stringify(db, null, 2), (err)=>{
            if (err) throw err;
        });
        
        res.json(true);
    });
  
    //delete notes
    app.delete("/api/notes/:id", function (req,res){
        const myNoteId = req.params.id;
        //delete the note with matching ID
        db = db.filter((notes, index)=>{
            return myNoteId !== notes.id;
        });
        //JSON.stringify(value, replacer, space), maximum value is 10
        fs.writeFile("db/db.json", JSON.stringify(db, null, 2), (err)=>{
            if (err) throw err;
        });

        res.json(true);
    });
};