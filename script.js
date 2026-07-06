function trackParcel() {
  let id = document.getElementById("trackingId").value.toUpperCase();
  let result = document.getElementById("result");

  switch (id) {
    case "SKR123":
      result.innerHTML = "📦 Status: Shipped";
      result.style.color = "orange";
      break;

    case "SKR456":
      result.innerHTML = "🚚 Status: Out for Delivery";
      result.style.color = "blue";
      break;

    case "SKR789":
      result.innerHTML = "✅ Status: Delivered";
      result.style.color = "green";
      break;

    default:
      result.innerHTML = "❌ Invalid Tracking ID";
      result.style.color = "red";
  }
}
