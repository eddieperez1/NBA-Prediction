### Heroku App
https://nbaseasonsprediction.herokuapp.com/

### Why we selected topic:

Interest in sports betting is growing and using machine learning to predict the results of games will help in sports betting. 
Our goal is to achieve an accuracy score of higher than 50%.

### Presentation Link:
[NBA Machine Learning Project - Google Slides](https://docs.google.com/presentation/d/1fVfMzhrjBLZuoqX2h9sObJL0nUd2_X0JM9Z51YIBT4Q/edit?usp=sharing)

### Source of data:

- [nba-games from Kaggle by wyattowalsh](https://www.kaggle.com/wyattowalsh/basketball)
- [nba-games from Kaggle by nathanlauga](https://www.kaggle.com/nathanlauga/nba-games)
- fantasyData
- espn
- cbs sports
- fangraphs

###  Questions we hope to answer with the data:

- Predict outcomes of games
- Analyze why scores are higher than others
- Analyze players and teams comparing different features(injury, weather,home vs away, etc)
- Compare to actual sport betting (fanduel)

## Communication Protocols

- Team slack channel primary text and update communications
- Team Discord Server (Zoom kept kicking us out)
- Meeting at 7 pm Monday-Thursday

## Project Overview: 

- First step was to aquire the data by scraping from kaggle, fantasyData, fangraphs, and sports networks such as espn and cbs.
- The next step was to utilize SQL to create tables with the data to help with the EDA and model building processes

### Exporatory Data Analysis:

- Link to EDA [Alex's Tableau Public](https://public.tableau.com/app/profile/alex.lieberman/viz/NBAtests/Story1)

### The Model:

- The model building process began with using the csv files exported by the sql databases.
- The first part was creating a usable dataframe

![image](https://user-images.githubusercontent.com/71575748/169663523-f76f4c55-050d-4d41-a691-5b72f3042aa6.png)

  - This was made from using groupme to merge the rows into averages for each season based on the team groups.

#### The process goes as follows:

- The use of the loc function was used to breakdown each season into its own dataframe and fed into a list of dataframes.
- Each dataframe was fed through a function tasked with processing them to aquire season averages for features such as 2 or 3 pointer shot averages to average number of rebounds or assists throughout the season.
- A sum of games won was also made from the different frames however this is going to be the target for the linear regression model and the OLS model
- The function split the games into home and away games using the data to accumulate data for everygame throughout the season.
- After getting the dataframes processed they were merged into a unified dataframe broken up by each season.
- A dataframe was made from a csv file containing the seasonal attendance of each season for the teams.
- the 2 frames were organized by team and year so they would align allowing for an easy merge into a unified dataframe.

#### Linear Regression:

- The dataframes were fed into a linear regression model and OLS model to predict the number of wins a team would get per season.

![image](https://user-images.githubusercontent.com/71575748/169635542-7759190c-11d1-4faf-b3fa-5ee74017aadf.png)

- The OLS model showed more promise with a higher amount of error it could explain.
- Due to the overlining of metrics such as the average accuracy of 3 pointers and 2 pointers the model has issues with multicolinearity
- This is because a team that can hit 3s consitantly will be able to hit 2s and field goals often.
- Notably, having the assist variable causes a decrease in win estimations.

#### Classification Model - Predicting Playoff Makers:

- The dataframe used for the linear regression model was saved and loaded again here.
- Using the playoffs data the year was taken and decreased by 1 to get the proper season.
- A string version of the date and team names were merged in both dataframes to see what teams were in the playoffs in each year.
- A variable for playoffs was made and filled with 0s as a default
- Using the 'if in' test, we were able to check which teams made the playoffs for what years using the combined columns as so.

![image](https://user-images.githubusercontent.com/71575748/169663581-d54a75fc-ba56-4176-bf8e-190044e07ca3.png)

- If the team and year combination existed in the playoff dataset the playoffs column would be fill with a 1 for that index.
- This creates our target variable to check if the team made the playoffs for that particular season
- The data was split into training and testing sets.
- Using classes and functions, the process of fitting the model and getting the accuracy, recall, and precision scores.
- This culminated into a dataframe sorted by accuracy scores. 
- Accuracy is being used becasue there is not really a score more important to target like precision or recall.

![image](https://user-images.githubusercontent.com/71575748/169663640-073727c1-df70-4b68-aa81-f4e477d5e40d.png)

- Best model is the Logistic Regression Classifier model
- Second best model is the Random Forest Classifier model
- Third best model is the Tuned Bagging Classifier model

