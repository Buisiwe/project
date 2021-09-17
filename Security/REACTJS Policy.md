
**BEST PRACTICES OF REACT.JS SECURITY** 


By knowing the most common vulnerabilities of React it’s easier to find a solution and defense against the known enemy. 
For effective application security, you need to pay special attention to the development of the entire website  
below are some of the most common and simple steps you can take to protect your React.js application. 

1. Default XSS protection with data binding :

 Use default data binding with curly braces {} and React will automatically escape values to protect against XSS attacks.  

            Note that this protection only occurs when rendering textContent and not when rendering HTML attributes. 

              Good example: <div>{data}</div> 

              Avoid dynamic attribute values without custom validation.            

Bad example : <form action={data}> 

 

2. Dangerous URLs 

URLs can contain dynamic script content via javascript: protocol URLs. Use validation to assure your links are http: or https: to avoid javascript: URL based script injection. Achieve URL validation using a native URL parsing function then match the parsed protocol property to an allow list. 

Good Example:  
function validateURL(url) {  const parsed = new URL(url)  return ['https:', 'http:'].includes(parsed.protocol)}<a href={validateURL(url) ? url : ''}>Click here!</a> 

Bad example: 

<a href={attackerControlled}>Click here!</a> 
 

3. Rendering HTML 
Direct DOM Access 

It is possible to insert HTML directly into rendered DOM nodes using dangerouslySetInnerHTML. Any content inserted this way must be sanitized beforehand. 

Use a sanitization library like dompurify on any values before placing them into the dangerouslySetInnerHTML prop. 

Use dompurify when inserting HTML into the DOM: 

               import purify from "dompurify"; 

               <div dangerouslySetInnerHTML={{ __html:purify.sanitize(data) }} /> 
 
 

As a defense against XSS vulnerabilities, remove or disable any markup that could potentially contain instructions for running the code. For HTML, this includes elements such as <script>, <object>, <embed>, and <link>. 

 

4. Protect React.js source code with Jscrambler. 

5. Implement Idle Timeout in React. 

Use snippet libraries like ES7 React, Redux, JS Snippets, etc. They’ll bring additional security and keep your code bug free. 

6. Install a visitor identification to block malicious traffic from getting to the internal program codes. 

7. Exploit script injection flaws in React.js apps. 

8. As a defense from insecure links, use the mechanism for opening custom links in new browser tabs. 

9. The code should behave as expected and should be testable easily. It’s recommended to name your test files as the source files with a .test suffix. 

10. To escape the rendered JSON, use the serialize-javascript NPM module. 

11. Scrub the entire React application during and after the development process to seize all the multi-type DDoS attacks. 

                1. Make use of JSX shorthands 

                2. Move unrelated code into a separate component 

                3. Create separate files for each component 

                4. Move shared functionality into React hooks 

                5. Remove as much JavaScript from your JSX as possible 

                6. Format inline styles for less bloated code 

                7. Reduce prop drilling with React context 

 

12. Test the functionality of every component using a React app, and tests your complete application once it renders in the browser. 

13. Enforcing multi-factor authentication and access control by using certain libraries and tools like React authentication JWT, React redux libraries, React router authentication, React basic Auth, and React express 

 

 

 

 

 

 

 

 

 

 

**References:** 

 
Scrub steps :
https://www.freecodecamp.org/news/how-to-write-cleaner-react-code/ 
React Security :
https://reactresources.com/topics/security
https://upplabs.com/blog/react-js-security-best-practices/
https://www.simform.com/blog/react-security-vulnerabilities-solutions/ 
https://snyk.io/blog/10-react-security-best-practices/ 

 

 