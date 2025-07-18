import Button from "../Button";
import About from "../../assets/aboutUS.webp";
import About2 from "../../assets/about2.webp";
import TextHeading from "../TextHeading";

function AboutUS() {
  return (
    <div className="w-full h-auto md:py-30 text-center">
      <TextHeading
        heading="About Me"
        text={
          <>
            A Passionate Developer <br />
            Who Loves to Code
          </>
        }
      />

      <div className="w-full flex lg:flex-row flex-col">
        <div className="relative lg:w-1/2 w-full h-auto p-4 flex flex-col gap-y-5 items-center">
          <div className="w-full flex 2xl:justify-end justify-center">
            <div className="w-fit flex items-center justify-end">
              <div className="w-fit xl:block hidden py-6 px-6 bg-[#00c0ff] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="61px"
                  viewBox="0 -9 400.00242 400"
                  width="61px"
                >
                  <path
                    d="m100.0625 178.746094c0-50.835938 29.914062-96.914063 76.351562-117.601563 46.433594-20.6875 100.699219-12.113281 138.492188 21.886719-22.519531-46.925781-71.070312-75.679688-123.042969-72.867188-51.972656 2.816407-97.140625 36.640626-114.460937 85.722657-17.320313 49.082031-3.386719 103.765625 35.3125 138.574219-8.355469-17.382813-12.679688-36.429688-12.652344-55.714844zm0 0"
                    fill="transparent"
                  ></path>
                  <path
                    d="m81.355469 382.050781c-.199219 0-.402344-.003906-.609375-.015625-3.640625-.222656-6.867188-2.40625-8.429688-5.703125l-17.613281-37.199219-43.480469 5.351563c-3.816406.472656-7.5625-1.289063-9.636718-4.523437-2.078126-3.234376-2.117188-7.371094-.101563-10.644532l78.78125-127.902344c2.867187-4.71875 9.015625-6.222656 13.738281-3.355468 4.71875 2.867187 6.222656 9.019531 3.355469 13.738281l-.066406.105469-67.867188 110.199218 30.003907-3.691406c4.28125-.523437 8.414062 1.753906 10.261718 5.644532l12.929688 27.308593 61.378906-97.003906c2.933594-4.679687 9.105469-6.09375 13.785156-3.160156 4.679688 2.933593 6.09375 9.105469 3.160156 13.785156l-.042968.070313-71.097656 112.34375c-1.832032 2.898437-5.019532 4.652343-8.449219 4.652343zm0 0"
                    fill="#fff"
                  ></path>
                  <path
                    d="m316.09375 381.882812c-3.429688 0-6.621094-1.761718-8.453125-4.660156l-70.699219-111.90625c-2.949218-4.667968-1.558594-10.84375 3.113282-13.796875 4.667968-2.949219 10.84375-1.554687 13.796874 3.113281l61.25 96.957032 13.609376-27.078125c1.917968-3.8125 6.042968-5.988281 10.273437-5.417969l31.203125 4.222656-69.820312-111.351562c-2.933594-4.679688-1.519532-10.851563 3.160156-13.785156 4.679687-2.933594 10.851562-1.519532 13.785156 3.160156l81.160156 129.4375c2.0625 3.285156 2.039063 7.46875-.066406 10.730468-2.101562 3.261719-5.902344 5.011719-9.746094 4.492188l-45.28125-6.128906-18.351562 36.5c-1.617188 3.222656-4.84375 5.324218-8.445313 5.5-.160156.007812-.324219.011718-.488281.011718zm0 0"
                    fill="#fff"
                  ></path>
                  <g fill="#fff">
                    <path d="m198.808594 0c-76.5 0-138.746094 62.242188-138.746094 138.746094s62.242188 138.746094 138.746094 138.746094 138.746094-62.242188 138.746094-138.746094-62.242188-138.746094-138.746094-138.746094zm0 257.492188c-65.578125 0-118.742188-53.164063-118.742188-118.746094 0-65.582032 53.164063-118.746094 118.742188-118.746094 65.582031 0 118.746094 53.164062 118.746094 118.746094-.074219 65.550781-53.195313 118.671875-118.746094 118.746094zm0 0"></path>
                    <path d="m198.808594 51.558594c-48.148438.003906-87.183594 39.039062-87.183594 87.191406.003906 48.152344 39.039062 87.183594 87.191406 87.183594 48.148438 0 87.183594-39.035156 87.183594-87.1875s-39.035156-87.1875-87.191406-87.1875zm0 154.375c-37.105469-.003906-67.183594-30.085938-67.183594-67.191406.003906-37.105469 30.085938-67.183594 67.191406-67.183594 37.105469 0 67.183594 30.082031 67.183594 67.1875 0 37.109375-30.082031 67.1875-67.191406 67.1875zm0 0"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="w-fit h-auto flex xl:justify-end justify-center">
              <img src={About} alt="Muhammad Adeel" className="xl:w-[90%] w-[100%]" />
            </div>
          </div>

          <div className="w-full xl:flex h-auto py-1 hidden justify-end xl:px-20 items-center">
            <div className="w-fit flex justify-center items-center border-l-9 border-[#00c0ff]">
              <p className="2xl:text-[4rem] text-[3rem] font-semibold px-3 text-white">
                4+
              </p>
              <p className="sm:text-[17px] text-[16px] text-left font-semibold xl:w-16 text-white">
                Years Experience
              </p>
            </div>
          </div>

          {/* absolute image */}
          <div className="absolute xl:block hidden w-fit h-auto left-25 bottom-0">
            <img
              className="rounded-xl overflow-hidden"
              src={About2}
              alt="Muhammad Adeel working"
              width="50%"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-auto 2xl:pl-20 py-4 flex flex-col lg:items-start items-center justify-center gap-y-5 lg:text-left text-center">
          <h4 className="text-[#00c0ff] text-xl font-medium">About Me</h4>
          
          <div className="lg:text-left text-center lg:w-auto w-[80%] text-[#9D96B6] text-[16px] sm:text-[18px] leading-relaxed">
            <p className="mb-4">
              I'm <span className="text-[#00c0ff] font-semibold">Muhammad Adeel</span>, a passionate Computer Science student currently in my final year. Alongside my academic journey, I'm actively working on my final year project and gaining hands-on experience in the tech industry.
            </p>
            
            <p className="mb-4">
              I work as a React.js / React Native developer with 4+ years of experience in Software Engineering, building web applications, designing UI/UX, and developing mobile applications using React and Flutter. I have a strong focus on building scalable and user-friendly applications.
            </p>
            
            <p className="mb-4">
              I've developed 3+ cross-platform mobile apps using React Native and have experience building full-stack websites with both frontend and backend technologies. My technical expertise includes Frontend (React.js, Next.js, HTML, CSS, Tailwind CSS, JavaScript, TypeScript), Backend (Node.js, Express.js, RESTful APIs), Databases (MongoDB, PostgreSQL, SQL), and Mobile Development (React Native, Flutter, and basic knowledge of native Android using XML and Java).
            </p>
            
            <p>
              I'm always eager to learn, improve, and contribute to impactful projects that make a difference in people's lives.
            </p>
          </div>

          <div className="w-fit">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;