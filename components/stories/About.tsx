import { FunctionComponent } from "react";
import AboutContainer from "~/components/elements/AboutContainer";
import Configuration from "~/utils/configuration";
import type { Item } from "~/pages/api/items";

const About: FunctionComponent = () => {
  return (
    <AboutContainer
      id="about"
      beforeTitle="Welcome to"
      title={Configuration.title}
      subtitle={
        <div>
          <p>
            The Making of Series, introduces 3D Collectible Model ownership to
            the blockchain. Each NFT is redeemable for a unique 3D Printed
            Model.
          </p>
          <p>
            Collect Xinra Inc's debute collection TMOS: DBZ. This Ultra-rare
            collection consists of four uniquly hand-painted SuperSayinWarriors.
            Become one of four owners in the series. Hodling a TMOS NFT grants
            the owners perks in product discounts in any of Xinra<sup>Inc</sup>
            's Marketplaces.
          </p>
          <p>
            After the launch the team will split into a fresh NFT marketplace
            development plus further development of our P2E game RoboNinjo
            <sup>TM</sup>.
          </p>
        </div>
      }
    >
      <div>
        <iframe
          style={{ aspectRatio: "560 / 315", width: "100%" }}
          src="https://www.youtube-nocookie.com/embed/ysuZ_SW2bK0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </AboutContainer>
  );
};

export default About;
