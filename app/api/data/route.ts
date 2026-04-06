export async function GET() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // refresh data on every request
      })
     if (!response.ok) { 
        return Response.json("Failed to fetch data", { status: response.status });
     }
     
     const data = await response.json();
        return Response.json(data, { status: 200 });
      
    }catch (error) {
      console.error("Error fetching data:", error);
        return Response.json("Internal Server Error", { status: 500 });

    }
}