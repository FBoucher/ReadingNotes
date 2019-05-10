# Module Summary Generation

## Description

This part of the solution (module) is to generate the reading notes summary. Taking all the unpublished notes from the [My Clippings.txt](data/My%20Clippings.txt), and matching them to the  information previously saved in the database. Then generate a markdown file.

## How it works

- The solution input is a `My Clippings.txt` file (you can see a sample [here](data/My%20Clippings.txt)).
- Get the Global setting to read the current ReadingNotes Number
- Parse the file to extract a list of objects.
    - Use the .Net Core [MyClippings-Parser](https://github.com/FBoucher/MyClippings-Parser)
- For each of the clipping:
    - Extract the Tags, and category
    - create a ReadingNote
    - Fill the ReadingNote with the Clipping details
    - Retreive the saved information based on the title
    - Fill the ReadingNote with safed details
    - Add the ReadingNote to the proper collection (the collection is identified by the first Tag)
- Save as a Json file.
- Generate a Markdown
- Update Setting/ ReadingNotes Number (+1)

## Installation

(more to come)

## Tasks

You can see the current status of the tasks on the [Project board](https://github.com/FBoucher/ReadingNotes/projects/3)

### Wishlist

- [ ] Get the notes
- [ ] Get Global info ( ReadingNotes#)
- [ ] For each note
  - [ ] Find the saved information
  - [ ] Save comment with note information
  - [ ] Get tags
  - [ ] Add the note to summary
  - [ ] Add new unique tags to that summary tags
- [ ] Generate the Summary
- [ ] Save Summary
- [ ] Save Global info

