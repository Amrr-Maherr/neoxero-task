export default function FirstFooter() {
  return (
    <>
      <section className="bg-yellow-400">
        <div className="px-10 flex-wrap flex justify-between items-center py-5">
          <div className="flex items-baseline gap-5 my-3">
            <i className="fa-solid fa-message"></i>
            <p>Sign up to NewsLetter</p>
          </div>
          <div className="my-3">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="my-3 relative">
            <input
              type="search"
              className="p-3 w-full pe-10 rounded-3xl border-[3px] border-[#FFD95F] outline-none"
              placeholder="Enter your email"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>
      </section>
    </>
  );
}
