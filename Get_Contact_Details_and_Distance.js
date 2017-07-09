var msgs = [];
var round_miles_to = 5;
for (var i = 0; i< msg.payload.businesses.length; i++) {
  //if(msg.payload[i].facility_type=="Free Clinic")
  var dist = (0.000621371 * msg.payload.businesses[i].distance).toFixed(2);
  var is_closed = Boolean(msg.payload.businesses[i].is_closed);
  if (!is_closed && dist<5)
    {
        var data =  msg.payload.businesses[i].name  +'\nPhone: '+ msg.payload.businesses[i].phone 
        + '\nDistance: ' + dist + ' miles';
        msgs.push(data);
    }
}
var obj = {payload: msgs.join("\n\n")};
return obj
