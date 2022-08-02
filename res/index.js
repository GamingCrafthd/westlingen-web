const regex = {
    vehicleNumber: /^[0-9]{3}$/,
    splitter: /[,;&]/
}

document.getElementById("submit").onclick = () => {
    var vehicles = document.getElementById("veh").value.split(regex.splitter)
    vehicles.forEach(vehicle => {
        if (!vehicle.match(regex.vehicleNumber)) {
            alert(vehicle + " ist keine richtige Fahrzeugnummer.")
            return
        }
        var uri = `http${document.getElementById("secure").checked ? "s" : ""}://westlingen.gamingcraft.de/vehicles/WVB-Tw${vehicle}.veh`
        if (UrlExists(uri))
            window.location = uri
    })
}

function UrlExists(url) {
    var http = new XMLHttpRequest()
    http.open('HEAD', url, false)
    http.send()
    return http.status != 404
}