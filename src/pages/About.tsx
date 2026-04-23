export default function About() {
  return (
    <section id="about" className="py-10 px-5 ">
      <h1 className="text-4xl font-bold py-5 px-5 text-center text-[var(--color-primary)] ">
        About <span className="text-[var(--color-text)]">Me</span>
      </h1>
      <div className="hidden md:flex justify-around place-items-baseline text-center px-15 py-3 gap-3 max-w-5xl mx-auto">
        <img
          src="src/assets/img/photo_About_section.png"
          alt="foto about"
          className="w-40 h-60 "
        />
        <p className="text-xl font-sans py-5 text-center">
          Let me introduce myself, my name is Abdul Charis I have been learning
          web development autodidactically for the past 3 years. I come from
          Indonesia in the city of Semarang, Central Java I was born on
          September 26, 1996. My hobbies are playing games, badminton and
          reading books. I am so interested in the world of programming because
          it is very fun to find people's problems with programming. Therefore,
          I will continue to learn to solve people's problems with programming,
          Thank you.
        </p>
      </div>

      {/* Tampilan Mobile */}

      <div className="row md:hidden justify-center items-center text-center px-5 ">
        <img
          src="src/assets/img/photo_About_section.png"
          alt="foto about"
          className="w-30 h-50"
        />
        <p className="text-xl font-sans py-5 text-center py10 px-5 ">
          Let me introduce myself, my name is Abdul Charis I have been learning
          web development autodidactically for the past 3 years. I come from
          Indonesia in the city of Semarang, Central Java I was born on
          September 26, 1996. My hobbies are playing games, badminton and
          reading books. I am so interested in the world of programming because
          it is very fun to find people's problems with programming. Therefore,
          I will continue to learn to solve people's problems with programming,
          Thank you.
        </p>
      </div>
    </section>
  );
}
