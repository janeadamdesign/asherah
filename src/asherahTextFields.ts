import { m } from "framer-motion";

export interface CopyWrite {
  [key: number]: string;
}

export const copyWrite: CopyWrite = {
  1: "Bordering the Lebanon Mountains, situated at the crossroads of many of the world’s greatest civilisations, Malqaria is a jewel flanked on its east by the Aramean desert and the European Mediterranean to its west. This unique nation is distinguished by its enduring religious identity, having resisted assimilation into the spread of Christian and Islamic traditions for millennia, thus setting itself apart from many of its neighbours. Malqaria’s history is punctuated by a brief period as a Crusader kingdom established by errant French knights which, while leaving indelible marks on the Malqarian architectural landscape, nonetheless failed to thrust its population into the baptismal font. Malqaria continues to adhere to age-old rituals passed down every generation, creating a living museum of mysterious custom amidst a booming tech industry. Their spoken language is Old Malqarian, comprised of an Aramaic substrate complemented by significant lexical content from medieval Romance languages and Classical Arabic.",
  2: "Hammon Ba’albek, AAA Five Diamond chef from the Malqarian capital, imbues the ancient flavours and traditions of his homeland in every meal he crafts. Raised in the heart of the bustling streets of New Ugarit, Hammon’s passion for food was kindled at an early age, nurtured as he was by the rich tapestry of heritage woven into his and his family’s culture. From the fragrant spice mines of the Eastern Quarter to the bustling harbours of the historic port, every aspect of New Ugarit’s culinary scene infused Hammon’s senses with inspiration, teeming with fresh catches from the Mediterranean Sea and seafood recipes from the city’s deeply-rooted Cypriot community. His signature dishes draw gourmets and food connoisseurs from across the globe, eager to experience his unique gastronomic alchemy. His work is not mere matter but narrative, each plate a chapter detailing the warp and weft of Malqarian life.",
  3: "Having resisted both American and Soviet influence during the Cold War years, Malqaria retains its political status of neutrality at the centre of a region embroiled in both the Arab-Israeli conflict and the Syrian civil war. Such commitment to non-alignment allows Malqaria to serve as a mediator, fostering dialogue and understanding amongst its neighbours. The streets of New Ugarit buzz with a blend of Levantine scents and Italian chic, wherein marketplaces selling centuries-old spice blends sit alongside cafés playing contemporary music. Along the rugged coastlines, small fishing communities act out their daily routines, largely unchanged for hundreds of years, while inland, regular festivals celebrate the harvest, rain and sun with rites that honour the ancient Canaanite pantheon and the red earth in which they dwell. The deep integration of past and present in Malqarian society showcases a culture that is both resilient and welcoming, inviting visitors to experience its rich history and vibrant quotidian life.",
  4: "In the early 2000s, following a personal invitation from then First Lady Cherie Blair, Hammon embarked on an odyssey to England at the height of the ‘Cool Britannia’ era, driven by an Epicurean passion to share the flavours of Malqaria with the world. Armed with recipes perfected since time immemorial, Hammon opened the doors to Asherah, a restaurant which quickly became a beacon of Levantine cuisine in the heart of London’s Green Lanes. Named after Malqaria’s national tree—as well as the revered goddess of fertility to whom it remains dedicated—Asherah transports diners on a journey through the flavours of the Canaan of antiquity, blending traditional techniques with modern innovation to create a dining experience unlike any other. With each dish meticulously crafted to honour the land, sea, sky and gods, Hammon invites guests to savour the essence of his homeland with every bite.",
};

export interface Navlinks {
  [key: number]: Navlink;
}

export interface Navlink {
  id: string;
  content: string;
}

export const navlinks: Navlinks = {
  1: {
    id: "home",
    content: "Home",
  },
  2: {
    id: "history",
    content: "Our History",
  },
  3: {
    id: "eat",
    content: "Eat",
  },
  4: {
    id: "drink",
    content: "Drink",
  },
  5: {
    id: "gallery",
    content: "Gallery",
  },
  6: {
    id: "reservations",
    content: "Reservations",
  },
};

export const menuLinks: Navlinks = {
  1: {
    id: "appetisers-link",
    content: "appetisers",
  },
  2: {
    id: "entrees-link",
    content: "entrees",
  },
  3: {
    id: "desserts-link",
    content: "desserts",
  },
  4: {
    id: "drinks-link",
    content: "drinks",
  },
};

export interface MenuEntry {
  title: string;
  copy: string;
  price: number;
}

export interface MenuSection {
  [key: number]: MenuEntry;
}

export interface MenuContent {
  [key: string]: MenuSection;
}

export const menuContent: MenuContent = {
  appetisers: {
    1: {
      title: "Za'atar & Feta Filo Rolls",
      copy: "Flaky filo pastry stuffed with a blend of Greek feta cheese, mixed with the Middle Eastern spice za'atar, and a hint of olive oil, then baked to golden perfection.",
      price: 9,
    },
    2: {
      title: "Muhammara-Stuffed Dolmas",
      copy: "Greek-style dolmas (vine leaves) filled with muhammara, a spicy pepper dip from the Levant, enriched with walnuts and pomegranate molasses.",
      price: 10,
    },
    3: {
      title: "Seafood Saganaki",
      copy: "A fusion dish featuring sautéed shrimp and scallops in a rich tomato sauce with feta cheese, inspired by Greek saganaki, served in a hot skillet.",
      price: 14,
    },
    4: {
      title: "Baba Ganoush with Pita Chips",
      copy: "Smoky Lebanese baba ganoush topped with sumac for an added tartness, served with homemade crispy pita chips for dipping.",
      price: 8,
    },
    5: {
      title: "Falafel Tzatziki Bites",
      copy: "Mini falafel patties served on a dollop of Greek tzatziki sauce, garnished with dill and pomegranate seeds.",
      price: 8.5,
    },
    6: {
      title: "Lamb Kofta with Tabbouleh",
      copy: "Spiced lamb kofta skewers paired with a refreshing tabbouleh salad that incorporates finely chopped parsley, mint, tomato, and bulgur, drizzled with a lemony olive oil dressing.",
      price: 12,
    },
    7: {
      title: "Halloumi & Fig Skewers",
      copy: "Grilled halloumi cheese and fresh figs on skewers, drizzled with a balsamic reduction and sprinkled with crushed pistachios, blending Greek and Middle Eastern flavors.",
      price: 11,
    },
    8: {
      title: "Spiced Beetroot Hummus",
      copy: "Vibrant beetroot hummus seasoned with cumin and coriander, served with an assortment of raw vegetables and toasted flatbread.",
      price: 6.5,
    },
    9: {
      title: "Octopus Meze",
      copy: "Tender grilled octopus served with a sauce of tahini and garlic, lightly drizzled with olive oil and sprinkled with chopped herbs.",
      price: 13,
    },
  },
  entrees: {
    1: {
      title: "Ottoman Kebab Platter",
      copy: "Skewers of lamb, chicken, and beef marinated in a mixture of pomegranate molasses, Greek yogurt, and Arabic spices, grilled to perfection. Served with a side of tabbouleh and tzatziki sauce.",
      price: 22,
    },
    2: {
      title: "Sultan's Sea Bass",
      copy: "Whole sea bass encrusted with za'atar and sumac, slow-roasted with figs and walnuts, and drizzled with a tahini-lemon sauce. Accompanied by herbed bulgur pilaf.",
      price: 24,
    },
    3: {
      title: "Phoenician Moussaka",
      copy: "Layers of thinly sliced eggplant, spiced mixed meats (lamb and beef), and a rich béchamel sauce, topped with crumbled feta and baked until golden.",
      price: 20,
    },
    4: {
      title: "Anatolian Stuffed Peppers",
      copy: "Bell peppers stuffed with a fragrant mixture of rice, pine nuts, currants, cinnamon, and minced meat, cooked in a savory tomato and mint sauce.",
      price: 18,
    },
    5: {
      title: "Levantine Lamb Shank",
      copy: "Slow-cooked lamb shank with apricots and prunes, served on a bed of saffron-infused couscous, garnished with fresh mint and pomegranate seeds.",
      price: 28,
    },
    6: {
      title: "Aegean Fish Tagine",
      copy: "A hearty tagine featuring chunks of swordfish and shrimp, potatoes, and olives, simmered in a saffron and orange blossom water broth, served with flatbread.",
      price: 22,
    },
    7: {
      title: "Bosphorus Duck",
      copy: "Enjoy a succulent slow-roasted duck confit, presented atop a bed of buttery sautéed greens, delicately finished with a pomegranate reduction. Served alongside a crisp arugula salad.",
      price: 23,
    },
    8: {
      title: "Galilee Goat Pizza",
      copy: "A thin-crust pizza topped with spiced goat meat, roasted red peppers, Kalamata olives, and a blend of mozzarella and halloumi, finished with a drizzle of garlic-infused olive oil.",
      price: 17,
    },
    9: {
      title: "Grilled Halloumi and Vegetable",
      copy: "Slices of halloumi cheese and seasonal vegetables served on a cedar plank with a garlic and herb labneh dip.",
      price: 15,
    },
  },
  sweets: {
    1: {
      title: "Pistachio Baklava Cheesecake",
      copy: "A creamy cheesecake base layered with crispy baklava filled with pistachios and sweetened with honey syrup. Topped with crushed pistachios and a light dusting of cinnamon.",
      price: 8.5,
    },
    2: {
      title: "Rosewater and Cardamom Panna Cotta",
      copy: "A silky panna cotta infused with rosewater and cardamom, served with a raspberry coulis and fresh raspberries sprinkled with chopped nuts.",
      price: 8,
    },
    3: {
      title: "Turkish Delight Stuffed Figs",
      copy: "Fresh figs stuffed with Turkish delight (lokum), roasted and served with a scoop of mastika ice cream and drizzled with pomegranate molasses.",
      price: 7,
    },
    4: {
      title: "Saffron and Orange Blossom Rice Pudding",
      copy: "A rich and creamy rice pudding flavored with saffron and orange blossom water, garnished with slivered almonds and golden raisins.",
      price: 9,
    },
    5: {
      title: "Halva and Honey Parfait",
      copy: "Layers of crumbly sesame halva and Greek yogurt honey mousse, topped with a crunchy pistachio praline.",
      price: 7.5,
    },
    6: {
      title: "Lebanese Nights (Layali Lubnan) ",
      copy: "A semolina pudding base, layered with whipped cream and topped with a fragrant orange blossom syrup, garnished with toasted pine nuts.",
      price: 6.5,
    },
    7: {
      title: "Greek Yoghurt and Honey Tart",
      copy: "A crisp pastry shell filled with creamy Greek yoghurt, topped with a honey and walnut glaze, and garnished with candied lemon peel.",
      price: 6.5,
    },
    8: {
      title: "Mastic and Mahlab Apricot Tart",
      copy: "An aromatic tart filled with apricot jam enhanced with mastic and mahlab spices, topped with a lattice of pastry and dusted with powdered sugar.",
      price: 7.5,
    },
    9: {
      title: "Coffee and Cardamom Muhallebi",
      copy: "A creamy coffee-flavored muhallebi (Arabic milk pudding) scented with cardamom, served with a dollop of whipped cream and a sprinkle of finely ground coffee beans.",
      price: 6,
    },
  },
  drinks: {
    1: {
      title: "Istanbul Sunset",
      copy: "Mix Raki, pomegranate juice, lime juice, and simple syrup. Serve in a highball glass over ice with a splash of club soda. Garnish with a lime wheel and pomegranate seeds.",
      price: 12,
    },
    2: {
      title: "Cedar Grove Martini",
      copy: "Combine Arak, lemon juice, orange blossom water, and agave syrup. Shake well and strain into a chilled martini glass. Garnish with a twist of orange peel.",
      price: 11,
    },
    3: {
      title: "Aegean Spritz",
      copy: "Mix Ouzo, prosecco, elderflower liqueur, and club soda. Serve in a large wine glass filled with ice. Garnish with a sprig of mint and slices of cucumber.",
      price: 10,
    },
    4: {
      title: "Lebanese Rose Mojito",
      copy: "Muddle mint leaves with rose syrup and lime juice, add white rum, and top with soda water. Serve in a highball glass and garnish with rose petals and a mint sprig.",
      price: 10.5,
    },
    5: {
      title: "Saffron Sling",
      copy: "Shake vodka, saffron-infused syrup, lemon juice, and a dash of orange bitters with ice. Strain into a sling glass and garnish with an orange slice and a saffron thread.",
      price: 13,
    },
    6: {
      title: "Fig & Honey Collins",
      copy: "Combine fig vodka, lemon juice, and honey syrup in a shaker with ice. Shake and strain into a Collins glass filled with ice, top with sparkling water. Garnish with a fig slice.",
      price: 12,
    },
    7: {
      title: "Pistachio Daiquiri",
      copy: "Shake white rum, pistachio syrup, lime juice, and a dash of almond milk with ice. Strain into a chilled coupe glass and garnish with crushed pistachios on the rim.",
      price: 12.5,
    },
    8: {
      title: "Arabian Nights",
      copy: "Muddle blackberries and cardamom pods with gin, lime juice, and honey syrup. Shake with ice and strain into an old-fashioned glass filled with crushed ice. Garnish with a sprig of mint and a few whole cardamom pods.",
      price: 13.5,
    },
    9: {
      title: "Mediterranean Mule",
      copy: "Mix Mastika spirit with fresh lime juice, add ice, top with ginger beer and a dash of Angostura bitters in a copper mug. Garnish with a slice of lime and a sprig of thyme.",
      price: 10,
    },
  },
};

























{
  /*
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
                Mastic and Mahlab Apricot Tart<span>£7.5</span>
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
                Fig & Honey Collins<span>£12</span>
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
            */
}
