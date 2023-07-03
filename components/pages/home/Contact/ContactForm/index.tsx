"use client";

import FloatInSection from "@/components/common/FloatInSection";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Response from "@/interfaces/ResponseData";
import { getClasses } from "@/libs/utils/get/getProps";
import { HiPaperAirplane as PlaneIcon } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdDone as SuccessIcon, MdClose as ErrorIcon } from "react-icons/md";
import { SiGooglemessages as MsgIcon } from "react-icons/si";

interface InputsInterface {
  email: string;
  msg: string;
}
const initialInputs: InputsInterface = { email: "", msg: "" };

//@ts-ignore
const Input = (props) => {
  const isEmail = props.input === "email";
  const label = isEmail ? "Email *" : "Message *";

  return (
    <>
      {/* <label htmlFor={props.id} className="w-max">
        {label}
      </label> */}
      <div className="relative w-full overflow-hidden h-fit">
        {isEmail ? (
          <input
            {...props}
            className={`${getClasses(props.className)} relative`}
            type="email"
            input={undefined}
            valid={undefined}
            placeholder="Enter your email here..."
          />
        ) : (
          <textarea
            {...props}
            className={`${getClasses(
              props.className
            )} h-[200px] resize-none relative`}
            input={undefined}
            placeholder="Enter your message here..."
            valid={undefined}
          />
        )}
        <label
          htmlFor={props.id}
          className={`${
            isEmail ? "h-full" : "h-[calc(100%-6px)]"
          } w-10 absolute flex-none top-0 bottom-0 left-0 flex items-center justify-center rounded-l-md  ${
            !props.valid && isEmail && !!props.value
              ? "bg-red-600 text-system-white"
              : "bg-green-600 dark:bg-system-blue text-system-white"
          }`}
        >
          {isEmail ? <>@</> : <MsgIcon className="text-xl" />}
        </label>
      </div>
    </>
  );
};

const ContactForm = () => {
  const [inputs, setInputs] = useState<InputsInterface>(initialInputs);
  const [status, setStatus] = useState<
    "waiting" | "sending" | "success" | "error"
  >("waiting");

  const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isEmailValid = emailCheck.test(inputs.email);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const backToWaiting = setTimeout(() => {
        setStatus("waiting");
      }, 3000);

      return () => clearTimeout(backToWaiting);
    }
  }, [status]);

  const onInputChange =
    (
      field: keyof InputsInterface
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      e.preventDefault();
      setInputs((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const sendMsg: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (inputs.email && inputs.msg && isEmailValid) {
      setStatus("sending");
      try {
        const response = await axios.post("/send-msg", {
          email: inputs.email,
          message: inputs.msg,
        });

        const resData: Response = await response.data.data;

        setStatus("success");
        setInputs({ ...initialInputs });
        // console.log(messageInput);
      } catch (err) {
        console.log(err);
        setStatus("error");
        setInputs((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  return (
    <form
      onSubmit={sendMsg}
      className="flex flex-col items-center gap-2 lg:flex-row"
    >
      <div className="flex flex-col w-full gap-2 sm:w-2/3 lg:w-full">
        {/* @ts-ignore */}
        {Object.keys(inputs).map((inputKey: keyof InputsInterface, idx) => {
          return (
            <div
              key={`contact-form-${idx}`}
              className={`${
                inputKey === "email" && !isEmailValid && inputs.email.length > 0
                  ? "focus-within:text-red-500 text-red-500"
                  : inputKey === "email" &&
                    isEmailValid &&
                    inputs.email.length > 0
                  ? "dark:focus-within:text-system-blue focus-within:text-emerald-500 dark:text-system-blue text-emerald-500"
                  : "dark:focus-within:text-system-navy focus-within:text-system-white"
              } flex flex-col`}
            >
              <Input
                className={`${
                  inputKey === "email" &&
                  !isEmailValid &&
                  inputs.email.length > 0
                    ? "border-red-500 focus:border-red-500"
                    : inputKey === "email" &&
                      isEmailValid &&
                      inputs.email.length > 0
                    ? "border-emerald-600 focus:border-emerald-600 dark:border-system-blue dark:focus:border-system-blue"
                    : (inputKey === "email" && !inputs.email) ||
                      (inputKey === "msg" && !inputs.msg)
                    ? "dark:border-gray-300 dark:focus:border-system-blue"
                    : "dark:focus:border-system-blue dark:border-system-blue text-system-navy"
                } p-2 pl-12 outline-0 bg-system-white dark:border-2 rounded-md
          placeholder:text-gray-400 focus:placeholder:text-transparent placeholder:italic
            w-full`}
                value={inputs[inputKey]}
                onChange={onInputChange(inputKey)}
                name={inputKey}
                input={inputKey}
                id={`contact-${inputKey}`}
                valid={isEmailValid}
                required
              />
            </div>
          );
        })}
      </div>

      <motion.button
        whileTap={status === "waiting" ? { scale: 0.95 } : {}}
        disabled={
          status === "sending" || status === "success" || status === "error"
        }
        animate={
          status === "waiting"
            ? {
                backgroundImage:
                  "linear-gradient(90deg, #4f76f6 0%, #77f2a1 100%)",
              }
            : status === "success"
            ? { backgroundColor: "#10b981", backgroundImage: "unset" }
            : status === "error"
            ? { backgroundColor: "#dc2626", backgroundImage: "unset" }
            : { backgroundColor: "#d4d4d4", backgroundImage: "unset" }
        }
        whileHover={
          status === "waiting"
            ? {
                backgroundImage:
                  "linear-gradient(115deg, #4f76f6 0%, #77f2a1 100%)",
              }
            : {}
        }
        className="block mx-auto rounded-full"
      >
        <motion.div
          whileHover={status === "waiting" ? { x: [-1, 2] } : {}}
          className="flex items-center justify-center w-8 h-8"
        >
          {status === "waiting" && (
            <PlaneIcon
              className="text-xl text-system-white"
              style={{ transform: "translateX(1px) rotate(90deg)" }}
            />
          )}
          {status === "sending" && (
            <Image
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="contact-loading-img"
              width={48}
              height={48}
            />
          )}
          <motion.div className="text-2xl text-system-white">
            {status === "success" && <SuccessIcon />}
            {status === "error" && <ErrorIcon />}
          </motion.div>
        </motion.div>
      </motion.button>
    </form>
  );
};

export default ContactForm;
