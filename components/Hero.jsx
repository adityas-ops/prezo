import Link from "next/link";
import React, { useState, useEffect } from "react";

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(40);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.min(1 + (scrollPosition / 200) * 0.2, 1.2); // Increase scale when scrolling down
  const divStyle = {
    transform: `scale(${scale})`,
    transition: "transform 0.01s ease-in-out", // Smooth transition effect
    aspectRatio: "3 / 2",
    background: "rgb(227, 214, 240)",
  };

  const divStyle1 = {
    transform: `scale(${scale}) translateX(calc(-50% + min(30vw, 400px) + 18px))`,
    transition: "transform 0.01s ease-in-out", // Smooth transition effect
    aspectRatio: "3 / 2",
    background: "rgb(227, 214, 240)",
  };

  return (
    <>
      <div className="h-screen">
        <div className=" w-full h-full relative">
          <div className="hidden md:flex absolute justify-center w-full h-full max-h-[1000px] overflow-hidden bg-brand-purpleHover">
            <img
              src="https://www.prezo.ai/_ipx/_/images/gradient-full.svg"
              onerror="this.setAttribute('data-error', 1)"
              alt="Prezo gradient"
              data-nuxt-img=""
              className="absolute top-[0] w-[2400px] h-[1400px] object-cover"
            />
            <div className="absolute w-full h-[140px] z-[1] rounded-t-[30px] bg-white bottom-0 bring-in-large" />
          </div>
          <div className="block md:hidden  absolute w-full h-full overflow-hidden min-h-[660px] max-h-[800px] bg-brand-purpleHover">
            <img
              src="https://www.prezo.ai/_ipx/_/images/gradient-full.svg"
              alt="Prezo gradient"
              className="absolute w-[1000px] h-[825px] top-0 object-cover"
            />
            <div className="absolute w-full h-[140px] z-[1] rounded-t-[30px] bg-white bottom-0 bring-in-large" />
          </div>
          {/*  */}
          <div
            className="hidden md:block absolute right-0 w-96 h-96 overflow-hidden mix-blend-screen"
            style={{ transform: "translateY(calc(110px + 0px))" }}
          >
            <div className="absolute right-[-6%] mix-blend-screen">
              <img
                src="https://www.prezo.ai/_nuxt/Right_Pyramid.cedfc21d.svg"
                alt="Prezo"
                className="w-[400px] h-[400px] opacity-[0.6] rotate-[31] mix-blend-screen"
              />
            </div>
          </div>
          {/*  */}
          <div
            className="block md:hidden absolute right-0 w-40 h-40 overflow-hidden mix-blend-screen"
            style={{ transform: "translateY(calc(60px + 0px))" }}
          >
            <div className="absolute right-[-24%] w-full h-full mix-blend-screen">
              <img
                src="https://www.prezo.ai/_nuxt/Right_Pyramid.cedfc21d.svg"
                preload=""
                alt="Prezo"
                className="opacity-[0.6] w-[160px] h-[160px] rotate-[31] mix-blend-screen"
              />
            </div>
          </div>
          {/*  */}
          <div
            className="hidden md:block absolute left-0 w-96 h-96 overflow-hidden mix-blend-screen"
            style={{ transform: "translateY(calc(195px + 0px))" }}
          >
            <div className="absolute left-[-6%] mix-blend-screen">
              <img
                src="https://www.prezo.ai/_nuxt/Left_Pyramid.fdb1a62c.svg"
                alt="Prezo"
                className="w-[400px] h-[400px] opacity-[0.6] rotate-[166] mix-blend-screen"
              />
            </div>
          </div>
          {/*  */}
          <div
            className="block md:hidden absolute left-0 w-40 h-40 overflow-hidden mix-blend-screen"
            style={{ transform: "translateY(calc(290px + 0px))" }}
          >
            <div className="absolute left-[-24%] w-full h-full mix-blend-screen">
              <img
                src="https://www.prezo.ai/_nuxt/Left_Pyramid.fdb1a62c.svg"
                preload=""
                alt="Prezo"
                className="opacity-[0.6] w-[160px] h-[160px] rotate-[166] mix-blend-screen"
              />
            </div>
          </div>
          {/*  */}
          <div className="w-full flex flex-col items-center">
            <main className="w-full flex flex-1 flex-col items-center relative z-[1]">
              <section className="w-full z-1" style={{ maxWidth: "1204px" }}>
                <div className="relative md:sticky top-[80px] flex flex-col items-center px-5 md:px-0 bring-in-small-1">
                  <label className="hidden md:inline-block text-white mt-[60px] font-GeneralSans font-semibold text-[34px] leading-[38px] md:text-[56px] md:leading-[60px] text-center max-w-full md:max-w-[940px] font-heading">
                    Create beautiful
                    <br />
                    presentations with AI
                  </label>
                  <label className="inline-block md:hidden text-white mt-[60px] font-semibold text-[34px] leading-[38px] md:text-[56px] md:leading-[60px] text-center max-w-full md:max-w-[940px] font-heading">
                    Create beautiful presentations with AI
                  </label>
                  <label className="text-white mt-[25px] font-Inter text-[14px] md:text-xl leading-[19px] tracking-tight md:leading-[28px] font-medium text-center max-w-full md:max-w-[590px]">
                    Prezo is a new AI-powered presentation format to share your
                    work, designed to look great on web and mobile.
                  </label>
                  <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
                    <button
                      className="flex items-center justify-center cursor-pointer text-xl rounded-2xl font-semibold leading-6 px-4 py-3 font-heading transition-all duration-100 bg-white text-brand-purple hover:bg-[#F5F5F5] hover:text-brand-purple active:bg-neutral-200 active:text-brand-purple w-64 md:w-64"
                      aria-label="Watch video"
                    >
                      Watch video
                    </button>
                    <div show="false" as="template" className="dialog">
                      <div
                        style={{
                          position: "fixed",
                          height: 0,
                          padding: 0,
                          overflow: "hidden",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          whiteSpace: "nowrap",
                          borderWidth: 0,
                          display: "none",
                        }}
                      />
                    </div>
                    <Link href="https://app.prezo.ai/signup" target="_blank">
                      <button
                        className="flex items-center justify-center cursor-pointer text-xl rounded-2xl font-semibold leading-6 px-4 py-3 font-heading transition-all duration-100 bg-brand-purple text-white hover:bg-brand-purpleHover active:bg-brand-purpleActive w-64 md:w-64"
                        aria-label="Try for free"
                      >
                        Try for free
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second div  */}
                <div className="relative z-20 flex flex-col min-h-[300px] md:min-h-[500px] mt-[80px] bring-in-small-2">
                  <div className="pb-20 relative  justify-center hidden md:flex">
                    {/* start */}
                    <div
                      className="rounded-custom-outer relative px-[60px] mix-blend-screen custom-padding"
                      style={divStyle}
                    >
                      <img
                        src="https://www.prezo.ai/_ipx/f_webp/images/desktop-ui-3.png"
                        className="rounded-custom-regular custom-width"
                      />
                      <div
                        className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] flex gap-[10px] justify-center items-center custom-padding-large-1 custom-padding-large-2"
                        style={{ transform: "scale(1)" }}
                      >
                        <div className="flex flex-1 h-full flex-col justify-end items-center gap-[10px]">
                          <div
                            className="grow-[19] shrink basis-0 w-full rounded-custom relative cursor-grab-override overflow-hidden"
                            id="block1"
                          >
                            {/**/}
                            {/**/}
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-11.png"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              style={{ background: "white", display: "none" }}
                              id="child-block1"
                              className="rounded-custom w-full h-full object-top item object-contain"
                            />
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-11.png"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              style={{ background: "white" }}
                              id="child-block1"
                              className="rounded-custom w-full h-full object-top item object-contain"
                            />
                          </div>
                          <div
                            className="grow-[13] shrink basis-0 w-full rounded-custom relative cursor-grab-override overflow-hidden"
                            id="block2"
                          >
                            {/**/}
                            <div
                              draggable="false"
                              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-12 h-12 rounded-full cursor-grab-video"
                              data-v-932a3471=""
                            >
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{}}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play-hover.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{ display: "none" }}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play-active.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{ display: "none" }}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                            </div>
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-33-small.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              style={{ background: "white", display: "none" }}
                              id="child-block2"
                              className="rounded-custom w-full h-full object-top item object-cover"
                            />
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-222.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              style={{ background: "white" }}
                              id="child-block2"
                              className="rounded-custom w-full h-full object-top item object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 h-full">
                          <div
                            className="w-full h-full rounded-custom relative cursor-grab-override overflow-hidden"
                            id="block3"
                          >
                            {/**/}
                            {/**/}
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-222-big.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              style={{ background: "white", display: "none" }}
                              id="child-block3"
                              className="rounded-custom w-full h-full object-top item object-cover"
                            />
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-11-big.png"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 2"
                              data-nuxt-img=""
                              style={{ background: "white", display: "none" }}
                              id="child-block3"
                              className="rounded-custom w-full h-full object-top item object-cover"
                            />
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-33-big.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 3"
                              data-nuxt-img=""
                              style={{ background: "white" }}
                              id="child-block3"
                              className="rounded-custom w-full h-full object-top item object-cover object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* end */}

                    <div
                      className="absolute top-[50%] left-[50%]  rounded-custom-outer flex flex-col justify-center items-center custom-padding-2"
                      style={divStyle1}
                    >
                      <img
                        src="https://www.prezo.ai/_ipx/f_webp/images/mobile-ui.png"
                        onerror="this.setAttribute('data-error', 1)"
                        alt="Prezo hero image"
                        data-nuxt-img=""
                        className="rounded-custom-regular custom-width-small"
                      />
                      <div
                        className="absolute top-[44px] left-[6px] right-[6px] bottom-[10px] flex flex-col gap-[6px] items-center custom-padding-2"
                        style={{ transform: "scale(1)" }}
                      >
                        <div className="relative w-full h-full flex flex-col gap-[6px] items-center">
                          <div
                            className="grow-[72] shrink basis-0 w-full rounded-custom-small overflow-hidden relative"
                            id="mobile-block1"
                          >
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-mobile-11.png"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              draggable="false"
                              className="bg-white rounded-custom-small w-full h-full object-top object-contain"
                            />
                            {/**/}
                          </div>
                          <div
                            className="grow-[68] shrink basis-0 w-full rounded-custom-small overflow-hidden relative"
                            id="mobile-block2"
                          >
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-mobile-222.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              draggable="false"
                              className="bg-white rounded-custom-small w-full h-full object-top object-cover"
                            />
                            <div
                              draggable="false"
                              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-12 h-12 rounded-full cursor-grab-video w-8 h-8"
                              data-v-932a3471=""
                            >
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{}}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play-hover.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{ display: "none" }}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                              <img
                                src="https://www.prezo.ai/_ipx/_/images/play-active.svg"
                                onerror="this.setAttribute('data-error', 1)"
                                alt="Play video"
                                data-nuxt-img=""
                                style={{ display: "none" }}
                                draggable="false"
                                className="w-full h-full"
                                data-v-932a3471=""
                              />
                            </div>
                          </div>
                          <div
                            className="shrink basis-0 grow-[108] w-full rounded-custom-small overflow-hidden relative"
                            id="mobile-block3"
                          >
                            <img
                              src="https://www.prezo.ai/_ipx/f_webp/images/drag-block-desktop-33-big.webp"
                              onerror="this.setAttribute('data-error', 1)"
                              alt="Prezo hero image block 1"
                              data-nuxt-img=""
                              draggable="false"
                              className="bg-white rounded-custom-small w-full h-full object-cover object-top"
                            />
                            {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end */}
                  <div
                    className="pb-10 px-5 mt-[80px] relative justify-center w-full flex md:hidden"
                    data-v-c9e1f86f=""
                  >
                    <img
                      src="https://www.prezo.ai/_ipx/w_768/images/small-screen-ui-3.webp"
                      alt="Prezo hero image"
                      data-nuxt-img=""
                    //   sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, 100vw"
                    //   srcSet="/_ipx/w_320/images/small-screen-ui-3.webp 320w, /_ipx/w_640/images/small-screen-ui-3.webp 640w, /_ipx/w_768/images/small-screen-ui-3.webp 768w"
                      className="w-full"
                      style={{ width: 360, height: "231.429px" }}
                    />
                    <div
                      draggable="false"
                      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-12 h-12 rounded-full cursor-grab-video top-[40%] left-[50%]"
                      data-v-c9e1f86f=""
                      data-v-932a3471=""
                    >
                      <img
                        src="https://www.prezo.ai/_ipx/_/images/play.svg"
                        onerror="this.setAttribute('data-error', 1)"
                        alt="Play video"
                        data-nuxt-img=""
                        style={{}}
                        draggable="false"
                        className="w-full h-full"
                        data-v-932a3471=""
                      />
                      <img
                        src="https://www.prezo.ai/_ipx/_/images/play-hover.svg"
                        onerror="this.setAttribute('data-error', 1)"
                        alt="Play video"
                        data-nuxt-img=""
                        style={{ display: "none" }}
                        draggable="false"
                        className="w-full h-full"
                        data-v-932a3471=""
                      />
                      <img
                        src="https://www.prezo.ai/_ipx/_/images/play-active.svg"
                        onerror="this.setAttribute('data-error', 1)"
                        alt="Play video"
                        data-nuxt-img=""
                        style={{ display: "none" }}
                        draggable="false"
                        className="w-full h-full"
                        data-v-932a3471=""
                      />
                    </div>
                  </div>
                  <div
  className="absolute w-full h-[200px] z-[-1] rounded-t-[16px] bg-white bottom-[-8%] block md:hidden"
  data-v-c9e1f86f=""
/>

                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
