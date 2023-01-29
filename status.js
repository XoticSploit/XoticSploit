function getAppStatus() {
    $.ajax({
      url: "https://api.statuspage.io/v1/pages/drwctp2hyr82/status.json",
      headers: {
        "Authorization": "OAuth f7593c59-b29f-4636-aa79-36660a8eb73f"
      },
      success: function(data) {
        var status = data.status.indicator;
        var statusText = "";
        var statusColor = "";
        
        if (status === "operational") {
          statusText = "Operational";
          statusColor = "green";
        } else if (status === "degraded_performance") {
          statusText = "Degraded Performance";
          statusColor = "yellow";
        } else if (status === "partial_outage") {
          statusText = "Partial Outage";
          statusColor = "orange";
        } else {
          statusText = "Major Outage";
          statusColor = "red";
        }
        
        // Update the status indicator
        $("#status-indicator").text(statusText).css("background-color", statusColor);
      }
    });
  }
  
  // Call the function to get the app status on page load
  $(document).ready(function() {
    getAppStatus();
  });
  setInterval(getAppStatus, 30000);
