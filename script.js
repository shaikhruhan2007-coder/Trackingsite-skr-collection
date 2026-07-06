function scrollToTrack() {
    document.getElementById("track").scrollIntoView({ behavior: "smooth" });
}

// Demo tracking data
const parcels = {
    "SKR123": "Parcel is in transit 🚚",
    "SKR456": "Out for delivery 📦",
    "SKR789": "Delivered ✅"
};

function trackParcel() {
    let id = document.getElementById("trackingId").value;
    let result = document.getElementById("result");

    if (parcels[id]) {
        result.innerText = parcels[id];
        result.style.color = "green";
    } else {
        result.innerText = "Invalid Tracking ID ❌";
        result.style.color = "red";
    }
}
