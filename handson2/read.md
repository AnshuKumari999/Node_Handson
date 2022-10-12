// 1)What are the different types of HTTP requests?
// Ans->  The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE.



// 2)Explain the concept of middleware in Node.js.
// Ans->  Middleware is a request handler that has access to the application's request-response cycle.
//  It takes three parameters req,res and next.next is used to execute the next middleware if present else it will ask the router to send response to the client.
//  If we will not write next()then respose will be not sent and the browser will be refreshing again and again.It will not stop.There are two type of middleware
//  i)Local middleware->It will be applied to only routes in which we will mention it.
//  ii)Global middleware->It will be applied to all routes 


// 3) Explain CORS
// Ans->  CORS stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, 
//  which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).

// 4)What is Express. how it helps you to create a backend application
// Ans->  Express is Fast, unopinionated, minimalist web framework for Nodejs.It provides broad features for building web and mobile applications. 
//  It is used to build a single page, multipage web application


// 5)Explain min 5 status codes gets used in Backend development
// Ans->  HTTP status codes are divided into 5 “classes”. These are groupings of responses that have similar or related meanings. 
//  Knowing what they are can help you quickly determine the general substance of a status code before you go about looking up its specific meaning.

//  The five classes include:
//  100s: Informational codes indicating that the request initiated by the browser is continuing.
//  200s: Success codes returned when browser request was received, understood, and processed by the server.
//  300s: Redirection codes returned when a new resource has been substituted for the requested resource.
//  400s: Client error codes indicating that there was a problem with the request.
//  500s: Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.


// 6)Difference between HTTP and HTTPS
// Ans->  HTTP stands for HyperText Transfer Protocol and HTTPS stands for HyperText Transfer Protocol Secure.
//  In HTTP, URL begins with “http://” whereas URL starts with “https://”
//  HTTP uses port number 80 for communication and HTTPS uses 443
//  HTTP is considered to be insecure and HTTPS is secure
//  HTTP Works at Application Layer and HTTPS works at Transport Layer
//  HTTP does not require any certificates and HTTPS needs SSL Certificates
//  HTTP speed is faster than HTTPS and HTTPS speed is slower than HTTP