const electionDate = "25 Feb 2023"

const daysEl = document.getElementById('daysEl')
const hoursEl = document.getElementById('hoursEl')
const minutesEl = document.getElementById('minutesEl')
const secondsEl = document.getElementById('secondsEl')




function countDown(){

    const currentDate = new Date();    
    const countElectionDate = new Date(electionDate);  

    const totalSeconds = (countElectionDate-currentDate)/1000
    const days = Math.floor( totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds/3600 )% 24
    const seconds = Math.floor(totalSeconds) % 60
    // const hours = Math.floor(days%3600*24)
    // const minutes= Math.floor(seconds% 3600/60)
    const minutes= Math.floor(totalSeconds/60)%60
    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds

    console.log('seconds '+ seconds)
    console.log('minutes '+minutes)
    console.log('Hours ' + hours)
    console.log('days '+ days) 

}

countDown()

setInterval(countDown, 1000)
// var d = Math.floor(seconds / (3600*24));
// var h = Math.floor(seconds % (3600*24) / 3600);
// var m = Math.floor(seconds % 3600 / 60);
// var s = Math.floor(seconds % 60);

const api_url = 'nigerian-politics-news.p.rapidapi.com';
  async function getUser() {
 
    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);
 
    // Parsing it to JSON format
    const data = await response.json();
    console.log(data)}

    getUser()
