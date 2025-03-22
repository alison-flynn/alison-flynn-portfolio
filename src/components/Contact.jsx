const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alison-flynn1/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section py-24 bg-zinc-900">
      <div className="container lg:grid lg:grid-cols-2 lg:items-center gap-12">
        
        {/* LEFT: Contact Details */}
        <div className="lg:pr-12">
          <span className="block text-sm font-accent uppercase tracking-widest text-purple-400 mb-3">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-wide mb-6 lg:max-w-[12ch] fade-up text-lleft reveal-up">
            Work together to build something remarkable.
          </h2>

          <p className="text-lg text-zinc-300 font-sans leading-relaxed mt-4 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Let’s create seamless, user-friendly 
            experiences that leave a lasting impact.
          </p>

          {/* Social Links */}
          
        </div>

        {/* RIGHT: Contact Form */}
        <form
          action="https://getform.io/f/broyprma"
          method="POST"
          className="lg:pl-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="w-full mt-1 p-3 text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 
                           focus:ring-2 focus:ring-purple-500 transition-all reveal-up"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full mt-1 p-3 text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 
                           focus:ring-2 focus:ring-purple-500 transition-all reveal-up"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 reveal-up">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's discuss your project..."
              required
              className="w-full mt-1 p-3 text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 
                         focus:ring-2 focus:ring-purple-500 transition-all resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>
          <div className="mt-6">
          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
