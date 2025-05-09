
import React from 'react';
import { Loader2 } from "lucide-react";

const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[5vh]">
      <Loader2 className="h-8 w-8 text-ivf-orange animate-spin" />
    </div>
  );
};

export default PageLoader;
