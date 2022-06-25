
// select to select
function findPlayerSelect(selection){
  var players= document.getElementById('players');
	var currentValue = selection.value;
  console.log(players)
  console.log(currentValue)


  d3.json("../static/Resources/players.json").then((data) => {
    console.log(data);

    var Hawks = data.Hawks;
    var Celtics= data.Celtics;
    var Nets= data.Nets;
    var Hornets= data.Hornets;
    var Bulls= data.Bulls;
    var Cavaliers= data.Cavaliers;
    var Mavericks= data.Mavericks;
    var Nuggets= data.Nuggets;
    var Pistons= data.Pistons;
    var Warriors= data.Warriors;
    var Rockets= data.Rockets;
    var Pacers= data.Pacers;
    var Clippers= data.Clippers;
    var Lakers= data.Lakers;
    var Grizzlies= data.Grizzlies;
    var Heat= data.Heat;
    var Bucks= data.Bucks;
    var Timberwolves= data.Timberwolves;
    var Pelicans= data.Pelicans;
    var Knicks= data.Knicks;
    var Thunder= data.Thunder;
    var Magic= data.Magic;
    var Philly= data.Philly;
    var Suns= data.Suns;
    var Blazers= data.Blazers;
    var Kings= data.Kings;
    var Spurs= data.Spurs;
    var Raptors= data.Raptors;
    var Jazz= data.Jazz;
    var Wizards= data.Wizards;


    if(currentValue === "Atlanta Hawks")
      createOptions(Hawks, players)
    else if(currentValue === "Boston Celtics")
      createOptions(Celtics, players)
    else if(currentValue === "Brooklyn Nets")
      createOptions(Nets, players)
    else if(currentValue === "Charlotte Hornets")
      createOptions(Hornets, players)
    else if(currentValue === "Chicago Bulls")
      createOptions(Bulls, players)
    else if(currentValue === "Cleveland Cavaliers")
      createOptions(Cavaliers, players)
    else if(currentValue === "Dallas Mavericks")
      createOptions(Mavericks, players)
    else if(currentValue === "Denver Nuggets")
      createOptions(Nuggets, players)
    else if(currentValue === "Detroit Pistons")
      createOptions(Pistons, players)
    else if(currentValue === "Golden State Warriors")
      createOptions(Warriors, players)
    else if(currentValue === "Houston Rockets")
      createOptions(Rockets, players)
    else if(currentValue === "Indiana Pacers")
      createOptions(Pacers, players)
    else if(currentValue === "Los Angeles Clippers")
      createOptions(Clippers, players)
    else if(currentValue === "Los Angeles Lakers")
      createOptions(Lakers, players)
    else if(currentValue === "Memphis Grizzlies")
      createOptions(Grizzlies, players)
    else if(currentValue === "Miami Heat")
      createOptions(Heat, players)
    else if(currentValue === "Milwaukee Bucks")
      createOptions(Bucks, players)
    else if(currentValue === "Minnesota Timberwolves")
      createOptions(Timberwolves, players)
    else if(currentValue === "New Orleans Pelicans")
      createOptions(Pelicans, players)
    else if(currentValue === "New York Knicks")
      createOptions(Knicks, players)
    else if(currentValue === "Oklahoma City Thunder")
      createOptions(Thunder, players)
    else if(currentValue === "Orlando Magic")
      createOptions(Magic, players)
    else if(currentValue === "Philadelphia 76ers")
      createOptions(Philly, players)
    else if(currentValue === "Phoenix Suns")
      createOptions(Suns, players)
    else if(currentValue === "Portland Trail Blazers")
      createOptions(Blazers, players)
    else if(currentValue === "Sacramento Kings")
      createOptions(Kings, players)
    else if(currentValue === "San Antonio Spurs")
      createOptions(Spurs, players)
    else if(currentValue === "Toronto Raptors")
      createOptions(Raptors, players)
    else if(currentValue === "Utah Jazz")
      createOptions(Jazz, players)
    else if(currentValue === "Washington Wizards")
      createOptions(Wizards, players)
    
  });
}


function createOptions(options, element){
	// reset current options
	element.innerHTML = "<option hidden>Player Name</option>";
	// loop through each option and create <option> element
	options.forEach(optionValue =>{
		// create <option>
		var opt = document.createElement('option');
		// set value
		opt.value = optionValue;
		// set inner html
		opt.innerHTML = optionValue;
		// add to the select box
		element.add(opt)
	})
}

function autofill_inputs(selection){
  var team = selection.value;
  console.log(team);

  d3.json("../static/Resources/teams_2020.json").then((data) => {
      console.log(data);
      
      team_data = data[`${team}`]
      console.log(team_data);

      document.getElementById('2pointer').value = team_data['2pointer_PCT_AVG'].toPrecision(5)
      document.getElementById('3pointer').value = team_data['3pointer_PCT_AVG'].toPrecision(5)
      document.getElementById('freethrow').value = team_data['FreeThrow_PCT_AVG'].toPrecision(5)
      document.getElementById('assists').value = team_data['Assists_AVG'].toPrecision(5)
      document.getElementById('rebounds').value = team_data['Rebounds_AVG'].toPrecision(5)
      document.getElementById('attendance').value = team_data['Attendance'].toPrecision(5)

  })
}

function autofill_inputs_players(selection){
  var player = selection.value;
  console.log(player);

  d3.json("../static/Resources/player_data_2021.json").then((data) => {
      console.log(data);
      
      player_data = data[`${player}`]
      console.log(player_data);

      document.getElementById('games').value = player_data['GAMES'].toPrecision(2)
      document.getElementById('min').value = player_data['MIN'].toPrecision(3)
      document.getElementById('assists').value = player_data['ASSISTS'].toPrecision(3)
      document.getElementById('rebounds').value = player_data['OFFENSIVE_REBOUNDS'].toPrecision(3)
      document.getElementById('2pointer').value = player_data['2pointer_PROD'].toPrecision(4)
      document.getElementById('fouls').value = player_data['PERSONAL_FOULS'].toPrecision(3)
      document.getElementById('3pointer').value = player_data['3pointer_PROD'].toPrecision(3)
      document.getElementById('freethrow').value = player_data['FreeThrow_PROD'].toPrecision(3)

  })

}

