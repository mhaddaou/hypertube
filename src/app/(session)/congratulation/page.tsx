import Link from 'next/link';

export default function Congrtulation() {
    return (
        <div className="flex justify-center items-center h-screen bg-color-secondary">
            <div className="p-8 rounded-lg shadow-md text-center text-color-white">
                <h1 className="text-2xl font-bold mb-4">Congratulations!</h1>
                <p className="text-lg mb-4">Your password has been updated successfully. You can now <Link className="text-color-primary" href="/signin"> signin </Link>.</p>
            </div>
        </div>
    );
}