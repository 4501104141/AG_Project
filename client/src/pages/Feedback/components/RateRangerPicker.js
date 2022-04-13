import { useEffect, useState } from "react";
import { Range } from "react-range";

export default function RateRangerPicker() {
    const [value, setValue] = useState([100]);
    const [classValue, setClassValue] = useState("");
    useEffect(() => {
        setClassValue(`after:content-['${value[0]}']`);
    }, [value]);
    return (
        <>
            <Range
                step={25}
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
                            "--value": `'Lv${value[0] / 25 + 1}'`,
                        }}
                    />
                )}
            />
        </>
    );
}
