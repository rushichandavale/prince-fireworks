import React from "react";
const WelcomeSection = ({ image, rocketImage }) => (
  <section className="relative container mx-auto py-16 px-4 bg-white">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative group">
          {/* Main Image */}
          <img
            src={image}
            alt="Welcome"
            className="rounded-3xl rounded-tr-[150px] shadow-xl w-[280px] md:w-[380px] lg:w-[480px]"
          />
          {/* Rocket Image */}
          <img
            src={rocketImage}
            alt="Rocket"
            className="absolute bottom-[-30px] left-[50%] translate-x-[-50%] w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] transition-transform transform group-hover:translate-y-[-10px] duration-300"
          />
        </div>
      </div>

      {/* Text Content Section */}
      <div className="flex-1 text-left px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
          Welcome to Ajanta Fireworks
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          With immense hard work and passion for work, we have emerged as one of
          the reputed firework manufacturers in the Indian firework industry.
          Today the company is run by third-generation entrepreneurs of Mr.
          Arunachala’s family.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          Ajanta Fireworks is well-equipped with the best infrastructure. Our
          firecracker manufacturing unit has been divided into various
          departments like pyrotechnic, physics, chemistry, printing, packaging,
          and handcrafts. As far as quality is concerned, our products are
          checked at every level of production. Our team comprises qualified
          pyrotechnics and quality control inspectors. Our firecracker range is
          divided into traditional crackers, party crackers, elite Diwali
          crackers, and fancy novelties. The firecrackers we manufacture are
          safe and light up any occasion.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Today, Ajanta is a reputed name in India. Our operations are well
          spread in states like Andhra Pradesh, Telangana, Karnataka, Tamil
          Nadu, and Chattisgarh. At Ajanta, we strive to make our customers’
          celebrations colorful by providing superior quality and innovative
          firecrackers that add spark to every occasion.
        </p>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
