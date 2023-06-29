"use client";

import FloatInSection from "@/components/common/FloatInSection";
import SectionHeader from "@/components/common/SectionHeader";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import ReactProps from "@/interfaces/ReactProps";
import Logo from "@/components/common/Logo";
import styles from "./Contact.module.scss";
import axios from "axios";
import Response from "@/interfaces/ResponseData";
import { getClasses } from "@/libs/utils/get/getProps";
import { HiPaperAirplane as PlaneIcon } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdDone as SuccessIcon, MdClose as ErrorIcon } from "react-icons/md";

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
      <label htmlFor={props.id} className="w-max">
        {label}
      </label>
      {isEmail ? (
        <input
          {...props}
          className={`${getClasses(props.className)}`}
          type="email"
          input={undefined}
          placeholder="Enter your email here..."
        />
      ) : (
        <textarea
          {...props}
          className={`${getClasses(props.className)} h-[200px] resize-none`}
          input={undefined}
          placeholder="Enter your message here..."
        />
      )}
    </>
  );
};

const Contact = () => {
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
    // dispatch(startLoading());
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
    <PageContainer className={`${styles.Background} mt-16`} id="contact">
      <FloatInSection className="my-10">
        <h2 className="my-8 text-xl font-semibold leading-loose text-center sm:text-2xl lg:text-4xl text-gradient">
          Interested? Leave a message here and I will respond ASAP.
        </h2>
        <div className="flex flex-none justify-evenly">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5ade0eb85cfd79247926399a/1621039002787-XLD71SBNR2SSMKSWCDBB/5147423.gif"
            alt="contact-gif"
            height={300}
            width={300}
            className="object-contain h-max hidden sm:block sm:w-[200px] lg:w-[300px]"
          />
          <form
            onSubmit={sendMsg}
            className="flex flex-col w-full gap-3 sm:w-2/3 lg:w-1/2"
          >
            {/* @ts-ignore */}
            {Object.keys(inputs).map((inputKey: keyof InputsInterface, idx) => {
              return (
                <div
                  key={`contact-form-${idx}`}
                  className={`${
                    inputKey === "email" &&
                    !isEmailValid &&
                    inputs.email.length > 0
                      ? "focus-within:text-red-500 text-red-500"
                      : inputKey === "email" &&
                        isEmailValid &&
                        inputs.email.length > 0
                      ? "focus-within:text-emerald-600 dark:focus-within:text-emerald-500 text-emerald-600 dark:text-emerald-500"
                      : "focus-within:text-system-navy dark:focus-within:text-system-white"
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
                        ? "border-emerald-600 dark:border-emerald-500 focus:border-emerald-600 dark:focus:border-emerald-500"
                        : "focus:border-system-navy dark:focus:border-system-white dark:border-gray-200 border-gray-400"
                    } ${styles.Input}`}
                    value={inputs[inputKey]}
                    onChange={onInputChange(inputKey)}
                    name={inputKey}
                    input={inputKey}
                    id={`contact-${inputKey}`}
                    required
                  />
                </div>
              );
            })}
            <motion.button
              whileTap={status === "waiting" ? { scale: 0.95 } : {}}
              disabled={
                status === "sending" ||
                status === "success" ||
                status === "error"
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
                className="p-2.5 w-10 h-10 flex items-center justify-center"
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
        </div>
      </FloatInSection>
    </PageContainer>
  );
};

export default Contact;
