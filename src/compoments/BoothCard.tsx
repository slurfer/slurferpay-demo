import { blue } from '@mui/material/colors';
export default function BoothCard({
    name,
    link,
}: {
    name: string;
    link: string;
}) {
    return (
        <div
            key={link}
            style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                width: '30%',
                margin: '3%',
                padding: '15%',
                boxSizing: 'border-box',
                backgroundColor: blue[900],
                border: '1px solid blue',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            {name}
        </div>
    );
}
