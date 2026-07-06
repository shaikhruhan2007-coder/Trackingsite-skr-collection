function trackParcel() {

let id = document.getElementById("trackingId").value.toUpperCase();
let result = document.getElementById("result");
let timeline = document.getElementById("timeline");
let status = document.getElementById("statusBox");
let details = document.getElementById("details");

timeline.style.display = "block";

switch(id){

case "SKR123":
result.innerHTML = "📦 Status : Shipped";
status.innerHTML = "✅ Order Placed<br>✅ Packed<br>🚚 Shipped";
details.innerHTML = "📍 Location : Ahmedabad Hub<br>📅 Delivery : 08 July 2026<br>🚚 Courier : SKR Express<br>📦 Weight : 0.8 Kg";
break;

case "SKR456":
result.innerHTML = "🚚 Status : Out for Delivery";
status.innerHTML = "✅ Order Placed<br>✅ Packed<br>✅ Shipped<br>🚚 Out for Delivery";
details.innerHTML = "📍 Location : Vadodara Hub<br>📅 Delivery : Tomorrow<br>🚚 Courier : SKR Express<br>📦 Weight : 0.8 Kg";
break;

case "SKR789":
result.innerHTML = "✅ Status : Delivered";
status.innerHTML = "✅ Order Placed<br>✅ Packed<br>✅ Shipped<br>✅ Out for Delivery<br>🎉 Delivered";
details.innerHTML = "📍 Delivered At : Surat<br>📅 Delivered : Today<br>👤 Received By : Customer";
break;

default:
result.innerHTML = "❌ Invalid Tracking ID";
status.innerHTML = "No parcel found.";
details.innerHTML = "";
}

}
