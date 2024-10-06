import Link from "next/link";

function RegisterPage() {
  return (
    <div className="bg-[url('https://mona-ai.mn/authbg.png')] min-h-[90vh] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="flex w-[643px] flex-col gap-[32px] rounded-[20px] bg-[#101727] p-[32px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-lexend text-[32px] font-medium text-[#ffffff]">
            Create Your Account
          </h1>
          <p className="font-inter text-[16px] text-[#ffffff]/80">
            Sign up to start your 30-days free trial
          </p>
          <form>
            <div className="mb-4 flex w-full flex-col gap-[18px]">
              <h1 className="font-inter text-[20px] text-[#ffffff]/80">Name</h1>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  placeholder="Kathryn Murphy"
                  className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 border-[#070C16] bg-[#070C16] px-[45px] "
                />
                <div className="absolute left-0 top-1/2 mx-[10px] -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="size-[24px] fill-[#ffffff]/30"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 flex w-full flex-col gap-[18px]">
              <h1 className="font-inter text-[20px] text-[#ffffff]/80">
                E-mail
              </h1>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder="info@gmail.com"
                  className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 border-[#070C16] bg-[#070C16] px-[45px] "
                />
                <div className="absolute left-0 top-1/2 mx-[10px] -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="size-[24px] fill-[#ffffff]/30"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4 flex w-full flex-col gap-[18px]">
              <h1 className="font-inter text-[20px] text-[#ffffff]/80">
                Password
              </h1>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  className="custom-input font-inter flex h-[64px] w-full items-center justify-center rounded-[12px] border text-[18px] text-[#ffffff] ring-offset-0 placeholder:text-[#ffffff]/40 focus:border-[#2D9F89] focus:outline-none focus:ring-0 border-[#070C16] bg-[#070C16] px-[45px] "
                />
                <div className="absolute left-0 top-1/2 mx-[10px] -translate-y-1/2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="size-[24px] fill-[#ffffff]/30"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z"></path>
                  </svg>
                </div>
                <button
                  type="button"
                  className="absolute right-0 top-1/2 mr-[10px] -translate-y-1/2 text-[#ffffff]/40"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="font-inter flex w-full  items-center justify-center gap-[10px] rounded-[8px] border my-10  px-[20px] py-[13px] text-[20px] font-medium  border-[#273a36] bg-[#273a36]/20 text-[#7e7c7c]"
            >
              Sign up
            </button>
          </form>

          <div className="mb-4 flex items-center justify-center">
            <h2 className="font-inter text-[18px] text-[#ffffff8c]">
              Already have an account?{" "}
              <span className="text-[#2D9F89]">
                <Link className="font-semibold" href="/login">
                  Login
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
