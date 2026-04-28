'use client'
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { isValidNoCuenta } from '@/utils/isValidNoCuenta';

export default function Search({ styleVariant = "primary"} : { styleVariant?: "primary" | "compact" }) {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) {
        setError('Ingresa tu número de cuenta');
        return;
        }
        if (!isValidNoCuenta(trimmed) || trimmed.length > 30) {
        setError('Número de cuenta inválido');
        return;
        }
        setError(null);
        startTransition(() => {
            router.push(`/cuenta/${trimmed}`);
        });
    };

    const formVariants = {
        primary: "mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-2xl border bg-white p-2 sm:flex-row sm:items-center sm:rounded-full sm:p-2 sm:pl-5",
        compact: "mx-auto flex max-w-xl flex-row items-center gap-2 rounded-full border bg-white p-2 pl-5"
    }

    const formElementVariants = {
        primary: "flex flex-1 items-center gap-2 px-3 sm:px-0",
        compact: "flex flex-1 flex-row items-center gap-2 px-3 sm:px-0"

    }

    const formButtonVariants = {
        primary: "w-full rounded-xl bg-ink px-5 py-3 text-base font-medium text-paper transition hover:bg-ink2 sm:w-auto sm:rounded-full sm:py-2.5 sm:text-sm",
        compact: "shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink2"
    }

    const placeholderVariants = {
        primary: "Ingresa tu número de cuenta",
        compact: "Ingresa tu cuenta"
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
                className={formVariants[styleVariant]}
            >
            <div className={formElementVariants[styleVariant]}>
                <span aria-hidden className="text-ink/50">#</span>
                <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError(null);
                }}
                placeholder={placeholderVariants[styleVariant]}
                aria-label="Número de factura"
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck={false}
                inputMode="text"
                enterKeyHint="search"
                disabled={isPending}
                className="w-full bg-transparent py-2.5 text-base text-ink placeholder:text-ink/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                />
            </div>
            <button
                type="submit"
                disabled={isPending}
                className={`${formButtonVariants[styleVariant]} disabled:cursor-not-allowed disabled:opacity-60`}
            >
                {isPending ? 'Buscando…' : 'Buscar →'}
            </button>
            </form>
            {error && (
                <p className="mt-3 text-xs text-gold">{error}</p>
            )}
        </>
    )
}
