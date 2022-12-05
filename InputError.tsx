export default function InputError({ message }: { message: string }) {
    return message ? <p className={'mt-2 text-sm text-red-500 [&:first-letter]:uppercase'}>{message}</p> : null;
}
