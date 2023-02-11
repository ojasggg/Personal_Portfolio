import ContactFooter from "./ContactFooter";
import ContactForm from "./ContactForm";
import ContactLink from "./ContactLink";

const Contact = () => {
  return (
    <section className="bg-[#D3D2D0] ">
      <div className="relative m-auto flex h-fit flex-col justify-end py-10 lg:h-[100vh] lg:w-[1100px] lg:p-0 xl:w-[1500px]">
        <h1 className="top-3 left-0 z-[1] p-0 font-AvenirHeavy text-[80px] uppercase leading-none text-white/30 lg:absolute lg:text-[160px] xl:text-[200px] xl:text-white/30">
          Contact
        </h1>
        {/* Content and Form */}
        <div className="z-[4] mb-[3%]  flex h-fit flex-col justify-end lg:flex-row xl:mb-[6%]">
          {/* Links Section */}
          <ContactLink />
          {/* Contact Form */}
          <ContactForm />
        </div>
        <ContactFooter />
      </div>
    </section>
  );
};

export default Contact;
