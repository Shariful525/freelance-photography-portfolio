import React from "react";

import contact from "./images/contac.png";
import officeIcon from "./images/office.png";
import callIcon from "./images/call.png";
import emailIcon from "./images/email.png";
import mapTp from "./images/map-tp.png";
import "../components/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-full">
          {/* get in touch with me */}
          <div className="lg:flex lg:justify-between mt-[100px] w-full px-20">
            {/*text site */}
            <div className=" mr-10">
              <div className="flex gap-5 mb-10">
                <img src={contact} alt="contact" />
                <p className="text-white">Conact Me</p>
              </div>
              <h1 className="text-5xl  text-white font-[500]">
                Get In Touch With Me
              </h1>
              <p className="py-6 text-left">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices <br /> lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit.
                <br /> Donec sed nisl libero. Fusce dignissim luctus sem
              </p>
            </div>
            {/* form section */}
            <div className="card flex-shrink-0 w-full sm:mb-10 max-w-sm message-card mt-20">
              <div className="card-body ">
                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered bg-transparent"
                  />
                </div>

                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered bg-transparent"
                  />
                </div>
                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="input input-bordered bg-transparent"
                  />
                </div>
                <div className="form-control mb-[30px]">
                  <textarea
                    className="textarea bg-transparent textarea-bordered h-24"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-control">
                  <button className=" btn send-message" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bio */}
          {/* <div className="text-center sm:mt-[-200px] lg:ml-[-620px] lg:text-left flex"> */}
          <div className="flex flex-col gap-5 lg:ml-[-600px] border-x-amber-50 lg:mt-[-260px] md:ml-[-400px] ">
            <div className="flex text-left gap-5 ">
              <div className="w-20">
                <img src={officeIcon} alt="" />
              </div>
              <div>
                <h5 className="text-white">My Office</h5>
                <p>99 S.1, Jombio Park Pekanbaru 2818290. Bangladesh</p>
              </div>
            </div>
            <div className="flex text-left gap-5 ">
              <div className="w-20">
                <img src={callIcon} alt="" />
              </div>
              <div>
                <h5 className="text-white">Phone Number</h5>
                <p>+88 018507 11231</p>
              </div>
            </div>
            <div className="flex text-left gap-5 ">
              <div className="w-20">
                <img src={emailIcon} alt="" />
              </div>
              <div>
                <h5 className="text-white">Email Address</h5>
                <p>hello@expertsquad.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Me on google */}
      {/* </div> */}

      <div>
        <div className="mx-auto">
          <img src={mapTp} alt="" />
          <h2>
            Google <span>Map</span>
          </h2>
        </div>
        <div className="w-12/9 mx-auto"></div>
      </div>
    </>
  );
};

export default Contact;
