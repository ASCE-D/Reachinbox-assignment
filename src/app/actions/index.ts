 async function getAllMails() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    console.error("No auth token found");
    return null;
  }

  try {
    const response = await fetch(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZGVlcGVzaGdlbmFuaUBnbWFpbC5jb20iLCJpZCI6OTQ1LCJmaXJzdE5hbWUiOiJEZWVwZXNoIiwibGFzdE5hbWUiOiJHZW5hbmkifSwiaWF0IjoxNzIzNjI2NDk0LCJleHAiOjE3NTUxNjI0OTR9.6Ol2G_y47VoT0c-rSd6pSJaZqWVSGPADzgHqCRt5a7E`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mails:", error);
    return null;
  }
}
