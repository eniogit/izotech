type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div
      className={`p-6 text-center hover:shadow-lg transition-shadow rounded-lg border border-gray-200 shadow-sm`}
    >
      {children}
    </div>
  );
}
