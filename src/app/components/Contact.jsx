function Contact() {
  return (
    <div className="bg-color6 text-white h-screen  grid place-items-center">
      <div className="flex justify-between">
        <div className="w-96 gap-10 text-black bg-slate-50">form</div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7869.640784953654!2d85.13976546015115!3d27.570536594357197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19acae40ca6f%3A0x55295b67acd49850!2sInnovative%20Smartmandu(ISM)!5e0!3m2!1sen!2snp!4v1717235285938!5m2!1sen!2snp"
            width="600"
            height="450"
            className="ml-10 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
