const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;