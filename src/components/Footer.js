import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
        ยินดีต้อนรับสู่ศูนย์รวบรวมบทความ ที่จะแชร์ประสบการณ์ วิธีแก้ปัญหา ที่เพื่อนๆพนักงาน 
        สำนักวิศวกรรม ไทยพีบีเอสได้ร่วมกันสร้างสรรค์ และ 
        แบ่งปันสิ่งดีๆที่เป็นประโยชน์ต่อการทำงานทั้งในปัจจุบันและ อนาคต
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          © Engineering-blog {new Date().getFullYear()}. All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
