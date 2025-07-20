import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* texto e ilustracion */}
        <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24 w-full">
          {/* texto */}
          <div className="flex flex-col justify-center items-center lg:items-start px-4 lg:pl-[150px]">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello Developer 👋
            </div>
            <h1 className="h1 max-w-md mb-8 text-center lg:text-left">Let's Work Together</h1>
            <p className="subtitle max-w-[400px] text-center lg:text-left">
              Drop your details for a quick connect
            </p>
          </div>
          {/* ilustracion */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info texto y formulario */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 mb-24 lg:mb-32 items-center w-full gap-y-8">
          {/* info texto */}
          <div className="flex flex-col gap-y-4 mb-6 lg:mb-24 text-base lg:text-lg items-center w-full">
            <div className="flex flex-col items-center w-full max-w-xs mx-auto">
              <div className="flex items-center justify-center gap-x-2 mb-2">
                <MailIcon size={18} className="text-primary" />
                <span>work.yashgoyal@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-x-2 mb-2">
                <HomeIcon size={18} className="text-primary" />
                <span>Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <PhoneCall size={18} className="text-primary" />
                <span>+91 7428911176</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div className="max-w-sm w-full flex justify-center">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
