# Reading Notes
A Solution to get an article to your eReader then collects your notes and generates a post.
This is the third version of the solution. Every times it's to learn new technology. 

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

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

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

     
