import { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/ThemeContext";
import { FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

import "./FormContact.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSendPlaneFill } from "react-icons/ri";

const FormContact = () => {
  const {
    register,
    // watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          <p>ok</p>;
        },
        (error) => {
          console.log(error.text);
          <p>NON</p>;
        }
      );
    form.current.reset();
  };

  // const submitButton = watch("submitButton");
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  // ici

  return (
    <Form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="px-0 px-ld-0"
    >
      {/* <div
        className={`h2 mb-3 ${
          theme ? `bg-primary text-light` : `bg-light text-dark`
        }`}
      >
        Vous souhaitez nous écrire un e-mail ?
      </div> */}

      <div className="row">
        <div className=" col-sm-12 col-lg-4 pe-lg-0">
          <span className="error text-danger">
            {errors.from_firstname?.type === "minLength" &&
              "Ecrire plus de 2 caractères"}
            {errors.from_firstname?.type === "maxLength" &&
              "Ecrire moins de 20 caractères"}
            {errors.from_firstname?.type === "pattern: /^[A-Za-z]+$/i"}
            {errors.from_firstname?.type === "required" &&
              "Entrez votre prénom"}
          </span>

          <Form.Control
            type="text"
            id="bord-top-left"
            className={`col-2 firstname ${
              theme ? `form_control-dark text-light ` : `form_control-light `
            }`}
            placeholder="Prénom - 2 à 20 signes"
            name="from_firstname"
            {...register("from_firstname", {
              required: false,
              minLength: 3,
              maxLength: 19,
            })}
            // onChange={handleSubmit()}
          />

          <span className="error text-danger">
            {errors.from_surname?.type === "Entrez votre nom"}
            {errors.from_surname?.type === "minLength" &&
              "Ecrire plus de 2 caractères"}
            {errors.from_surname?.type === "maxLength" &&
              "Ecrire moins de 20 caractères"}
          </span>
          <Form.Control
            type="text"
            className={`col-md-3 mt-1 ${
              theme ? `form_control-dark text-light ` : `form_control-light `
            }`}
            placeholder="Nom - 2 à 20 signes"
            name="from_surname"
            {...register("from_surname", {
              required: false,
              minLength: 3,
              maxLength: 19,
            })}
          />

          <Form.Group controlId="formBasicEmail">
            <span className="error text-danger">
              {errors.from_email?.type === "required" &&
                "Entrez votre adresse e-mail"}
              {errors.from_email?.type === "pattern" &&
                "L'email n'a pas un format correct"}
              {errors.from_email?.type === "minLength" &&
                "Ecrire plus de 14 caractères"}
              {errors.from_email?.type === "maxLength" &&
                "Ecrire 30 caractères au maximum"}
            </span>
            <Form.Control
              type="email"
              className={`mt-1 ${
                theme ? `form_control-dark text-light ` : `form_control-light `
              }`}
              placeholder="E-mail* : 15 à 30 signes"
              name="from_email"
              {...register("from_email", {
                required: true,
                pattern: /^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                minLength: 15,
                maxLength: 30,
              })}
            />
          </Form.Group>
        </div>
        <div className="col-12  col-md-12 col-lg-8 ps-lg-1">
          <span className="error text-danger">
            {errors.object?.type === "required" &&
              "Merci d'indiquer l'objet de votre email"}
            {errors.object?.type === "minLength" &&
              "Ecrire 10 caractères au minimum"}
            {errors.object?.type === "maxLength" &&
              "Ecrire moins de 50 caractères"}
          </span>
          <Form.Control
            type="text"
            id="bord-top-right"
            className={`objet ${
              theme ? `form_control-dark text-light ` : `form_control-light `
            }`}
            placeholder="Objet* : 10 à 50 caractères"
            name="object"
            {...register("object", {
              required: true,
              minLength: 10,
              maxLength: 49,
            })}
          />
          <FloatingLabel controlId="floatingTextarea">
            <span className="error text-danger">
              {errors.message?.type === "required" &&
                "Merci de nous écrire un message"}
              {errors.message?.type === "minLength" &&
                "Ecrire plus de 100 caractères"}
              {errors.message?.type === "maxLength" &&
                "Ecrire moins de 700 caractères"}
            </span>
          </FloatingLabel>
          <Form.Control
            as="textarea"
            placeholder="Message* : 100 à 700 signes"
            rows={1}
            className={`mt-1 ${
              theme ? `form_control-dark text-light ` : `form_control-light `
            }`}
            name="message"
            {...register("message", {
              required: true,
              minLength: 100,
              maxLength: 699,
            })}
            style={{ height: "80px" }}
          />

          {/* 
          {submitButton === "submitButton" && ( */}
          {/* )} */}
        </div>
        <div className="col-12">
          <Button
            // className="col-12"

            className={`col-12 mt-0 send bord-bottom-left bord-bottom-right  ${
              theme ? `form_control-dark text-light ` : `form_control-light `
            }`}
            variant="btn btn-outline-dark"
            type="submit"
          >
            <RiSendPlaneFill />
            &nbsp; Envoyer
          </Button>

          <font size="2">* Champs obligatoires</font>
          <h5>accueil@declicetdesclaps.fr</h5>
        </div>
      </div>
    </Form>
  );
};

export default FormContact;
