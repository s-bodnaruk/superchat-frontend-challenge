import React, { FC, useCallback, useRef, useState } from "react";

import { HexColorPicker } from "react-colorful";

import { useOnClickOutside } from "usehooks-ts";

interface IPopoverProps {
  color: string;
  onChange: (color: string) => void;
}

export const PopoverPicker: FC<IPopoverProps> = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useOnClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
