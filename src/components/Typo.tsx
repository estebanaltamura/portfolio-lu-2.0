import React from 'react';

type TypoProps = {
  type:
    | 'title1'
    | 'title1Semibold'
    | 'title2'
    | 'title2Semibold'
    | 'title3'
    | 'title3Semibold'
    | 'title4'
    | 'title4Semibold'
    | 'body1'
    | 'body1Semibold'
    | 'body2'
    | 'body2Semibold'
    | 'body3'
    | 'body3Semibold'
    | 'overline';

  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

const classMap: { [key in TypoProps['type']]: string } = {
  title1: 'text-[32px] leading-[32px] tracking-[-1.35px] font-[400]',
  title1Semibold: 'text-[30px] leading-[32px] tracking-[-1.35px] font-[600]',
  title2: 'text-[24px] leading-[26px] tracking-[-1.08px] font-[400]',
  title2Semibold: 'text-[24px] leading-[26px] tracking-[-1.08px] font-[600]',
  title3: 'text-[20px] leading-[24px] font-[400]',
  title3Semibold: 'text-[20px] leading-[24px] font-[600]',
  title4: 'text-[18px] leading-[22px] font-[400]',
  title4Semibold: 'text-[18px] leading-[22px] font-[600]',
  body1: 'text-[17px] leading-[22px] tracking-[0.16px] font-[400]',
  body1Semibold: 'text-[16px] leading-[22px] tracking-[0.16px] font-[600]',
  body2: 'text-[14px] leading-[20px] tracking-[0.14px] font-[400]',
  body2Semibold: 'text-[14px] leading-[20px] tracking-[0.14px] font-[600]',
  body3: 'text-[12px] leading-[18px] font-[400]',
  body3Semibold: 'text-[12px] leading-[18px] font-[600]',
  overline: 'text-[10px] leading-[12px] font-[400]',
};

const alignClassMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const Typo = ({ type, children, align }: TypoProps) => {
  const Tag = (() => {
    switch (type) {
      case 'title1':
      case 'title1Semibold':
        return 'h1';
      case 'title2':
      case 'title2Semibold':
        return 'h2';
      case 'title3':
      case 'title3Semibold':
        return 'h3';
      case 'title4':
      case 'title4Semibold':
        return 'h4';
      case 'body1':
      case 'body1Semibold':
      case 'body2':
      case 'body2Semibold':
      case 'body3':
      case 'body3Semibold':
      case 'overline':
        return 'p';
      default:
        return 'p';
    }
  })();

  const alignClass = align ? alignClassMap[align] : '';
  const combinedClassName = `${classMap[type]} ${alignClass}`.trim();

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Typo;
