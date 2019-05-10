# Module Pre-Reading

## Description

This module (part) of the solution transforms an interesting blog post into document insode a eReader (aka: Kindle).

## How it works

The `bookmarklet` will send into the querystring the current URL to a Logic App.

The Logic App will clean the post, keeping only the text and image of the article using a service named [Mercury-Parser](https://github.com/postlight/mercury-parser) wrapped in an Azure Function.

It will keep the meta-data of the blog post into a Cosmos DB. You can see an example of that data in [sample-answer.json](fcToolsReadingNotes/HttpMercuryParser/sample-answer.json)

The Logic App will then converts the clean html into a word document using [Pandoc](https://pandoc.org/) hosted into an Azure Container Instance (ACI). 

Finally, the Logic App will send the document as an attachment to the email configured for you eReader.

> You can retreived this email from the Amazon website in the section manage devices.

![GettingPostToEReader][GettingPostToEReader]
*schema from: [ReadingNotes_3-0](../draw_io/ReadingNotes_3-0.html)*

## Installation

1. Deploy the Azure Resources

  You need to create:

  - Logic App using [SendWebPageToeReader.json](LogicApps/SendWebPageToeReader.json)
  - Azure Function using the folder [fcToolsReadingNotes](fcToolsReadingNotes)
  - Cosmos DB with a collection named `postToRead` and a partition key `/domain`

  > **Eventually it will all be deploy automatically.**🤞

2. From your Internet browser create a new bookmark. Instead of a URL we will put some javascript code into it. This will transform the bookmark into a Bookmarklet. 

  The Javascript is available into [bookmarklet.js](bookmarklet.js)

  > You will need to edit it to replace `_URL_OF_YOUR_LOGICAPP_` by the URL of your Azure Logic App.

## Project

## Tasks

### Generating a e-book from an article online.

#### Getting the URL of the post

- [X] Create the Bookmarklet (javascript code)

#### Removing everything except the post content

- [X] Logic Apps
   - [x] Receive a URL as querystring parameters
   - [/] Azure Function(s)
      - [x] Azure Function wrapping Mercury services
      - [x] Add a new property "id" with a GUID value
      - [ ] 🚧Create an OpenAPI definition for a function. Unfortunately this won't be possible for now. As explain in the [doc](https://docs.microsoft.com/en-us/azure/azure-functions/functions-openapi-definition) OpenAPI definition is not yet supported in Function V2.
   - [x] Call the WebParser, passing the URL
   - [X] Generate a Word document
     - [X] Create an Azure Container Instance (ACI) with PanDoc
     - [X] Once Up generate a Word document from the html

#### Save the post information (url, author, date entered)

 - [x] Identify Database --> CosmoDB (mongoDB interface)
   - Since [MongoDB interface is note supported at this moment](https://docs.microsoft.com/en-us/connectors/documentdb/) we rollbacked to SQL API
 - [x] Save the info (json returned by webParser)

#### Send it to the eReader

- [X] Send Word document as attachment to the Kindle service.



[GettingPostToEReader]: medias/GettingPostToEReader.png 'Getting the post to the eReader'