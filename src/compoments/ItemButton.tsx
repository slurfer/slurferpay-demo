import { useNavigate } from 'react-router-dom';

export default function ItemButton({
    name,
    link,
    type,
}: {
    name: string;
    link: string;
    type: 'tool' | 'subs' | 'add';
}) {
    const nav = useNavigate();

    const bgColor =
        type === 'tool'
            ? 'gray'
            : type === 'subs'
            ? 'orange'
            : 'green';

    return (
        <div
            style={{
                backgroundColor: bgColor,
                width: '100%',
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 24,
                cursor: 'pointer',
                fontWeight: 'bold',
                borderRadius: 8,
            }}
            onClick={() => nav(`/${link}`)}
        >
            {name}
        </div>
    );
}
