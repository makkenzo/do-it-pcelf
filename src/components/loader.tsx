'use client';

interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
    return <div className="rounded-md h-12 w-12 border-4 border-t-4 border-rose-500 animate-spin"></div>;
};

export default Loader;
