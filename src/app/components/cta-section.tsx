import React from 'react';
import { Form } from './Form/Form';
import { Subtitle } from './ui/subtitle';

const CTASignUpSection = () => {

  return (
    <section className="w-full py-10 md:py-10 lg:py-10 flex justify-center flex-col items-center ">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center border rounded-md shadow-sm border-gray-200 pb-10 my-20 bg-gray-50">
          <div className="space-y-2">
            <Subtitle subtitle='Estamos aquí para ayudarte' paragraph='Envianos tus consultas y te responderemos a la brevedad' />
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No dejes de escribirnos para consultas, dudas, sugerencias, cotizaciones o cualquier otro tipo de información que necesites. Estamos aquí para ayudarte.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Form
              h1='En Plásticos Santa María, estamos en contacto con nuestros clientes.'
              subtitle='Por favor completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.'
              toast_message='Gracias por tu consulta, te responderemos a la brevedad.'
              name='Nombre'
              company='Empresa'
              email='Email'
              email_placeholder='juan_perez@email.com'
              message='Mensaje'
              message_placeholder='Escribe tu mensaje aquí...'
              button='Enviar consulta'
              send='Enviar consulta'
              message_2='A la brevedad nos pondremos en contacto contigo.'
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASignUpSection;
