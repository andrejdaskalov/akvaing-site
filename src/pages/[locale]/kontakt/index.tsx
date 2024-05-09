import React from 'react';
import Intl from '@/i18n/intl'

interface Props {
    locale: string;
}

const Kontakt = (props: Props) => {
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{t('contact')}</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2>{t('address')}</h2>
                        <p>{t('address_value')}</p>
                    </div>
                    <div className='col-md-4'>
                        <h2>{t('phone')}</h2>
                        <p>{t('phone_value')}</p>
                    </div>
                    <div className='col-md-4'>
                        <h2>{t('email')}</h2>
                        <p>{t('email_value')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;