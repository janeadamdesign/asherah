import { motion } from "framer-motion";
import React from "react";


function AMMenu(): React.ReactElement {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{
      duration: 0.35,
      ease: [0.42, 0, 0.58, 1]
    }}>

    <section id="mobile-menu">
      <section id="menu-section-mobile">
        <div className="menu-container-mobile blanco" id="appetisers-mobile">
          <div className="menu-flex">
            <div className="menu-flex-title">
              <h2>Appetisers</h2>
            </div>
            <div className="menu-flex-item">
              <h3>
                Za'atar & Feta Filo Rolls <span>£9</span>
              </h3>{" "}
              <br></br>
              <p>
                Flaky filo pastry stuffed with a blend of Greek feta cheese,
                mixed with the Middle Eastern spice za'atar, and a hint of olive
                oil, then baked to golden perfection.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Muhammara-Stuffed Dolmas <span>£10</span>
              </h3>{" "}
              <br />
              <p>
                Greek-style dolmas (vine leaves) filled with muhammara, a spicy
                pepper dip from the Levant, enriched with walnuts and
                pomegranate molasses.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Seafood Saganaki <span>£14</span>
              </h3>{" "}
              <br />
              <p>
                A fusion dish featuring sautéed shrimp and scallops in a rich
                tomato sauce with feta cheese, inspired by Greek saganaki,
                served in a hot skillet.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Baba Ganoush with Pita Chips <span>£8</span>
              </h3>{" "}
              <br />
              <p>
                Smoky Lebanese baba ganoush topped with sumac for an added
                tartness, served with homemade crispy pita chips for dipping.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Falafel Tzatziki Bites
                <span>£8.5</span>
              </h3>{" "}
              <br />
              <p>
                Mini falafel patties served on a dollop of Greek tzatziki sauce,
                garnished with dill and pomegranate seeds.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Lamb Kofta with Tabbouleh <span>£12</span>
              </h3>{" "}
              <br />
              <p>
                Spiced lamb kofta skewers paired with a refreshing tabbouleh
                salad that incorporates finely chopped parsley, mint, tomato,
                and bulgur, drizzled with a lemony olive oil dressing.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Halloumi & Fig Skewers <span>£11</span>
              </h3>{" "}
              <br />
              <p>
                Grilled halloumi cheese and fresh figs on skewers, drizzled with
                a balsamic reduction and sprinkled with crushed pistachios,
                blending Greek and Middle Eastern flavors.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Spiced Beetroot Hummus <span>£6.5</span>
              </h3>{" "}
              <br />
              <p>
                Vibrant beetroot hummus seasoned with cumin and coriander,
                served with an assortment of raw vegetables and toasted
                flatbread.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Octopus Meze <span>£13</span>
              </h3>{" "}
              <br />
              <p>
                Tender grilled octopus served with a sauce of tahini and garlic,
                lightly drizzled with olive oil and sprinkled with chopped
                herbs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="menu-container-mobile black-background"
          id="entrees-mobile"
        >
          <div className="menu-flex">
            <div className="menu-flex-title">
              <h2>Entrées</h2>
            </div>
            <div className="menu-flex-item">
              <h3>
                Ottoman Kebab Platter <span>£22</span>
              </h3>{" "}
              <br></br>
              <p>
                Skewers of lamb, chicken, and beef marinated in a mixture of
                pomegranate molasses, Greek yogurt, and Arabic spices, grilled
                to perfection. Served with a side of tabbouleh and tzatziki
                sauce.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Sultan's Sea Bass <span>£24</span>
              </h3>{" "}
              <br />
              <p>
                Whole sea bass encrusted with za'atar and sumac, slow-roasted
                with figs and walnuts, and drizzled with a tahini-lemon sauce.
                Accompanied by herbed bulgur pilaf.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Phoenician Moussaka <span>£20</span>
              </h3>{" "}
              <br />
              <p>
                Layers of thinly sliced eggplant, spiced mixed meats (lamb and
                beef), and a rich béchamel sauce, topped with crumbled feta and
                baked until golden.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Anatolian Stuffed Peppers<span>£18</span>{" "}
              </h3>{" "}
              <br />
              <p>
                Bell peppers stuffed with a fragrant mixture of rice, pine nuts,
                currants, cinnamon, and minced meat, cooked in a savory tomato
                and mint sauce.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Levantine Lamb Shank<span>£28</span>{" "}
              </h3>{" "}
              <br />
              <p>
                Slow-cooked lamb shank with apricots and prunes, served on a bed
                of saffron-infused couscous, garnished with fresh mint and
                pomegranate seeds.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Aegean Fish Tagine<span>£22</span>{" "}
              </h3>{" "}
              <br />
              <p>
                A hearty tagine featuring chunks of swordfish and shrimp,
                potatoes, and olives, simmered in a saffron and orange blossom
                water broth, served with flatbread.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Bosphorus Duck <span>£23</span>
              </h3>{" "}
              <br />
              <p>
                Enjoy a succulent slow-roasted duck confit, presented atop a bed
                of buttery sautéed greens, delicately finished with a
                pomegranate reduction. Served alongside a crisp arugula salad.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Galilee Goat Pizza <span>£17</span>{" "}
              </h3>{" "}
              <br />
              <p>
                A thin-crust pizza topped with spiced goat meat, roasted red
                peppers, Kalamata olives, and a blend of mozzarella and halloumi
                cheese, finished with a drizzle of garlic-infused olive oil.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Grilled Halloumi and Vegetables <span>£15</span>
              </h3>{" "}
              <br />
              <p>
                Slices of halloumi cheese and seasonal vegetables served on a
                cedar plank with a garlic and herb labneh dip.
              </p>
            </div>
          </div>
        </div>
        <div className="menu-container-mobile blanco" id="desserts">
          <div className="menu-flex">
            <div className="menu-flex-title">
              <h2>Sweets</h2>
            </div>
            <div className="menu-flex-item">
              <h3>
                Pistachio Baklava Cheesecake <span>£8.5</span>
              </h3>{" "}
              <br></br>
              <p>
                A creamy cheesecake base layered with crispy baklava filled with
                pistachios and sweetened with honey syrup. Topped with crushed
                pistachios and a light dusting of cinnamon.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Rosewater and Cardamom Panna Cotta <span>£8</span>
              </h3>{" "}
              <br />
              <p>
                A silky panna cotta infused with rosewater and cardamom, served
                with a raspberry coulis and fresh raspberries sprinkled with
                chopped nuts.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Turkish Delight Stuffed Figs <span>£7</span>
              </h3>{" "}
              <br />
              <p>
                Fresh figs stuffed with Turkish delight (lokum), roasted and
                served with a scoop of mastika ice cream and drizzled with
                pomegranate molasses.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Saffron and Orange Blossom Rice Pudding <span>£9</span>
              </h3>{" "}
              <br />
              <p>
                A rich and creamy rice pudding flavored with saffron and orange
                blossom water, garnished with slivered almonds and golden
                raisins.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Halva and Honey Parfait<span>£7.5</span>
              </h3>
              <br />
              <p>
                Layers of crumbly sesame halva and Greek yogurt honey mousse,
                topped with a crunchy pistachio praline.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Lebanese Nights (Layali Lubnan) <span>£6.5</span>
              </h3>{" "}
              <br />
              <p>
                A semolina pudding base, layered with whipped cream and topped
                with a fragrant orange blossom syrup, garnished with toasted
                pine nuts.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Greek Yoghurt and Honey Tart <span>£6.5</span>
              </h3>{" "}
              <br />
              <p>
                A crisp pastry shell filled with creamy Greek yoghurt, topped
                with a honey and walnut glaze, and garnished with candied lemon
                peel.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Mastic and Mahlab Apricot Tart <span>£7.5</span>
              </h3>{" "}
              <br />
              <p>
                An aromatic tart filled with apricot jam enhanced with mastic
                and mahlab spices, topped with a lattice of pastry and dusted
                with powdered sugar.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Coffee and Cardamom Muhallebi <span>£6</span>
              </h3>
              <br />
              <p>
                A creamy coffee-flavored muhallebi (Arabic milk pudding) scented
                with cardamom, served with a dollop of whipped cream and a
                sprinkle of finely ground coffee beans.
              </p>
            </div>
          </div>
        </div>
        <div className="menu-container-mobile black-background" id="drinks">
          <div className="menu-flex">
            <div className="menu-flex-title">
              <h2>To Drink?</h2>
            </div>
            <div className="menu-flex-item">
              <h3>
                Istanbul Sunset <span>£12</span>
              </h3>{" "}
              <br></br>
              <p>
                Mix Raki, pomegranate juice, lime juice, and simple syrup. Serve
                in a highball glass over ice with a splash of club soda. Garnish
                with a lime wheel and pomegranate seeds.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Cedar Grove Martini <span>£11</span>
              </h3>{" "}
              <br />
              <p>
                Combine Arak, lemon juice, orange blossom water, and agave
                syrup. Shake well and strain into a chilled martini glass.
                Garnish with a twist of orange peel.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Aegean Spritz <span>£10</span>
              </h3>{" "}
              <br />
              <p>
                Mix Ouzo, prosecco, elderflower liqueur, and club soda. Serve in
                a large wine glass filled with ice. Garnish with a sprig of mint
                and slices of cucumber.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Lebanese Rose Mojito <span>£10.5</span>
              </h3>{" "}
              <br />
              <p>
                Muddle mint leaves with rose syrup and lime juice, add white
                rum, and top with soda water. Serve in a highball glass and
                garnish with rose petals and a mint sprig.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Saffron Sling <span>£13</span>
              </h3>{" "}
              <br />
              <p>
                Shake vodka, saffron-infused syrup, lemon juice, and a dash of
                orange bitters with ice. Strain into a sling glass and garnish
                with an orange slice and a saffron thread.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Fig & Honey Collins <span>£12</span>
              </h3>{" "}
              <br />
              <p>
                Combine fig vodka, lemon juice, and honey syrup in a shaker with
                ice. Shake and strain into a Collins glass filled with ice, top
                with sparkling water. Garnish with a fig slice.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Pistachio Daiquiri <span>£12.5</span>
              </h3>{" "}
              <br />
              <p>
                Shake white rum, pistachio syrup, lime juice, and a dash of
                almond milk with ice. Strain into a chilled coupe glass and
                garnish with crushed pistachios on the rim.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Arabian Nights <span>£13.5</span>
              </h3>{" "}
              <br />
              <p>
                Muddle blackberries and cardamom pods with gin, lime juice, and
                honey syrup. Shake with ice and strain into an old-fashioned
                glass filled with crushed ice. Garnish with a sprig of mint and
                a few whole cardamom pods.
              </p>
            </div>
            <div className="menu-flex-item">
              <h3>
                Mediterranean Mule <span>£10</span>
              </h3>{" "}
              <br />
              <p>
                Mix Mastika spirit with fresh lime juice, add ice, top with
                ginger beer and a dash of Angostura bitters in a copper mug.
                Garnish with a slice of lime and a sprig of thyme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    </motion.div>
  );
}

export default AMMenu;
