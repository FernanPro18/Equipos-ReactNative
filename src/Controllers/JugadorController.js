'use strict'
const Url = 'https://api-net.herokuapp.com/api/Jugadores/';
var Peticiones = {
  async Get(){
    return fetch(Url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return null;
    });
  }
}
module.exports = Peticiones;