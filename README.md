# Introduction
This project was done over the weekend of: 30th November 2024. This README outlines the reasoning for such a project and considerations made during the life-cycle of the project.

# Background
I am terrible at remembering key dates for my family such as birthdays/anniverseries of my relatives.

As an individual, that uses programming tools both at work and personally for projects, I decided the best solution is always over-engineered solution. Instead of using a shared calendar to record birthdays, I elected to use a shared google sheets spreadsheet to record birthdays/anniversaries and have a daily github actions script to check whether it was someones special day and if so send a message on discord server to notify everyone. If an automated standardised message sent to a family channel doesn't scream kindness and thoughtfulness then I dont know what does.

**Side Note:** In all seriousness, any of my relatives, that do end up reading this, I promise if i remember I will send custom message for a day which is undoubtably very special and im not trying to make light of it.


# Tools and solutions
In terms of tools, use my primary aim is to leverage tools that are free while also using a programming language that I am not super familiar with, with this being an opportunity to learn basic concepts.

- automation: I did play around with using windows scheduler but I found it to be quite fiddley to set up since I had environment variables/specific modules for this packages. Thus I elected to use github actions since it can managemaent secret effectively and has the ability to create cronjobs. Additionally, the free-tier of GitHub Actions allows 2,000 minutes of build time per month and my script should be relatively speeds so was a suitable pick. 
 
- tools:
    - data: the idea of birthdays and anniversaries being stored in a spreadsheet, with birthdays and anniversaries stored on separate sheet was my first cousin once removed's idea, all credit goes to him. 
    - spreadsheet reader: [zerosheets](https://www.zerosheets.com/). The free API enables you to read and pull in google spreadsheet data andis very generous with 200 requests a month. Given that I am running this daily, there should be no concerns that I hit a rate limit.
    - programming language: javascript. I was toying with the idea of rust but given that I set only set aside a weekend to do this I elected javascript provides a happy medium of learning new concepts relatively quickly and implementing a small project behind it.
    - sending messages: This proved to be the hardest to decide. I previously used pushbullet api for a previous project done a while back however the notification is only sent to me. I also considered using [twilio](https://www.twilio.com/docs/whatsapp/getting-started) to send message through whatsapp since I know most if not all of my relatives use whatsapp. However, the amount of free-credits provided wasn't enough. Therefore I settled on discord primarily because:
        1) it was easy to setup and integrate to send messages  
        2) some of my relatives use discord so they will also be notified as well.

# Running the code within the repository
Feel free to clone or fork this repoistory and run the code. Given that I have, passed URLs as environment variables, provided you follow the setup below in no time you too like me can have a heartless solution which can message other people without you having to think about it..

## API/Webhook setup instructions
Below are instructions that I followed to get the relevant API keys. 
- [Zerosheet API](https://www.zerosheets.com/docs) 
- [Discord Webhook](https://hookdeck.com/webhooks/platforms/how-to-get-started-with-discord-webhooks)
These API key should be stored in a `.env` file to ensure you aren't hard-coding/exposing secrets. 

## Javascript Setup
My implementation is in Javascript using the node runtime. If you have not got node installed follow the instructions [here](https://nodejs.org/en/download/package-manager).


## Setup with other languages
However it is equally simple to do in other languages such as python using the `requests` library.


# Summary and outputs
Given that the shared google sheet is now being updated by family members, this makes my life even easier. This project may have encouraged more of my family to adopt discord which depending could be a good thing (i think?)

In terms of github actions builds, it was relatively efficent at roughly 6-7 seconds. This is to be expected since the script isn't particularly complex or heavy.

## key learnings
- javascript. while it has "script" in its name, it wouldn't be my go-to to create a script to automate things. I think sticking with python would have been **a lot** easier. I really found that Mozilla Developer [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to be really handy to quickly identify, learn and apply concepts required to complete this mini-project. I also found numerous weird inconsitencies in javascript which can be best summarised by this [article](https://www.codeproject.com/Articles/182416/A-Collection-of-JavaScript-Gotchas). Some of these concepts particularly the difference between `==` and `===` were worth considering when writing my script in the end.

- different ways of solving the problem. As soon as I approached the end of the project, my brain thought it would have been easy since I have an andriod phone to use my use an API for google calendars to get upcoming dates and send a message like this. I really did get an appreciation for the variety FOSS (Free Open Source Software) which developers/hobbist which i include myself in can use to solve problems that we have. This is definitely something I will continue to use in upcoming projects.

## next steps
while this has been successfully running, I have thought about other potential projects I can use javascript in. I think the natural next step using some of the javascript concepts learnt here, I should use this to build my own static website? So watch this space :) 



