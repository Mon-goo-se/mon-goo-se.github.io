GetTime();
const mondaySchedule = [
{
  "name": "Warning Bell",
  "start": getPeriodTime(7,25),
  "end": null},
{
  "name": "1st Period",
  "start": getPeriodTime(7,30),
  "end": getPeriodTime(8,18)},
{
  "name": "2nd Period",
  "start": getPeriodTime(8,23),
  "end": getPeriodTime(9,16)},
{
  "name": "3rd Period",
  "start": getPeriodTime(9,21),
  "end": getPeriodTime(10,09)},
{
  "name": "Lunch (1st Upstairs/Music)",
  "start": getPeriodTime(10,14),
  "end": getPeriodTime(10,44)},
{
  "name": "4th Period (early)",
  "start": getPeriodTime(10,14),
  "end": getPeriodTime(11,04)},
{
  "name": "4th Period (late)",
  "start": getPeriodTime(10,49),
  "end": getPeriodTime(11,39)},
{
  "name": "Lunch (2nd Downstairs & PE)",
  "start": getPeriodTime(11,09),
  "end": getPeriodTime(11,39)},
{
  "name": "5th Period",
  "start": getPeriodTime(11,44),
  "end": getPeriodTime(12,32)},
{
  "name": "6th Period",
  "start": getPeriodTime(12,37),
  "end": getPeriodTime(1,25)}
];
const tuesdaySchedule = [
{
  "name": "Warning Bell",
  "start": getPeriodTime(7,25),
  "end": null},
{
  "name": "1st Period",
  "start": getPeriodTime(7,30),
  "end": getPeriodTime(8,20)},
{
  "name": "2nd Period",
  "start": getPeriodTime(8,25),
  "end": getPeriodTime(9,15)},
{
  "name": "Storm Time",
  "start": getPeriodTime(9,20),
  "end": getPeriodTime(9,50)},
{
  "name": "3rd Period",
  "start": getPeriodTime(9,55),
  "end": getPeriodTime(10,45)
},
{
  "name": "Lunch (1st Upstairs/Music)",
  "start": getPeriodTime(10,50),
  "end": getPeriodTime(11,20)},
{
  "name": "4th Period (early)",
  "start": getPeriodTime(10,50),
  "end": getPeriodTime(11,40)},
{
  "name": "4th Period (late)",
  "start": getPeriodTime(11,25),
  "end": getPeriodTime(12,15)},
{
  "name": "Lunch (2nd Downstairs & PE)",
  "start": getPeriodTime(11,45),
  "end": getPeriodTime(12,15)},
{
  "name": "5th Period",
  "start": getPeriodTime(12,20),
  "end": getPeriodTime(1,10)},
{
  "name": "6th Period",
  "start": getPeriodTime(1,15),
  "end": getPeriodTime(2,05)}];
const weekSchedule = [mondaySchedule, tuesdaySchedule];
printWeekSchedule(weekSchedule);

function printWeekSchedule(weekSchedule) {
  let lines = "";
  const r = new Date();
  if (r.getDay() == 1) {
    lines = lines + "Monday Schedule<br>";
    lines = lines + "<br>";
    lines = lines + printDaySchedule(weekSchedule[0]);
    lines = lines + "<br>";
  }
  if (r.getDay() != 1) {
    lines = lines + "Tuesday-Friday Schedule<br>";
    lines = lines + "<br>";
    lines = lines + printDaySchedule(weekSchedule[1]);
    lines = lines + "<br>";
  }
  document.getElementById("day_schedule").innerHTML = lines;
}
function getPeriodTime(hours, mins) {
  const today = new Date();
  today.setHours(hours);
  today.setMinutes(mins);
  return today;
}
function printDaySchedule(schedule) {
  var line = "";
   for (let i=0; i< schedule.length; i++) {
     line +="<div id = '" + i + "'>";
     let startTime = formatPeriodTime(schedule[i].start);
     if (startTime.split(":")[1] < 10) {startTime = startTime.split(":")[0] + ":0" + startTime.split(":")[1] ;}
     line = line + schedule[i].name + ": " + startTime;
     if (schedule[i].end) {
       var end = formatPeriodTime(schedule[i].end);
       if (formatPeriodTime(schedule[i].end).split(":")[1] < 10){var end = formatPeriodTime(schedule[i].end).split(":")[0] + ":0" + formatPeriodTime(schedule[i].end).split(":")[1]}
       line = line + "-" + end;
     }
     line = line + "</div>";
   }
  return line;
}
function formatPeriodTime(date) {
 return date.getHours() + ":" + date.getMinutes(); 
}
function GetTime(){
  const weekday = ["Current Day: Sunday","Current Day: Monday","Current Day: Tuesday","Current Day: Wednesday","Current Day: Thursday","Current Day: Friday","Current Day: Saturday"];
  var CurrentTime = new Date();
  var hour = CurrentTime.getHours();
  var minute = CurrentTime.getMinutes();
  var second = CurrentTime.getSeconds();
  if (minute < 10){
    minute = "0" + minute;
  }
  if (hour > 12){
    hour =  hour - 12;
  }
  if (second < 10){
    second = "0" + second;
  }
  var GetCurrentTime = "Current Time: " + hour + ":" + minute + ":" + second ;
  document.getElementById("CurrentTime").innerHTML = GetCurrentTime;
  setTimeout(GetTime,1000);
  const d = new Date();
  let day = weekday[d.getDay()];
   if(d.getDay() != 0){
     if (d.getDay() != 6){
      document.getElementById("demo").innerHTML = day;
     }
   }
}