# Day Trading Horror Stories
A blog website to showcase the other side of day trading, the side most people don't talk about.

**Link to project:** http://www.daytradinghorrors.com

![screencapture-daytradinghorrors-2023-02-09-15_40_55](https://user-images.githubusercontent.com/106452102/217962291-91aa71f4-0ca2-4e05-b23f-9fea0f8e139a.png)

## How It's Made:

**Tech used:** Next JS & SASS on the frontend & Contentful as a headless CMS on the backend.

Needed a way to maximize the user experience as well as make it easy for the client to have access to the website. This was a perfect scenario for NEXT JS. The client needed to be able to add/update/delete blog posts, so we decided to use Contentful for this as the learning curve is straightforward and they have a great API for the headless CMS. 

- Created a content model in Contentful to have a structure to follow when uploading new blog posts.
- Pulled in the contentful client package into Next JS to access the content.
- Utilized getStaticProps with the contentful API to talk to the client manipulate the data and render it into the browser. 
- Used environment variables so that the Tokens / ID remained private and added those variables into Vercel during deployment.
- getStaticPaths was used to capture the [slug] ID's for each post so that the router was correct and unique
- Rich text react renderer came in handy to access and output the rich text component in contentful
- Incremental Static Generation was a great choice for this project so that once content is added, updated, &/or deleted the page will rerender automatically to reflect those changes.

## Future Enhancements:
We'll look to add a search feature as well as pagination as the content grows to deliver a better user experience.
Also looking to improve the overall site functionality for better SEO and a better lighthouse score.
Add Google Analytics to monitor relevant data and user experience

## Optimizations:
Conducted keyword research to include in the Meta Head tags to help in ranking for the specific target audience.

## Lessons Learned:
Rich text react renderer helped out in an enormous way. It made it so easy to display the data, and all it renders is semantic HTML elements in the brower which is nice for styling and accessibility
