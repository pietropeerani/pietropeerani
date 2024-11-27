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
            window.open("https://instagram.com/pietro.peerani", "_blank");
        }
    },
];

export default function Command() {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorTimeout, setErrorTimeout] = useState<number | null>(null);

    const errorTimer: number = 3;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: any) => {
        if (event.key === ':' && !showInput && !errorMessage) {
            event.preventDefault();
            setShowInput(true);
            setIsEditing(true);
            setInputValue('');
            setErrorMessage('');
        } else if (event.key === ':' && errorMessage) {
            event.preventDefault();
            setErrorMessage('');
            setShowInput(true);
            setIsEditing(true);
            setInputValue('');
        } else if (event.key === 'Escape') {
            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
            setErrorMessage('');
        } else if (event.key === 'Enter' && isEditing) {
            const command = commands.find(cmd => cmd.cmd.some(c => c.toLowerCase() === inputValue.trim().toLowerCase()));

            if (command) {
                command.action();
                setErrorMessage('');
            } else {
                setErrorMessage(`Comando non trovato: ${inputValue}`);
                
                if (errorTimeout) clearTimeout(errorTimeout);
                const timeout = setTimeout(() => {
                    setErrorMessage('');
                }, errorTimer * 1000);
                setErrorTimeout(timeout);
            }

            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
        } else if ((event.key === 'Backspace' || event.key === 'Delete') && inputValue === '') {
            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
            setErrorMessage('');
        }
    };

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isEditing, inputValue, errorMessage, showInput]);

    return (
        <div>
            {errorMessage && (
                <div className="error-message text-red-500">{errorMessage}</div>
            )}
            {
                showInput && (
                    <form
                        className="flex border-t border-white pt-2"
                        onSubmit={(event) => {
                            event.preventDefault();
                            const command = commands.find(cmd => cmd.cmd.some(c => c.toLowerCase() === inputValue.trim().toLowerCase()));
                            if (command) {
                                command.action();
                                setErrorMessage('');
                            } else {
                                setErrorMessage(`Comando non trovato: ${inputValue}`);
                                
                                if (errorTimeout) clearTimeout(errorTimeout);
                                const timeout = setTimeout(() => {
                                    setErrorMessage('');
                                }, 3000);
                                setErrorTimeout(timeout);
                            }

                            setShowInput(false);
                            setIsEditing(false);
                            setInputValue('');
                        }}
                    >
                        {!errorMessage && <span>:</span>}
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
