const ws = new WebSocket('wss://wss.njhudson.co.uk:8082');

ws.onopen = function() {
  console.log('Connected to WebSocket server');
  ws.send('Hello, server!');
};

// Log incoming messages from server
ws.onmessage = function(event) {
  console.log('received: ' + event.data);
};

ws.onerror = function(event) {
  console.error('WebSocket error: ' + event);
};