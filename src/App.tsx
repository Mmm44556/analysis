import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/Accordion"
import AccordionChart from "@/components/AccordionChart"
import Bar from './charts/Bar'


function App() {


  return (
    <>
      <AccordionChart label="銷售數分析組合圖">
        <div className="w-full border-r-[1px] border-gray-500">
          <div className="bg-[#D3D3D3] text-xl font-semibold text-center py-1 ">
            年度
          </div>
          <Bar />
        </div>
        <div className="w-full">
          <div className="bg-[#D3D3D3] text-xl font-semibold text-center py-1 ">
            季度
          </div>
          <Bar />
        </div>
      </AccordionChart>

  
    
    </>
  )
}

export default App
