var socketServer = require('ws').Server;

var wss = new socketServer({
  port: 8080
});

wss.on('connection', function(client) {
  client.on('message', function(_message) {
    var _messageObj = JSON.parse(_message);
    _messageObj.status = 1;
    this.message = _messageObj;

    wss.broadcast(_messageObj);
  })

  // 退出聊天
  client.on('close', function() {
    try {
      this.message = this.message || {};
      this.message.status = 0;
      wss.broadcast(this.message);
    } catch (error) {
      console.log('刷新页面了')
    }
  })
})

wss.broadcast = function broadcast(_messageObj) {
  wss.clients.forEach(function(client){
    client.send(JSON.stringify(_messageObj))
  })
}
