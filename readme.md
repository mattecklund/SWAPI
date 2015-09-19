Official submission submits:
https://github.com/mattecklund/SWAPI/commit/38ad26714f74d95fe2d07e7b0691fbe70296f4b8
https://github.com/mattecklund/SWAPI/commit/0a2d86cffa5220824df678ee92b9d8a010cd8a9e

The simplest way to verify this code pulls from SWAPI is to run the files in a basic http server.

Necessary files are
index.html
app.js
controller.js

the service.js file needs to be worked on.

I ran the basic node http-server command in the document root (root for the web files) and browsed to localhost:8180 where I have my node http-server defined.

NOTE:
The official submission only had raw JSON.  I misunderstod the one step about being in a readable manner.  My first thought was JSON is the appropriate output of this assessment.  Then thinking about it a litle more, I wondered if the intent was to also include parsing.  So after breakfast, I jumped back on to make an unordered list with child li elements of each of the attributes.  That probably should have been in the first submission.

Improvements:
The pilots attribute should shown "unknown" if the attribute has no value (actually all attributes should do that)
For each pilot, make the URL a clickable link that displays the name instead of a URL
Fix the service and don't do my ajax calls in the controller
Make an ng-view of the starships html and make the html page a lot more lean
Add an additional ng-view for the pilots
Make a filter box at the top of the page
Make each ship clickable, opens a new view that renders more data about the ship (and maybe a picture)



