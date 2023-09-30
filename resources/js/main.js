<script>
    document.getElementById("vitalSignForm").addEventListener("submit", function(e) {
        e.preventDefault();
    

        // Get form values
        const heartRate = document.getElementById("heartRate").value;
        const systolicBP = document.getElementById("systolicBP").value;
        const diastolicBP = document.getElementById("diastolicBP").value;
        const temperature = document.getElementById("temperature").value;

        // Create an object to store the data (you can use this to send data to a server or store it locally)
        const vitalSignsData = {
            heartRate: parseFloat(heartRate),
            systolicBP: parseFloat(systolicBP),
            diastolicBP: parseFloat(diastolicBP),
            temperature: parseFloat(temperature),
        };

        // Display the collected data (you can customize this part)
        alert("Vital Signs Data Collected:\n" +
            "Heart Rate: " + vitalSignsData.heartRate + " bpm\n" +
            "Systolic BP: " + vitalSignsData.systolicBP + " mmHg\n" +
            "Diastolic BP: " + vitalSignsData.diastolicBP + " mmHg\n" +
            "Temperature: " + vitalSignsData.temperature + " °C");

        // You can send this data to a server or store it locally for further processing

        // Clear the form
        document.getElementById("vitalSignForm").reset();
    });
</script>