import React from "react";

const SafetyTips = () => {
  const dos = [
    {
      title: "Follow Instructions",
      content: "Display fireworks as per the warnings and instructions mentioned on the pack.",
      icon: "✅",
    },
    {
      title: "Outdoor Use Only",
      content: "Use fireworks only outdoors.",
      icon: "🏞️",
    },
    {
      title: "Use Branded Fireworks",
      content: "Buy fireworks from authorized/reputed manufacturers only.",
      icon: "🎆",
    },
    {
      title: "Keep Safe Distance",
      content: "Light only one firework at a time, by one person. Others should watch from a safe distance.",
      icon: "🔥",
    },
    {
      title: "Follow Safety Tips",
      content: "Always follow the safety tips marked on the fireworks.",
      icon: "💦",
    },
    {
      title: "Use Agarbatti",
      content: "Use an agarbatti to ignite the fireworks.",
      icon: "🕯️",
    },
    {
      title: "Safe Storage",
      content: "Store fireworks in a cool and dry place.",
      icon: "🗑️",
    },
    {
      title: "Needs Supervision",
      content: "Always have adult supervision.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Emergency Water",
      content: "Keep two buckets of water handy in the event of fire or any mishap.",
      icon: "💦",
    },
  ];

  const donts = [
    {
      title: "Don’t Make Tricks",
      content: "Never make your own fireworks.",
      icon: "❌",
    },
    {
      title: "Don’t Relight",
      content: "Never try to re-light or pick up fireworks that have not ignited fully.",
      icon: "❌",
    },
    {
      title: "Don’t Carry It",
      content: "Never carry fireworks in your pockets.",
      icon: "🚫",
    },
    {
      title: "Do Not Use Glass/Metal",
      content: "Never shoot fireworks in metal or glass containers.",
      icon: "❌",
    },
    {
      title: "Do Not Throw",
      content: "Never point or throw fireworks at another person.",
      icon: "🚫",
    },
    {
      title: "Don’t Wear Loose Clothes",
      content: "Do not wear loose clothing while using fireworks.",
      icon: "👚",
    },
    {
      title: "Don’t Touch It",
      content: "After the fireworks display, never pick up fireworks that may be leftover, they still may be active.",
      icon: "🔥",
    },
    {
      title: "Don’t Place Near Candles",
      content: "Don’t store firecrackers near burning candles or lamps.",
      icon: "🕯️",
    },
    {
      title: "Don’t Drink & Burst Crackers",
      content: "Alcohol causes delayed body responses & crackers might burst early.",
      icon: "🍻",
    },
  ];

  return (
    <section className="bg-[#fefaf5] py-16">
      <div className="container mx-auto px-6 text-gray-800">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-[#d46ad6] mb-8 animate__animated animate__fadeIn">
            Safety Tips
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            There are certain Dos & Don’ts to follow while purchasing, bursting, and storing crackers. Follow these tips to prevent accidents and ensure a safe experience.
          </p>
          <hr className="border-t-2 border-[#d46ad6] mb-12" />
        </div>

        {/* Do's and Don'ts Section */}
        <div className="flex flex-wrap gap-16 justify-center">
          {/* Do's Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-semibold text-center text-[#d46ad6] mb-12">Do's</h2>
            <div className="space-y-8">
              {dos.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 hover:bg-[#f3e9f5] p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl text-[#d46ad6]">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-semibold text-center text-[#e53e3e] mb-12">Don’ts</h2>
            <div className="space-y-8">
              {donts.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 hover:bg-[#fce8e8] p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl text-[#e53e3e]">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
