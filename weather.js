const getMyIP = async () => {
  try {
    const res = await fetch('https://api64.ipify.org?format=json');
    const data = await res.json();
    console.log("Your IP address is:", data.ip);
  } catch (err) {
    console.error("Error fetching IP:", err);
  }
};

getMyIP();
