import React from 'react';

const SponsorsLogos = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybe8ZXqnsVCBpjQQTzc73CypBL5HJeMWfo5KiUxkYK6qYkBPnK3eZWgYIrBBEqlvVSuY&usqp=CAU"
              alt="Sunbera"
              className="w-36 h-26"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://english.loktej.com/media/c876x438/2023-07/1-1-10.jpg"
              alt="Creative Jewel"
              className="w-18 h-24"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8l1BWvhoSqFAhNsyehDACfoitnD1PBiQdaJN5z8S26FFTCl-7-w8vnAlBJHnZ3KDdWk&usqp=CAU"
              alt="NL Jewels"
              className="w-36 h-26"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-ShlbNkV945pBy3G2ebfSZGiLMRpG8g8bRXW1dW_0wS3l--Mv2j7Q-mZ_cK5GZWTJq4&usqp=CAU"
              alt="Kalinga Jewellers"
              className="w-36 h-26"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1719303800417406976/elZXvkPT_400x400.jpg"
              alt="Maxsell"
              className="w-36 h-26"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsLogos;

 