let URL = 'wss://invalid.com'
let ws = new WebSocket(URL);
function connect() {
  console.log("Submit")
  let usernameValue = document.getElementById("username").value;
  let passwordValue = document.getElementById("password").value;
  URL = 'wss://wss.njhudson.co.uk:8082/?username=' + usernameValue + '&password=' + passwordValue
  ws = new WebSocket(URL);

  ws.onopen = function () {
    console.log('Connected to WebSocket server');
    document.getElementById("connectedStatus").innerHTML = "Connected"
    ws.send('clientWelcome');
  };
  ws.onmessage = function (event) {
    console.log('received: ' + event.data);
  };

  ws.onerror = function (event) {
    console.error('WebSocket error: ' + event);
  };

  ws.onclose = function () {
    console.log('WebSocket closed');
    document.getElementById("connectedStatus").innerHTML = "Not Connected"
  };

}