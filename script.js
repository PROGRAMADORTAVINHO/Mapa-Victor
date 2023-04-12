import "@tomtom-international/web-sdk-maps";
import tt from '@tomtom-international/web-sdk-maps'
import tt from "@tomtom-international/web-sdk-maps"
import "./maps.css"
var map = tt.map({
    key: '5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh',
    container: 'map',
    dragPan: !isMobileOrTablet()
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());

import {
    copyrights,
    placeById,
  } from "@tomtom-international/web-sdk-services/esm"
  
  copyrights({
    key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
  })
    .then(function (results) {
      console.log("Copyrights", results)
    })
    .catch(function (reason) {
      console.log("Copyrights", reason)
    })
  
  placeById({
    key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
  })
    .then(function (result) {
      console.log("Place by Id", result)
    })
    .catch(function (reason) {
      console.log("Copyrights", reason)
    })

    const tt = require("@tomtom-international/web-sdk-services/dist/services-node.min.js")

tt.services
  .copyrights({
    key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
  })
  .then(function (results) {
    console.log("Copyrights", results)
  })
  .catch(function (reason) {
    console.log("Copyrights", reason)
  })

  require("./style.css")
var tt = require("@tomtom-international/web-sdk-maps")

var map = tt.map({
  key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
  container: "map",
})
tt.map({
    key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
    container: "map",
    zoom: "eight",
  })
  const map = tt.map({
    key: "5CYpJpvBiRnQvQgPSJK4ZNaOPT8yUbQh",
    container: "map",
  })
 
