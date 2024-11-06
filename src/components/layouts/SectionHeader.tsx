interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="text-gray-400 w-1/3 mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
