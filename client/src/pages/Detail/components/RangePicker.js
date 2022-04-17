import { useEffect, useState } from "react";
import { Range } from "react-range";

export default function RangePicker({ name, onChange }) {
    const [value, setValue] = useState([100]);
    useEffect(() => {
        onChange(name, value[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (
        <>
            <Range
                step={10}
                min={0}
                max={100}
                values={value}
                allowOverlap={true}
                onChange={(value) => setValue(value)}
                renderTrack={({ props, children }) => (
                    <div {...props} className="w-full h-1 bg-blue rounded-full">
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className={`w-4 h-4 bg-blue rounded-full bg-black relative after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 z-10 picker-range`}
                        style={{
                            "--value": `'${value[0]}%'`,
                        }}
                    />
                )}
            />
        </>
    );
}
