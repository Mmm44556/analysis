import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/Accordion"
import { cn } from "@/lib/utils"

type AccordionChartProps = {
  children: React.ReactNode
  label: string,
  labelClassName?: string,
  contentClassName?: string
}

export default function AccordionChart(
  {
    label,
    labelClassName,
    children,
    contentClassName
  }: AccordionChartProps) {
  return (
    <>
      <Accordion type="single" collapsible  >
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={cn("bg-[#3C474F] text-lg px-3 py-2 text-white !no-underline", labelClassName)}
          >
            {label}
          </AccordionTrigger>
          <AccordionContent
            className={cn("grid grid-cols-2 p-0 ", contentClassName)}
          >
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}