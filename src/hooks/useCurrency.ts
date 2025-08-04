import { useMemo } from 'react';

export const useCurrency = (
    locale: string = 'en-US',
    currency: string = 'USD'
) => {
    return useMemo(() => {
        return (amount: number) =>
            new Intl.NumberFormat(locale, {
                style: 'currency',
                currency
            }).format(amount);
    }, [locale, currency]);
};
