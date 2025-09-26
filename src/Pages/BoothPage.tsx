import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../config/booths.json';
import type { Booth } from '../types/BoothTypes';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import ItemButton from '../components/ItemButton/ItemButton';
import ChangeMoneyAmount from './ChangeMoneyAmount';

export default function BoothPage() {
    const [amount, setAmount] = useState(0);
    const [scanning, setScanning] = useState(false);

    const nav = useNavigate();
    const { boothLink } = useParams();
    const booths: Booth[] = config.booths;
    const booth = booths.find((b) => b.link === boothLink);

    function transactionClick(amount: number) {
        setAmount(amount);
        setScanning(true);
    }

    if (!booth) {
        alert('Booth not found');
        nav('/');
        return null;
    }

    return scanning ? (
        <ChangeMoneyAmount
            amount={amount}
            onClose={() => {
                setScanning(false);
                setAmount(0);
            }}
        />
    ) : (
        <Container maxWidth="sm">
            <h1>{booth.name}</h1>

            <h2>Nakupuje:</h2>
            {booth.want.map((item) => (
                <ItemButton
                    key={item.name}
                    name={`${item.name}`}
                    onClick={() => transactionClick(item.price)}
                    type="add"
                />
            ))}
            <h2>Prodává:</h2>
            {booth.offer.map((item) => (
                <ItemButton
                    key={item.name}
                    name={`${item.name}`}
                    onClick={() => transactionClick(-item.price)}
                    type="subs"
                />
            ))}
            <BackButton />
        </Container>
    );
}
