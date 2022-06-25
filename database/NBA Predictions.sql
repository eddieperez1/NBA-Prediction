CREATE TABLE "games" (
  "GAME_DATE_EST" datetime,
  "GAME_ID" integer,
  "GAME_STATUS_TEXT" varchar,
  "HOME_TEAM_ID" integer,
  "VISITOR_TEAM_ID" integer,
  "SEASON" integer,
  "TEAM_ID_home" integer,
  "PTS_home" integer,
  "FG_PCT_home" float,
  "FT_PCT_home" float,
  "FG3_PCT_home" float,
  "AST_home" float,
  "REB_home" float,
  "TEAM_ID_away" integer,
  "PTS_away" integer,
  "FG_PCT_away" float,
  "FT_PCT_away" float,
  "FG3_PCT_away" float,
  "AST_away" float,
  "REB_away" float,
  "HOME_TEAM_WINS" integer
);

CREATE TABLE "teams" (
  "LEAGUE_ID" integer,
  "TEAM_ID" integer,
  "MIN_YEAR" integer,
  "MAX_YEAR" integer,
  "ABBREVIATION" varchar,
  "NICKNAME" varchar,
  "YEARFOUNDED" integer,
  "CITY" varchar,
  "ARENA" varchar,
  "ARENACAPACITY" integer,
  "OWNER" varchar,
  "GENERALMANAGER" varchar,
  "HEADCOACH" varchar,
  "DLEAGUEAFFILIATION" varchar
);

CREATE TABLE "players" (
  "PLAYER_NAME" varchar,
  "TEAM_ID" integer,
  "PLAYER_ID" integer,
  "SEASON" integer
);

CREATE TABLE "game_details" (
  "GAME_ID" integer,
  "TEAM_ID" integer,
  "TEAM_ABBREVIATION" varchar,
  "TEAM_CITY" varchar,
  "PLAYER_ID" integer,
  "PLAYER_NAME" varchar,
  "NICKNAME" varchar,
  "START_POSITION" varchar,
  "COMMENT" varchar,
  "MIN" timestamp,
  "FGM" float,
  "FGA" float,
  "FG_PCT" float,
  "FG3M" float,
  "FG3A" float,
  "FG3_PCT" float,
  "FTM" float,
  "FTA" float,
  "FT_PCT" float,
  "OREB" float,
  "DREB" float,
  "REB" float,
  "AST" float,
  "STL" float,
  "BLK" float,
  "TO" float,
  "PF" float,
  "PTS" float,
  "PLUS_MINUS" float
);

ALTER TABLE "games" ADD FOREIGN KEY ("GAME_ID") REFERENCES "game_details" ("GAME_ID");

ALTER TABLE "teams" ADD FOREIGN KEY ("TEAM_ID") REFERENCES "players" ("TEAM_ID");

ALTER TABLE "teams" ADD FOREIGN KEY ("TEAM_ID") REFERENCES "game_details" ("TEAM_ID");

ALTER TABLE "players" ADD FOREIGN KEY ("PLAYER_ID") REFERENCES "game_details" ("PLAYER_ID");
