import React from 'react'
import { jsPDF } from 'jspdf'
import { toPng } from 'html-to-image'
import { ResumeTemplate } from './ResumeTemplate'
import { HStack, Heading, Icon } from '@chakra-ui/react'
import { SimpleButton } from '../portfolio'
import { IoDocumentOutline} from 'react-icons/io5'

type props = {
  data?: any
}

const GeneratePdf = ({ data }: props) => {

  const ref = React.useRef<HTMLElement>(null)
  const [resumeVisible, setResumeVisible] = React.useState(false)

  React.useEffect(() => {
    generateImage()
    setResumeVisible(false)
  }, [resumeVisible])

  const generateImage = async () => {
    if(ref.current === null) return
    const image = await toPng(ref.current, { quality: 1, cacheBust: true})
    const doc = new jsPDF()
    doc.addImage(image, 'JPEG', 0, 0, 210, 297)
    doc.save(data.firstname  + data.lastname + "-resume.pdf")
  }
  return (
    <div className="button-container">
          <SimpleButton onClick={ () => setResumeVisible(true)}>
            <HStack>
              <Heading size="sm">Resume</Heading>
              <Icon as={IoDocumentOutline} className="icon" />
            </HStack>
          </SimpleButton>
      {resumeVisible && (
        <ResumeTemplate ref={ ref } data={data} />
      ) }
    </div>
  )
}

export default GeneratePdf
