import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
  children: React.ReactElement;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top',
  delay = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>("");

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const updatePosition = () => {
        const triggerRect = triggerRef.current!.getBoundingClientRect();
        const tooltipWidth = 200; // Approximate tooltip width
        const tooltipHeight = 40; // Approximate tooltip height
        const spacing = 8;

        let top = 0;
        let left = 0;

        switch (position) {
          case 'top':
            top = triggerRect.top - tooltipHeight - spacing;
            left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
            break;
          case 'bottom':
            top = triggerRect.bottom + spacing;
            left = triggerRect.left + triggerRect.width / 2 - tooltipWidth / 2;
            break;
          case 'left':
            top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
            left = triggerRect.left - tooltipWidth - spacing;
            break;
          case 'right':
            top = triggerRect.top + triggerRect.height / 2 - tooltipHeight / 2;
            left = triggerRect.right + spacing;
            break;
        }

        // Ensure tooltip stays within viewport
        const padding = 8;
        if (left < padding) left = padding;
        if (left + tooltipWidth > window.innerWidth - padding) {
          left = window.innerWidth - tooltipWidth - padding;
        }
        if (top < padding) top = padding;
        if (top + tooltipHeight > window.innerHeight - padding) {
          top = window.innerHeight - tooltipHeight - padding;
        }

        setTooltipStyle({
          position: 'fixed',
          top: `${top}px`,
          left: `${left}px`,
          zIndex: 1000,
        });
      };

      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);

      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible, position]);

  const tooltipElement = isVisible ? (
    <div
      style={tooltipStyle}
      className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none animate-in fade-in zoom-in-95 duration-200"
    >
      {content}
      <div 
        className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
          position === 'top' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' :
          position === 'bottom' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' :
          position === 'left' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' :
          'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
        }`}
      />
    </div>
  ) : null;

  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
      })}
      {tooltipElement && ReactDOM.createPortal(
        tooltipElement,
        document.getElementById('tooltip-root') || document.body
      )}
    </>
  );
};

export default Tooltip;