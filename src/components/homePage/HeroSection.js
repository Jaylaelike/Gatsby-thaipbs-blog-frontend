import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Engineering Blog</h1>
            <br>
            </br>
            <ParagraphText className="hero__text">
              ยินดีต้อนรับสู่ศูนย์รวบรวมบทความ ที่จะแชร์ประสบการณ์ ความรู้ วิธีแก้ปัญหา ที่เพื่อนๆพนักงาน สำนักวิศวกรรม ไทยพีบีเอสได้ร่วมกันสร้างสรรค์
              และ แบ่งปันสิ่งดีๆที่เป็นประโยชน์ต่อการทำงานทั้งในปัจจุบันและ อนาคต
            </ParagraphText>
            <br>
            </br>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/IMG_1746.jpeg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
