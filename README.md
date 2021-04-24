# File Creator

So (hear me out) there's going to be a form, you'll fill it out, and BAM there's your documents.

I wanted an opportunity to play with TypeScript and Electron - here we are :)

This is for my dad, who's a structural engineer - but I'm hoping once I get it working for him I might be able to make this more dynamic and resuable.

But for now: A bunch of important looking documents need job numbers, client names, addresses etc. in them, in a job number + job name titled folder. Every 100 jobs should be in a new folder i.e. 21000-21099. The 21 is the year.

I _started_ this project in JS when I first graduated EDA. There's potentially some useful code in there but most of the structure is disasterous and I also had things checked into GitHub that I really shouldn't have (lol). While I'm proud of how past me still somehow managed to get (parts of) this app to work, I'm also proud of how far I've come since then and have decided it would be easier to start from scratch. Once I get the skeleton of this project set up, I will migrate what I can from the old repo over though.


## Todo
_This list is rendered essentially as my inner dialogue. More of the todos are 'think about this again' than actual tasks, but that's okay._
- [x] make reacty decisions - hooks? redux? probably figuring out what state i need to manage would be a good start
- [x] understand how to do more things in TypeScript before hacking away too much
- [x] do some hacking though, it's fun
- [x] decide on a half decent structure for the whole IPC situation (`contextBridge`/`remote`/`ipcMain` and `ipcRenderer`/is async necessary for user experience/do we wanna do it that way regardless??)
- [x] create templates (currently built for the `docx-templates` module - might look into other ones though/would love to accomodate other filetypes)
- [ ] create an example template folder in this repo (once you decide how the templates are going to look though (and if they need to be based on decided schema?))
- [ ] add start of documentation to this repo/remember to continue to update it as you do things
- [ ] add how to run this app in dev mode instructions
- [ ] remember that you're probably going to want `dialogue` and maybe `Menu` from electron
- [ ] and maybe persist where they decide to save things for brownie points
- [ ] steal and reform from last time:
  - [ ] form (WHY DID I DO IT ALL IN ONE COMPONENT OH GOSH)
  - [ ] fields displayed in the form are based on user's chosen files to be created (this was cute)
  - [ ] creation of the files
  - [ ] some data validation
- [ ] if they leave a field empty... warn + then leave placeholder in the document? Probably.
- [ ] manage if the dir/file already exists (warn on file overwrite)

### More ideas/refactorings:
- [ ] They store everything 365 - do you reckon they have an API i could write to
  - [ ] Maybe if I just save the files in a place that syncs with 365??
- [ ] They create the jobs in WorkFlowMax - could it pull the job data from there? Bypass the form entirely??
    - [ ] Admittedly you might want not a desktop app if you're creating web hooks idk man i'm having fun brainstorming
- [ ] Warn if job number exists under different client name
- [ ] Form is based on decided schema, templates created based on that
  - [ ] Can they update the schema? Will they want to? Will I want them to?
- [ ] Check for templates dir on startup - if not there help them set up, with instructions?
- [ ] Can templates be built as part of the app? Ugh that would be sexy but how I want it feels hard. I'll hold out hope
- [ ] User can edit the file naming conventions
- [ ] Store data from a batch of files when they are created - repopulate the form to edit job info (rather than starting with an empty form)
  - [ ] What does this look like for if the data structure is updated?
