import ItemButton from './ItemButton';
import { useNavigate } from 'react-router-dom';

export default function ItemLinkButton({
    name,
    link,
    type,
}: {
    name: string;
    link: string;
    type: 'tool' | 'subs' | 'add';
}) {
    const nav = useNavigate();
    return (
        <ItemButton
            name={name}
            type={type}
            onClick={() => nav(`/${link}`)}
        />
    );
}
