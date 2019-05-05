## Marlo Test Project

Hey there guys, 

Thank you for the opportunity! 

Here's a concise approach that I believe fulfills the scope and intention of the project spec--if however there's anything I misunderstood or you'd like to see more, just let me know! 

I made a couple first passes at the API component using Axios and then fetch, but ultimately a much simpler/more elegant solution made a whole lot more sense. With the Axios/fetch approach I was returning the endpoint data as a blob then using a promise chain to convert it back into a useable base64 image etc. There was more "cool" javascripting going on, but at the end of the day, the complexity wasn't adding to the project so I dropped it. 
There were also some CORS shenanigans with the API response headers, so I wrote a little express proxy, which was cool, but again, it wasn't adding to the project in a meaningful way, so I scrapped it. I did however leave the dependencies in the package.json, just in case.

Thanks again guys, and give a shout if there's anything you'd like me to explain!
