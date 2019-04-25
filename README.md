# Reading Notes
A Solution to get an article to your eReader then collects your notes and generates a post.
This is the third version of the solution. Every times it's to learn new technology. 

## Version 1

Done in Ruby in you can read about it on my post [First step with Ruby: Kindle Clipping Extractor](http://www.frankysnotes.com/2011/11/first-step-with-ruby-kindle-clipping.html). This first version was to automate a process that was taking me at least one hour every week.

## Version 2 

Done with a mix of C# and Azure the goal was to be able to generate the reading summary from anywhere. You can read more about it on my post [How I use Azure Logic App, API App and Function App in my life](http://www.frankysnotes.com/2016/10/how-i-use-azure-app-api-app-and.html)


## Version 3 (in progress)

In this version, we need to manage the entire flow. Meaning that all the information about the post before it sent to the eReader need to be saved in a data source. I want to control as much as possible. 

The solution is in three parts: 

1. Generating a e-book from an article online.
   
   ![GettingPostToEReader][GettingPostToEReader]
    
    (schema from: [ReadingNotes_3-0](Draw_io/ReadingNotes_3-0.html))
2. Generating the summary of the week reconciliation all notes read in one document.
3. Interface to edit the summary.

**Optional**

- Search engine to retrieve notes.
- automatically publish once done.


### Work in Progress

- [ ] Creating an ARM template to deploy in Azure

#### Generating a e-book from an article online.

##### Getting the URL of the post

- [ ] Create the Bookmarklet (javascript code )

##### Removing everything except the post content

- [ ] Logic Apps
   - [x] Receive a URL as querystring parameters
   - [ ] Azure Function(s)
      - [x] Azure Function wrapping Mercury services
      - [x] Add a new property "id" with a GUID value
      - [ ] Create an OpenAPI definition for a function. Unfortunatly this won't be possible for now. As explain in the [doc](https://docs.microsoft.com/en-us/azure/azure-functions/functions-openapi-definition) OpenAPI defenition is not yet supported in Function V2.
   - [x] Call the WebParser, passing the URL
   - [ ] Generate a Word document
     - [ ] Create an Azure Container Instance (ACI) with PanDoc
     - [ ] Once Up generate a Word document from the html

##### Save the post information (url, author, date entered)

 - [x] Identify Database --> CosmoDB (mongoDB interface)
   - Since [MongoDB interface is note supported at this moment](https://docs.microsoft.com/en-us/connectors/documentdb/) we rollbacked to SQL API
 - [x] Save the info (json returned by webParser)

##### Send it to the eReader

- [ ] Send Word document as attachment to the Kindle service.

#### Generating the summary

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

#### Interface to edit the summary

- [ ] Open a summary
- [ ] Edit global tags
- [ ] Edit note tags
- [ ] Edit note comment
- [ ] Add image to the Reading Notes
- [ ] Publish




[GettingPostToEReader]: medias/GettingPostToEReader.png 'Getting the post to the eReader'
     