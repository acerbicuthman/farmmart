import React from "react";
import VegetableSamples from "../Images/vegetablesample.jpg";
import "../Styles/faq.css";
import Footer from "../Components/Footer";

const Faq = () => {
  return (
    <div>
      <div class="card bg-dark text-white mt-5">
        <img
          src={VegetableSamples}
          class="card-img Howitworksbg"
          alt="Card image"
        />
        <div class="card-img-overlay">
          <div class="text-center mt-5">
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <details>
          <summary>
            What makes shopping with FarmBox Delivery better than the
            supermarket or other delivery companies
          </summary>
          <p>
            Lots of things! First, the food that you buy from FarmBox Delivery
            is much fresher and higher quality than the food you’d find at your
            traditional grocery store or other delivery companies since it’s not
            sitting around waiting to be purchased or traveling across the state
            to get to you. We do not keep inventory; we only order what we need
            for the boxes going out that week. This allows us to only deliver
            the very freshest groceries to you. With FarmBox Delivery, you can
            search for exactly what you want and find it right away—plus you can
            browse the aisles and discover new products. And our recipes give
            weekly inspiration so you’re never stuck trying to figure out what
            to make for dinner.
          </p>
        </details>

        <details>
          <summary>
            What are the main differences between FarmBox Delivery and Imperfect
            Produce?
          </summary>
          <p>
            Both FarmBox Delivery and Imperfect Produce let no produce go to
            waste. As a Zero-Waste company, FarmBox Delivery composts
            in-consumable produce and donates everything else to local food
            banks and supports the local community. Our produce boxes are filled
            with produce grown on small to medium farms in Texas that use
            organic practices or are USDA Organic Certified. Our farm boxes
            contain a mix of local and non-local produce, and all non-local
            produce is USDA Organic Certified or sustainably grown. Many of the
            farmers from which we source have been in the FarmBox Family since
            we opened in 2013, and we help them plan their growing seasons in
            anticipation of what our customers enjoy. We are also able to
            purchase varied quantities of certain items, which can help farmers
            sell off their crops. FarmBox Delivery strives to be a zero-waste
            company and delivers using reusable boxes. Imperfect Produce sources
            from large farms, a mix of both conventional and organic, mostly in
            California, Mexico, and elsewhere in the world. Imperfect Produce
            packs their boxes in a warehouse in San Antonio and then ships them
            on a truck throughout Texas. This means their produce boxes travel
            for many hours before they even arrive to Austin/Dallas/Fort Worth.
            Then the boxes spend many more hours being delivered across Texas to
            the door. For these reasons, we believe we are the best choice for
            Texans when it comes to which delivery service you invest in and
            trust for your locally sourced and sustainably grown groceries.
          </p>
        </details>

        <details>
          <summary>
            I don't see a checkout button! How do I know my order will arrive?
          </summary>
          <p>
            Our checkout process is unique in that there is no checkout button.
            Items placed in your cart will be automatically finalized at the
            cutoff time of Sunday by 5:00 PM - prior to your delivery day and
            will arrive on your scheduled delivery day. Orders that do not meet
            the delivery criteria will be automatically cancelled after the
            cutoff time. (For delivery criteria, see "Do you offer free
            delivery")
          </p>
        </details>
        <details>
          <summary>What happens if there is an issue with my order?</summary>
          <p>
            Your experience is important to us. We are proud to offer a 100%
            satisfaction guarantee and if you are unhappy with a particular
            item, please notify us via phone or email within 5 days of receiving
            your order and we will be happy to arrange a credit or replacement
            item. If we run into issues or delays delivering your box, we'll be
            in contact with you as soon as we can. Due to high demand at this
            time, you may experience delivery delays so please be patient with
            us and check the email associated with your account before reaching
            out about a delayed delivery!
          </p>
        </details>

        <details>
          <summary>What should I do if my order is late or missing?</summary>
          <p>
            We do our best to deliver on the promised delivery date, but there
            may be weeks when your order could be delayed. We currently deliver
            between 8:00 AM - 9:00 PM. If you have not received your delivery
            within that time, please reach out to us info@farmboxdl.com so we
            can look into it.
          </p>
        </details>

        <details>
          <summary>
            What should I do with my packaging once my order arrives?
          </summary>
          <p>
            We’re happy to recycle or reuse all of your packaging—just leave
            your boxes, thermal sleeves and ice packs by your door when you’re
            expecting a delivery and we’ll take them back.
          </p>
        </details>
        <details>
          <summary>What time should I expect my delivery?</summary>
          <p>
            Your delivery window is any time between 8:00 AM - 9:00 PM. We
            cannot guarantee delivery times.
          </p>
        </details>
        <details>
          <summary>Do I have to be home to accept my order?</summary>
          <p>
            Nope! we’ll gladly leave your groceries in a secure spot at your
            home or office, like inside an unlocked front gate or with the
            receptionist. All cold items are packed with reusable thermal packs
            so they'll stay cold while you’re away. We highly recommend you
            place an ice chest with ice packs out on hot summer days/nights.
            This will help keep all your produce and grocery items fresh. Don’t
            have one? We’ve got you covered! Check out the insulated cooler bag
            we have for sale in the "Groceries" section.
          </p>
        </details>
        <details>
          <summary>How many people does a produce box serve?</summary>
          <p>
            The Large Boxes should serve about 4 people per week, the Regular
            Boxes should serve 2-3 people per week, and the Wee Boxes about 1-2
            people per week (depending on diet, lifestyle and cooking habits).
          </p>
        </details>
        <details>
          <summary>How do you deliver such fresh food?</summary>
          <p>
            We work directly with our local Texas farmers and foodmakers, which
            allows us to get their food to us (and then to you) in half the time
            of a traditional grocery stores or other delivery companies. That
            means better, more delicious food for you.
          </p>
        </details>
        <details>
          <summary>Where does your produce come from?</summary>
          <p>
            FarmBox Delivery believes in building local food systems.
            Encouraging our community to enjoy local food increases our food
            security as a nation and adds to the prosperity of our local
            economy. Local food also decreases the amount of greenhouse gases
            used to transport your food to your dinner plate. FarmBox Delivery
            goal is to make local foods more accessible and convenient. Why
            should we not enjoy local food when it is quite simply the best food
            available? Remember there are working families behind every local
            food business including FarmBox Delivery. FarmBox Delivery is
            independently and locally owned.
          </p>
        </details>
        <details>
          <summary>Why we carry some non-local food?</summary>
          <p>
            Local food is at the heart of everything we do, yet we also know
            that some household staples simply aren’t available from local
            sources. A home cook in Dallas will likely need lemons or olive oil,
            just as a cook in California may regularly use pecans. And everyone
            needs coffee. The Funny Thing About Being 100% LOCAL We’ve realized
            that we’re most effective at helping our local producers grow their
            businesses if we can replace an entire trip to the grocery store for
            customers. Ironically, being too rigid about local sourcing actually
            hurts our local producers’ sales since customers have to go
            elsewhere for some items. So in order to grow local food systems, we
            supplement our local selection with some carefully-chosen products
            from a wider radius.
          </p>
        </details>
        <details>
          <summary>Is your produce organic?</summary>
          <p>
            Is your produce organic? This is not a ‘yes’ or ‘no’ answer. Most of
            us are familiar with the difference between an organic product and a
            conventional or non-organic one, but the reality is there are more
            options than this: USDA Organic, IPM (Integrated Pest Management)
            and Beyond Organic. Most of our farmers are small scale producers
            and cannot afford the costs associated with becoming USDA Certified
            Organic; however, they often practice beyond organic processes. We
            source local first, whenever possible, this includes Beyond Organic
            and IPM options. When out-of-state selections are sourced, they
            include USDA Organic and IPM options. Let’s define these options:
            USDA Organic: For foods to be certified as organic by the U.S.
            Department of Agriculture, they must be grown and processed
            according to strict guidelines that address, among many factors,
            soil quality, animal raising practices, pest and weed control, and
            use of additives. As a result of these regulations, USDA Certified
            Organic food is produced the way nature intended. Organic produce
            must be grown on soil that had no prohibited substances, like
            synthetic fertilizers and pesticides, applied for three years prior
            to harvest. For organic meat, regulations require that animals are
            raised in living conditions accommodating their natural behaviors
            (like the ability to graze on pasture), fed 100% organic feed and
            forage, and not administered antibiotics or hormones. When it comes
            to processed, multi-ingredient foods, regulations prohibit
            artificial preservatives, colors, or flavors. For more info visit:
            https://www.usda.gov/topics/organic IPM (Integrated Pest
            Management): Integrated Pest Management (IPM) is an effective and
            environmentally sensitive approach to pest management that relies on
            a combination of common-sense practices. IPM programs use natural
            biological methods like trapping, weeding, and pheromones to
            discourage pests from harming their crops. If these methods fail, or
            there is a particularly bad outbreak, a carefully selected OMRI
            approved treatment, which are approved for use in organic
            agriculture would be used in their management program - one that
            causes the least possible hazard to people, property, and the
            environment. Beyond Organic: There are a few reasons why a farm
            might be labeled "Beyond Organic" versus ”Certified USDA Organic.”
            One very common reason is money. Many small farms cannot afford the
            thousands of dollars per year it costs to acquire and maintain
            certified status, even though they practice--or even exceed--the
            guidelines set by the USDA. Another reason is that the alternative,
            often regenerative, practices of these small farms have yet to be
            defined and regulated by the organic industry. Regenerative
            practices go a step further than organic standards as they strive to
            reverse climate change by rebuilding soil organic matter and
            restoring degraded soil biodiversity – resulting in both carbon
            drawdown and improvements to the water cycle.
          </p>
        </details>
        <details>
          <summary>Do you know your food icons?</summary>
          <p>
            Know Your Food Icons We take our promise of providing transparency
            very seriously. The key to eating healthy is knowing how your food
            is grown. Local There isn’t just one definition of “local.” Some
            argue that food can be considered local if grown within 100 miles of
            where it is being sold, while the USDA defines local as within 400
            miles! Because we are a major metropolitan area, we choose to define
            local as food grown or made within 300 miles of North Texas. Eating
            local is one of the best ways to reduce your carbon footprint
            because fewer food-miles mean fewer emissions. Food grown locally
            also benefits your gut biome by enriching it with the biodiversity
            reflected in the local soil, further supporting your overall health
            and immune system. Lastly, buying food produced close to home is a
            great way to support your friends and neighbors through the local
            economy! IPM Integrated Pest Management (IPM) is an effective and
            environmentally sensitive approach to pest management that relies on
            a combination of common-sense practices. IPM programs use natural
            biological methods like trapping, weeding, and pheromones to
            discourage pests from harming their crops. If these methods fail, or
            there is a particularly bad outbreak, a carefully selected OMRI
            approved treatment, which are approved for use in organic
            agriculture would be used in their management program - one that
            causes the least possible hazard to people, property, and the
            environment. USDA Organic For foods to be certified as organic by
            the U.S. Department of Agriculture, they must be grown and processed
            according to strict guidelines that address, among many factors,
            soil quality, animal raising practices, pest and weed control, and
            use of additives. As a result of these regulations, USDA Certified
            Organic food is produced the way nature intended. Organic produce
            must be grown on soil that had no prohibited substances, like
            synthetic fertilizers and pesticides, applied for three years prior
            to harvest. For organic meat, regulations require that animals are
            raised in living conditions accommodating their natural behaviors
            (like the ability to graze on pasture), fed 100% organic feed and
            forage, and not administered antibiotics or hormones. When it comes
            to processed, multi-ingredient foods, regulations prohibit
            artificial preservatives, colors, or flavors. For more info visit:
            https://www.usda.gov/topics/organic Beyond Organic There are a few
            reasons why a farm might be labeled "Beyond Organic" versus
            ”Certified USDA Organic.” One very common reason is money. Many
            small farms cannot afford the thousands of dollars per year it costs
            to acquire and maintain certified status, even though they
            practice--or even exceed--the guidelines set by the USDA. Another
            reason is that the alternative, often regenerative, practices of
            these small farms have yet to be defined and regulated by the
            organic industry. Regenerative practices go a step further than
            organic standards as they strive to reverse climate change by
            rebuilding soil organic matter and restoring degraded soil
            biodiversity – resulting in both carbon drawdown and improvements to
            the water cycle. Grass-fed Meat and dairy can be considered
            grass-fed when the animal eats only grasses and (and other naturally
            foraged plants, like hay) for the length of its life. Grass-fed
            meats often have a distinctly “meatier” or “gamier” taste and
            texture than their grain-fed counterparts. They also tend to be
            leaner because the animals do not consume as much starchy, fattening
            foods, like corn. These differences can be observed in grass-fed
            dairy as well, whose texture is often creamier and flavor naturally
            infused with subtle hints of the season’s native grasses. Most
            importantly, grass-fed products are more healthful because they’ve
            absorbed all the vitamins and minerals from the
            nutritionally-diverse pasture grasses. Grain-finished Meats labeled
            as grain-finished reflect an animal that was raised most of its life
            on grasses, but ate a mixture of grains and other plants once
            mature, often to enhance marbling (i.e. fat content). Sometimes,
            when selecting for certain characteristics in craft meat or other
            animal products, like ratios of lean meat to fat or particular
            flavor profiles, farmers will opt for a grain-supplemented diet.
            This does not mean the animals were confined in feedlots, force-fed,
            or fed grain alone. We do not stand for that! Our standards for
            grain-finished meats require that the animal enjoyed a grass-fed
            diet and/or pasture-raised lifestyle and were simply finished with a
            specific grain diet at the end of their lives. Another reason you
            might see grain-finished as a label is that, particularly due to
            climate change, the weather and seasons start and end dates can be
            unpredictable when planning the animals' diet. Therefore, many
            farmers rely on supplementing their animals’ diet with grain to
            ensure they are well fed year-round.. Either way, FarmBox Delivery
            only sources the most humanely-raised, tasty craft meat
            possible--whether it is grass-fed or grain-finished. Wild-Caught The
            fish bearing this label were caught in their natural wild
            environments with specific care not to destroy their habitats or
            overfish the population. This leads to more diversified flavors and
            colors as their wild diets vary with season and availability.
            Wild-caught fish usually cost a bit more than their farmed cousins
            due to the higher labor costs of sustainable fishing practices.
            Pasture-raised As the name states, pasture-raised animals roam in
            open space when and where they want within their pasture. They graze
            freely, consuming almost exclusively grass and other wild forages
            available in the field. This label goes beyond "cage-free" or even
            "free-range." Not only have these animals never seen a cage, they
            are also not beholden to anyone's feeding or exercise schedule but
            their own. They are usually provided with an open shelter they can
            use at will. This results in happier, healthier animals that produce
            tastier, more nutrient-dense products. Vegan Vegan foods do not
            contain anything derived from animals (e.g. dairy, eggs, gelatin,
            meat broths, etc.). Some producers label products vegan even though
            they contain honey. While we support the ethical production of
            honey--as it benefits the world’s bee population and supports their
            important role as natural pollinators--none of FarmBox Delivery
            products with a vegan label contain honey. Small-Batch Products
            displaying this label are made in small batches overseen by expert
            artisan producers, as opposed to mass-produced in a factory setting.
            The result of this type of production is homemade quality food,
            which often presents variations from one batch to another. Makers
            use their senses to adjust their recipes to compensate for naturally
            occurring variations in ingredients (for example: naturally saltier
            butter, spicier than last season’s peppers, or higher sugar content
            fruit). This is what puts the “art” in artisan! Additionally, food
            produced in small-batches generates less food waste. Local
            Ingredients The product bearing this label was made with at least
            75% ingredients grown within 300 miles of North Texas
          </p>
        </details>
        <details>
          <summary>How is this different from a CSA?</summary>
          <p>
            FarmBox Delivery offers more variety, flexibility and convenience
            than a typical Community Supported Agriculture (CSA) program.
            Because we source from many different farms, we can offer a broader
            variety of produce throughout the growing season. Unlike a CSA, you
            do not have to pay for the season up front, and you can skip a
            delivery or alter your schedule as needed. You only pay for the
            deliveries you receive. You can also customize your local produce
            box and let us know which fruits and veggies best satisfy your
            needs. Best of all, we come to you!
          </p>
        </details>
        <details>
          <summary>
            Can I see what is going to be in my produce box weekly?
          </summary>
          <p>
            Yes, on the website you can see what components are going to be in
            your produce box for the coming week. Please note that the content
            list of the box is not 100% due to harvest complications that may
            arise and cause a last minute change in the contents.
          </p>
        </details>
        <details>
          <summary>How do I remove recurring items or subscriptions?</summary>
          <p>
            To remove recurring items and subscriptions, please contact our
            Customer Service department at info@farmboxdl.com. As long as this
            is done by the cut off time for your order, it will remove the item
            from all upcoming orders. If changes are made after the cut off time
            for your next order, the changes will go into effect with the
            following week's order.
          </p>
        </details>
        <details>
          <summary>
            When and how often will my groceries arrive? Can I skip?
          </summary>
          <p>
            We pick a delivery day for you based on your zip code. This allows
            us to deliver efficiently and reduce emissions. You can choose your
            deliveries to be scheduled weekly or biweekly. We start you out on a
            weekly subscription and you can change the frequency after signing
            up by visiting the 'manage subscription' page. You can always skip a
            delivery if you’re headed out of town or are just drowning in
            produce (an enviable problem!). To skip, Log In to your account,
            head to your Upcoming Deliveries page and locate the order you'd
            like to skip. Select the 'Skip Delivery’ link to the right of the
            delivery details.
          </p>
        </details>
        <details>
          <summary>
            When is the latest I can cancel or make changes to my order?
          </summary>
          <p>
            We want your FarmBox groceries to fit easily into your life, which
            is why you can change or cancel your subscription without penalty.
            There's no contract or fine print to worry about. As long as you
            cancel before the end of the customization window for your upcoming
            order, you will not receive any further deliveries. In order to
            prevent food waste and keep our pledge to only offer the freshest
            food available, FarmBox Delivery does not keep an inventory from
            week to week. We only purchase what we need for the farm boxes going
            out that week. Therefore, we must have a cutoff time that gives us
            ample opportunity to purchase products from our local farmers and
            producers. Follow the steps below to cancel your subscription: If
            you decide to cancel your account or cancel a subscription from your
            cart, contact our Customer Service team at info@farmboxdl.com or
            call 214-390-7417 before the end of the customization window for
            your upcoming order. Please note that any order shown as ‘Ordered
            Processed’ on your Upcoming Deliveries page has already been
            processed and cannot be canceled. A friendly reminder that you’ll be
            responsible for all charges incurred for any orders that have
            already been processed. We always aim to ensure that your FarmBox
            Delivery experience is incredible. If there’s anything our Customer
            Service team can do to help, please don’t hesitate to contact us via
            email at info@farmboxdelivery.com or call us at 214-390-7417.
          </p>
        </details>
        <details>
          <summary>Why am I seeing a processing fee?</summary>
          <p>
            Because of a surprising step rise in the cost of gas, produce and
            pantry items, we have tentatively implemented a 5% handling fee on
            all orders. The change is effective immediately, but we hope it will
            be temporary. Rest assured that we’re working closely with our
            farmers and suppliers. In fact, the problems with our supply chain
            have only made us more aware of the ways in which we are all
            connected. Weathering this storm together—in our case, doing our
            best to support local farmers and suppliers while continuing to
            provide high quality, affordable food to our customers—remains our
            key focus.
          </p>
        </details>
        <details>
          <summary>What are the standards for your meat?</summary>
          <p>
            FarmBox rigorously quality tests every meat supplier who
            hand-selects every cut. We only believe in pasture-raising animals
            and humane processing practices. We support ranchers who treat their
            animals with kindness and respect and feed their animals using the
            same food standards to which we hold our own food.
          </p>
        </details>
        <details>
          <summary>Do you offer free delivery?</summary>
          <p>
            Yes! All order subtotals $30.00 or more qualify for free delivery.
            Orders between our delivery minimum of $19.99 - $29.99 will include
            a $6.00 delivery fee.
          </p>
        </details>
        <details>
          <summary>Do you offer a referral reward?</summary>
          <p>
            Yes! For all of us here at FarmBox, there is no greater compliment
            than your referral. We love it so much that you get a $20 credit
            every time you refer a friend! Your friend will get a $10 credit
            (which cannot be combined with another offer). Just tell your friend
            to enter your full name or email address during sign up (correct
            spelling helps us make sure your credit goes to the right account)
            and you can start racking up the rewards - there's no limit to how
            much you can earn!
          </p>
        </details>
        <div></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;
