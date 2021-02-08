# Reading Notes
A Solution to get an article to your eReader then collects your notes and generates a post.
This is the third version of the solution. Every times it's to learn new technology. 

> This project is part of the [Stream-Projects](https://github.com/FBoucher/stream-projects). Those are projects that I worked online while streaming or while video recording. 

## Previous Version

### Version 1

Done in Ruby in you can read about it on my post [First step with Ruby: Kindle Clipping Extractor](http://www.frankysnotes.com/2011/11/first-step-with-ruby-kindle-clipping.html). This first version was to automate a process that was taking me at least one hour every week.

### Version 2 

Done with a mix of C# and Azure the goal was to be able to generate the reading summary from anywhere. You can read more about it on my post [How I use Azure Logic App, API App and Function App in my life](http://www.frankysnotes.com/2016/10/how-i-use-azure-app-api-app-and.html)


## Version 3 (in progress)

In this version, we need to manage the entire flow. All the information about the post (author, url, title, dates) will be keep in a data source. All the processes must be in the cloud and should be interchangeable.

The solution is in three modules: 

1. [Module Pre-Reading](module-pre-reading/README.md)
2. [Module Summary Generation](module-summary-generation/README.md)
3. [Module Summary Edition](module-summary-edition/README.md)

**Future Idea**

- Search engine to search into notes.

## Deploy To Azure

*later...*

## Module Pre-Reading

This module is to generate eBook from a blog post for a eReader. More detail [here](module-pre-reading/README.md)

## Module Summary Generation

This module is to generate the reading notes summary. Taking the notes, and matching them the the information in the data-source.  More detail [here](module-summary-generation/README.md)

## Module Summary Edition

A web interface to edit a summary before publishing it.  More detail [here](module-summary-edition/README.md)


## GLobal Task/ Wishlist

- [ ] Creating an ARM template to deploy in Azure
  - [X] Create [ARM Template](preReading/Deployment/cosmoDB.json) for the Cosmo DB, with a [parameter file](preReading/Deployment/deploy.parameters.json).
  - [ ] Create ARM template for Azure Function
  - [ ] Create ARM template for Logic Apps
- [ ] Azure Deploy button from GitHub

## Streams

I worked on this project while streaming most of the time. Here are the list of the stream where I code/ design/ plan/ explain/ learn with you. The stream are from the most recent to the oldest.

|    Date    |   Module           |  Title                                                        | 
|------------|--------------------|---------------------------------------------------------------|
| 2019-05-21 | Summary Generation | [Working on Unit Test with Azure Pipeline](https://www.twitch.tv/videos/428255583)|
| 2019-05-17 | Summary Generation | [Merging Arlvin's PR and adding the XUnit tests to the Azure Pipeline](https://www.twitch.tv/videos/427490207)|
| 2019-05-17 | Summary Generation | [Learning how to do XUnit tests with Arlvin Moyo](https://www.twitch.tv/videos/426033843)|
| 2019-05-15 | Summary Generation | - part 1: [Build CI for a .Net Core Web API ](https://www.twitch.tv/videos/425146593) <br/>- part 2: [Build CI for a .Net Core Web API ](https://www.twitch.tv/videos/425171190)|
| 2019-05-10 | Summary Generation | [Coding .Net Core Web API for ReadingNotes Summary Generator](https://www.twitch.tv/videos/422940515)|
| 2019-05-03 | Summary Generation | [Design Session ReadingNotes Summary Generator](https://www.twitch.tv/videos/422031693)|
| 2019-05-03 | Pre-Reading        | [Working on Bookmarklet - ReadingNotes Project](https://www.twitch.tv/videos/419777850)|
| 2019-05-01 | Pre-Reading        | [Working on Azure-Docker-LogicApps - ReadingNotes Project](https://www.twitch.tv/videos/418862208) |
| 2019-04-30 | Pre-Reading        | [Coding on the ARM template for ReadingNotes](https://www.twitch.tv/videos/418554878)|
| 2019-04-26 | Pre-Reading        | [Coding on the ARM template for ReadingNotes](https://www.twitch.tv/videos/416628888)|
| 2019-04-24 | Pre-Reading        | [Learning Azure Cosmo DB with Logic Apps](https://www.twitch.tv/videos/415694786)|
| 2019-04-22 | Pre-Reading        | [Learning Azure Cosmo DB ](https://www.twitch.tv/videos/414891099)|
| 2019-04-19 | Pre-Reading        | [GitHub Stream Project Maintenace](https://www.twitch.tv/videos/413446983)|
| 2019-04-17 | Pre-Reading        | [Working on an Azure Logic Apps](https://www.twitch.tv/videos/412377073)|
| 2019-04-08 | Pre-Reading        | [Coding Azure Function (Wrapping Mercury services)](https://www.twitch.tv/videos/408181676)|
