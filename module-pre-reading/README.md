# Module Pre-Reading

## Description

![GettingPostToEReader][GettingPostToEReader]
(schema from: [ReadingNotes_3-0](../draw_io/ReadingNotes_3-0.html))

## Project

## Tasks/ Wishlist

### Generating a e-book from an article online.

#### Getting the URL of the post

- [ ] Create the Bookmarklet (javascript code )

#### Removing everything except the post content

- [ ] Logic Apps
   - [x] Receive a URL as querystring parameters
   - [ ] Azure Function(s)
      - [x] Azure Function wrapping Mercury services
      - [x] Add a new property "id" with a GUID value
      - [ ] 🚧Create an OpenAPI definition for a function. Unfortunately this won't be possible for now. As explain in the [doc](https://docs.microsoft.com/en-us/azure/azure-functions/functions-openapi-definition) OpenAPI definition is not yet supported in Function V2.
   - [x] Call the WebParser, passing the URL
   - [ ] Generate a Word document
     - [ ] Create an Azure Container Instance (ACI) with PanDoc
     - [ ] Once Up generate a Word document from the html

#### Save the post information (url, author, date entered)

 - [x] Identify Database --> CosmoDB (mongoDB interface)
   - Since [MongoDB interface is note supported at this moment](https://docs.microsoft.com/en-us/connectors/documentdb/) we rollbacked to SQL API
 - [x] Save the info (json returned by webParser)

#### Send it to the eReader

- [ ] Send Word document as attachment to the Kindle service.



## Stream

[GettingPostToEReader]: medias/GettingPostToEReader.png 'Getting the post to the eReader'