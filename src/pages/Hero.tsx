export default function Hero() {
  return (
    <section className="flex-4 justify-between items-center py-10 px-20">
      <img
        src="src/assets/img/photo personal.png"
        alt="personal"
        className="w-40 h-40 rounded-4xl max-auto mb-6 object-cover shadow-2xl "
      />

      <h2 className="font-bold text-3xl mb-2 px-5 py-10">Hi, i'm Abdul Charis</h2>

      <h1 className="font-bold text-6xl text-[var(--color-secondary)] mb-4 text-center font-heading left-30">
        Web Developer
      </h1>

      <p className="text-xl mt-6 text-center font-body  ">
        I am passionate about creating responsive user interfaces and developing
        efficient backend systems. I continuously improve my skills to deliver
        impactful and scalable digital solutions.
      </p>

      <div className="flex justify-center items-center gap-20 py-5">
        <button className="bg-[var(--color-primary)] text-white py-2 px-2 rounded-md text-md mt-6 hover:bg-[var(--color-secondary)] cursor-pointer ">
          About Me
        </button>

        <button className="bg-gray-500 text-white py-2 px-2 rounded-md text-md mt-6 hover:bg-[var(--color-secondary)] cursor-pointer ">
            Download CV
        </button>
      </div>
    </section>
  );
}
