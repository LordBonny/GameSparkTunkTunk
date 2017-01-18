// ====================================================================================================
//
// Cloud Code for LSCORELOG, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
var eventAttr1 = Spark.getData().EVENTNAME
var eventAttr2 = Spark.getData().SCORE


var collectionData = Spark.runtimeCollection( "ScoreLog" );

var eventName = Spark.setScriptData("eventName", eventAttr1.toUpperCase());
var score = Spark.setScriptData("score", eventAttr2);
var date = new Date().toISOString();
var timeStamp = new Date().getTime();
var dateFormate = new Date("<YYYY-mm-ddTHH:MM:ssZ>")
var playerId = Spark.setScriptData("_id", Spark.getPlayer().getPlayerId());

collectionData.insert({"uid": Spark.getPlayer().getPlayerId(), "eventName": eventAttr1.toUpperCase() , "score": eventAttr2, "date": date, "timeStamp": timeStamp })