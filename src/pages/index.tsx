import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Intl from '../i18n/intl'
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
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="grow" color='#212529' />
        </div>
        </>
    )
}