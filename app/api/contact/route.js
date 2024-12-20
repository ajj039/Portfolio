export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();

    // Example: Validate the input (optional)
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Example: Forward the data to a third-party service like Formspree
    const response = await fetch("http://formspree.io/f/xwpkgryl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ message: "Message sent successfully!" }),
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: `Failed to send: ${errorText}` }),
        { status: response.status }
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
