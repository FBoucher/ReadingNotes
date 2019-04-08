# Reading Notes
A Solution to get an article to your eReader then collects your notes and generates a post.
This is the third version of the solution. Every times it's to learn new technology. 

## Previous Version

### Version 1

Done in Ruby in you can read about it on my post [First step with Ruby: Kindle Clipping Extractor](http://www.frankysnotes.com/2011/11/first-step-with-ruby-kindle-clipping.html). This first version was to automate a process that was taking me at least one hour every week.

### Version 2 

Done with a mix of C# and Azure the goal was to be able to generate the reading summary from anywhere. You can read more about it on my post [How I use Azure Logic App, API App and Function App in my life](http://www.frankysnotes.com/2016/10/how-i-use-azure-app-api-app-and.html)


## Current Version

In this version I want to control as much as possible. In V2 the original URL was not kept. And a lot of manual steps were required. The solution is in three parts: 

1- Generating a e-book from an article online.
1- Generating the summary of the week reconciliation all notes read in one document.
1- Interface to edit the summary.

**Optional**

- Search engine to retrieve notes.
- automatically publish once done.


### Work in Progress

[x] Azure Function wrapping Mercury services
    [] ARM template to deploy the function
     