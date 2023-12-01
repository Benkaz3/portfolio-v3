import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Container from "../components/Container";

export default function Contact() {
  return (
    <Container>
      <Heading level={1}>Contact</Heading>
      <Paragraph>Got a question? Or just say hi!</Paragraph>
      <ContactForm />
    </Container>
  );
}


