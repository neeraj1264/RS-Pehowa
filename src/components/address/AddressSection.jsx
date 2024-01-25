import React from 'react';
import './Address.css'
const AddressSection = () => {
  return (
    <section id="address" className="address">
      <h2>Address</h2>
      <div className="map">
        <h4>Dera Radha Swami Basti Balochan Ferozpur City ,Branch Pehowa</h4>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13824.130693138495!2d76.58717577456052!3d29.97849099279536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e25021f1c7b6d%3A0x7501d4ccbfc001a8!2sDera%20Radha%20Swami%20Basti%20Balochan%20Ferozpur%20City%20%2CBranch%20Pehowa!5e0!3m2!1sen!2sin!4v1704876835667!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </section>
  );
};

export default AddressSection;
