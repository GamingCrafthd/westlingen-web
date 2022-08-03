const regex = {
    vehicleNumber: /^[0-9]{3}$/,
    splitter: /[,;&]/
}

const companyLUT = {
    "Westlinger Verkehrsbetriebe": "WVB",
    "Bad Elchalber Verkehrsgesellschaft": "EVG",
    "Historischer Nahverkehr e.V.": "HNV"
}

function UrlExists(url) {
    var http = new XMLHttpRequest()
    http.open('HEAD', url, true)
    http.send()
    return http.status == 200
}

var GetById = id => document.getElementById(id)

document.getElementById("submit").onclick = () => {
    const vehicles = GetById("veh").value.split(regex.splitter)
    const company = GetById("company").value
    const secure = GetById("secure").checked

    vehicles.forEach(vehicle => {
        if (!vehicle.match(regex.vehicleNumber)) {
            alert(vehicle + " ist keine richtige Fahrzeugnummer.")
            return
        }

        // TODO:
        // (Remember to skip empty lines)

        //var url = `http${secure ? "s" : ""}://westlingen.gamingcraft.de/vehicles/${companyLUT[company]}-Tw${vehicle}.veh`
        //if (UrlExists(url)) window.location = url
        //else console.warn(`Couldn't find vehicle ${vehicle} of the ${companyLUT[company]}`)
    })
}