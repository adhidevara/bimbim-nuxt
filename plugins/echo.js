import Echo from 'laravel-echo'

window.io = require('socket.io-client')
window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: '185.210.144.176'
})
