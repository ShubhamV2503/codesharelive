export default function AnimatedContainer({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export function AnimatedItem({ children, className }) {
    return (
        <div className={`animate-fade-in-up ${className || ''}`}>
            {children}
        </div>
    );
}
