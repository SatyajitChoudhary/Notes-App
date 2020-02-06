const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'Add a note !',
    builder:{
        tittle:{
            describe:"Tittle of the note",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:"Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.tittle,argv.body);
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove a note !',
    builder:{
        tittle:{
            describe:"To remove this tittle",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNotes(argv.tittle);
    }
})

yargs.command({
    command: 'list',
    description: 'List a note !',
    handler(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note !',
    builder:{
        tittle:{
            describe:"Tittle of note",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.tittle)
    }
})

// console.log(process.argv)
console.log(yargs.argv)


