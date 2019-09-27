import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default class ParallaxApp extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "black" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#00000075" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover"
          }}
        />
        {/* gun below */}
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src="https://www.pngkey.com/png/full/150-1507729_destiny-2-on-twitter-destiny-2-weapons-png.png"
            style={{ width: "25%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        {/* Warlock at bottom */}
        <ParallaxLayer
          offset={2.45}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none"
          }}
        >
          <img
            src="https://www.sccpre.cat/mypng/full/293-2934626_destiny-taken-king-png-destiny-warlock-taken-armor.png"
            style={{ width: "60%" }}
          />
        </ParallaxLayer>
        {/* BACKGROUND AT 2 OFFSET FIXED */}
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "40%",
            backgroundPosition: "center",
            marginLeft: "25%",
            backgroundImage: `url("https://www.seekpng.com/png/full/44-442968_destiny-png-characters-image-stock-destiny-the-taken.png")`
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "20%",
            backgroundPosition: "center",
            marginLeft: "-30%",
            backgroundImage: `url("https://www.pngkey.com/png/full/44-443265_destiny-2-hunter-guardian-destiny-2.png")`
          }}
        />
        {/*  Main warlock */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src="https://img.pngio.com/image-destiny-iconpng-community-central-fandom-powered-by-wikia-destiny-png-256_256.png"
            style={{ width: "30%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src="https://3.bp.blogspot.com/-s-vsinqUVF4/Whu80sjHf0I/AAAAAAAAJxg/mbfAXW0XGCcps83qgPthrwu1rc3g9h0DQCEwYBhgL/s1600/destiny-the-taken-king-april-update-taken-gear-image-cheatstationer.png"
            style={{ width: "50%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <img
            src="https://www.pngkey.com/png/full/145-1456991_destiny-character-database-destiny-2-logo-transparent-background.png"
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
      </Parallax>
    );
  }
}
