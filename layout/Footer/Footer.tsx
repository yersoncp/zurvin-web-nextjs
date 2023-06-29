import Image from 'next/image';
import s from './Footer.module.css';
import Stack from '../../components/Stack/Stack';
import Text from '../../components/Text/Text';

const Footer = () => (
  <Stack className={s.footer} direction='row' justify='space-between'>
    <Image
      width={18}
      height={18}
      alt="Zurvin"
      src="/images/zurvin-logo-white.svg"
    />
    <Text color='gray'>— 2023 © Zurvin</Text>
  </Stack>
)

export default Footer;