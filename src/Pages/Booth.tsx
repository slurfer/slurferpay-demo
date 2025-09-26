import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';

export default function Booth() {
    const nav = useNavigate();
    const { boothId } = useParams();
    return (
        <Container maxWidth="sm">
            <h1>Booth {boothId}</h1>
        </Container>
    );
}
