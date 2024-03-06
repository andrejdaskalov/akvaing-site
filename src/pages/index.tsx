import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Intl from '../../i18n/intl'
import Spinner from 'react-bootstrap/Spinner';


export default function RedirectPage() {
    const router = useRouter()
    const translation = new Intl();

    useEffect(() => {
        if (router.pathname === '/') {
            router.push(`/${translation.readLocale()}`);
        }
    }, [router]);
    return (
        <>
            <Spinner animation="grow" />
        </>
    )
}