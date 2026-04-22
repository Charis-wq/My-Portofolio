export default function Project() {
  return (
    <section id="project" className="py-10">

      <h1 className="text-center text-4xl font-bold py-10 px-5">My <span className="text-[var(--color-primary)]">Project</span></h1>

      <div className="flex justify-center items-center text-center gap-6 px-4 py-4">
        <div className="bg-[var(--color-secondary)] p-5 rounded-md shadow-md ">
          {/* project 1 */}
          <p>project 1</p>
          <img src="" alt="" />
          <p>description for project 1</p>
          <link rel="stylesheet" href="" />
        </div>
        {/* project 2 */}
        <div className="bg-[var(--color-secondary)] p-5 rounded-md shadow-md">
          <p>project 2</p>
          <img src="" alt="" />
          <p>description for project 2</p>
          <link rel="stylesheet" href="" />
        </div>
        {/* project 3 */}
        <div className="bg-[var(--color-secondary)] p-5 rounded-md shadow-md">
          <p>project 3</p>
          <img src="" alt="" />
          <p>description for project 3</p>
          <link rel="stylesheet" href="" />
        </div>
      </div>
    </section>
  );
}
