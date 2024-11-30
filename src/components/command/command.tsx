import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface commandsProps {
    cmd: string[];
    description: string;
    render?: boolean;
    action: (navigate: ReturnType<typeof useNavigate>) => void;
}

export const commands: commandsProps[] = [
    {
        cmd: ['about', 'help'],
        description: 'Displays information about the app',
        render: true,
        action: (navigate) => {
            navigate("/about");
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
    const [, setSuggestedPartWidth] = useState(0);

    const errorTimer: number = 3;
    const inputRef = useRef<HTMLInputElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    const navigate = useNavigate();

    const handleTabCompletion = () => {
        const matchingCommands = commands.filter(command =>
            command.cmd.some(c => c.toLowerCase().startsWith(inputValue.toLowerCase()))
        );

        const sortedCommands = matchingCommands
            .map(command => ({
                ...command,
                matchedCmd: command.cmd.filter(c => c.toLowerCase().startsWith(inputValue.toLowerCase()))
            }))
            .filter(command => command.matchedCmd.length > 0);

        if (sortedCommands.length === 1) {
            setInputValue(sortedCommands[0].matchedCmd[0]);
        } else if (sortedCommands.length > 1) {
            setInputValue(sortedCommands[0].matchedCmd[0]);
        }
    };


    const getSuggestedPart = () => {
        const matchingCommands = commands.filter(command =>
            command.cmd.some(c => c.toLowerCase().startsWith(inputValue.toLowerCase()))
        );

        if (matchingCommands.length === 1) {
            const matchingCommand = matchingCommands[0].cmd.find(c => c.toLowerCase().startsWith(inputValue.toLowerCase()));

            if (matchingCommand) {
                return matchingCommand.slice(inputValue.length);
            }
        }

        return '';
    };




    useEffect(() => {
        const suggestedText = getSuggestedPart();
        if (suggestedText && spanRef.current) {
            setSuggestedPartWidth(spanRef.current.offsetWidth);
        }
    }, [inputValue]);

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
        } else if (event.key === 'Escape' && !errorMessage) {
            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
            setErrorMessage('');
        } else if (event.key === 'Enter' && isEditing) {
            const command = commands.find(cmd => cmd.cmd.some(c => c.toLowerCase() === inputValue.trim().toLowerCase()));

            if (command) {
                command.action(navigate);
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
        } else if ((event.key === 'Backspace' || event.key === 'Delete') && inputValue === '' && !errorMessage) {
            setShowInput(false);
            setIsEditing(false);
            setInputValue('');
            setErrorMessage('');
        } else if (event.key === 'Tab') {
            event.preventDefault();
            handleTabCompletion();
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

    const inputWidth = spanRef.current ? `${spanRef.current.offsetWidth + 20}px` : 'auto';

    return (
        <div className="relative">
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
                                command.action(navigate);
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
                            className="ml-2 w-auto bg-transparent outline-none border-none"
                            style={{ width: inputWidth }}
                        />
                        <span ref={spanRef} className="invisible absolute">{inputValue}</span>
                        {
                            showInput && !errorMessage && inputValue && (
                                <div
                                    className="ml-2 text-gray-500 opacity-50 inline-block"
                                    style={{ position: 'absolute', left: `${inputWidth}` }}
                                >
                                    {getSuggestedPart() ? getSuggestedPart() : ''}
                                </div>
                            )
                        }
                    </form>
                )
            }
        </div>
    );
};
