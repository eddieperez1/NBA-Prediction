from flask import Flask, request, render_template
import pandas as pd
import pickle
import statsmodels.api as sm


app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
     return render_template("index.html")

@app.route('/prediction_teams', methods=['GET','POST'])
def prediction_1():

     # If form is POST'd
     if request.method == 'POST':
          # Convert form to dictionary
          my_dict = request.form.to_dict()

          # Get values out of dictionary
          my_values = []
          for value in my_dict.values():
               my_values.append(float(value))

          # Get column names from model notebook and put values into pandas dataframe
          columns = ['2pointer_PCT_AVG', '3pointer_PCT_AVG', 'FreeThrow_PCT_AVG', 'Assists_AVG', 'Rebounds_AVG', 'Attendance']
          test_data_df = pd.DataFrame([my_values], columns=columns)
          
          # Add constant for OLS model
          test_data_ols = sm.add_constant(test_data_df, has_constant='add')

          #Import OLS model for number of win
          model_ols = pickle.load(open('Models_Folder_Final/Models/Games_OLS.sav','rb'))

          #Make Prediction using form data as test data.
          prediction_df = model_ols.predict(test_data_ols)
          prediction_wins = round(prediction_df[0])

          # Playoff Prediction

          # Import model and scaler for playoffs
          model_playoffs = pickle.load(open('Models_Folder_Final/Models/Best_Games_Logistic Regression Classifier.sav','rb'))
          scaler_playoffs = pickle.load(open('Models_Folder_Final/Models/scaler_for_Logistic_Regression_Classifier.sav','rb'))
          
          # Add number of wins into playoffs test data
          test_data_df['WINS'] = prediction_wins

          # List of playoffs test data columns
          playoffs_columns = ['2pointer_PCT_AVG', '3pointer_PCT_AVG', 'FreeThrow_PCT_AVG', 'Assists_AVG', 'Rebounds_AVG','WINS', 'Attendance']

          # Reindex playoffs
          playoffs_test_df=test_data_df.reindex(columns=playoffs_columns)

          #Scale playoffs test data
          playoffs_test_scaled = scaler_playoffs.transform(playoffs_test_df)

          # Make prediction using logistic regression model
          playoffs_prediction_df = model_playoffs.predict(playoffs_test_scaled)

          isPlayoffs = ''
          
          # Change isPlayoffs to No if 0 and yes if 1
          if playoffs_prediction_df[0] == 0:
               isPlayoffs = 'No'
          else:
               isPlayoffs ='Yes'

          # Output prediction and render html
          return render_template('prediction_teams.html', prediction_wins=prediction_wins, isPlayoffs=isPlayoffs)

     # render html without values if GET
     return render_template('prediction_teams.html')

@app.route('/prediction_players', methods=['GET','POST'])
def prediction_2():

     # If request is POST...
     if request.method == 'POST':
          # Convert form to dictionary
          my_dict = request.form.to_dict()

          # Get values out of dictionary
          my_values = []
          for key,value in my_dict.items():
               my_values.append(float(value))

          
          # Get column names from model notebook and put values into pandas dataframe
          columns = ['GAMES','MIN','ASSISTS','OFFENSIVE_REBOUNDS','PERSONAL_FOULS','2pointer_PROD','3pointer_PROD','FreeThrow_PROD']
          test_data = pd.DataFrame([my_values], columns=columns)
          
          # Add constant for OLS model
          test_data = sm.add_constant(test_data, has_constant='add')
          
          #Import OLS model for total points by player
          model = pickle.load(open('Models_Folder_Final/Models/Players_OLS.sav','rb'))

          #Make Prediction using form data as test data.
          prediction_df = model.predict(test_data)
          prediction = round(prediction_df[0])

          # Output prediction and render html
          return render_template('prediction_players.html', prediction_total_score=prediction)

     # render html without values if GET
     return render_template('prediction_players.html')

if __name__ == '__main__':
     app.run(debug=True)
