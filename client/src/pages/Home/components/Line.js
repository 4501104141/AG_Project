export default function Line({ title = "" }) {
    return (
        <div>
            <div className="flex-center line mx-auto my-0 h-20 max-w-[1200px] relative before:h-1 before:w-full before:absolute-center before:bg-primary-500">
                {title && (
                    <p className="text-secondary-500 relative text-2xl font-medium mx-auto my-0 text-secondary-500z-10 bg-quaternary-500 px-2">
                        {title}
                    </p>
                )}
            </div>
        </div>
    );
}