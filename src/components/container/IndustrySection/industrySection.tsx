import { useState } from "react";

const IndustrySection = () => {
    const [activeTab, setActiveTab] = useState <"fintech" | "e-commerce" | "healthcare">("fintech");
    return (
      <section className="w-full min-w-[393px] h-[655px] relative top-18 flex flex-col items-center justify-center px-4 py-10 gap-6 xl:w-[1440px] xl:h-[758px] xl:top-60 xl:py-20 xl:px-35 xl:gap-16">
        <div className="w-full h-[109px] flex flex-col items-start justify-between gap-[11px] xl:w-[1160px] xl:h-[99px]">
          <h3 className="w-full h-[42px] text-[32px] leading-[40px] font-bold text-neutral-950 xl:w-[1160px] xl:h-[56px] xl:text-[40px] xl:leading-[48px] dark:text-neutral-25">
            Built for Your Industry
          </h3>
          <p className="w-full h-[56px] text-sm text-neutral-400 font-medium xl:w-[1160px] xl:h-[32px] xl:text-lg">
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>
        <div className="w-full h-[442px] flex flex-col items-start gap-6 justify-between xl:w-[1160px] xl:h-[435px] xl:gap-16 xl:flex-row">
          <div className="w-full h-[114px] flex flex-col items-start gap-3 justify-between xl:gap-6 xl:w-[256px] xl:h-[150px]">
            <div
              onClick={() => setActiveTab("fintech")}
              className={`w-full h-[30px] cursor-pointer flex items-center pl-[12px] justify-start relative text-base font-bold ${
                activeTab === "fintech"
                  ? "text-neutral-950 dark:text-neutral-25"
                  : "text-[#aaaaaa]"
              } ${
                activeTab === "fintech"
                  ? "before:bg-primary-200"
                  : "before:bg-[#aaaaaa]"
              } before:absolute before:w-1 before:h-6  before:rounded-full before:left-0 xl:w-[256px] xl:h-[34px] xl:text-xl xl:before:h-8`}
            >
              Fintech
            </div>
            <div
              onClick={() => setActiveTab("e-commerce")}
              className={`w-full h-[30px] cursor-pointer flex items-center pl-[12px] justify-start text-base font-bold relative ${
                activeTab === "e-commerce"
                  ? "text-neutral-950 dark:text-neutral-25"
                  : "text-[#aaaaaa]"
              } ${
                activeTab === "e-commerce"
                  ? "before:bg-primary-200"
                  : "before:bg-[#aaaaaa]"
              } before:absolute before:w-1 before:h-6  before:rounded-full before:left-0 xl:w-[256px] xl:h-[34px] xl:text-xl xl:before:h-8`}
            >
              E-Commerce
            </div>
            <div
              onClick={() => setActiveTab("healthcare")}
              className={`w-full h-[30px] cursor-pointer flex items-center pl-[12px] justify-start text-base font-bold relative ${
                activeTab === "healthcare"
                  ? "text-neutral-950 dark:text-neutral-25"
                  : "text-[#aaaaaa]"
              } ${
                activeTab === "healthcare"
                  ? "before:bg-primary-200"
                  : "before:bg-[#aaaaaa]"
              } before:absolute before:w-1 before:h-6 before:rounded-full before:left-0 xl:w-[256px] xl:h-[34px] xl:text-xl xl:before:h-8`}
            >
              Healtcare
            </div>
          </div>
          <div className="w-full h-[304px] flex flex-col items-start gap-5 justify-between xl:w-[840px] xl:h-[435px]">
            <p className="w-full h-[84px] text-sm font-medium text-neutral-950 xl:w-[840px] xl:h-[64px] xl:text-lg dark:text-neutral-25">
              {activeTab === "fintech" &&
              "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs."}
              {activeTab === "e-commerce" && "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration."}
              {activeTab === "healthcare" && "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows."}
            </p>
            <img
              src={activeTab === "fintech" ? "/industry-fintech.svg" : activeTab === "e-commerce" ? "/industry-ecommerce.svg" : "/industry-healthcare.svg"}
              alt="card-image"
              className="w-full h-[200px] object-cover rounded-[12px] xl:w-[840px] xl:h-[351px] xl:rounded-[24px] xl:min-w-[840px]"
            />
          </div>
        </div>
      </section>
    );
};

export default IndustrySection;