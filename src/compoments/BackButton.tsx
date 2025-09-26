import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const nav = useNavigate();

    return (
        <Button
            style={{ position: 'absolute', top: 16, right: 16 }}
            onClick={() =>
                window.history.state && window.history.state.idx > 0
                    ? nav(-1)
                    : nav('/', { replace: true })
            }
        >
            Back
        </Button>
    );
}
