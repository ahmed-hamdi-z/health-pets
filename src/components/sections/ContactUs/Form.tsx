import { useTranslation } from "react-i18next";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ClipLoader } from "react-spinners";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { send } from "@emailjs/browser";
//import { createContact } from "../../../api/routes/cards";
import toast from "react-hot-toast";
import { trim } from "../../../utils/general";
import InputStyled from "../../InputStyled";
import ButtonStyled from "../../ButtonStyled";
import type { Contact } from "../../../types/contact";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation(["contact", "common"]);

  useEffect(() => {
    const phoneInputCountry = document.querySelector(
      ".PhoneInputCountry",
    ) as HTMLElement;

    if (phoneInputCountry) {
      i18n.language === "ar"
        ? phoneInputCountry.style.setProperty("flex-direction", "row-reverse")
        : phoneInputCountry.style.setProperty("flex-direction", "row");
    }

    const phoneInput = document.querySelector(".PhoneInput") as HTMLElement;

    if (phoneInput) {
      i18n.language === "ar"
        ? phoneInput.style.setProperty("flex-direction", "row-reverse")
        : phoneInput.style.setProperty("flex-direction", "row");
    }
  }, [i18n.language]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Contact>();

  const onSubmitHandler: SubmitHandler<Contact> = async (data) => {
    try {
      setIsLoading(() => true);

      // const res = await createContact(data);

      const template = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.type,
        to_name: "Dar AlNawati",
        message: data.message,
      };

      const res = await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        template,
        import.meta.env.VITE_EMAILJS_KEY,
      );
      if (res.status !== 200) {
        setIsLoading(() => false);
      }

      reset();
      setIsLoading(() => false);

      toast.success(t("feedback.success"));
    } catch (error) {
      setIsLoading(() => false);
      toast.error(t("feedback.error"));
    }
  };

  return (
    <form
      className={trim(`
        flex
        flex-col
        my-auto
        md:gap-10
        gap-5
        w-full
        py-2`)}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <InputStyled
        contianerClassName="w-full bg-white rounded-2xl"   // ✅ added rounded
        className={`  ${
          errors.name?.message ? "placeholder:text-red-500" : ""
        }`}
        placeholder={t("form.name.placeholder")}
        {...register("name", {
          required: {
            value: true,
            message: t("form.name.errors.required"),
          },
          minLength: {
            value: 3,
            message: t("form.name.errors.min"),
          },
          maxLength: {
            value: 20,
            message: t("form.name.errors.max"),
          },
        })}
        error={errors.name?.message as string | undefined}
        disabled={isLoading}
      />

      <InputStyled
        contianerClassName="w-full bg-white rounded-2xl" 
        id="phone"
        type="tel"
        placeholder={t("form.subject.placeholder")}
        error={errors.phone?.message as string | undefined}
        customInputElement={({ tagClasses, inputClasses }) => (
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: t("form.phone.errors.required"),
              },
              minLength: {
                value: 8,
                message: t("form.phone.errors.min"),
              },
              maxLength: {
                value: 15,
                message: t("form.phone.errors.max"),
              },
              pattern: {
                value: /^[+0-9]{8,20}$/,
                message: t("form.phone.errors.invalid"),
              },
            }}
            disabled={isLoading}
            name="phone"
            render={({ field }) => (
              <PhoneInput
                defaultCountry="SA"
                className={trim(`
                    ${tagClasses}
                    ${inputClasses}`)}
                international
                {...field}
              />
            )}
          />
        )}
      />

      <InputStyled
        contianerClassName="w-full bg-white rounded-2xl" 
        className={`${
          errors.email?.message ? "placeholder:text-red-500" : ""
        }`}
        placeholder={t("form.email.placeholder")}
        {...register("email", {
          required: {
            value: true,
            message: t("form.email.errors.required"),
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: t("form.email.errors.invalid"),
          },
        })}
        error={errors.email?.message as string | undefined}
        disabled={isLoading}
      />

      <InputStyled
        contianerClassName="w-full bg-white rounded-2xl" 
        className={`${
          errors.message?.message ? "placeholder:text-red-500" : ""
        }`}
        elemType="textarea"
        placeholder={t("form.message.placeholder")}
        {...register("message", {
          required: {
            value: true,
            message: t("form.message.errors.required"),
          },
          minLength: {
            value: 20,
            message: t("form.message.errors.min"),
          },
          maxLength: {
            value: 400,
            message: t("form.message.errors.max"),
          },
        })}
        error={errors.message?.message as string | undefined}
        disabled={isLoading}
      />

      <ButtonStyled
        type="submit"
        bg
        warning
        hover
        className="md:self-start"
        ripple
        title={t("submit", { ns: "common" })}
        disabled={isLoading}
        SvgIcon={
          isLoading ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            <BsFillSendFill size={15} />
          )
        }
      />
    </form>
  );
};

export default Form;
