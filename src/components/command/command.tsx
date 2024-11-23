import { useState, useEffect, useRef } from 'react';

interface commandsProps {
    cmd: string[];
    description: string;
    render?: boolean;
    action: () => void;
}

export const commands: commandsProps[] = [
    {
        cmd: ['about'],
        description: 'Displays information about the app',
        render: true,
        action: () => {
            console.log('about');
        }
    },
    {
        cmd: ['instagram', 'insta'],
        description: 'Displays information about the app',
        action: () => {
            window.open("https://instagram.com/pietro.peerani", "_blank")
        }
    },
];

export default function Command() {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: any) => {
        if (event.key === ':' && document.activeElement !== inputRef.current) {
            event.preventDefault();
            setShowInput(true);
            setIsEditing(true);
            setInputValue('');
        } else if (event.key === 'Escape') {
            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
        } else if (event.key === 'Enter' && isEditing) {
            const command = commands.find(cmd => cmd.cmd.some(c => c.toLowerCase() === inputValue.trim().toLowerCase()));

            if (command) {
                command.action();
            } else {
                console.error(`Command not found: ${inputValue}`);
            }

            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
        }
    };

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
        if (event.target.value === '') {
            setShowInput(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isEditing, inputValue]);

    return (
        <div>
            {
                showInput && (
                    <form
                        className="flex border-t border-white pt-2"
                        onSubmit={(event) => {
                            event.preventDefault();
                            const command = commands.find(cmd => cmd.cmd.some(c => c.toLowerCase() === inputValue.trim().toLowerCase()));
                            if (command) {
                                command.action();
                            } else {
                                console.error(`Command not found: ${inputValue}`);
                            }

                            setShowInput(false);
                            setIsEditing(false);
                            setInputValue('');
                        }}
                    >
                        <span>:</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            autoFocus
                            className="ml-2 w-full bg-transparent outline-none border-none"
                        />
                    </form>
                )
            }
        </div>
    );
};
