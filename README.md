# The Bloglin

[https://gvnmcg.xyz/](https://gvnmcg.xyz/)

![](/public/assets/images/bloglin-light-mode.PNG)

The name of my blog is based on a blog I followed in middle school and highschool called `мишка bloglin`. Like Goblin but Bloglin. This where I share my thoughts, experiences, and insights on topics, media, tech, and tech products. Whether you're interested in a topic, the blog content is filter able and shareable. Maybe Im just looking and sharing inspiration and motivation, I hope you'll find something here that resonates with you. Feel free to reach out through email.

## Development 

Run with `npm run dev`, `npm run build`.
Multi-page app using Next JS for SSG.
Uses browser local storage for each URL.

Nextjs uses React but with only javascript for this project is simple and free flowing. I love typescript for all my other projects.
For styling it uses Tailwind CSS and post-CSS to load modules of applied tailwind style classes.

There is a `dark` mode using your browser/system settings.

![](/public/assets/images/bloglin-dark-mode.PNG)


## Future Development (W.I.P.)

Subscribe to the mailing list or RSS feed to receive new posts in your inbox.
Follow me on social media if I use that social platform. 
Leave a comment on the posts that interest you. 

I love hearing from my readers, and I always respond to comments and questions.
Share my posts with others who might find them valuable.

## Deployment

Netlify deploys my repository for now. Secured with HTTPS.

## Structure

Next pages...

The front page, `/pages/index.js`, loads all the initial, likely most recent content.

Filtering posts to a topic loads `/filter/[filter].js`.
Loading a post form CMS loads `/cms-post/[slug].js`.

Components are Feeds, Post Cards, Filter-Bars, Nav-Bars and Header, and Footer, are organized int eh `layout.js`.

Content is Staticly generated on the server.

## Thank You
Thank you for visiting my blog and taking the time to read this README. I hope you enjoy the content, and I look forward to connecting with you!