import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config/booths.json';
import type { Booth } from '../types/BoothTypes';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import ItemLinkButton from '../components/ItemButton/ItemLinkButton';

export default function BoothPage() {
    const [amount, setAmount] = useState(0);
    const [scanning, setScanning] = useState(false);

    const nav = useNavigate();
    const { boothLink } = useParams();
    const booths: Booth[] = config.booths;
    const booth = booths.find((b) => b.link === boothLink);

    if (!booth) {
        alert('Booth not found');
        nav('/');
        return null;
    }

    console.log(booth);

    return (
        <Container maxWidth="sm">
            <h1>{booth.name}</h1>

            <h2>Nakupuje:</h2>
            {booth.want.map((item) => (
                <ItemLinkButton
                    key={item.name}
                    name={`${item.name}`}
                    link={`/`}
                    type="add"
                />
            ))}
            <h2>Prodává:</h2>
            {booth.offer.map((item) => (
                <ItemLinkButton
                    key={item.name}
                    name={`${item.name}`}
                    link={`/`}
                    type="subs"
                />
            ))}
            <BackButton />
        </Container>
    );
}
