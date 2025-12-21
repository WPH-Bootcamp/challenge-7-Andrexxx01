import { ServicesCheckbox, InputField, TextAreaField } from "../../ui/Input";
import Button from "../../ui/Button";
import Modal from "../Popup";
import { useState } from "react";

const InputForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [services, setServices] = useState<string[]>([]);
    const [errors, setErrors] = useState({
      fullName: "",
      email: "",
      message: "",
      services: "",
    });
    const [popup, setPopup] = useState<null | "success" | "failed">(null);

    const resetForm = () => {
      setFullName("");
      setEmail("");
      setMessage("");
      setServices([]);
      setErrors({
        fullName: "",
        email: "",
        message: "",
        services: "",
      });
    };

    const toggleService = (id: string) => {
      let updated = [...services];

      if (updated.includes(id)) {
        updated = updated.filter((item) => item !== id);
      } else {
        updated.push(id);
      }

      setServices(updated);
    };

    const validate = () => {
      let newErrors = { fullName: "", email: "", message: "", services: "" };
      let valid = true;

      if (!fullName.trim()) {
        newErrors.fullName = "Input cannot be empty";
        valid = false;
      }
      if (!email.trim() || !email.includes("@")) {
        newErrors.email = "Email must contain '@'";
        valid = false;
      }
      if (!message.trim()) {
        newErrors.message = "Input cannot be empty";
        valid = false;
      }

      if (services.length === 0) {
        newErrors.services = "Choose max 1 service per send";
        valid = false;
      } else if (services.length > 1) {
        newErrors.services = "Only 1 service allowed";
        valid = false;
      }

      setErrors(newErrors);
      return valid;
    };

    const submitForm = () => {
      if (validate()) {
        setPopup("success");
      } else {
        setPopup("failed");
      }
    };

    return (
      <>
        {popup && (
          <Modal
            type={popup}
            message={
              popup === "success"
                ? "Message Received!"
                : "Oops! Something went wrong."
            }
            description={
              popup === "success"
                ? "Thanks for reaching out — we’ll get back to you as soon as possible."
                : "We couldn't send your message. Please try again or check your connection."
            }
            onSuccess={() => {
              resetForm();
              setPopup(null);
              window.location.reload(); 
            }}
            onFailed={() => {
              setPopup(null);
              document
                .getElementById("talk")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}
        <section
          className="w-full min-w-[393px] h-[906px] relative top-18 flex flex-col items-center justify-between px-4 pt-10 gap-[24px] xl:w-[1440px] xl:h-[956px] xl:top-60 xl:py-20 xl:px-35 xl:gap-12"
          id="talk"
        >
          <div className="w-full h-[82px] gap-s-xl flex flex-col items-center justify-between xl:w-[720px] xl:h-[104px]">
            <h3 className="w-full h-[38px] text-neutral-950 text-display-sm font-bold xl:w-[720px] xl:h-[56px] xl:text-display-xl xl:text-center dark:text-neutral-25">
              Ready to Start? Let’s Talk.
            </h3>
            <p className="w-full h-[28px] text-neutral-400 text-sm font-medium xl:w-[720px] xl:h-[32px] xl:text-lg xl:text-center">
              Tell us what you need, and we’ll get back to you soon.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5 items-start justify-between xl:w-[720px]">
            <InputField
              label="Name"
              id="name"
              name="fullName"
              value={fullName}
              onChange={setFullName}
              placeholder="Enter your name"
              error={errors.fullName}
            />
            <InputField
              label="Email"
              id="email"
              name="yourEmail"
              value={email}
              onChange={setEmail}
              placeholder="Enter your email"
              error={errors.email}
            />
            <TextAreaField
              label="Message"
              id="message"
              name="yourMessage"
              value={message}
              onChange={setMessage}
              placeholder="Enter your message"
              error={errors.message}
            />
            <div className="w-full h-[284px] flex flex-col gap-[14px] items-start justify-between xl:w-[720px] xl:h-[164px] xl:relative">
              <label
                htmlFor="service"
                className="w-full h-[28px] text-sm font-bold text-neutral-950 xl:w-[720px] xl:h-[28px] dark:text-neutral-25"
              >
                Services
              </label>
              <ServicesCheckbox
                id="webdev"
                label="Web Development"
                onChange={toggleService}
              />
              <ServicesCheckbox
                id="m-app"
                label="Mobile App Development"
                onChange={toggleService}
              />
              <ServicesCheckbox
                id="design"
                label="UI/UX Design"
                onChange={toggleService}
              />
              <div className="xl:absolute xl:right-[300px] xl:top-[45px]">
                <ServicesCheckbox
                  id="cloud"
                  label="Cloud Solutions"
                  onChange={toggleService}
                />
              </div>
              <div className="xl:absolute xl:right-[240px] xl:top-[91px]">
                <ServicesCheckbox
                  id="software"
                  label="Software Development"
                  onChange={toggleService}
                />
              </div>
              <div className="xl:absolute xl:right-[372px] xl:top-[136px]">
                <ServicesCheckbox
                  id="other"
                  label="Other"
                  onChange={toggleService}
                />
              </div>
            </div>
            {errors.services && (
              <p className="text-xs text-red-500">{errors.services}</p>
            )}
            <Button
              href="#"
              label="Send"
              className="w-full h-[44px] bg-primary-200 text-sm font-bold text-white hover:bg-orange-700 duration-500 shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] xl:h-[48px]"
              onClick={submitForm}
            />
          </div>
        </section>
      </>
    );
};

export default InputForm;