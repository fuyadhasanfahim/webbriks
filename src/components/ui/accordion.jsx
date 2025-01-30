'use client';

import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { cn } from '@/lib/utils';
import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext(undefined);

function useAccordion() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            'useAccordion must be used within an AccordionProvider'
        );
    }
    return context;
}

function AccordionProvider({
    children,
    variants,
    expandedValue: externalExpandedValue,
    onValueChange,
}) {
    const [internalExpandedValue, setInternalExpandedValue] = useState(null);

    const expandedValue =
        externalExpandedValue !== undefined
            ? externalExpandedValue
            : internalExpandedValue;

    const toggleItem = (value) => {
        const newValue = expandedValue === value ? null : value;
        if (onValueChange) {
            onValueChange(newValue);
        } else {
            setInternalExpandedValue(newValue);
        }
    };

    return (
        <AccordionContext.Provider
            value={{ expandedValue, toggleItem, variants }}
        >
            {children}
        </AccordionContext.Provider>
    );
}

function Accordion({
    children,
    className,
    transition,
    variants,
    expandedValue,
    onValueChange,
}) {
    return (
        <MotionConfig transition={transition}>
            <div
                className={cn('relative', className)}
                aria-orientation="vertical"
            >
                <AccordionProvider
                    variants={variants}
                    expandedValue={expandedValue}
                    onValueChange={onValueChange}
                >
                    {children}
                </AccordionProvider>
            </div>
        </MotionConfig>
    );
}

function AccordionItem({ value, children, className }) {
    const { expandedValue } = useAccordion();
    const isExpanded = value === expandedValue;

    return (
        <div
            className={cn('overflow-hidden', className)}
            {...(isExpanded ? { 'data-expanded': '' } : { 'data-closed': '' })}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        ...child.props,
                        value,
                        expanded: isExpanded,
                    });
                }
                return child;
            })}
        </div>
    );
}

function AccordionTrigger({ children, className, ...props }) {
    const { toggleItem, expandedValue } = useAccordion();
    const value = props.value;
    const isExpanded = value === expandedValue;

    return (
        <button
            onClick={() => value !== undefined && toggleItem(value)}
            aria-expanded={isExpanded}
            type="button"
            className={cn('group', className)}
            {...(isExpanded ? { 'data-expanded': '' } : { 'data-closed': '' })}
        >
            {children}
        </button>
    );
}

function AccordionContent({ children, className, ...props }) {
    const { expandedValue } = useAccordion();
    const value = props.value;
    const isExpanded = value === expandedValue;

    return (
        <AnimatePresence initial={false}>
            {isExpanded && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }} // Ensure no content overflows
                    className={className}
                >
                    <div>{children}</div>{' '}
                    {/* Wrap content for better height calculation */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
