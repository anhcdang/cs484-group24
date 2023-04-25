# EventFinder

## Description:
EventFinder is a project that helps students find different events to attend on campus. 

The two main tasks that EventFinder addresses are...
1. Discover several events related to a category of interest
2. Find a specific event of interest

## Installation
To run EventFinder, you need to install its dependencies. Run the following command:
```
./run.sh
```
The following command is needed the first time the project is uploaded.
```
npm install
```

## Constraints:
- When using EventFinder, the user should stand approximately 1-2 meters away from the display. 
- When moving their arm to trigger the actions on the page, the user should hold each position for about 5 seconds for it to work effectively (e.g., keep their arm in the upper right position to choose the upper right category). 
- For best performance, only one person should be in front of the display (multiple people may impact responsiveness).
- When using one hand, keep the other hand in DOWN direction.

***

## Collaboration Report:


**Anh Dang, acd83**

My primary responsibilities were spatial data processing and the carousel page. After Cindy set up the Carousel page front-end and the Event object model, I worked on loading events to the Carousel based on the selected category (e.g., showing Academics events on the Carousel if the user selected the Academics category). I also worked on the initial setup for the spatial data processing, which included successfully creating the websocket and spatial data input. Afterward, I worked on implementing the spatial data processing for the Carousel page, which included going to the previous/next carousel slide when the right wrist is detected in the upper left/upper right, and going back to the previous page when the right wrist is detected up. As we encountered issues with our app while testing with the Kinect, I worked on debugging and modifying the body data processing implementation towards a working application. I also worked on small styling changes when necessary.


**Cindy Keeya, ck687**

My primary responsibility was to work on the carousel page. I did not have any prior experience with React, so I took the time to learn how to create a carousel and an event object model.After learning, I started coding the front-end for the uncontrolled carousel. I created the event object model, which consisted of arrays of events for each category that could be rotated through depending on which category the user clicks.To implement this model, I had to redo the uncontrolled carousel component to fit with it. This involved using a version of a hashmap function to achieve the desired functionality.In addition to working on the carousel page, I aided in testing the display by being a test subject for the project and giving feedback on the usability. Finally, I wrote up the README document, which explains how to install dependencies and run the project, provides a brief description of the project, and includes a collaboration record that specifies what each team member contributed to the prototype.

**Sianna Xiao, srx2**

I was responsible for the entirety of the start page. Essentially, I implemented all of the parts everyone worked on over the past couple of assignments for the other pages and applied the same process to the Start page. This was a very helpful project for me, as I got to learn the whole process from beginning to end. The week prior, I learned and familiarized myself with React from scratch, and then this week I built the page by writing the Start.js file and css script that was added to style.css. During the latter half of the week, I got feedback from my group members during the meetings and continued improving/debugging through a trial and error learning process. After that, I learned how to turn the start area into a button that connects with the categories page, by learning from the categories and carousels page. Siyan helped me debug before connecting with the monitor and finalize. Lastly, I also met with my group during all the meetings to talk about spatial data and help debug and brainstorm/provide feedback. We met in front of our tv and would work in real time together to test our project. 

**Siyan Pu, sp2448**

My primary responsibilities are the category page. I implemented all the code for the category page that consists of four card components and directed them to corresponding event carousels. I also implemented the functions to take spatial data and convert it into user-triggered events for both category page and start page. I tested the application with other group members in front of the TV several times.

