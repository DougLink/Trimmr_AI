# [Trimmr_AI](https://trimmrai.firebaseapp.com/)
## Article Summariser using OpenAI GPT-4

### Description
The Trimmr_AI is an application created for university students to help with the productivity of their study sessions, the solution was the result of user research that concluded that a tool that could summarise articles making them easily to read and faster to take conclusion without going through the whole text would help students not waste time with articles that were not what they were looking for. The application was supposed to have two more features that were not implemented yet, article and summary reader using text-to-speech AI.

### Technical Information
The Trimmr_AI is a React Application that uses OpenAI GPT-4 Rapid API to convert long articles into 3 paragraphs summaries. The application uses Vite framework to simplify and speed the development, Redux Toolkit for state management, and Firebase for authentication and database, as well as the LocalStorage.


### Install and Run the Project
To Install the project
```
npm install
```
To Run it you will need to create a .env file and fill with information about previously created [Article Exatractor and Summarizer API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) KEY on Rapid API, and [Firebase](https://firebase.google.com/) KEYS, and then
```
npm start
```

### Current Project Issues
Currently the application have an issue reading the information from the database, it is capable of including articles in the database but cannot retrieve it. This issue is happening because all components are initialised at the same time and the listening funtion runs before the auth condition is met. But the app still works and is capable of using the Local Storage. So please if you know how to solve this issues in the code feel free to contribute.

### Credits
I would like to give credit to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) that gave me the idea and have great videos with tutorials and taught me a lot.
