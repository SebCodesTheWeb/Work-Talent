import React from 'react'
import { jsPDF } from 'jspdf'
import { toPng } from 'html-to-image'
type props = {
  html?: React.MutableRefObject<HTMLDivElement>
}

const GeneratePdf = ({ html }: props) => {
  const generatePdf = () => {
    const doc = new jsPDF()

    const split = doc.splitTextToSize(
      document.getElementById('text')?.innerText as string,
      200
    )
    const image = document.getElementById('image')?.getAttribute('src')
    doc.text(document.querySelector('.content > h1')?.innerHTML as string, 75, 5)
    doc.addImage(image as string, 70, 7, 60, 60)
    doc.text(split, 5, 75)
    doc.output('dataurlnewwindow')
  }

  const generateImage = async () => {
    const image = await toPng(html?.current as HTMLElement, { quality: 0.95 })
    const doc = new jsPDF()

    doc.addImage(image, 'JPEG', 5, 22, 200, 160)
    doc.save()
  }
  return (
    <div className="button-container">
      <button onClick={generateImage}>Get PDF using image</button>
      <button onClick={generatePdf}>Get PDF as text</button>
    </div>
  )
}

export default GeneratePdf
