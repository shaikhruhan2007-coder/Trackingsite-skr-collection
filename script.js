function trackParcel() {

let id=document.getElementById("trackingId").value.toUpperCase();
let result=document.getElementById("result");
let timeline=document.getElementById("timeline");
let status=document.getElementById("statusBox");

timeline.style.display="block";

switch(id){

case "SKR123":
result.innerHTML="📦 Status : Shipped";
status.innerHTML="✅ Order Placed<br>✅ Packed<br>🚚 Shipped";
break;

case "SKR456":
result.innerHTML="🚚 Status : Out for Delivery";
status.innerHTML="✅ Order Placed<br>✅ Packed<br>✅ Shipped<br>🚚 Out for Delivery";
break;

case "SKR789":
result.innerHTML="✅ Status : Delivered";
status.innerHTML="✅ Order Placed<br>✅ Packed<br>✅ Shipped<br>✅ Out for Delivery<br>🎉 Delivered";
break;

default:
result.innerHTML="❌ Invalid Tracking ID";
status.innerHTML="No parcel found.";
}

}
