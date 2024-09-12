import Image from "../atoms/Image";
import Text from "../atoms/Text";

import AboutEthicalImg from "/images/aboutEthical.png"
import AboutImg from "/images/aboutImg.png"
import AboutImg2 from "/images/aboutImg2.png"
import DesignToLastImg from "/images/designToLastImg.png"
import RadicallyTransparentImg from '/images/radicallyTransparentImg.png'
import OurProductImg from '/images/ourProduct.png'
import OurStoreImg from '/images/ourStore.png'
import CareerImg from '/images/career.png'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="about-hero__detail">
          <div className="about-hero__detail__title">
            We believe
            we can all make
            a difference.
          </div>
          <div className="about-hero__detail__description">
            <Text type="h4">
              Our way: Exceptional quality.

            </Text>
            <Text type="h4">
              Ethical factories. Radical Transparency.

            </Text>
          </div>
        </div>
      </div>
      <div className="about-description">
        At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world.
        Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
      </div>

      <div className="about-info">
        <Image src={AboutEthicalImg} alt="" width="50%" height="733px" />
        <div className="about-info__detail about-info__detail--brown">
          <div className="about-info__detail__subheading">
            <Text type="p">
              OUR FACTORIES
            </Text>
          </div>
          <div className="about-info__detail__heading">
            <Text type="h2">
              Our ethical approach.
            </Text>

          </div>

          <div className="about-info__detail__description">
            <Text type="h6">
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit them
              often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
            </Text>
          </div>
        </div>
      </div>
      <Image src={AboutImg} alt="" width="100%" height="637px" />


      <div className="about-info">
        <div className="about-info__detail  about-info__detail--brown">
          <div className="about-info__detail__subheading">
            <Text type="p">
              OUR FACTORIES
            </Text>
          </div>
          <div className="about-info__detail__heading">
            <Text type="h2">
              Our ethical approach.
            </Text>

          </div>

          <div className="about-info__detail__description">
            <Text type="h6">
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit them
              often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
            </Text>
          </div>
        </div>
        <Image src={DesignToLastImg} alt="" width="50%" height="733px" />
      </div>
      <Image src={AboutImg2} alt="" width="100%" height="600px" />
      <div className="about-info">
        <Image src={RadicallyTransparentImg} alt="" width="50%" height="733px" />
        <div className="about-info__detail about-info__detail--white">
          <div className="about-info__detail__subheading">
            <Text type="p">
              OUR FACTORIES
            </Text>
          </div>
          <div className="about-info__detail__heading">
            <Text type="h2">
              Our ethical approach.
            </Text>

          </div>

          <div className="about-info__detail__description">
            <Text type="h6">
              We spend months finding the best factories around the world—the
              same ones that produce your favorite designer labels. We visit them
              often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
            </Text>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="explore__title">
          <Text type="h3">
            More To Explore
          </Text>
        </div>
        <div className="explore__items">
          <div className="explore-item">
            <Image src={OurProductImg} width="320px" height="229px" alt="" />
            <Text type="h5">
              Our Products
            </Text>
          </div>
          <div className="explore-item">
            <Link to={"/stores"}>
              <Image src={OurStoreImg} width="320px" height="229px" alt="" />
              <Text type="h5">
                Our Stores
              </Text>
            </Link>

          </div>
          <div className="explore-item">
            <Image src={CareerImg} width="320px" height="229px" alt="" />
            <Text type="h5">
              Careers
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
