import { FunctionComponent } from "react";
import FAQContainer from "~/components/elements/FAQContainer";

const FAQ: FunctionComponent = () => {
  return (
    <FAQContainer
      id="faq"
      title="FAQs"
      subtitle="Here are some of the most asked questions our team has received during the process of making this project, check out our responses below!"
      items={[
        {
          title: "Why do I need an TMOS NFT?",
          content: (
            <>
              The Making Of Series is more than an art project, it is a blend of
              3D Printing, NFT Ownership reward ecosystem and mini gaming
              experience. Each collection in TMOS consists to a predetermined
              series size, usually between three and thirteen unique NFTs. Each
              NFT comes with a redeemable code corresponding to a 3D Printed
              Hand-painted collectible.
            </>
          ),
        },
        {
          title: "Can I trade my Collectible?",
          content:
            "Of course! TMOS will be distributed according to the ERC-721 standard. You will be able to trade them on platforms like OpenSea.",
        },
        {
          title: "What is a this RoboNinjo game?",
          content: "TBA",
        },
        {
          title: "Will there be P2E?",
          content:
            "Yes! The economic basis of the game - $TMOS utility tokens. All TMOS hodlrs will be able to receive it. To do this, players can gain $TMOS through Tiered High Score Activation. $TMOS will be redeemable for real world prizes, discounts and exclusive offers courtesy of Xinra Inc. ",
        },
        {
          title: "When is the game release?",
          content:
            "The game itself is in an early stage of development. After the main sale, the first stage of the game will open. Summer 2022",
        },
        {
          title:
            "Will it be possible to influence the development of the project?",
          content:
            "Yes! Based on the feedback and discussions of our members in social networks and chats, we will adjust the development of the project, add new game mechanics and change the current ones.",
        },
        {
          title: "How will hodlr incentives be made?",
          content:
            "After the main sale, when the 100% target is reached, we initalize a community DAO wallet. On a monthly basis, we will take snapshot an hodlrs will receive payouts within 48hrs of snapshot. ",
        },
        {
          title: "How will floor sweeps work?",
          content:
            "After the main sale, when the 100% target is reached, utilize 25% of the DAO to provide hodlrs liquidity through conducting an NFT BUY BACK Program, Sweeping the Floor once bi-weekly. ",
        },
      ]}
    />
  );
};

export default FAQ;
