export default function ItemButton({
    name,
    type,
    onClick,
}: {
    name: string;
    type: 'tool' | 'subs' | 'add';
    onClick: () => void;
}) {
    const bgColor =
        type === 'tool'
            ? 'gray'
            : type === 'subs'
            ? 'orange'
            : 'green';

    return (
        <>
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
                    marginBottom: 10,
                    marginTop: 10,
                }}
                onClick={onClick}
            >
                {name}
            </div>
        </>
    );
}
