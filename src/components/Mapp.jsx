import React from "react";

export default function Mapp () {

    //const key = "AIzaSyB_Yumt17bMTYFQQDl6ApkLEB9hsAQtT2c";
    //const lat = 31.6246868137085;
    //const lng = -8.013474728834973;

  return (
    <div className="w-full px-4 md:px-8 py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] underline decoration-[#FFD700] mb-6">
        Event Location: <br />
        PALAIS DES CONGRÈS Mövenpick Hotel Mansour Eddahbi
      </h2>
      <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl border border-gray-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3397.336639279995!2d-8.013464!3d31.624632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeeed818bb767%3A0x9e222d5b1969a548!2sPalais%20des%20Congr%C3%A8s!5e0!3m2!1sen!2snl!4v1750584971899!5m2!1sen!2snl"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};
