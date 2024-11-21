import React from "react";

const YouTubeSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Watch Us in Action</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
