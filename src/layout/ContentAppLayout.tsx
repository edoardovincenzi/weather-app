const ContentAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-auto  bg-weather">
      <div className="h-full w-full md:px-32 xl:px-44 container mx-auto p-2">
        {children}
      </div>
    </div>
  );
};

export default ContentAppLayout;
