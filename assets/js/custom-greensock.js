/* 
 Custom GreenSock animations (GSAP)
*/

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin, SplitText, TextPlugin, ScrollSmoother, GSDevTools, CustomEase, CustomWiggle)

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

  console.log("DOM loaded");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener("load", function (e) {
      
      
    /* ---------------------------------------------------------------
                          MASTER TIMELINE 
                        EBQ landing page
    --------------------------------------------------------------- */

    /* header logo and button fade in */

    function headerFadeIn() {
    const tl = gsap.timeline({delay: 1});
    const headerLogo = ".header-logo";
    const contactUsBtn = ".contact-us-btn";
    tl 
      .from(headerLogo, {autoAlpha: 0, duration: 1.5}, 0)
      .from(contactUsBtn, {autoAlpha: 0, duration: 1.5}, "<")
      return tl;
    }

    /* h1 stagger in
       paragraph fade in after */
  
    function pageHeaderTitle() {
    const tl = gsap.timeline();
    const h1Title = new SplitText("h1", {type: "words, chars"});
    const marketParagraph = "#home-market-research p";
    tl
        .from(h1Title.chars, {duration: .5, y: -250, autoAlpha: 0, stagger: 0.05, ease: Back.easeOut})
        .from(marketParagraph, {autoAlpha: 0, duration: 2}, "-=1")
        return tl;
      }

    /* Master Timeline */

    const singleProjectPageH1PImg = gsap.timeline()
    singleProjectPageH1PImg
     .add(headerFadeIn())
     .add(pageHeaderTitle(), "-=.5")
        
    /* --------------------------------------------------------------------
                           END MASTER TIMELINE
                            EBQ landing page
    ---------------------------------------------------------------------*/

    /* home marketing tools section animations */

    function marketingToolsSection() {

    const h2Title = new SplitText("#home-marketing-tools h2", {type: "words, chars"});
    const toolsParagraph = "#home-marketing-tools p";
    const sectionImage = "#home-marketing-tools img";


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-market-research",
        start: "top top",           
      }
    });

    tl
        .from(h2Title.chars, {duration: .5, y: -250, autoAlpha: 0, stagger: 0.05, ease: Back.easeOut})
        .from(toolsParagraph, {autoAlpha: 0, duration: 2}, "<")
        .from(sectionImage, {autoAlpha: 0, duration: 2}, "<")
        return tl;
    }

    const marketingToolSectionTL = marketingToolsSection();

    
    /* home building team section animations */

    function buildingTeamSection() {

    const h2Title = new SplitText("#home-building-team h2", {type: "words, chars"});
    const toolsParagraph = "#home-building-team p";
    const sectionImage = "#home-building-team img"


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-marketing-tools",
        start: "top top",           
      }
    });

    tl
        .from(h2Title.chars, {duration: .5, y: -250, autoAlpha: 0, stagger: 0.05, ease: Back.easeOut})
        .from(toolsParagraph, {autoAlpha: 0, duration: 2}, "<")
        .from(sectionImage, {autoAlpha: 0, duration: 2}, "<")
        return tl;
    }

    const buildingTeamSectionTL = buildingTeamSection();

    /* footer animations */

    function footerSection() {

    const h3Title = new SplitText("footer h3", {type: "words, chars"});
    const contactUsBtn = ".footer-contact-us-btn";


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home-building-team",
        start: "top top",           
      }
    });

    tl
        .from(h3Title.chars, {duration: .5, y: -250, autoAlpha: 0, stagger: 0.05, ease: Back.easeOut})
        .from(contactUsBtn, {autoAlpha: 0, duration: 2})
        return tl;
    }

    const footerSectionTL = footerSection();
  
      
    console.log("window loaded");
  }, false);
    
});
