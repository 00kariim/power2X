import React from "react";

export default function Map() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 p-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#003366] mb-2">
          Event Location:
        </h2>
        <p className="text-center text-xl md:text-2xl font-semibold text-[#003366] mb-4">
          PALAIS DES CONGRÈS Mövenpick Hotel Mansour Eddahbi
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-pink-400 mx-auto mb-8 rounded-full"></div>

        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.01] duration-300 border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3397.336639279995!2d-8.013464!3d31.624632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeeed818bb767%3A0x9e222d5b1969a548!2sPalais%20des%20Congr%C3%A8s!5e0!3m2!1sen!2snl!4v1750584971899!5m2!1sen!2snl"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
