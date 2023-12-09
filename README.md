# Compound WebApplication
This Compound WebApp is a user-friendly webapp for creation, updation, deletion and viewing of various compounds present in the database. The compound details shown are compound name, description and image. This readme file provides instructions on getting started with the app.

- Ensure that you have Node.js and MySQL installed on the system as prerequisites. 

Steps:
1. Clone the repository and navigate to the root directory.
2. Ensure you have MySQL installed and create a database named "compoundDB" with the following credentials.
   
            * Host --> localhot
            * Port --> 3306
            * User --> root
            * Password --> root

3. Navigate to the client and server folder and open on different terminal windows.
4. Run the following commands on the client terminal for the first go.
   
            $ npm install
            $ npm start

5. Run the following commands on the server terminal for the first go.
   
            $ npm install
            $ npm run migrate
            $ npm run seed
            $ npm start

6. Run the following command on the terminals thereafter for accessing the webapp.
   
            $ npm start

7. The client runs on port 4200 and server runs on port 8000.
8. To stop the app, go to each terminal and press Ctrl + C and end the application.
   
             
