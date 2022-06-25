-- Merging game data and team names 
-- Needed to add team names to game data
SELECT public."All_games"."GAME_DATE_EST",
	public."All_games"."HOME_TEAM_ID",
	public."All_games"."VISITOR_TEAM_ID",
	public."All_games"."PTS_home",
	public."All_games"."FG_PCT_home",
	public."All_games"."FT_PCT_home",
	public."All_games"."FG3_PCT_home",
	public."All_games"."AST_home",
	public."All_games"."REB_home",
	public."All_games"."PTS_away",
	public."All_games"."FG_PCT_away",
	public."All_games"."FT_PCT_away",
	public."All_games"."FG3_PCT_away",
	public."All_games"."AST_away",
	public."All_games"."REB_away",
	public."All_games"."HOME_TEAM_WINS",
	public."home_team_names"."HOME_TEAM_NAME",
	public."visitor_team_names"."VISITOR_TEAM_NAME"
INTO public."games_with_names"
FROM public."All_games"
INNER JOIN "home_team_names"
	ON public."All_games"."HOME_TEAM_ID" = public."home_team_names"."HOME_TEAM_ID"
INNER JOIN public."visitor_team_names"
	ON public."All_games"."VISITOR_TEAM_ID" = public."visitor_team_names"."VISITOR_TEAM_ID";
	
-- Merging in game dates to the player data
SELECT public."new_details_df"."TEAM_ID",
	public."new_details_df"."TEAM_ABBREVIATION",
	public."new_details_df"."TEAM_CITY",
	public."new_details_df"."PLAYER_ID",
	public."new_details_df"."PLAYER_NAME",
	public."new_details_df"."MIN",
	public."new_details_df"."FGM",
	public."new_details_df"."FGA",
	public."new_details_df"."FG_PCT",
	public."new_details_df"."FG3M",
	public."new_details_df"."FG3A",
	public."new_details_df"."FG3_PCT",
	public."new_details_df"."FTM",
	public."new_details_df"."FTA",
	public."new_details_df"."FT_PCT",
	public."new_details_df"."OREB",
	public."new_details_df"."DREB",
	public."new_details_df"."REB",
	public."new_details_df"."AST",
	public."new_details_df"."STL",
	public."new_details_df"."BLK",
	public."new_details_df"."TO",
	public."new_details_df"."PF",
	public."new_details_df"."PTS",
	public."id_date"."GAME_DATE_EST",
	public."id_date"."GAME_ID"
INTO public."details_with_dates"
FROM public."new_details_df"
INNER JOIN public."id_date"
	ON public."new_details_df"."GAME_ID" = public."id_date"."GAME_ID";
