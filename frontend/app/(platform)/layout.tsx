import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-300 flex items-center'>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
