import Together from "together-ai";

const generateJoke = async () => {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" }); // e.g., "December"
  const day = today.getDate(); // e.g., 1
  const dateDescription = `${month} ${day}`;

  // Construct prompt
  const prompt = `Today is ${dateDescription}. Think about a historical event that happened on this day in history and write a short, funny, and clever one or two-sentence joke about it.`;

  let joke = "Oops! Couldn't fetch a joke today.";

  try {
    const together = new Together();
    const response = await together.chat.completions.create({
        messages: [
            {
                    "role": "user",
                    "content": prompt,
            }
        ],
        model: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
        stream: false
    });
    
    const responseContent = response.choices[0].message?.content;
    if (responseContent) {
      joke = responseContent;
    } else {
      throw new Error("Response content came back empty");
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
  }

  return joke;
};

export default async function Home() {
  const joke = await generateJoke();
  return (
    <div className="flex justify-center mt-16">
      <p className="max-w-3xl text-center">{joke}</p>
    </div>
  );
}