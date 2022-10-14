import React, { useEffect, useRef, useState } from 'react'
import { jsPDF } from 'jspdf'
import { toPng } from 'html-to-image'
import { ResumeTemplate } from './ResumeTemplate'
import { HStack, Heading, Icon, useToast } from '@chakra-ui/react'
import { SimpleButton } from '../portfolio'
import { IoDocumentOutline } from 'react-icons/io5'

type props = {
  data?: any
}

const GeneratePdf = ({ data }: props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [resumeVisible, setResumeVisible] = useState(false)
  const toast = useToast()
  
  const resume = useRef<any>(null)

  const handleClick = () => {
    setResumeVisible(true)
    resume.current = window.open(`${data.firstname}${data.lastname}-resume.pdf`)
  }

  useEffect(() => {
    const generateImage = async () => {
      if (ref.current === null) return
      const image = await toPng(ref.current, { quality: 1, cacheBust: true })
      const doc = new jsPDF()
      doc.addImage(image, 'JPEG', 0, 0, 210, 297)
      resume.current.location.href = doc.output('bloburl')
    }
    generateImage()
    setResumeVisible(false)
  }, [data, resumeVisible, toast])

  return (
    <div className="button-container">
      <SimpleButton onClick={handleClick}>
        <HStack>
          <Heading size="sm">Resume</Heading>
          <Icon as={IoDocumentOutline} className="icon" />
        </HStack>
      </SimpleButton>
      {resumeVisible && <ResumeTemplate ref={ref} data={data} />}
    </div>
  )
}

export default GeneratePdf
