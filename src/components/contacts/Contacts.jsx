import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();
  return (
    <section class="skils">
      <div class="container">
        <h1 class="skils__title">{t('contacts')}</h1>
        <h2 class="skils__title2">{t('locationTitle')}</h2>
        <p class="skils__paragrap2">{t('location')}</p>
        <h2 class="skils__title2">Telegram / WhatsApp</h2>
        <p class="skils__paragrap2">+38 (099) 218-34-25</p>
        <h2 class="skils__title2">{t('emailTitle')}</h2>
        <p class="skils__paragrap2">frontendworkjuliap@gmail.com</p>
      </div>
    </section>
  );
}

export default Contacts;
