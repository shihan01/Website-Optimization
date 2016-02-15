Website Performance Optimization portfolio project

I mainly made changes on index.html and main.js in views/js folder
In the /production/ folder, there is the production code, with the minified css/js and optimized images.

Part 1: Optimize PageSpeed Insights

put style.css into index.html
Minify CSS and JS files with gulp,
Optimize images (size and compression) with gulp
print.css with the media=print tag.
Put the Google Analytics and permatter script with "async" tag.
Load asyncronoulsy the Google Fonts with a script in the footer.

Part 2: Optimize Frames per Second

put 'use strict' inside every function
Compressed the images
Change querySelector and querySelectorAll to getElementById and getElementsByClassName, to make it faster.
Create all the variables outside of loops where possible.
Put "dx" and "newWidth" outside the loop, since pizza size didn't change
Put the scrollNumber variable outside the loop, to separate the manipulation of the DOM from the methods that query the state. 
Calculate the number of pizza according to the screen height
Using translate instead of basic left positioing: items[i].style.transform = 'translate3d(' + phaseArray[i % 5] + 'px, 0, 0)';
Optimizations in CSS: put will-change:transform;transform:translateZ(0);backface-visibility:hidden; in the .mover class. This way we will create diferent layouts for each pizza and the main layout will not be repainted every time we create a pizza.


To run the application

Download the /dist/ folder in your computer.
To inspect the site on your phone, you can run a local server:

$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
Open a browser and visit localhost:8080.

Download and install ngrok to make your local server accessible remotely:

$> cd /path/to/your-project-folder
$> ./ngrok https 8080
Copy the public URL ngrok gives you and try running it through PageSpeed Insights and Chrome DevTools!





