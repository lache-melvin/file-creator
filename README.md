# File Creator

This app will accept document templates and create a form of the required fields to be filled out upon the creation of the files.

I wanted an opportunity to play with TypeScript and Electron - here we are :)

This is for my dad, who's a structural engineer - but I'm hoping once I get it working for him I might be able to make this more dynamic and resuable.

I _started_ this project in JS when I first graduated EDA. There's potentially some useful code in there but most of the structure is disasterous and I also had things checked into GitHub that I really shouldn't have (lol). While I'm proud of how past me still somehow managed to get this app to work, I'm also proud of how far I've come since then and have decided it would be easier to start from scratch. Once I get the skeleton of this project set up, I will migrate what I can from the old repo over though.

Todo:
- [ ] decide on some form of guiding principles, which I will document here when they form
- [ ] make reacty decisions - hooks? redux?
- [ ] understand how to do more things in TypeScript before hacking away too much
- [ ] do some hacking though, it's fun
- [ ] understand how to expose fs functions safely with Electron
- [x] create templates
- [ ] create an example template folder in this repo
- [ ] add start of documentation to this repo
- [ ] add how to run this app in dev mode instructions
- [ ] setup env vars for paths to template folder and where-to-save folder
- [ ] steal and reform from last time:
  - [ ] form
  - [ ] fields displayed in the form are based on user's chosen files to be created
  - [ ] data validation
  - [ ] how I'm doing the whole required fields situation
  - [ ] creation of the new dir/file paths
  - [ ] creation of the files
- [ ] manage if the dir/file already exists (warn on file overwrite)

More ideas:
- [ ] Form fields created by querying the placeholders in the templates
- [ ] User can edit the form (in a constrained manner)
- [ ] How to manage them updating the templates -> an edited form updating
- [ ] Check for templates dir on startup - if not there help them set up
- [ ] User can edit the file naming conventions
- [ ] Store data from a job when it is created - repopulate the form to edit job info (rather than starting empty and rewriting)
  - [ ] What does this look like for when templates/data structure is updated?
  - [ ] Versions?
- [ ] Warn if job number exists under different client name
