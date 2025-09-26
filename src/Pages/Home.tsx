import React from 'react';
import { Container } from '@mui/system';
import config from '../config/booths.json';
import { Booth } from '../types/BoothTypes';
import BoothCard from '../components/BoothCard';
import ItemButton from '../components/ItemButton';

export default function Home() {
    const booths: Booth[] = config.booths;
    const rows = splitToRows(booths, 3);

    return (
        <Container maxWidth="sm">
            {rows.map((row, i) => (
                <div
                    key={`row-${i}`}
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        color: 'white',
                    }}
                >
                    {row.map(({ name, link }) => (
                        <React.Fragment key={link}>
                            <BoothCard name={name} link={link} />
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            ))}

            <ItemButton
                name="Show balance"
                link="showBalance"
                type="tool"
            />
            <br />
            <ItemButton name="Init card" link="init" type="tool" />
            <br />
            <ItemButton name="Add money" link="addMoney" type="add" />
            <br />
            <ItemButton
                name="Subs money"
                link="subsMoney"
                type="subs"
            />
        </Container>
    );
}

function splitToRows<T>(arr: T[], rowLength: number): T[][] {
    const rows: T[][] = [];
    for (let i = 0; i < arr.length; i += rowLength) {
        rows.push(arr.slice(i, i + rowLength));
    }
    return rows;
}
