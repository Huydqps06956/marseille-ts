import type React from 'react';
import type { IOption } from '@contexts/OurShopProvider';

interface SelectBoxProps {
    options: IOption[];
    value?: string;
    onChange?: (value: string, type: string) => void;
    className?: string;
    id: string;
    type: string;
}
const SelectBox: React.FC<SelectBoxProps> = ({
    options,
    value,
    onChange,
    className,
    id,
    type
}) => {
    return (
        <select
            id={id}
            value={value}
            onChange={e => onChange?.(e.target.value, type)}
            className={`text-[#888] border border-[#e1e1e1] h-9 pl-[1em] pr-[2.9em] ${
                className ?? ''
            }`}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
