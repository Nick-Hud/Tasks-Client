let URL = 'wss://wss.njhudson.co.uk:8082'
let ws = new WebSocket(URL);
ws.onopen = function () {
  console.log('Connected to WebSocket server');
  document.getElementById("connectedStatus").innerHTML = "Connected"
  ws.send('clientWelcome');
};
ws.onmessage = function (event) {
  console.log('received: ' + event.data);
  getData(String(event.data))
};

ws.onerror = function (event) {
  console.error('WebSocket error: ' + event);
};

ws.onclose = function () {
  console.log('WebSocket closed');
  document.getElementById("connectedStatus").innerHTML = "Not Connected"
};

function submitCreds() {
  console.log("Submit")
  let usernameValue = document.getElementById("username").value;
  let passwordValue = document.getElementById("password").value;
  ws.send("getAuth:" + usernameValue + "+" + passwordValue)
}

let username;

function getData(data){
  let locOfCol = data.indexOf(":")
  if(data.slice(0, locOfCol) == "auth"){
    auth = data.slice(locOfCol + 1, data.length)
    document.getElementById("welcomeMsg").innerHTML = ("Authenticated = " + auth)
  }
}