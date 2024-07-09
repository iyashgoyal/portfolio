import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="section-title mb-8">Email was sent Sucessfully!!</h1>
      <p className="subtitle mb-4 text-center">
        
        Thanks for contacting me. I will answer you as soon as possible.
      </p>
      <Link href="/" className="text-primary hover:underline">
      Return to main page
      </Link>
    </div>
  );
};

export default Contact;
