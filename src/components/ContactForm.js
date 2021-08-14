import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import _ from "lodash";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sparkFormUrl = "https://submit-form.com/DvasQseW";

  const sendMessage = async (values) => {
    try {
      await axios.post(sparkFormUrl, values);
      setIsMessageSent(true);
    } catch (e) {
      setIsMessageSent(false);
    }
    setIsSubmitting(false);
    setIsOpen(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (formValues.name && formValues.message && formValues.email) {
      setIsSubmitting(true);
      sendMessage(formValues);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        {/* Name */}
        <div className="flex flex-col">
          <label className="pb-1 px-1 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="text-xicatic rounded py-1 px-2"
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({
                ..._.omit(formValues, "name"),
                name: e.target.value,
              })
            }
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label className="p-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="text-xicatic rounded py-1 px-2"
            id="email"
            name="email"
            type="text"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ..._.omit(formValues, "email"),
                email: e.target.value,
              })
            }
          />
        </div>
        {/* Message */}
        <div className="flex flex-col">
          <label className="p-1 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            className="text-xicatic rounded py-1 px-2 resize-none"
            id="message"
            name="message"
            cols="40"
            rows="5"
            value={formValues.message}
            onChange={(e) =>
              setFormValues({
                ..._.omit(formValues, "message"),
                message: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="text-center pt-5">
          <button className="bg-xicaticLight text-lg rounded-full py-1 px-8 transition duration-200 transform hover:-translate-y-0.5 hover:shadow-md font-semibold">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          <div className="bg-ghostWhite  z-30 rounded-3xl max-w-sm mx-auto py-12 px-8 space-y-5 text-center w-72 shadow-xl text-xicatic">
            <Dialog.Title
              className={`${
                isMessageSent ? "text-cadetBlue" : "text-red-700"
              } text-lg font-semibold`}
            >
              {isMessageSent ? "Sucess!" : "Something went wrong"}
            </Dialog.Title>
            <Dialog.Description>
              {isMessageSent
                ? "Your message was submitted, I will reply as soon as possible"
                : "Please feel free to contact me in any other channel while I fix this issue"}
            </Dialog.Description>
            <button
              className="bg-xicaticLight bg-opacity-20 rounded-full py-1 px-8 transition duration-200 transform hover:-translate-y-0.5 hover:shadow-md font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Ok
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ContactForm;
