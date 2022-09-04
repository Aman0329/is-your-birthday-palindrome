function reverseString(str){
    let splitstr=str.split('');
    let reverse=splitstr.reverse();
    let reversestr=reverse.join('');
    return reversestr;
  

}

function isPalindrome(str){
  let reversestr=reverseString(str);
  return str===reversestr;
}
var date={
    day:2,
    month:2,
    year:2020
}
function dateToString(date){
    var dateinStr={day:'',month:'',year:'',};
    
    if(date.day<10){
        dateinStr.day="0"+date.day;
    }
    else{
        dateinStr.day=date.day.toString();
    }

    if(date.month<10){
        dateinStr.month="0"+date.month;
    }
    else{
        dateinStr.month=date.month.toString();
    }

    dateinStr.year=date.year.toString();
    return dateinStr;

}
var strdate=dateToString(date);
function getdateinAllFormat(date){
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  function checkAllDateFormatPalindrome(date){
    var listofDateFormats=getdateinAllFormat(date);
    var flag =['false','false','false','false','false','false'];
    for(var i=0;i<listofDateFormats.length;i++){
        if(isPalindrome(listofDateFormats[i])){
        flag[i]=true;

    }
}
return flag;
  }
  function isLeapYear(year) {

    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }
  
  function getNextdate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    }
  }
  function getnextPalindromeDate(date) {

    var nextDate = getNextdate(date);
    var ctr = 0;
  
    while (1) {
      ctr++;
      var dateSTR =dateToString(nextDate);
      var results=checkAllDateFormatPalindrome(dateSTR);
  
      for (let i = 0; i < results.length; i++) {
        if (results[i]) {
          return [ctr, nextDate];
        }
      }
      nextDate = getNextdate(nextDate);
    }
  }

console.log(getnextPalindromeDate(date));