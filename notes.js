const fs=require('fs')
const chalk=require('chalk')

const addNotes= (tittle,body) =>{
    let notes=loadNotes()

    //find finds the first duplicate note and passes to duplicate_record
    let duplicate_record=notes.find((note) => note.tittle==tittle)

    if(!duplicate_record)
    {   
        let user={}
        user.tittle=tittle
        user.body=body
        notes.push(user)

        saveNotes(notes)
        console.log(chalk.green.inverse("Note is added !"))
    }
    else
    {
        console.log(chalk.red.inverse("Tittle already exists !"))
    }
}

const  loadNotes= () =>{
    try{
        let notes=fs.readFileSync('notes.json')
        return(JSON.parse(notes))
    }
    catch(e)
    {
        return([])
    }
}

const saveNotes=(notes) => fs.writeFileSync("notes.json",JSON.stringify(notes))


const removeNotes= (tittle)=>{ 
    let notes=loadNotes()
    let changedNotes=notes.filter(note => tittle!=note.tittle)

    if(changedNotes.length!=notes.length)
    {
        saveNotes(changedNotes)
        console.log(chalk.bgGreen("Notes with tittle ",tittle," is removed "))
    }
    else{
        console.log(chalk.bgRed("No notes with such tittle exists !"))
    }
}

const listNotes= () =>{
    let notes=loadNotes()
    console.log(chalk.inverse("Your Notes .."))
    notes.forEach(note => {
        console.log(chalk.green(note.tittle))
    });
}

const readNote= (tittle) =>{
    let notes=loadNotes()
    let selected_note=notes.find((note) => tittle===note.tittle)
    //console.log(selected_note)
    if(selected_note)
    {
        console.log(chalk.inverse(" Tittle : ",selected_note.tittle))
        console.log(chalk.green(" Body : ",selected_note.body))
    }
    else{
        console.log(chalk.red("No note found !"))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}