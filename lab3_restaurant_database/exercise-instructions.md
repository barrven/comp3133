COMP 3133 – Full Stack Development II
Lab 03 MongoDB & Mongoose

Create NodeJS + Express + MongoDB + mongoose application to perform following operations
Note:
-	Create GitHub repository and commit all your code to GitHub
-	Use Postman to test the result
-	Lab04 and Lab05 (Week05/Week06) work will be depended on this lab03

NodeJS Project 
1.	Create NodeJS project having name lab3_restaurant_database

2.	Install required modules to work with express and mongoose

3.	Create Restaurant Schema in your project to perform mongoDB/mongoose query operations

4.	Create REST API to return all restaurant details
-	Select all the columns

http://localhost:3000/restaurants

5.	Create REST API to return all restaurant details by cuisine
-	Select all the columns

http://localhost:3000/restaurants/cuisine/Japanese
http://localhost:3000/restaurants/cuisine/Bakery
http://localhost:3000/restaurants/cuisine/Italian

6.	Create REST API to return the 
-	The selected columns must include id, cuisines, name, city, resturant_id
-	The sorting by the restaurant_id in Ascending or Descending Order based on parameter passed.

http://localhost:3000/restaurants?sortBy=ASC
http://localhost:3000/restaurants?sortBy=DESC

7.	Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
-	The selected columns must include cuisines, name and city, but exclude id
-	The sorting order must be Ascending Order on the name

http://localhost:3000/restaurants/Delicatessen
 
MongoDB Atlas

https://account.mongodb.com/account/login

Creating Collections and Documents name Restaurants
Use the seed data script found here. 
https://drive.google.com/file/d/1ON-ARc3cHHb45zi1att3StiP9Y37MIEG/view?usp=sharing

Submission
-	Upload the ZIP file and screenshots (Postman) with appropriate title showing your REST API and output.
-	Also Provide your GitHub link in the comment

Reference
-	Lab work done during class
-	https://mongoosejs.com/docs/guide.html
-	https://docs.mongodb.com/manual/reference/operator/query-comparison/
-	https://docs.mongodb.com/manual/reference/operator/query-logical/
-	https://techeplanet.com/express-path-parameter/
-	https://techeplanet.com/express-get-query-string-parameters/
-	https://techeplanet.com/express-send-json-response/
-	https://kb.objectrocket.com/mongo-db/or-in-mongoose-1018
-	https://kb.objectrocket.com/category/mongo-db

