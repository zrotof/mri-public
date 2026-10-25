import { Pipe, PipeTransform } from '@angular/core';

import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCalendarDays,
  faClock,
  faEnvelope,
  faLocationDot,
  faPlay,
  faPhone,
  faQuoteRight,
  faQuoteLeft,
  faUser,
  faPlus,
  faXmark,
  faBars,
  faShieldHalved,
  faCheck,
  faCircleCheck,
  faFileInvoiceDollar,
  faFileSignature,
  faUserTie,
  faCalendarCheck,
  faAward,
  faGem,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faFacebookF,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import { faCalendarCheck as farCalendarCheck } from '@fortawesome/free-regular-svg-icons/faCalendarCheck';
import { faFileLines as farFileLines } from '@fortawesome/free-regular-svg-icons/faFileLines';
import { faClipboard as farClipboard } from '@fortawesome/free-regular-svg-icons/faClipboard';
import { faHandshake as farHandshake } from '@fortawesome/free-regular-svg-icons/faHandshake';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faGem as farGem } from '@fortawesome/free-regular-svg-icons/faGem';
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { faCompass as farCompass } from '@fortawesome/free-regular-svg-icons/faCompass';
import { faLightbulb as farLightbulb } from '@fortawesome/free-regular-svg-icons/faLightbulb';

import { IconDefinition } from '@fortawesome/angular-fontawesome';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone: true,
})

export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {
  transform(value: string): IconDefinition {
    switch (value) {
      case 'faAngleDown':
        return faAngleDown;
      case 'faAngleLeft':
        return faAngleLeft
      case 'faAngleRight':
        return faAngleRight
      case 'faBars':
        return faBars;
      case 'faArrowRight':
        return faArrowRight
      case 'faCalendarDays':
        return faCalendarDays;
      case 'faClock':
        return faClock;
      case 'faEnvelope':
        return faEnvelope;
      case 'faInstagram':
        return faInstagram;
      case 'faFacebookF':
        return faFacebookF;
      case 'faLinkedin':
        return faLinkedin;
      case 'faLocationDot':
        return faLocationDot;
      case 'faPlay':
        return faPlay
      case 'faPlus':
        return faPlus
      case 'faPhone':
        return faPhone;
      case 'faQuoteLeft':
        return faQuoteLeft;
      case 'faQuoteRight':
        return faQuoteRight;
      case 'faShieldHalved':
        return faShieldHalved;
      case 'faCheck':
        return faCheck;
      case 'faCircleCheck':
        return faCircleCheck;
      case 'faFileInvoiceDollar':
        return faFileInvoiceDollar;
      case 'faFileSignature':
        return faFileSignature;
      case 'faUserTie':
        return faUserTie;
      case 'faCalendarCheck':
        return faCalendarCheck;
      case 'faAward':
        return faAward;
      case 'faGem':
        return faGem;
      case 'faHandshake':
        return faHandshake;
      case 'faWhatsapp':
        return faWhatsapp
      case 'faXmark':
        return faXmark
      case 'faXTwitter':
        return faXTwitter;
      case 'faYoutube':
        return faYoutube;
      case 'farFileLines':
        return farFileLines;
      case 'farClipboard':
        return farClipboard;
      case 'farUser':
        return farUser;
      case 'farHandshake':
        return farHandshake;
      case 'farCalendarCheck':
        return farCalendarCheck;
      case 'farGem':
        return farGem;
      case 'farCircleCheck':
        return farCircleCheck;
      case 'farClock':
        return farClock;
      case 'farStar':
        return farStar;
      case 'farCompass':
        return farCompass;
      case 'farLightbulb':
        return farLightbulb;
      default:
        return faUser;
    }
  }
}
