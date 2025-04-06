import React, { useState } from 'react';
import Intl from '@/i18n/intl'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import Head from 'next/head';

interface Props {
    locale: string;
}
enum Location {
    Skopje = "Skopje",
    Stip = "Stip"
}

export async function getStaticPaths() {
    const locales = ['mk', 'en']
    const paths = locales.map((locale) => ({ params: { locale: locale } }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
    const locale = params.locale
    return { props: { locale: locale } }
}

const Kontakt = (props: Props) => {
    const translation = new Intl();
    const t = (key: string) => translation.getTranslation(props.locale ? props.locale : 'mk', key);
    const [selectedLocation, setSelectedLocation] = useState<Location>(Location.Skopje);

    return (
        <>
            <Head>
                <title>{t("company-name") + " - " + t("certificates.title")}</title>
                <meta name="google-site-verification" content="oadKBr5R6v8YjRhVmkphhjfjfJ5nz3tSBD4shhfNNoc" />
                <meta name='description' content={t("contact.description")} />
            </Head>
            <main className="special-scroll">

                <div className='row mt-5'>

                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3 details-container">
                        <h1 className="fw-bold mb-5">{t("contact.title")}</h1>
                        <p className="text-dark fs-5 fw-bold">{t("contact.skopje")} </p>
                        {/*<p className="text-dark fs-5 fw-normal">{t("contact.address-label")}{t("contact.address2")}</p> */}
                        <p className="text-dark fs-5 fw-normal">{t("contact.email")}<a href='mailto:blagoj@akvaing.mk'>blagoj@akvaing.mk</a></p>
                        <p className="text-dark fs-5 fw-normal pb-2">{t("contact.phone1-label")}+389 78 300 129</p>

                        <p className="text-dark fs-5 fw-bold">{t("contact.stip")} </p>
                        <p className="text-dark fs-5 fw-normal">{t("contact.address-label")}{t("contact.address1")}</p>
                        <p className="text-dark fs-5 fw-normal">{t("contact.email")}<a href='mailto:akvastip@yahoo.com'>akvastip@yahoo.com</a></p>
                        <p className="text-dark fs-5 fw-normal pb-2">{t("contact.phone1-label")}+389 78 300 220</p>

                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-6  details-container">
                        <h2 className="fw-normal mb-5">{t("contact.location")}</h2>

                        <ButtonGroup className='mb-3'>
                            {Object.values(Location).map((loc) => (
                                <ToggleButton
                                    key={loc}
                                    id={`radio-${loc}`}
                                    type="radio"
                                    variant="outline-dark"
                                    name="radio"
                                    value={loc}
                                    checked={loc === selectedLocation}
                                    onChange={(e) => {
                                        setSelectedLocation(e.currentTarget.value as Location);
                                    }}
                                >
                                    {loc}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                        {selectedLocation === Location.Skopje ?
                            <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5561121921605!2d21.44925837611686!3d41.988339271230004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a61efd3e25%3A0x2bb0e577f8bb865b!2sAkva-Ing%20Architecture!5e0!3m2!1sen!2smk!4v1715294052007!5m2!1sen!2smk" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            :
                            <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.9158566553533!2d22.193058976104354!3d41.74390777125684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1355dd56430e9965%3A0x3048caa83f947321!2sAkva-Ing!5e0!3m2!1sen!2smk!4v1715294276606!5m2!1sen!2smk" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        }


                    </div>

                </div>
            </main>
        </>
    );
};

export default Kontakt;
