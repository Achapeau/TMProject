import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-slate-200 flex items-center justify-center'>
      <ClerkProvider afterSignOutUrl='/'>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
};

export default PlatformLayout;
