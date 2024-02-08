
import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 9000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "service_jiv00y5",
        "template_rjob31p",
        templateParams,
        "fI04j0BrvcHbJP9H6"
      );

      toggleAlert("Thank you for your message", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="ContactForm">
      <div className="keepInTouch">
        <h1>Keep in touch</h1>
      </div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="segment">
          <a
            href="https://github.com/cvassia"
            target="_blank"
            rel="noreferrer"
            className="firstIcon"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/vassia-christ-2030672b/"
            target="_blank"
            rel="noreferrer"
            className="formIcon"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>

        <div>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="formInput"
            placeholder="Name"
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
          <div>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="formInput"
              placeholder="Email address"
            ></input>
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
          </div>
        </div>

        <div>
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="formInput"
            placeholder="Subject"
          ></input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </div>

        <div>
          <textarea
            rows={6}
            name="message"
            className="message"
            {...register("message", {
              required: true,
            })}
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </div>

        <button
          className="submit-btn"
          disabled={disabled || isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
      {alertInfo.display && (
        <div className="successMessage" role="alert">
          {alertInfo.message}
        </div>
      )}
    </div>
  );
};
