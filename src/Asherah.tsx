import "./Asherah.css";
import Gallery from "./Gallery";
import React from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Reservations from "./Reservations";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface AsherahProps {
  // const props
  titleOpacity: number;
  titleMargin: number;
  welcomeThreeOpacity: number;
  page: string;
  headerColour: string;
  dotColour: string;
  dotFill: number;
  gallery: { src: string; title: string }[];
  // ref props
  copyRef: React.RefObject<HTMLDivElement | null>;
  plate2Ref: React.RefObject<HTMLDivElement | null>;
  treeRef: React.RefObject<HTMLImageElement | null>;
  hammonRef: React.RefObject<HTMLImageElement | null>;
  parallaxRef: React.RefObject<IParallax | null>;
  appetiserPaneRef: React.RefObject<HTMLDivElement | null>;
  entreePaneRef: React.RefObject<HTMLDivElement | null>;
  dessertPaneRef: React.RefObject<HTMLDivElement | null>;
  drinksPaneRef: React.RefObject<HTMLDivElement | null>;
  //function refs
  handleClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLImageElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
  setAppetiserRef: (index: number) => (element: HTMLElement | null) => void;
  setMenuTitleRef: (index: number) => (element: HTMLElement | null) => void;
  dotNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  // gallery props (mixed)
  lightboxOpen: boolean;
  clickOnImage: (index: number) => void;
  closeLightbox: () => void;
  imageIndex: number;
}

function Asherah(props: AsherahProps): React.ReactElement {
  return (
    <div id="app">
      <header
        className={props.headerColour}
        style={{ display: props.page === "history" ? "none" : "flex" }}
      >
        <img
          id="logo"
          src="/asherahlogo.png"
          alt="logo"
          onClick={props.handleClick}
        />
        <nav id="main-nav">
          <a id="home" className="navlink" onClick={props.handleClick}>
            Home
          </a>
          <a id="history" className="navlink" onClick={props.handleClick}>
            Our History
          </a>
          <a id="eat" className="navlink" onClick={props.handleClick}>
            Eat
          </a>
          <a id="drink" className="navlink" onClick={props.handleClick}>
            Drink
          </a>
          <a id="gallery" className="navlink" onClick={props.handleClick}>
            Gallery
          </a>
          <a id="reservations" className="navlink" onClick={props.handleClick}>
            Reservations
          </a>
        </nav>
      </header>
      <section
        id="home-section"
        className={
          props.page === "home" ? "section-visible" : "section-invisible"
        }
      >
        <div className="background-container" id="spice1">
          <div
            id="welcome-text"
            style={{
              opacity: props.titleOpacity,
              display: props.page === "gallery" ? "none" : "inherit",
            }}
          >
            <h1 style={{ marginBottom: `${props.titleMargin}rem` }}>Asherah</h1>
            <h2 style={{ marginTop: `${props.titleMargin}rem` }}>
              Mediterranean Restaurant
            </h2>
          </div>
        </div>
        <div className="bottom-text" id="contact-opening">
          <div
            className="welcome-three"
            style={{ opacity: props.welcomeThreeOpacity }}
          >
            <span id="contact" className="welcome-span">
              <h2 className="bottom-title">Contact</h2>
              <span id="contact-span">
                <p>47 Green Lanes</p>
                <p>Unit 2, Willow House</p>
                <p>Haringey, N16 9BU</p>
                <p className="break">&nbsp;</p>
                <p>+ 44 ( 0) 207 603 32 41 </p>
                <a
                  className="bottom-link"
                  id="email-link"
                  href="mailto:ash.asher.ashah@gmail.com"
                >
                  <p id="email-text">ash.asher.ashah@gmail.com</p>
                </a>
                <p className="break">&nbsp;</p>
                <a
                  className="bottom-link"
                  id="reservation-make"
                  onClick={props.handleClick}
                >
                  {" "}
                  <p className="underline">
                    <em>make a reservation</em>
                  </p>
                </a>
              </span>
            </span>
            <span id="hours" className="welcome-span">
              <h2 className="bottom-title">Opening Hours</h2>
              <p>Tues-Sat</p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                <em>Lunch:</em>
                12:00—3:00pm
              </p>
              <p className="lunch-dinner">
                <em>Dinner:</em>
                6:00pm—10:00pm
              </p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                <span id="sunday">Sunday:</span> 12:00—6:00pm
              </p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                Monday:
                <em> Closed</em>
              </p>
            </span>
          </div>
        </div>
        <div className="background-container" id="spice2"></div>
      </section>
      <section
        id="history-section"
        className={
          props.page === "history" ? "section-visible" : "section-invisible"
        }
      >
        <Parallax
          pages={3}
          ref={props.parallaxRef as React.RefObject<IParallax>}
        >
          <ParallaxLayer offset={1} speed={2}>
            <div
              className="bottom-text"
              id="history-container"
              ref={props.copyRef as React.RefObject<HTMLDivElement>}
            >
              <ParallaxLayer className="width-limit" speed={0.75}>
                <span className="parallax-span">
                  <h2 className="bottom-title">Malqaria</h2>
                  <h2 className="bottom-title" id="hammon">
                    Hammon Ba'albek
                  </h2>
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={0.1} speed={0.4}>
                <span className="parallax-span">
                  <p className="copy">
                    Bordering the Lebanon Mountains, situated at the crossroads
                    of many of the world’s greatest civilisations, Malqaria is a
                    jewel flanked on its east by the Aramean desert and the
                    European Mediterranean to its west. This unique nation is
                    distinguished by its enduring religious identity, having
                    resisted assimilation into the spread of Christian and
                    Islamic traditions for millennia, thus setting itself apart
                    from many of its neighbours. Malqaria’s history is
                    punctuated by a brief period as a Crusader kingdom
                    established by errant French knights which, while leaving
                    indelible marks on the Malqarian architectural landscape,
                    nonetheless failed to thrust its population into the
                    baptismal font. Malqaria continues to adhere to age-old
                    rituals passed down every generation, creating a living
                    museum of mysterious custom amidst a booming tech industry.
                    Their spoken language is Old Malqarian, comprised of an
                    Aramaic substrate complemented by significant lexical
                    content from medieval Romance languages and Classical
                    Arabic.
                  </p>
                  <p className="copy">
                    Hammon Ba’albek, AAA Five Diamond chef from the Malqarian
                    capital, imbues the ancient flavours and traditions of his
                    homeland in every meal he crafts. Raised in the heart of the
                    bustling streets of New Ugarit, Hammon’s passion for food
                    was kindled at an early age, nurtured as he was by the rich
                    tapestry of heritage woven into his and his family’s
                    culture. From the fragrant spice mines of the Eastern
                    Quarter to the bustling harbours of the historic port, every
                    aspect of New Ugarit’s culinary scene infused Hammon’s
                    senses with inspiration, teeming with fresh catches from the
                    Mediterranean Sea and seafood recipes from the city’s
                    deeply-rooted Cypriot community. His signature dishes draw
                    gourmets and food connoisseurs from across the globe, eager
                    to experience his unique gastronomic alchemy. His work is
                    not mere matter but narrative, each plate a chapter
                    detailing the warp and weft of Malqarian life.
                  </p>
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={0.6} speed={0.15}>
                <span className="parallax-span">
                  <div className="copy-img-container">
                    <img
                      alt="tree"
                      id="tree"
                      src="/tree.jpeg"
                      className="copy-img"
                      ref={props.treeRef as React.RefObject<HTMLImageElement>}
                    />
                  </div>
                  <div className="copy-img-container">
                    <img
                      id="hammon"
                      src="/hammon.png"
                      className="copy-img"
                      ref={props.hammonRef as React.RefObject<HTMLImageElement>}
                    />
                  </div>
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={1.4} speed={0.1}>
                <span className="parallax-span">
                  {" "}
                  <p className="copy">
                    Having resisted both American and Soviet influence during
                    the Cold War years, Malqaria retains its political status of
                    neutrality at the centre of a region embroiled in both the
                    Arab-Israeli conflict and the Syrian civil war. Such
                    commitment to non-alignment allows Malqaria to serve as a
                    mediator, fostering dialogue and understanding amongst its
                    neighbours. The streets of New Ugarit buzz with a blend of
                    Levantine scents and Italian chic, wherein marketplaces
                    selling centuries-old spice blends sit alongside cafés
                    playing contemporary music. Along the rugged coastlines,
                    small fishing communities act out their daily routines,
                    largely unchanged for hundreds of years, while inland,
                    regular festivals celebrate the harvest, rain and sun with
                    rites that honour the ancient Canaanite pantheon and the red
                    earth in which they dwell. The deep integration of past and
                    present in Malqarian society showcases a culture that is
                    both resilient and welcoming, inviting visitors to
                    experience its rich history and vibrant quotidian life.
                  </p>
                  <p className="copy">
                    In the early 2000s, following a personal invitation from
                    then First Lady Cherie Blair, Hammon embarked on an odyssey
                    to England at the height of the ‘Cool Britannia’ era, driven
                    by an Epicurean passion to share the flavours of Malqaria
                    with the world. Armed with recipes perfected since time
                    immemorial, Hammon opened the doors to Asherah, a restaurant
                    which quickly became a beacon of Levantine cuisine in the
                    heart of London’s Green Lanes. Named after Malqaria’s
                    national tree—as well as the revered goddess of fertility to
                    whom it remains dedicated—Asherah transports diners on a
                    journey through the flavours of the Canaan of antiquity,
                    blending traditional techniques with modern innovation to
                    create a dining experience unlike any other. With each dish
                    meticulously crafted to honour the land, sea, sky and gods,
                    Hammon invites guests to savour the essence of his homeland
                    with every bite.
                  </p>
                </span>
              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <header
              className={props.headerColour}
              style={{ display: props.page === "history" ? "flex" : "none" }}
            >
              <img
                alt="logo"
                id="logo"
                src="/asherahlogo.png"
                onClick={props.handleClick}
              ></img>
              <nav id="main-nav">
                <a id="home" className="navlink" onClick={props.handleClick}>
                  Home
                </a>
                <a id="history" className="navlink" onClick={props.handleClick}>
                  Our History
                </a>
                <a id="eat" className="navlink" onClick={props.handleClick}>
                  Eat
                </a>
                <a id="drink" className="navlink" onClick={props.handleClick}>
                  Drink
                </a>
                <a id="gallery" className="navlink" onClick={props.handleClick}>
                  Gallery
                </a>
                <a
                  id="reservations"
                  className="navlink"
                  onClick={props.handleClick}
                >
                  Reservations
                </a>
              </nav>
            </header>
            <div className="background-container" id="plate1">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <div
              className="background-container"
              id="plate2"
              ref={props.plate2Ref as React.RefObject<HTMLDivElement>}
            >
              {" "}
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
      <section
        id="menu-section"
        className={
          props.page === "menu" ? "section-visible" : "section-invisible"
        }
      >
        <div id="dot-nav-container">
          <div className="dotstyle">
            <ul id="dot-nav-ul" className={props.dotColour}>
              <li className={props.dotFill === 1 ? "fill" : ""}>
                <a id="appetisers-link" onClick={props.dotNavClick}>
                  appetisers
                </a>
              </li>
              <li className={props.dotFill === 2 ? "fill" : ""}>
                <a id="entrees-link" onClick={props.dotNavClick}>
                  entrees
                </a>
              </li>
              <li className={props.dotFill === 3 ? "fill" : ""}>
                <a id="desserts-link" onClick={props.dotNavClick}>
                  desserts
                </a>
              </li>
              <li className={props.dotFill === 4 ? "fill" : ""}>
                <a id="drinks-link" onClick={props.dotNavClick}>
                  drinks
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="menu-container"
          id="appetisers"
          ref={props.appetiserPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(0)}>Appetisers</h2>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(1)}>
              <h3>
                Za'atar & Feta Filo Rolls <span>£9</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Flaky filo pastry stuffed with a blend of Greek feta cheese,
                mixed with the Middle Eastern spice za'atar, and a hint of olive
                oil, then baked to golden perfection.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(2)}>
              <h3>
                Muhammara-Stuffed Dolmas <span>£10</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Greek-style dolmas (vine leaves) filled with muhammara, a spicy
                pepper dip from the Levant, enriched with walnuts and
                pomegranate molasses.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(3)}>
              <h3>
                Seafood Saganaki <span>£14</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A fusion dish featuring sautéed shrimp and scallops in a rich
                tomato sauce with feta cheese, inspired by Greek saganaki,
                served in a hot skillet.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(4)}>
              <h3>
                Baba Ganoush with Pita Chips <span>£8</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Smoky Lebanese baba ganoush topped with sumac for an added
                tartness, served with homemade crispy pita chips for dipping.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(5)}>
              <h3>
                Falafel Tzatziki Bites <span>£8.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Mini falafel patties served on a dollop of Greek tzatziki sauce,
                garnished with dill and pomegranate seeds.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(6)}>
              <h3>
                Lamb Kofta with Tabbouleh <span>£12</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Spiced lamb kofta skewers paired with a refreshing tabbouleh
                salad that incorporates finely chopped parsley, mint, tomato,
                and bulgur, drizzled with a lemony olive oil dressing.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(7)}>
              <h3>
                Halloumi & Fig Skewers <span>£11</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Grilled halloumi cheese and fresh figs on skewers, drizzled with
                a balsamic reduction and sprinkled with crushed pistachios,
                blending Greek and Middle Eastern flavors.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(8)}>
              <h3>
                Spiced Beetroot Hummus <span>£6.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Vibrant beetroot hummus seasoned with cumin and coriander,
                served with an assortment of raw vegetables and toasted
                flatbread.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(9)}>
              <h3>
                Octopus Meze <span>£13</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Tender grilled octopus served with a sauce of tahini and garlic,
                lightly drizzled with olive oil and sprinkled with chopped
                herbs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="menu-container black-background"
          id="entrees"
          ref={props.entreePaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(1)}>Entrées</h2>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(10)}>
              <h3>
                Ottoman Kebab Platter <span>£22</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Skewers of lamb, chicken, and beef marinated in a mixture of
                pomegranate molasses, Greek yogurt, and Arabic spices, grilled
                to perfection. Served with a side of tabbouleh and tzatziki
                sauce.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(11)}>
              <h3>
                Sultan's Sea Bass <span>£24</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Whole sea bass encrusted with za'atar and sumac, slow-roasted
                with figs and walnuts, and drizzled with a tahini-lemon sauce.
                Accompanied by herbed bulgur pilaf.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(12)}>
              <h3>
                Phoenician Moussaka <span>£20</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Layers of thinly sliced eggplant, spiced mixed meats (lamb and
                beef), and a rich béchamel sauce, topped with crumbled feta and
                baked until golden.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(13)}>
              <h3>
                Anatolian Stuffed Peppers<span>£18</span>{" "}
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Bell peppers stuffed with a fragrant mixture of rice, pine nuts,
                currants, cinnamon, and minced meat, cooked in a savory tomato
                and mint sauce.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(14)}>
              <h3>
                Levantine Lamb Shank<span>£28</span>{" "}
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Slow-cooked lamb shank with apricots and prunes, served on a bed
                of saffron-infused couscous, garnished with fresh mint and
                pomegranate seeds.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(15)}>
              <h3>
                Aegean Fish Tagine<span>£22</span>{" "}
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A hearty tagine featuring chunks of swordfish and shrimp,
                potatoes, and olives, simmered in a saffron and orange blossom
                water broth, served with flatbread.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(16)}>
              <h3>
                Bosphorus Duck <span>£23</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Enjoy a succulent slow-roasted duck confit, presented atop a bed
                of buttery sautéed greens, delicately finished with a
                pomegranate reduction. Served alongside a crisp arugula salad.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(18)}>
              <h3>
                Galilee Goat Pizza <span>£17</span>{" "}
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A thin-crust pizza topped with spiced goat meat, roasted red
                peppers, Kalamata olives, and a blend of mozzarella and halloumi
                cheese, finished with a drizzle of garlic-infused olive oil.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(17)}>
              <h3>
                Grilled Halloumi and Vegetables <span>£15</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Slices of halloumi cheese and seasonal vegetables served on a
                cedar plank with a garlic and herb labneh dip.
              </p>
            </div>
          </div>
        </div>
        <div
          className="menu-container"
          id="desserts"
          ref={props.dessertPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(2)}>Sweets</h2>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(19)}>
              <h3>
                Pistachio Baklava Cheesecake <span>£8.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A creamy cheesecake base layered with crispy baklava filled with
                pistachios and sweetened with honey syrup. Topped with crushed
                pistachios and a light dusting of cinnamon.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(20)}>
              <h3>
                Rosewater and Cardamom Panna Cotta <span>£8</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A silky panna cotta infused with rosewater and cardamom, served
                with a raspberry coulis and fresh raspberries sprinkled with
                chopped nuts.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(21)}>
              <h3>
                Turkish Delight Stuffed Figs <span>£7</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Fresh figs stuffed with Turkish delight (lokum), roasted and
                served with a scoop of mastika ice cream and drizzled with
                pomegranate molasses.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(22)}>
              <h3>
                Saffron and Orange Blossom Rice Pudding <span>£9</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A rich and creamy rice pudding flavored with saffron and orange
                blossom water, garnished with slivered almonds and golden
                raisins.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(23)}>
              <h3>
                Halva and Honey Parfait<span>£7.5</span>
              </h3>
              <p className="break">&nbsp;</p>
              <p>
                Layers of crumbly sesame halva and Greek yogurt honey mousse,
                topped with a crunchy pistachio praline.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(24)}>
              <h3>
                Lebanese Nights (Layali Lubnan) <span>£6.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A semolina pudding base, layered with whipped cream and topped
                with a fragrant orange blossom syrup, garnished with toasted
                pine nuts.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(25)}>
              <h3>
                Greek Yoghurt and Honey Tart <span>£6.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                A crisp pastry shell filled with creamy Greek yoghurt, topped
                with a honey and walnut glaze, and garnished with candied lemon
                peel.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(26)}>
              <h3>
                Mastic and Mahlab Apricot Tart <span>£7.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                An aromatic tart filled with apricot jam enhanced with mastic
                and mahlab spices, topped with a lattice of pastry and dusted
                with powdered sugar.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(27)}>
              <h3>
                Coffee and Cardamom Muhallebi <span>£6</span>
              </h3>
              <p className="break">&nbsp;</p>
              <p>
                A creamy coffee-flavored muhallebi (Arabic milk pudding) scented
                with cardamom, served with a dollop of whipped cream and a
                sprinkle of finely ground coffee beans.
              </p>
            </div>
          </div>
        </div>
        <div
          className="menu-container black-background"
          id="drinks"
          ref={props.drinksPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(3)}>To Drink?</h2>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(28)}>
              <h3>
                Istanbul Sunset <span>£12</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Mix Raki, pomegranate juice, lime juice, and simple syrup. Serve
                in a highball glass over ice with a splash of club soda. Garnish
                with a lime wheel and pomegranate seeds.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(29)}>
              <h3>
                Cedar Grove Martini <span>£11</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Combine Arak, lemon juice, orange blossom water, and agave
                syrup. Shake well and strain into a chilled martini glass.
                Garnish with a twist of orange peel.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(30)}>
              <h3>
                Aegean Spritz <span>£10</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Mix Ouzo, prosecco, elderflower liqueur, and club soda. Serve in
                a large wine glass filled with ice. Garnish with a sprig of mint
                and slices of cucumber.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(31)}>
              <h3>
                Lebanese Rose Mojito <span>£10.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Muddle mint leaves with rose syrup and lime juice, add white
                rum, and top with soda water. Serve in a highball glass and
                garnish with rose petals and a mint sprig.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(32)}>
              <h3>
                Saffron Sling <span>£13</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Shake vodka, saffron-infused syrup, lemon juice, and a dash of
                orange bitters with ice. Strain into a sling glass and garnish
                with an orange slice and a saffron thread.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(33)}>
              <h3>
                Fig & Honey Collins <span>£12</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Combine fig vodka, lemon juice, and honey syrup in a shaker with
                ice. Shake and strain into a Collins glass filled with ice, top
                with sparkling water. Garnish with a fig slice.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(34)}>
              <h3>
                Pistachio Daiquiri <span>£12.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Shake white rum, pistachio syrup, lime juice, and a dash of
                almond milk with ice. Strain into a chilled coupe glass and
                garnish with crushed pistachios on the rim.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(35)}>
              <h3>
                Arabian Nights <span>£13.5</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Muddle blackberries and cardamom pods with gin, lime juice, and
                honey syrup. Shake with ice and strain into an old-fashioned
                glass filled with crushed ice. Garnish with a sprig of mint and
                a few whole cardamom pods.
              </p>
            </div>
            <div className="menu-grid-item" ref={props.setAppetiserRef(36)}>
              <h3>
                Mediterranean Mule <span>£10</span>
              </h3>{" "}
              <p className="break">&nbsp;</p>
              <p>
                Mix Mastika spirit with fresh lime juice, add ice, top with
                ginger beer and a dash of Angostura bitters in a copper mug.
                Garnish with a slice of lime and a sprig of thyme.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="gallery-section"
        className={
          props.page === "gallery" ? "section-visible" : "section-invisible"
        }
      >
        <div className="black-background" id="gallery-container-container">
          <Lightbox
            open={props.lightboxOpen}
            close={() => props.closeLightbox()}
            slides={props.gallery}
            plugins={[Fullscreen, Thumbnails]}
            index={props.imageIndex}
          />
          <Gallery
            gallery={props.gallery}
            clickOnImage={props.clickOnImage}
            lightboxOpen={props.lightboxOpen}
          />
        </div>
      </section>
      <section
        id="reservations-section"
        className={
          props.page === "reservations"
            ? "section-visible"
            : "section-invisible"
        }
      >
        <Reservations page={props.page} handleClick={props.handleClick} />
      </section>
    </div>
  );
}

export default Asherah;
