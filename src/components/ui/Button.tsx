interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export default function Button({ text, variant = 'primary', onClick }: ButtonProps) {
  const styles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50";

  return (
    <button 
      onClick={onClick}
      className={`${styles} px-6 py-2 rounded-lg font-semibold transition-all duration-200 active:scale-95`}
    >
      {text}
    </button>
  );
}