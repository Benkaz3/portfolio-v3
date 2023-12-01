import { useRef } from "react";
import emailjs from "@emailjs/browser"
import styled, { css } from 'styled-components'
import theme from "../styles/theme";

const ContactForm = () => {
  const form = useRef();

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = e.target.elements.user_email.value; // Get the email value from the form

    // Validate the email format
    if (!isEmailValid(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_pnvdu9p', 'template_3jilrwv', form.current, 'd4R9xXO2GvltCfKr8')
      .then((result) => {
          console.log(result.text);
          alert("Message sent!")
          if (form.current) {
            form.current.reset()
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input 
          type="text" 
          id="name"
          name="from_name" 
          required
          placeholder="Alexie Stellar"
          pattern="[A-Za-z\s]+"
          title="Name must be letters and spaces only"
          maxLength={50}
          />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          type="email"
          name="user_email" 
          id="email" 
          required
          placeholder="alexie@gmail.com"
          maxLength={100}
          />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
          <Textarea 
          id="message"
          name="message" 
          required
          placeholder="Hi, how's everything?"
          rows={3}
          cols={33}
          maxLength={500}
          />
      </div>
      <Button 
      type="submit" value="Send">Send</Button>
    </Form>
  );
};

export default ContactForm;

// Styling
const media = {
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  mobileL: (...args) => css`
  @media (max-width: 425px) {
    ${css(...args)}
  }
  `,
  mobileM: (...args) => css`
  @media (max-width: 375px) {
    ${css(...args)}
  }
  `,
  mobileS: (...args) => css`
  @media (max-width: 320px) {
    ${css(...args)}
  }
`
};

const Form = styled.form`
width: 100%;
margin: 20px auto; 
`
const Input = styled.input`
width: 100%;
padding: 0.5rem;
border: 1px solid ${theme.colors.lineColor};
border-radius: .25rem;
font-family: inherit;
font-size: 1.2rem;
margin-bottom: 1rem;

`
const Textarea = styled.textarea`
width: 100%;
padding: 0.5rem;
border: 1px solid ${theme.colors.lineColor};
border-radius: 0.25rem;
font-family: inherit;
font-size: 1.2rem;
margin-bottom: 1rem;
resize: none; 
`
const Label = styled.label`
font-family: inherit;
font-size: 1.2rem;
`
const Button = styled.button`
background-clip: padding-box;
background-color: #fa6400;
border: 1px solid transparent;
border-radius: .25rem;
box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
box-sizing: border-box;
color: #fff;
cursor: pointer;
display: inline-flex;
font-size: 24px;
font-weight: 400;
justify-content: center;
line-height: 1.25;
min-height: 3rem;
padding: calc(1rem - 1px) calc(3rem - 1px);
position: relative;
text-decoration: none;
transition: all 250ms;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
vertical-align: baseline;
margin: 2rem auto; 

&:hover,
&:focus {
background-color: #fb8332;
box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

&:hover {
transform: translateY(-1px);
}

&:active {
background-color: #c85000;
box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
transform: translateY(0);
}

${media.tablet`
width: 100%;
font-size: 1rem;
padding: calc(.875rem - 1px) calc(1.7rem - 1px);
`}
${media.mobileL`
width: 100%;
margin: 2rem 0;
font-size: 1rem;
padding: calc(.875rem - 1px) calc(1.7rem - 1px);
`}


`
